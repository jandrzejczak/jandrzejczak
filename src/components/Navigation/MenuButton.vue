<script setup lang="ts">
import { defineProps, defineEmits, ref, watch} from "vue";

const { modelValue } = defineProps(["modelValue"]);
const emits = defineEmits();

const internalValue = ref(modelValue);

watch(modelValue, (newValue) => {
    console.log(modelValue)
  internalValue.value = newValue
})

const handleMenuToggle = () => {
  internalValue.value = !internalValue.value;
  emits("update:modelValue", internalValue.value);
};
</script>

<template>
  <div :class="['button', { toggled: modelValue }]" @click="handleMenuToggle()">
    <span class="menu-bar bar1"></span>
    <span class="menu-bar bar2"></span>
    <span class="menu-bar bar3"></span>
  </div>
</template>

<style lang="scss" scoped>
.button {
  display: block;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 3px;
  padding-top: 0.65rem;
  cursor: pointer;
  transition: all 500ms cubic-bezier(1, 0, 0.645, 0.65);
}

.menu-bar {
  display: block;
  position: relative;
  background: var(--text-color);
  width: 2rem;
  height: 0.25rem;
  border-radius: 1rem;
  transition: all 300ms;
  margin: 0 auto;
}

.bar1 {
  top: 0;
  animation: topbar-back 500ms;
  animation-fill-mode: both;
  animation-play-state: initial !important;
}

.bar2 {
  opacity: 1;
}

.bar3 {
  bottom: 0;
  animation: bottombar-back 500ms;
  animation-fill-mode: both;
  animation-play-state: initial !important;
}

.menu-bar + .menu-bar {
  margin-top: 0.25rem;
}

.toggled .bar1 {
  top: 25%;
  animation: topbar-x 500ms;
  animation-fill-mode: both;
}

.toggled .bar2 {
  opacity: 0;
}

.toggled .bar3 {
  bottom: 25%;
  animation: bottombar-x 500ms;
  animation-fill-mode: both;
}

@keyframes topbar-x {
  0% {
    top: 0;
    -webkit-transform: rotate(0deg);
  }

  45% {
    top: 25%;
    -webkit-transform: rotate(145deg);
  }

  75% {
    -webkit-transform: rotate(130deg);
  }

  100% {
    -webkit-transform: rotate(135deg);
  }
}

@keyframes topbar-back {
  0% {
    top: 25%;
    -webkit-transform: rotate(135deg);
  }

  45% {
    -webkit-transform: rotate(-10deg);
  }

  75% {
    -webkit-transform: rotate(5deg);
  }

  100% {
    top: 0;
    -webkit-transform: rotate(0);
  }
}

@keyframes bottombar-x {
  0% {
    bottom: 0;
    -webkit-transform: rotate(0deg);
  }

  45% {
    bottom: 25%;
    -webkit-transform: rotate(-145deg);
  }

  75% {
    -webkit-transform: rotate(-130deg);
  }

  100% {
    -webkit-transform: rotate(-135deg);
  }
}

@keyframes bottombar-back {
  0% {
    bottom: 25%;
    -webkit-transform: rotate(-135deg);
  }

  45% {
    -webkit-transform: rotate(10deg);
  }

  75% {
    -webkit-transform: rotate(-5deg);
  }

  100% {
    bottom: 0;
    -webkit-transform: rotate(0);
  }
}
</style>
