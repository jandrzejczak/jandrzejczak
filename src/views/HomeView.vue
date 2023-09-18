<script setup lang="ts">
import { onMounted, ref, Transition, watchEffect, nextTick } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { viewTransitionHelper } from "@/utils";

const router = useRouter();

const openDialog = () => {
  viewTransitionHelper({
    async updateDOM() {
      router.push({ path: `/head` });
      await nextTick();
    }
  });
};
</script>

<template>
  <div
    style="height: 100vh; width: 100vw"
    class="flex items-center justify-center"
  >
    <div
      @click="openDialog"
      class="cursor-pointer rounded-lg border border-primary p-6"
    >
      <div
        style="view-transition-name: head-title"
        class="font-header text-2xl"
      >
        jordan andrzejczak
      </div>
    </div>
  </div>
</template>
