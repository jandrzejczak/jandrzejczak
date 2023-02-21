<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/stores/globalStore";

const deviceStore = useDeviceStore();
const { isMobile } = storeToRefs(deviceStore);
</script>

<template>
  <section id="skills" class="skills">
    <div class="section__body-wrapper">
      <div class="section__body">
        <div class="skills__body">
          <div class="skills__card-wrapper">
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon class="skills__card-icon" name="io-language" scale="2" />
              <div class="skills__card-text">English</div>
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon class="skills__card-icon" name="io-language" scale="2" />
              <div class="skills__card-text">Polish</div>
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon
                class="skills__card-icon"
                name="co-typescript"
                scale="2"
              />
              <div class="skills__card-text">TypeScript</div>
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon class="skills__card-icon" name="co-sass-alt" scale="2" />
              <div class="skills__card-text">CSS Preprocessors</div>
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon class="skills__card-icon" name="la-node" scale="2" />
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon class="skills__card-icon" name="io-logo-vue" scale="2" />
              <div class="skills__card-text">Vue.js</div>
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon class="skills__card-icon" name="si-html5" scale="2" />
              <div class="skills__card-text">HTML5</div>
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon class="skills__card-icon" name="si-git" scale="2" />
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon class="skills__card-icon" name="co-jest" scale="2" />
              <div class="skills__card-text">Jest</div>
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon class="skills__card-icon" name="co-graphql" scale="2" />
              <div class="skills__card-text">GraphQL</div>
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon class="skills__card-icon" name="co-mysql" scale="2" />
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon class="skills__card-icon" name="co-docker" scale="2" />
              <div class="skills__card-text">Docker</div>
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon
                class="skills__card-icon"
                name="si-adobephotoshop"
                scale="2"
              />
            </div>
            <div
              :class="[
                'skills__card',
                'hoverable',
                { 'mobile-card': isMobile },
              ]"
            >
              <v-icon
                class="skills__card-icon"
                name="si-adobeaftereffects"
                scale="2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.skills {
  &__body {
    padding-top: 2rem;
  }
  &__card {
    @include glass__card;
    padding: 1rem;
    &-text {
      font-family: "Questrial", sans-serif;
      padding-left: 1rem;
      transform: translateZ(20px);
    }
    &-icon {
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
