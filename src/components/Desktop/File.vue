<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import Window from "@/components/Desktop/Window.vue";

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  opened: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:open"]);
const openFile = useStorage(props.iconName, props.opened);

</script>

<template>
  <div
    @dblclick="openFile = !openFile"
    @touchend="openFile = !openFile"
    class="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1"
  >
    <div class="flex w-full flex-1 select-none items-center justify-center">
      <v-icon class="h-16 w-16" :name="iconName" />
    </div>
    <div class="font-header">{{ fileName }}</div>
  </div>
  <Window :window-id="fileName" v-model:open="openFile">
    <slot></slot>
  </Window>
</template>

<style scoped lang="scss">
.bounce-enter-active,
.bounce-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
}

.bounce-enter-from,
.bounce-leave-to {
  opacity: 0;
  transform: scale(0.75);
}
</style>
