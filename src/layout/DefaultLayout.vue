<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref, Transition } from "vue";

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty(`--app-height`, `${window.innerHeight}px`);
};

onMounted(() => {
  window.addEventListener("resize", appHeight);
  appHeight();
});
</script>

<template>
  <main class="layout flex w-full flex-col">
    <!-- <slot name="header"></slot> -->
    <slot />
  </main>
</template>

<style>
:root {
  --app-height: 100%;
}
</style>

<style scoped lang="scss">
.layout {
  height: var(--app-height);
}
</style>

<style lang="scss">
.height--screen {
  height: var(--app-height);
}
</style>
