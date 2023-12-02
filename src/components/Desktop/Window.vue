<script setup lang="ts">
import { onMounted, ref, Transition, watchEffect, nextTick } from "vue";
import { GridLayout, GridItem } from "vue3-grid-layout-next";
import { useDraggable } from "@vueuse/core";
import { UseDraggable } from "@vueuse/components";
import { useStorage } from "@vueuse/core";
import { useLayoutStore, useDeviceStore } from "@/stores/globalStore";
import { storeToRefs } from "pinia";
import { vOnClickOutside } from "@vueuse/components";
import WindowPortal from "@/components/WindowPortal.vue";

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

// Stores
const layoutStore = useLayoutStore();
const { layoutBounds, activeWindow } = storeToRefs(layoutStore);
const deviceStore = useDeviceStore();
const { isMobileDevice } = storeToRefs(deviceStore);

const props = defineProps({
  windowId: {
    type: String,
    required: true,
  },
  open: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:open"]);

const detachWindow = ref(false);
const directoryWindow = ref<HTMLElement | null>(null);
const initialPosition = ref({
  x: innerWidth / 2,
  y: innerHeight / 5,
});
const popupPosition = ref({
  left: innerWidth / 2,
  top: innerHeight / 5,
});
const dragging = ref(false);

const closeDirectory = () => {
  emit("update:open", false);
};

const handleOutsideClick = () => {
  if (isMobileDevice.value()) {
    closeDirectory();
  }
};

// Drag functionality
const startDragging = (event: MouseEvent | TouchEvent) => {
  dragging.value = true;
  initialPosition.value.x =
    (event as MouseEvent).clientX - popupPosition.value.left;
  initialPosition.value.y =
    (event as MouseEvent).clientY - popupPosition.value.top;

  window.addEventListener("mousemove", dragElement);
  window.addEventListener("touchmove", dragElement);
  window.addEventListener("mouseup", stopDragging);
  window.addEventListener("touchend", stopDragging);
};

const dragElement = (event: MouseEvent | TouchEvent) => {
  event.preventDefault();
  if (dragging.value) {
    const popupRect = (
      directoryWindow.value as HTMLElement
    ).getBoundingClientRect();
    const clientX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY =
      event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

    // Calculate the new position
    let left = clientX - initialPosition.value.x;
    let top = clientY - initialPosition.value.y;

    // Check if the target is in bounds of the body
    const bodyRect =
      layoutBounds.value ?? document.body.getBoundingClientRect();

    if (left < bodyRect.left) {
      left = bodyRect.left;
    } else if (left + popupRect.width > bodyRect.right) {
      left = bodyRect.right - popupRect.width;
    }

    if (top < bodyRect.top) {
      top = bodyRect.top;
    } else if (top + popupRect.height > bodyRect.bottom) {
      top = bodyRect.bottom - popupRect.height;
    }

    popupPosition.value.left = left;
    popupPosition.value.top = top;
  }
};

const stopDragging = () => {
  dragging.value = false;
  window.removeEventListener("mousemove", dragElement);
  window.removeEventListener("touchmove", dragElement);
  window.removeEventListener("mouseup", stopDragging);
  window.removeEventListener("touchend", stopDragging);
};

const setActiveWindow = () => {
  activeWindow.value = props.windowId;
};

watchEffect(() => {
  if (props.open) {
    setActiveWindow();
  }
});

onMounted(() => {
  const popupRect = (
    directoryWindow.value as HTMLElement
  ).getBoundingClientRect();

  let left = innerWidth / 2;
  let top = innerHeight / 5;

  const bodyRect = layoutBounds.value ?? document.body.getBoundingClientRect();
  if (left < bodyRect.left) {
    left = bodyRect.left;
  } else if (left + popupRect.width > bodyRect.right) {
    left = bodyRect.right - popupRect.width;
  }

  if (top < bodyRect.top) {
    top = bodyRect.top;
  } else if (top + popupRect.height > bodyRect.bottom) {
    top = bodyRect.bottom - popupRect.height;
  }

  popupPosition.value.left = left;
  popupPosition.value.top = top;
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0 scale-75"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0 scale-75"
    >
      <div
        @mousedown="setActiveWindow()"
        v-show="open && !detachWindow"
        v-on-click-outside="handleOutsideClick"
        :class="[
          'icons-container fixed left-1/2 top-1/2 flex h-[35rem] max-h-[50rem] min-h-[12rem] w-[95vw] max-w-3xl flex-1 -translate-x-1/2 -translate-y-1/2 resize flex-col overflow-hidden rounded-3xl border-primary border-opacity-25 backdrop-blur-md sm:w-[43rem] sm:min-w-[24rem] sm:translate-x-0 sm:translate-y-0 sm:rounded-xl sm:border',
          activeWindow === windowId ? 'z-50' : '',
        ]"
        :style="
          isMobileDevice()
            ? ''
            : `top: ${popupPosition.top}px; left: ${popupPosition.left}px`
        "
      >
        <div
          ref="directoryWindow"
          @mousedown.prevent="startDragging"
          @touchmove.prevent
          class="hidden w-full gap-1 bg-primary p-2 sm:flex"
        >
          <button
            @click="closeDirectory"
            class="h-3 w-3 rounded-full bg-red-500 hover:bg-red-400"
          ></button>
          <button
            class="h-3 w-3 rounded-full bg-amber-500 hover:bg-amber-400"
          ></button>
          <button
            @click="detachWindow = true"
            class="h-3 w-3 rounded-full bg-green-500 hover:bg-green-400"
          ></button>
        </div>
        <WindowPortal v-model:open="detachWindow">
          <div class="flex-1 overflow-auto bg-zinc-200/20 p-6 sm:p-0">
            <slot></slot>
          </div>
        </WindowPortal>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.bounce-enter-active,
.bounce-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
}

.bounce-enter-from,
.bounce-leave-to {
  opacity: 0;
  transform: scale(0.75);
}
</style>
