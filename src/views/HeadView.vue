<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ScrollSection from "@/views/ScrollSection.vue";
import FaceBackground from "@/components/FaceBackground.vue";
import Loading from "@/components/Loading.vue";
import Cursor from "@/components/Cursor.vue";
import { nextTick, onMounted, ref, Transition, watch } from "vue";
// import Navigation from "@/components/Navigation.vue";
import VanillaTilt from "vanilla-tilt";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/stores/globalStore";

const store = useDeviceStore();
const { isMobile } = storeToRefs(store);

const loading = ref(true);
const permissionGranted = ref(true);

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty(`--app-height`, `${window.innerHeight}px`);
};

watch(loading, (isLoading) => {
  if (!isLoading) {
    nextTick(() => {
      const element = document.querySelectorAll(".hoverable") as any;
      VanillaTilt.init(element, {
        max: 25,
        speed: 400,
        scale: isMobile.value ? 1 : 1.125,
        // glare: !isMobile.value && !isSafari.value,
        glare: !isMobile.value,
        gyroscope: isMobile.value,
      });
    });
  }
});

onMounted(() => {
  window.addEventListener("resize", appHeight);
  appHeight();
});
</script>

<template>
  <cursor v-if="!isMobile && !loading"></cursor>
  <Transition>
    <loading
      @grant-permission="(e) => (permissionGranted = !e)"
      :is-mobile="isMobile"
      :is-loading="loading"
      v-show="loading || (isMobile && permissionGranted)"
    ></loading>
  </Transition>
  <!-- <navigation v-if="!loading" :is-mobile="isMobile"></navigation> -->
  <scroll-section v-if="!loading" id="scroll-section"></scroll-section>
  <face-background @scene-ready="(e) => (loading = !e)"></face-background>
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
