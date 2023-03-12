<script setup lang="ts">
import { onMounted } from "vue";
import { useOrientationStore } from "@/stores/globalStore"

const { setOrientation } = useOrientationStore();

const props = defineProps({
  isMobile : {
    type: Boolean,
    required: true,
  },
  isLoading: {
    type: Boolean,
    required: true,
  }
})

const emit = defineEmits(["grant-permission"]);

function handleOrientation(event: any) {
  setOrientation(event.alpha, event.beta, event.gamma)
}

function updateFieldIfNotNull(fieldName: string, value: Number, precision = 10){
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
    window.removeEventListener("deviceorientation", handleOrientation);
    is_running = false;
  } else {
    window.addEventListener("deviceorientation", handleOrientation);
    is_running = true;
  }
};

function initMobileExperience() {
  emit("grant-permission", true);
  initGyroscope();
}

function noMobileExperience() {
  emit("grant-permission", true);
}

onMounted(() => {
  // setOrientation(23, 243, 546)
});
</script>

<template>
  <div class="loading-wrapper">
    <TransitionGroup>
      <div class="necuro-logo" v-if="isLoading">andrzejczak</div>
      <div v-if="isMobile && !isLoading">
        <button class="cta__button" @click="initMobileExperience()">Give me full experience</button>
        <button class="cta__button" @click="noMobileExperience()">Just let me in</button>
      </div>
    </TransitionGroup>
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
  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    button {
      font-size: 1rem;
      white-space: nowrap;
      margin-top: 1rem;
    }
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
