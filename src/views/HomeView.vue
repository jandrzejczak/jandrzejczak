<script setup lang="ts">
import { onMounted, ref, Transition, watchEffect, nextTick } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { viewTransitionHelper } from "@/utils";
import { GridLayout, GridItem } from "vue3-grid-layout-next";

const router = useRouter();

const layout = ref([
  { x: 0, y: 0, w: 1, h: 1, i: "0", static: false },
  { x: 1, y: 0, w: 1, h: 1, i: "1", static: false },
  { x: 2, y: 0, w: 1, h: 1, i: "2", static: false },
  { x: 3, y: 0, w: 1, h: 1, i: "3", static: false },
]);
const draggable = ref(true);
const resizable = ref(false);

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
  <div class="w-full flex-1 p-4 icons-container">
    <grid-layout
      v-model:layout="layout"
      :col-num="8"
      :row-height="150"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :is-bounded="true"
      :responsive="true"
      :auto-size="false"
      :vertical-compact="false"
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
        class="flex cursor-pointer rounded-lg bg-zinc-400/10 p-6"
      >
        <div
          style="view-transition-name: head-title"
          class="font-header text-2xl select-none"
        >
          jordan andrzejczak
        </div>
      </div>
      <div v-else>
        {{ item.i }}
      </div>
      </grid-item>
    </grid-layout>
  </div>
</template>

<style>
.vue-grid-layout {
  height: 100% !important;
}

/* .vue-grid-item:not(.vue-grid-placeholder) {

} */

/* .vue-grid-item.vue-grid-placeholder {
    background: rgba(255, 255, 255, 0.5) !important;
    border-radius: 2rem;
} */

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
  background: #cce;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}

.icons-container .vue-grid-item.vue-grid-placeholder {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2rem;
}
</style>
