<template>
  <div v-if="selected" class="card"></div>
  <button v-if="!selected" class="card" @click="openDialog" :style="`view-transition-name: card-${item.id}`" :data-card="item.id">
    <div class="card-thumb"><!-- div! 楽してごめん♪ -->
      <img :style="`view-transition-name: card-img-${item.id}`" :src="item.thumb" width="1" height="1" alt="" />
      <CardHeadline class="card-headline" :item="item" />
    </div>
  </button>
</template>

<script lang="ts" setup>
import { Item } from "@/types/Item";
import CardHeadline from "@/components/CardHeadline.vue";

const props = defineProps<{
  item: Item;
  selected: boolean;
}>();

const emits = defineEmits<{ (e: "open", item: Item): void }>();
const openDialog = () => {
  emits("open", props.item);
};
</script>

<style scoped>
.card {
  border-radius: 16px;
  height: 380px;
  display: block;
  position: relative;
  overflow: hidden;
  transition: 0.2s;
  cursor: pointer;
}
@media (max-width: 960px) {
  .card {
    height: 180px;
  }
}
.card:hover {
  filter: brightness(1.1);
  scale: 1.05;
}

.card-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px 16px 16px 16px;
}

.card-headline {
  position: absolute;
  bottom: 0px;
  left: 0px;
}
</style>
