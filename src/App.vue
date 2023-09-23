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
    <svg
      class="fixed bottom-0 left-0 max-w-3xl -z-10 opacity-25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 413.7 413.7"
    >
      <g>
        <path
          class="cls-2"
          style="fill: var(--text-color)"
          d="M0,0C44.2,26.2,88.5,52.4,143.5,67.2c55,14.9,120.8,18.3,149,54s18.8,103.7,32.7,157.8c13.9,54.1,51.2,94.4,88.5,134.7H0V0Z"
        />
        <path
          class="cls-1"
          style="fill: var(--text-color-secondary)"
          d="M0,206.9c22.1,13.1,44.2,26.2,71.8,33.6,27.5,7.4,60.4,9.1,74.5,26.9,14,17.9,9.3,51.9,16.3,78.9,7,27.1,25.6,47.3,44.2,67.4H0V206.9Z"
        />
      </g>
    </svg>

    <svg
      class="fixed right-0 top-0 max-w-3xl -z-10 opacity-25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 413.7 413.7"
    >
      <g>
        <path
          class="cls-2"
          style="fill: var(--text-color)"
          d="M413.7,413.7c-54.4-6.8-108.9-13.6-157.3-34-48.4-20.4-90.8-54.5-129.8-92.6S52.1,206.8,31.5,158.3C11,109.8,5.5,54.9,0,0H413.7V413.7Z"
        />
        <path
          class="cls-1"
          style="fill: var(--text-color-secondary)"
          d="M413.7,206.8c-27.2-3.4-54.4-6.7-78.6-16.9-24.2-10.3-45.4-27.3-64.9-46.4-19.5-19-37.3-40.1-47.6-64.4-10.2-24.2-13-51.7-15.7-79.1h206.8V206.8Z"
        />
      </g>
    </svg>
  </DefaultLayout>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
