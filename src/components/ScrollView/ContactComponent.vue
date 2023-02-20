<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/stores/globalStore";

const deviceStore = useDeviceStore();
const { isMobile } = storeToRefs(deviceStore);

const mailData = ref({
  subject: "",
  body: "",
});

const mailTo = computed(() => {
  return `mailto:jordan.andrzejczak@outlook.com?subject=${mailData.value.subject}&body=${mailData.value.body}`;
});

onMounted(() => {});
</script>

<template>
  <section id="contact" class="contact">
    <div class="section__body-wrapper">
      <div class="section__body">
        <div class="contact__card-wrapper">
          <div :class="['contact__card']">
            <div>To: <input type="text" /></div>
            <div>Subject: <input v-model="mailData.subject" type="text" /></div>
            <div>
              Body:
              <textarea
                v-model="mailData.body"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <a :href="mailTo">Send mail</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  .section__body-wrapper {
    width: 100%;
  }
  &__card {
    @include glass__card;
    input {
      background-color: transparent;
      border: none;
      color: var(--color-heading);
    }
    &-text {
      font-family: "Questrial", sans-serif;
      padding-left: 1rem;
      transform: translateZ(20px);
    }
    &-icon {
      transform: translateZ(20px);
    }
    &-wrapper {
    }
  }
}
</style>
