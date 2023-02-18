<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ScrollSection from "./views/ScrollSection.vue";
import FaceBackground from "./components/FaceBackground.vue";
import Loading from "./components/Loading.vue";
import Cursor from "./components/Cursor.vue";
import { onMounted, ref, Transition } from "vue";
import Navigation from "./components/Navigation.vue";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/stores/globalStore";

const store = useDeviceStore();
const { isMobile } = storeToRefs(store)
// declare global {
//   interface DeviceOrientationEvent extends Event {
//     readonly absolute: boolean | undefined;
//     readonly alpha: number | null;
//     readonly beta: number | null;
//     readonly gamma: number | null;
//   }
// }

const loading = ref(true);

// const isMobileDevice = (): boolean => {
//   return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
// }

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty(`--app-height`, `${window.innerHeight}px`)
}

onMounted(() => {

  window.addEventListener('resize', appHeight)
  appHeight()
});
</script>

<template>
  <cursor v-if="!isMobile"></cursor>
  <Transition>
    <loading @loading-finished="(e) => (loading = !e)" :is-mobile="isMobile" v-show="loading"></loading>
  </Transition>
  <div class="layout">
    <navigation :is-mobile="isMobile"></navigation>
    <scroll-section id="scroll-section"></scroll-section>
    <face-background @scene-ready="(e) => (loading = !e)"></face-background>
  </div>
</template>

<style>
:root {
  --app-height: 100%;
}
</style>

<style scoped lang="scss">
.layout {
  max-height: var(--app-height);
  overflow: auto;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
