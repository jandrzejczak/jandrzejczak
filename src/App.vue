<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ScrollSection from "./views/ScrollSection.vue";
import FaceBackground from "./components/FaceBackground.vue";
import Loading from "./components/Loading.vue";
import Cursor from "./components/Cursor.vue";
import { onMounted, ref, Transition } from "vue";
import Navigation from "./components/Navigation.vue";

const loading = ref(true);

onMounted(() => {
 
});
</script>

<template>
  <cursor></cursor>
  <Transition>
    <loading v-if="loading"></loading>
  </Transition>
  <div class="layout">
    <navigation></navigation>
    <scroll-section id="scroll-section"></scroll-section>
    <face-background @scene-ready="(e) => (loading = !e)"></face-background>
  </div>
</template>

<style scoped lang="scss">
.layout {
  max-height: 100vh;
  overflow: auto;
}
header {
  line-height: 1.5;
  max-height: 100vh;
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
