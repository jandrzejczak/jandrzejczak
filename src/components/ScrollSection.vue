<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

import InfoComponent from "@/components/ScrollView/InfoComponent.vue";
import TimelineComponent from "@/components/ScrollView/TimelineComponent.vue";
import EducationComponent from "@/components/ScrollView/EducationComponent.vue";
import SkillsComponent from "@/components/ScrollView/SkillsComponent.vue";
import ContactComponent from "@/components/ScrollView/ContactComponent.vue";

function initSectionListener() {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav__item");

  document.querySelector(".container")?.addEventListener("scroll", () => {
    sections.forEach((section) => {
      let rect = section.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      ) {
        navItems.forEach((item) => {
          if (
            item
              .getAttribute("href")
              ?.includes(section.getAttribute("id") ?? "")
          ) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  });
}

function initAnimations() {
  // Setup
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    toggleActions: "play pause resume pause",
    scroller: ".container",
  });

  // Info
  gsap.from("#info .line>h3", {
    scrollTrigger: "#info",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 0.25,
    ease: "power3.out",
  });

  gsap.from("#info .line>h1", {
    scrollTrigger: "#info",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from("#info .line>h4", {
    scrollTrigger: "#info",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 0.75,
    ease: "power3.out",
  });

  gsap.from("#info .info__card-wrapper>.info__card", {
    scrollTrigger: "#info",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 1,
    ease: "power3.out",
    stagger: {
      each: 0.75,
      amount: 0.5,
    },
  });

  // Experience
  gsap.from("#timeline .timeline__wrapper>.timeline__line", {
    scrollTrigger: "#timeline",
    duration: 1,
    y: "-101%",
    autoAlpha: 1,
    delay: 0.25,
    ease: "power3.inOut",
    stagger: {
      each: 1,
      amount: 2.5,
    },
  });

  gsap.from("#timeline .timeline__line>.timeline__line-dot", {
    scrollTrigger: "#timeline",
    duration: 1,
    scale: 0,
    autoAlpha: 0,
    delay: 0.75,
    ease: "power3.inOut",
    stagger: {
      each: 0.5,
      amount: 2.5,
    },
  });

  gsap.from("#timeline .line>h3", {
    scrollTrigger: "#timeline",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 0.75,
    ease: "power3.inOut",
    stagger: {
      each: 0.5,
      amount: 2.5,
    },
  });

  gsap.from("#timeline .line>h4", {
    scrollTrigger: "#timeline",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 1,
    ease: "power3.inOut",
    stagger: {
      each: 0.5,
      amount: 2.5,
    },
  });

  gsap.from("#timeline .line>h5", {
    scrollTrigger: "#timeline",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 1.25,
    ease: "power3.inOut",
    stagger: {
      each: 0.5,
      amount: 2.5,
    },
  });

  gsap.from("#timeline .timeline__element li", {
    scrollTrigger: "#timeline",
    duration: 1,
    y: "100%",
    autoAlpha: 0,
    delay: 1.5,
    ease: "power3.inOut",
    stagger: {
      each: 0.5,
      amount: 2.5,
    },
  });

  // Education
  gsap.from("#education .timeline__wrapper>.timeline__line", {
    scrollTrigger: "#education",
    duration: 1,
    y: "-101%",
    autoAlpha: 1,
    delay: 0.25,
    ease: "power3.inOut",
    stagger: {
      each: 1,
      amount: 2,
    },
  });

  gsap.from("#education .timeline__line>.timeline__line-dot", {
    scrollTrigger: "#education",
    duration: 1,
    scale: 0,
    autoAlpha: 0,
    delay: 0.75,
    ease: "power3.inOut",
    stagger: {
      each: 0.5,
      amount: 2,
    },
  });

  gsap.from("#education .line>h3", {
    scrollTrigger: "#education",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 0.75,
    ease: "power3.inOut",
    stagger: {
      each: 0.5,
      amount: 2,
    },
  });

  gsap.from("#education .line>h4", {
    scrollTrigger: "#education",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 1,
    ease: "power3.inOut",
    stagger: {
      each: 0.5,
      amount: 2,
    },
  });

  gsap.from("#education .line>h5", {
    scrollTrigger: "#education",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 1.25,
    ease: "power3.inOut",
    stagger: {
      each: 0.5,
      amount: 2,
    },
  });

  // Skills
  gsap.from("#skills .skills__card-wrapper>.skills__card", {
    scrollTrigger: "#skills",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 1,
    ease: "power3.out",
    stagger: {
      each: 0.75,
      amount: 0.5,
    },
  });
}

onMounted(() => {
  initAnimations();
  initSectionListener();
});
</script>

<template>
  <div class="container">
    <info-component />

    <timeline-component />

    <education-component />

    <skills-component />

    <contact-component />
  </div>
</template>

<style scoped lang="scss">
</style>
