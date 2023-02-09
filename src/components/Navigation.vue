<script setup lang="ts">
import { RouterLink } from "vue-router";
import VanillaTilt from "vanilla-tilt";
import { onMounted } from "vue";

onMounted(() => {
  const element = document.querySelectorAll(".hoverable") as any;
  VanillaTilt.init(element, {
		max: 25,
		speed: 400,
    scale: 1.25,
    glare: true,
	});
});
</script>

<template>
  <nav class="nav">
    <div class="nav__logo">necuro</div>
    <div class="nav__items">
      <router-link class="nav__item hoverable" to="">
        <div>info</div>
      </router-link>
      <router-link class="nav__item hoverable" to="">
        <div>experience</div>
      </router-link>
      <router-link class="nav__item hoverable" to="">
        <div>education</div>
      </router-link>
      <router-link class="nav__item hoverable" to="">
        <div>skills</div>
      </router-link>
      <router-link class="nav__item hoverable" to="">
        <div>contact</div>
      </router-link>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  &__logo {
    font-family: "Questrial", sans-serif;
    font-size: 2rem;
    padding: 1rem;
    line-height: 1;
  }
  &__items {
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    padding-right: 1rem;
  }
  &__item {
    padding: 1rem 2rem;
    text-decoration: none;
    color: var(--color-text);
    border-radius: 32px;
    div {
      line-height: 1;
    }
  }
}
@media (min-width: 1024px) {
}
</style>
