<script setup lang="ts">
import { RouterLink } from "vue-router";
import VanillaTilt from "vanilla-tilt";
import { onMounted } from "vue";

onMounted(() => {
  const element = document.querySelectorAll(".hoverable") as any;
  VanillaTilt.init(element, {
		max: 25,
		speed: 400,
    scale: 1.125,
    glare: true,
	});
});
</script>

<template>
  <nav class="nav">
    <div class="nav__logo">andrzejczak</div>
    <div class="nav__items">
      <a class="nav__item hoverable" href="#section1">
        <div class="nav__item-text">info</div>
      </a>
      <router-link class="nav__item hoverable" to="">
        <div class="nav__item-text">experience</div>
      </router-link>
      <router-link class="nav__item hoverable" to="">
        <div class="nav__item-text">education</div>
      </router-link>
      <router-link class="nav__item hoverable" to="">
        <div class="nav__item-text">skills</div>
      </router-link>
      <router-link class="nav__item hoverable" to="">
        <div class="nav__item-text">contact</div>
      </router-link>
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
  max-width: 1600px;
  transform: translateX(-50%);
  padding: 0 2rem;
  &__logo {
    font-family: "Questrial", sans-serif;
    font-size: 2rem;
    padding: 1rem 0;
    line-height: 1;
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
    border-radius: 32px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    &-text {
      line-height: 1;
      transform: translateZ(10px);
    }
  }
}
@media (min-width: 1024px) {
}
</style>
