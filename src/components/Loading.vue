<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs/lib/anime.es.js";

onMounted(() => {
  var ml4: any = {};
  ml4.opacityIn = [0, 1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 3;
  ml4.durationIn = 800;
  ml4.durationOut = 600;
  ml4.delay = 500;

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml4 .letters-1",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-1",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4 .letters-2",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-2",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4 .letters-3",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-3",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4",
      opacity: 0,
      duration: 500,
      delay: 500,
    });
});
</script>

<template>
  <div class="loading-wrapper">
    <div class="necuro-logo">necuro</div>
  </div>
</template>

<style scoped>
.necuro-logo {
    font-family: 'Questrial', sans-serif;
    font-size: 4rem;
}
.loading-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
