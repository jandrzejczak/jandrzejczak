<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/stores/globalStore";

const deviceStore = useDeviceStore();
const { isMobile } = storeToRefs(deviceStore);
</script>

<template>
  <section id="info" class="info">
    <div class="section__body-wrapper">
      <div class="section__body">
        <div class="line">
          <h3>my name is</h3>
        </div>
        <div class="line">
          <h1>jordan andrzejczak</h1>
        </div>
        <div class="info__body">
          <div class="line">
            <h4>I'm a</h4>
          </div>
          <div class="info__card-wrapper">
            <div
              :class="['info__card', 'hoverable', { 'mobile-card': isMobile }]"
            >
              <div class="info__card-text">Web developer</div>
            </div>
            <div
              :class="['info__card', 'hoverable', { 'mobile-card': isMobile }]"
            >
              <div class="info__card-text">Graphic designer</div>
            </div>
            <div
              :class="['info__card', 'hoverable', { 'mobile-card': isMobile }]"
            >
              <div class="info__card-text">Animation enthusiast</div>
            </div>
            <div
              :class="['info__card', 'hoverable', { 'mobile-card': isMobile }]"
            >
              <div class="info__card-text">Student</div>
            </div>
            <div
              :class="['info__card', 'hoverable', { 'mobile-card': isMobile }]"
            >
              <div class="info__card-text">Explorer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.info {
  &__body {
    padding-top: 2rem;
  }
  &__card {
    @include glass__card;
    &-text {
      transform: translateZ(20px);
    }
    &-wrapper {
      padding-top: 1rem;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
