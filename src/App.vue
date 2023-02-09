<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ScrollSection from "./views/ScrollSection.vue";
import FaceBackground from "./components/FaceBackground.vue";
import Loading from "./components/Loading.vue";
import Cursor from "./components/Cursor.vue";
import { onMounted, ref, Transition } from "vue";
import Navigation from "./components/Navigation.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GScroll from "@grcmichael/gscroll";

const loading = ref(true);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const scroll = new GScroll("#scroll-section", 0.6, () => {
    ScrollTrigger.update();
  });
  scroll.init();
  scroll.wheel();

  const scroller = document.getElementById("scroll-section");
  ScrollTrigger.defaults({
    scroller: scroller,
  });

  ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      if (arguments.length) {
        scroll.current = -value; // setter
      }
      return -scroll.current; // getter
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  window.addEventListener("resize", () => {
    scroll.resize();
  });

  let incr = 0;
  document.querySelectorAll("h1 span").forEach((lettre) => {
    gsap.to(lettre, {
      y: "-40%",
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".trigger",
        start: "top top-=" + incr,
        end: "+=" + 100,
        scrub: true,
      },
    });

    incr += 16;
  });

  ScrollTrigger.create({
    trigger: ".trigger",
    start: "top top",
    end: "+=" + 500,
    pin: true,
  });

  scroll.resize();
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
