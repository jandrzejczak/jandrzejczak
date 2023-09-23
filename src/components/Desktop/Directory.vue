<script setup lang="ts">
import { onMounted, ref, Transition, watchEffect, nextTick } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { viewTransitionHelper } from "@/utils";
import { GridLayout, GridItem } from "vue3-grid-layout-next";
import { useDraggable } from "@vueuse/core";

const router = useRouter();

const layout = ref([
  { x: 0, y: 1, w: 1, h: 1, i: "0", static: false },
  { x: 2, y: 1, w: 1, h: 1, i: "1", static: false },
  { x: 2, y: 0, w: 1, h: 1, i: "2", static: false },
]);
const draggable = ref(true);
const resizable = ref(false);

const openDirectory = ref(false);

const directoryWindow = ref<HTMLElement | null>(null);
const { x, y, style } = useDraggable(directoryWindow, {
  initialValue: { x: 40, y: 40 },
});

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
    <div
      class="flex w-full flex-1 select-none items-center justify-center rounded-3xl bg-background p-2 text-center font-header text-xl"
    >
      <v-icon class="h-16 w-16" name="oi-file-directory-fill" />
    </div>
    <div>directory</div>
  </div>
  <Transition name="bounce">
    <div
      ref="directoryWindow"
      v-show="openDirectory"
      class="icons-container fixed right-0 top-0 h-96 w-96 flex-1 translate-x-full rounded-3xl bg-white/50 p-4"
    >
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
              class="flex w-full flex-1 select-none items-center justify-center rounded-3xl bg-background p-2 text-center font-header text-xl"
            >
              jordan andrzejczak
            </div>
            <div>whoami</div>
          </div>
          <div v-else>
            {{ item.i }}
          </div>
        </grid-item>
      </grid-layout>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.bounce-enter-active,
.bounce-leave-active {
  transition:
    opacity 0.3s cubic-bezier(0.47, 1.64, 0.41, 0.8),
    transform 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
}

.bounce-enter-from,
.bounce-leave-to {
  opacity: 0;
  transform: scale(0.75);
}
</style>
