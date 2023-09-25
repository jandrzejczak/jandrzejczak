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

const router = useRouter();

const layout = ref([
  { x: 0, y: 0, w: 1, h: 1, i: "0", static: false },
  //   { x: 1, y: 0, w: 1, h: 1, i: "1", static: false },
]);
const draggable = ref(true);
const resizable = ref(false);

const openDirectory = useStorage("directory-open", false);
const detachWindow = ref(false);

const directoryWindow = ref<HTMLElement | null>(null);

const checkEvent = (elem, event) => {
  if (elem.y < 80) {
    console.log(event);
    event.preventDefault();
    event.stopImmediatePropagation();
  }
};

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
    @dblclick="openDirectory = !openDirectory"
    class="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1"
  >
    <div class="flex w-full flex-1 select-none items-center justify-center">
      <v-icon
        v-if="openDirectory"
        class="h-16 w-16"
        name="oi-file-directory-open-fill"
      />
      <v-icon v-else class="h-16 w-16" name="oi-file-directory-fill" />
    </div>
    <div class="font-header">whoami</div>
  </div>
  <Window :window-id="'whoami'" v-model:open="openDirectory">
    <grid-layout
      v-model:layout="layout"
      :cols="{ lg: 8, md: 6, sm: 4, xs: 4, xxs: 2 }"
      :row-height="150"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :is-bounded="true"
      :responsive="true"
      :auto-size="false"
      :vertical-compact="false"
      :prevent-collision="true"
      :use-css-transforms="true"
    >
      <grid-item
        @touchmove.prevent
        v-for="item in layout"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <div
          @dblclick="openDialog"
          v-if="item.i === '0'"
          class="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1"
        >
          <div
            style="view-transition-name: head-title"
            class="flex w-full flex-1 select-none items-center justify-center rounded-3xl bg-background p-2 text-center font-header text-xl leading-6"
          >
            jordan andrzejczak
          </div>
          <div class="font-header">me.html</div>
        </div>
        <div v-else>
          {{ item.i }}
        </div>
      </grid-item>
    </grid-layout>
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