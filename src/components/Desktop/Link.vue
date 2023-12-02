<script setup lang="ts">
import { nextTick, ref } from "vue";
import { viewTransitionHelper } from "@/utils";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  external: {
    type: Boolean,
    default: false,
  },
  opened: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:open"]);

const openLink = (path: string, external: boolean = false) => {
  if (external) {
    window.location.replace(path);
    return;
  }
  viewTransitionHelper({
    async updateDOM() {
      router.push({ path });
      await nextTick();
    },
  });
};

</script>

<template>
  <div
    @dblclick="openLink(link, external)"
    @touchend="openLink(link, external)"
    class="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1"
  >
    <div class="flex w-full flex-1 select-none items-center justify-center">
      <v-icon class="h-16 w-16" :name="iconName" />
    </div>
    <div class="font-header">{{ fileName }}</div>
  </div>
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
