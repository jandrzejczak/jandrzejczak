<template>
  <div class="modal">
    <div :style="`view-transition-name: card-${$route.params.id}`" class="modal-dialog">
      <div class="modal-dialog-inner">
        <div class="modal-thumb">
          <img
            :src="items[$route.params.id as any].thumb"
            :style="`view-transition-name: card-img-${$route.params.id}`"
            width="1"
            height="1"
            alt=""
          />
          <CardHeadline class="modal-headline" :item="items[$route.params.id as any]" />
        </div>

        <p class="modal-description">{{ items[$route.params.id as any].description }}</p>
      </div>
      <button class="modal-close" @click="handleClose()" aria-label="とじる">×</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Item } from "@/types/Item";
import CardHeadline from "./CardHeadline.vue";
import { viewTransitionHelper } from "../utils";
import { defineProps } from "vue";
import { items } from "@/data/items";
import router from "../router";

defineProps<{ item: Item }>();

const emits = defineEmits<{ (e: "close"): void }>();

const handleClose = () => {
  viewTransitionHelper({
    async updateDOM() {
      router.push({ path: `/flower` });
    },
    cleanup() {
      // element.style.viewTransitionName = "";
      // img.style.viewTransitionName = "";
      // title.style.viewTransitionName = "";
    },
  });
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 100;
  display: grid;
  place-items: center;

  backdrop-filter: blur(16px);
}

.modal-dialog {
  max-width: 960px;
  margin-top: 3rem;
  height: calc(100% - 9rem);
  position: relative;
  background-color: white;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
  overflow: hidden; /* 本当はちゃんと対策してね */
}

@media (max-width: 960px) {
  .modal-dialog {
    margin-left: 32px;
    margin-right: 32px;
  }
}

.modal-headline {
  position: absolute;
  bottom: 24px;
  left: 24px;
}

.modal-thumb {
  width: 100%;
  height: 60vh;
  position: relative;
}
@media (max-width: 960px) {
  .modal-thumb {
    height: 40vh;
  }
}

.modal-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
}

.modal-description {
  position: relative;
  color: #808080;
  padding: 32px;
  line-height: 2;
  background-color: white;
  font-size: 0.8rem;
}
@media (max-width: 960px) {
  .modal-description {
    padding: 8px;
  }
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.1s;
}

.modal-close:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

::v-deep .headline {
  view-transition-name: card-title;
}
</style>
