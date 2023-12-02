<script setup lang="ts">
import { onMounted, ref, Transition, watchEffect, nextTick } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { viewTransitionHelper } from "@/utils";
import { GridLayout, GridItem } from "vue3-grid-layout-next";
import VueMarkdown from "vue-markdown-wasm";

const input = ref(`### hello.md

> What is necuro.com?

My initial idea behind necuro was creating an integrated space where I could materialize my ideas into small components.

> Why?

Short answer? For fun. I love to read about new web standards showing up on the horizon and try to implement them interestingly. I believe this playground could potentially be a great portfolio.

> Can I see the code?

Sure! Even steal it, I would be flattered.

> WhO aRe yOu??

necuro author is [Jordan Andrzejczak](https://pl.linkedin.com/in/andrzejczak)

> What's next?

I don't know, try to click around, think outside the box. Maybe start with **double-clicking** some icons?

<br/>

--- 
\`\`\`javascript
console.log('necuro playground!')
\`\`\`
`);
</script>

<template>
  <vue-markdown class="list-disc p-6 pt-8 sm:p-2 sm:pt-4 font-header" v-model="input" />
</template>

<style lang="scss">
.vue-markdown {
  ul {
    list-style: disc;
    padding-left: 1rem;
    li {
      line-height: 1.2;
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
