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
          <div :class="['contact__card', { 'mobile-card': isMobile }]">
            <div class="contact__card-input">
              <div>To:</div>
              <input
                value="jordan.andrzejczak@outlook.com"
                disabled
                type="text"
              />
            </div>
            <div class="contact__card-input">
              <div>Subject:</div>
              <input v-model="mailData.subject" type="text" maxlength="40" />
            </div>
            <div class="contact__card-input__body">
              <div>Body:</div>
              <textarea
                v-model="mailData.body"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div class="contact__card-actions">
              <a
                :class="[
                  'cta__button',
                  'hoverable',
                  { disabled: !mailData.subject || !mailData.body },
                ]"
                :href="mailTo"
              >
                <div>send email</div>
              </a>
            </div>
          </div>
        </div>
        <div class="contact__tiles">
          <a
            href="https://www.behance.net/andrzejczak"
            target="_blank"
            :class="[
              'contact__tiles__card',
              'hoverable',
              { 'mobile-card': isMobile },
            ]"
          >
            <v-icon
              class="contact__tiles__card-icon"
              name="bi-behance"
              scale="2"
            />
          </a>
          <a
            href="https://github.com/jandrzejczak"
            target="_blank"
            :class="[
              'contact__tiles__card',
              'hoverable',
              { 'mobile-card': isMobile },
            ]"
          >
            <v-icon
              class="contact__tiles__card-icon"
              name="bi-github"
              scale="2"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andrzejczak/"
            target="_blank"
            :class="[
              'contact__tiles__card',
              'hoverable',
              { 'mobile-card': isMobile },
            ]"
          >
            <v-icon
              class="contact__tiles__card-icon"
              name="bi-linkedin"
              scale="2"
            />
          </a>
          <a
            href="https://www.instagram.com/andrzejczakjordan/"
            target="_blank"
            :class="[
              'contact__tiles__card',
              'hoverable',
              { 'mobile-card': isMobile },
            ]"
          >
            <v-icon
              class="contact__tiles__card-icon"
              name="bi-instagram"
              scale="2"
            />
          </a>
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0rem;
    margin: 0;
    &-input {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      width: 100%;
      padding-left: 1rem;
      &__body {
        display: flex;
        flex-direction: column;
        width: 100%;
        > div {
          padding: 1rem 0 0 1rem;
        }
        textarea {
          background-color: transparent;
          border: none;
          flex-grow: 1;
          padding: 0.5rem 1rem;
          outline: none;
          outline-width: 0;
          color: var(--color-heading);
          resize: none;
          font-family: "Cutive Mono", monospace;
          @media only screen and (max-width: 768px) {
            font-size: 1.125rem;
          }
        }
      }
      input {
        flex-grow: 1;
        padding: 1rem 0.5rem;
        outline: none;
        outline-width: 0;
        background-color: transparent;
        border: none;
        color: var(--color-heading);
        font-family: "Cutive Mono", monospace;
        font-size: 1rem;
        @media only screen and (max-width: 768px) {
          font-size: 1.125rem;
        }
      }
    }
    &-actions {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }
    &-icon {
      transform: translateZ(20px);
    }
  }
  &__tiles {
    display: flex;
    justify-content: space-between;
    > * {
      flex-grow: 1;
    }
    &__card {
      @include glass__card;
      padding: 1rem;
      margin-top: 1rem;
      margin-bottom: 0;
      &:last-child {
        margin-right: 0;
      }
      &-text {
        font-family: "Questrial", sans-serif;
        padding-left: 1rem;
        transform: translateZ(20px);
      }
      &-icon {
        transform: translateZ(20px);
      }
    }
  }
}
</style>
