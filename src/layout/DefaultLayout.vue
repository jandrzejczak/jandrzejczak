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
  <main class="height--screen flex w-full flex-col">
    <!-- <slot name="header"></slot> -->
    <slot />
  </main>
</template>

<style lang="scss">
:root {
  --app-height: 100%;
}
.height--screen {
  height: var(--app-height);
}
</style>
