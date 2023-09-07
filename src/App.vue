<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import { onMounted, ref, Transition } from "vue";
</script>

<template>
  <DefaultLayout>
    <WelcomeView></WelcomeView>
    <RouterView></RouterView>
  </DefaultLayout>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
