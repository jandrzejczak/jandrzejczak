<script setup lang="ts">
import { onMounted, ref, Transition, watchEffect, nextTick } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { viewTransitionHelper } from "@/utils";
import { GridLayout, GridItem } from "vue3-grid-layout-next";
import { useDraggable } from "@vueuse/core";
import { UseDraggable } from "@vueuse/components";
import { useStorage } from "@vueuse/core";
import WindowPortal from "@/components/WindowPortal.vue";
import Window from "@/components/Desktop/Window.vue";

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:open"]);

const router = useRouter();

const layout = ref([
  { x: 0, y: 0, w: 1, h: 1, i: "0", static: false },
  //   { x: 1, y: 0, w: 1, h: 1, i: "1", static: false },
]);
const draggable = ref(true);
const resizable = ref(false);

const openFile = useStorage(props.iconName, true);
const detachWindow = ref(false);

const directoryWindow = ref<HTMLElement | null>(null);

const isElementOutsideViewport = (element: HTMLElement) => {
  const elementRect = element.getBoundingClientRect();

  // Check if any of the element's four corners is inside the viewport
  const isInViewport =
    elementRect.top >= 0 &&
    elementRect.left >= 0 &&
    elementRect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    elementRect.right <=
      (window.innerWidth || document.documentElement.clientWidth);

  return !isInViewport;
};

const openDialog = () => {
  viewTransitionHelper({
    async updateDOM() {
      router.push({ path: `/head` });
      await nextTick();
    },
  });
};
</script>

<template>
  <div
    @dblclick="openFile = !openFile"
    class="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1"
  >
    <div class="flex w-full flex-1 select-none items-center justify-center">
      <v-icon class="h-16 w-16" :name="iconName" />
    </div>
    <div class="font-header">{{ fileName }}</div>
  </div>
  <Window :window-id="fileName" v-model:open="openFile">
    <slot></slot>
  </Window>
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
