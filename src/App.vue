<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import gsap from "gsap";
import FaceBackground from "./components/FaceBackground.vue";
import Loading from "./components/Loading.vue";
import { onMounted } from "vue";

function setupCursor() {
  let mouseCursor = document.querySelector(".cursor") as HTMLElement;
  window.addEventListener("mousemove", (e) => {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
  });
}

onMounted(() => {
  setupCursor();
 });
</script>

<template>
  <div class="navigation">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
  <div class="cursor"></div>
  <loading></loading>
  <face-background></face-background>
</template>

<style scoped lang="scss">
.cursor {
  top: 0;
  left: 0;
  width: 3rem;
  height: 3rem;
  border: 2px solid var(--color-text);
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 999;
}
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 300px;
  backdrop-filter: blur(1px) contrast(12) grayscale(1);
  mix-blend-mode: screen;
  z-index: 1000;
  // .item {
  //   width: 150px;
  //   height: 50px;
  //   margin-right: 1rem;
  //   background-color: green !important;
  //   position: absolute;
  //   z-index: 10000;
  // }
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
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

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
