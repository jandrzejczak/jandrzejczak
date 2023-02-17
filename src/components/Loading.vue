<script setup lang="ts">
import { onMounted } from "vue";

const props = defineProps({
  isMobile : {
    type: Boolean,
    required: true,
  }
})

const emit = defineEmits(["loading-finished"]);

function handleOrientation(event: any) {
  updateFieldIfNotNull('Orientation_a', event.alpha);
  updateFieldIfNotNull('Orientation_b', event.beta);
  updateFieldIfNotNull('Orientation_g', event.gamma);
}

function updateFieldIfNotNull(fieldName: string, value: Number, precision=10){
  if (value != null)
    console.log(fieldName, value.toFixed(precision));
}

let is_running = false;
function initGyroscope() {
  // Request permission for iOS 13+ devices
  if (
    DeviceMotionEvent &&
    // @ts-ignore
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    // @ts-ignore
    DeviceMotionEvent.requestPermission();
  }
  
  if (is_running){
    // window.removeEventListener("devicemotion", handleMotion);
    window.removeEventListener("deviceorientation", handleOrientation);
    is_running = false;
  } else {
    // window.addEventListener("devicemotion", handleMotion);
    window.addEventListener("deviceorientation", handleOrientation);
    is_running = true;
  }
};

function initMobileExperience() {
  initGyroscope();
  emit("loading-finished", true);
}

onMounted(() => {
  
});
</script>

<template>
  <div class="loading-wrapper">
    <div class="necuro-logo">andrzejczak</div>
    <div v-if="isMobile"><button @click="initMobileExperience()">Give me full experience</button></div>
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
