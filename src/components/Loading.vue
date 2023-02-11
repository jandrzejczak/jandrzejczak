<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs/lib/anime.es.js";

onMounted(() => {
  
});
</script>

<template>
  <div class="loading-wrapper">
    <div class="necuro-logo">andrzejczak</div>
  </div>
</template>

<style scoped lang="scss">
.necuro-logo {
    font-family: 'Questrial', sans-serif;
    font-size: 4rem;
}
.loading-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  &::after {
    content: "";
    position: fixed;
    left: 50%;
    top: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
    z-index: -1;
    background-color: var(--color-background);
  }
}
.ml4 {
  position: relative;
  font-weight: 900;
  font-size: 4.5em;
}
.ml4 .letters {
  position: absolute;
  margin: auto;
  opacity: 0;
}
</style>
