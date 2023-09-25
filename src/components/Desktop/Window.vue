<script setup lang="ts">
import { onMounted, ref, Transition, watchEffect, nextTick } from "vue";
import { GridLayout, GridItem } from "vue3-grid-layout-next";
import { useDraggable } from "@vueuse/core";
import { UseDraggable } from "@vueuse/components";
import { useStorage } from "@vueuse/core";
import WindowPortal from "@/components/WindowPortal.vue";

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

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

const closeDirectory = () => {
  emit("update:open", false);
};
</script>

<template>
  <Teleport to="body">
    <Transition name="bounce">
      <UseDraggable
        v-show="open && !detachWindow"
        :initial-value="{ x: innerWidth / 2, y: innerHeight / 5 }"
        :storage-key="windowId"
        storage-type="session"
        :handle="directoryWindow"
        class="icons-container fixed flex h-[35rem] max-h-[50rem] min-h-[12rem] w-[43rem] min-w-[24rem] max-w-3xl flex-1 resize flex-col overflow-hidden rounded-xl border border-primary border-opacity-25 backdrop-blur-md"
      >
        <div
          ref="directoryWindow"
          @touchmove.prevent
          class="flex w-full gap-1 bg-primary p-2"
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
          <div class="flex-1 overflow-auto bg-zinc-200/20">
            <slot></slot>
          </div>
        </WindowPortal>
      </UseDraggable>
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
