<script setup lang="ts">
import VanillaTilt from "vanilla-tilt";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/stores/globalStore";

const store = useDeviceStore();
const { isMobile, isSafari } = storeToRefs(store);

onMounted(() => {
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
</script>

<template>
  <nav class="nav">
    <a class="nav__logo-wrapper" href="#info">
      <div class="nav__logo">andrzejczak</div>
    </a>
    <div class="nav__items">
      <a class="nav__item hoverable" href="#info">
        <div class="nav__item-text">info</div>
      </a>
      <a class="nav__item hoverable" href="#timeline">
        <div class="nav__item-text">experience</div>
      </a>
      <a class="nav__item hoverable" href="#education">
        <div class="nav__item-text">education</div>
      </a>
      <a class="nav__item hoverable" href="#skills">
        <div class="nav__item-text">skills</div>
      </a>
      <a class="nav__item hoverable" href="#contact">
        <div class="nav__item-text">contact</div>
      </a>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 50%;
  margin: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  z-index: 30;
  transform: translateX(-50%);
  padding: 0 2rem;
  &__logo {
    font-family: "Questrial", sans-serif;
    font-size: 2rem;
    padding: 1rem 0;
    line-height: 1;
    &-wrapper {
      text-decoration: none;
      color: var(--color-text);
    }
  }
  &__items {
    margin-left: auto;
    display: flex;
    justify-content: space-between;
  }
  &__item {
    padding: 1rem 2rem;
    text-decoration: none;
    color: var(--color-text);
    border-radius: 2rem;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition-property: color;
    transition: 0.3s ease-in-out;
    @media only screen and (max-width: 768px) {
      display: none;
      padding-right: 0;
    }
    &-text {
      line-height: 1;
      transform: translateZ(10px);
      transition: 0.3s ease-in-out;
      transition-property: transform;
    }
    &.active {
      @media only screen and (max-width: 768px) {
        display: block !important;
      }
      color: var(--color-heading);
      > * {
        transform: translateZ(10px) scale(1.25);
      }
    }
  }
}
</style>
