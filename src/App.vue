<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ScrollSection from "./views/ScrollSection.vue";
import FaceBackground from "./components/FaceBackground.vue";
import Loading from "./components/Loading.vue";
import Cursor from "./components/Cursor.vue";
import { onMounted, ref, Transition } from "vue";
import Navigation from "./components/Navigation.vue";

// declare global {
//   interface DeviceOrientationEvent extends Event {
//     readonly absolute: boolean | undefined;
//     readonly alpha: number | null;
//     readonly beta: number | null;
//     readonly gamma: number | null;
//   }
// }

const loading = ref(true);

const isMobileDevice = (): boolean => {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function handleOrientation(event: any) {
  updateFieldIfNotNull('Orientation_a', event.alpha);
  updateFieldIfNotNull('Orientation_b', event.beta);
  updateFieldIfNotNull('Orientation_g', event.gamma);
}


function updateFieldIfNotNull(fieldName: string, value: Number, precision=10){
  if (value != null)
    console.log(fieldName, value.toFixed(precision));
}

// function handleMotion(event: any) {
//   updateFieldIfNotNull('Accelerometer_gx', event.accelerationIncludingGravity.x);
//   updateFieldIfNotNull('Accelerometer_gy', event.accelerationIncludingGravity.y);
//   updateFieldIfNotNull('Accelerometer_gz', event.accelerationIncludingGravity.z);

//   updateFieldIfNotNull('Accelerometer_x', event.acceleration.x);
//   updateFieldIfNotNull('Accelerometer_y', event.acceleration.y);
//   updateFieldIfNotNull('Accelerometer_z', event.acceleration.z);

//   updateFieldIfNotNull('Accelerometer_i', event.interval, 2);

//   updateFieldIfNotNull('Gyroscope_z', event.rotationRate.alpha);
//   updateFieldIfNotNull('Gyroscope_x', event.rotationRate.beta);
//   updateFieldIfNotNull('Gyroscope_y', event.rotationRate.gamma);
// }

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

onMounted(() => {
initGyroscope();
 if (isMobileDevice()) {
  loading.value = false;
 }
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
    <face-background v-if="!isMobileDevice()" @scene-ready="(e) => (loading = !e)"></face-background>
  </div>
</template>

<style scoped lang="scss">
.layout {
  max-height: 100vh;
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

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
