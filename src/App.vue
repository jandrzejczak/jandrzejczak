<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import HeaderComponent from "@/components/Navigation/HeaderComponent.vue";
import { onMounted, ref, Transition } from "vue";
</script>

<template>
  <DefaultLayout>
    <HeaderComponent></HeaderComponent>
    <RouterView></RouterView>
  </DefaultLayout>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
