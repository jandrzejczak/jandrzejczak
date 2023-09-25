<script setup lang="ts">
import { onMounted, ref, Transition, watchEffect, nextTick } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { viewTransitionHelper } from "@/utils";
import { GridLayout, GridItem } from "vue3-grid-layout-next";
import VueMarkdown from "vue-markdown-wasm";

const input = ref(`### roadmap.txt

> General file for tracking progress and current issues.

<br/>

#### **TODO:**

- [x] About me page,
- [x] necuro animation,
- [x] Desktop view,
- [ ] Refactor components,
- [ ] Support mobile,
- [ ] Music player (Spotify or Apple Music API?)

<br/>

#### **Known issues:**

* Floating windows can overflow the screen,
* Floating windows are not set active, z-index issue,
* Animations in HeadView are sometimes missing,
* ...

<br/>

#### **Ideas:**

* Resize windows in all directions,
* Some kind of dock on the bottom?
* Minigamnes,
* Terminal emulator,

`);
</script>

<template>
  <vue-markdown class="list-disc p-2 pt-4 font-header" v-model="input" />
</template>

<style lang="scss">
.vue-markdown {
  ul {
    list-style: disc;
    padding-left: 1rem;
    li {
      line-height: 1.2;
    }
    .task-list-item {
      list-style: none;
      .task-list-item-checkbox {
        margin-right: 0.5rem;
      }
    }
  }
  a {
    text-decoration: underline;
  }
  code {
    background-color: var(--bg-color);
    padding: 0.25rem 0.5rem;
    margin: 0.5rem 0;
    display: inline-flex;
    font-family: Cutive Mono;
    border-radius: 0.25rem;
  }
  blockquote {
    padding: 0.25rem 0.5rem;
    opacity: 0.75;
    border-left: 0.25rem solid var(--text-color);
    margin-bottom: 0.25rem;
    p {
      margin-bottom: 0;
    }
  }
  hr {
    margin: 0.5rem 0;
    border-color: var(--text-color);
  }
  p {
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }
  h1,
  h2,
  h3,
  h4 {
    padding-bottom: 0.25rem;
    border-bottom: 1px solid var(--text-color);
    margin-bottom: 0.75rem;
  }
}
</style>
