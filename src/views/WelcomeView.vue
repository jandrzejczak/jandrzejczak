<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref, Transition, watchEffect } from "vue";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { useColorMode, useMagicKeys } from "@vueuse/core";

const { space, escape } = useMagicKeys();

const colorMode = useColorMode({
  emitAuto: true,
});

colorMode.value = "auto";

gsap.registerPlugin(Draggable);

const necuroLogo = ref<HTMLElement | null>(null);
const header = ref<HTMLElement | null>(null);
const logoAnimation = ref();
const backgroundAnimation = ref();

const textAnimation = (element: HTMLElement) => {
  const characters = Array.from(element.innerText);

  const newText = characters
    .map((char) =>
      char === " "
        ? "<div>&nbsp;</div>"
        : `<div class="relative"><div>${char}</div><div class="necuro__logo--line absolute top-0 font-display-line">${char}</div></div>`
    )
    .join("");

  element.innerHTML = newText;

  const targetsDiv = element.querySelectorAll(":scope > div");
  logoAnimation.value = gsap
    .timeline({
      onComplete: () => {
        flattenText(element);
        collapseHeader(header.value!);
      },
    })
    .staggerFromTo(
      targetsDiv,
      2,
      { opacity: 0, y: "70%", ease: "elastic.out(1.2, 0.5)" },
      { opacity: 1, y: 0, ease: "elastic.out(1.2, 0.5)" },
      0.1
    );

  newDraggable(Array.from(targetsDiv) as HTMLElement[]);
};

const flattenText = (element: HTMLElement) => {
  gsap.to(element, {
    rotationZ: 0,
    rotationX: 0,
    rotationY: 0,
    ease: "power3.inOut",
    duration: 1.75,
    fontSize: "3rem",
    onComplete: function () {},
  });
};

const collapseHeader = (element: HTMLElement) => {
  gsap.to(element, {
    height: "4rem",
    ease: "power3.inOut",
    duration: 1.75,
  });
};

const newDraggable = (el: HTMLElement[]) =>
  Draggable.create(el, {
    type: "x,y",
    // bounds: 'body',
    onPress: function () {
      this.startX = this.x;
      this.startY = this.y;
      this.update();
    },
    onDrag: function () {
      this.update();

      // Calculate the angle in radians
      const deltaX = this.x - this.startX;
      const deltaY = this.y - this.startY;
      let angleRadians = Math.atan2(deltaY, deltaX);

      // Convert radians to degrees
      let angleDegrees = (angleRadians * 180) / Math.PI;

      // Adjust for segments III and IV (bottom left and bottom right quadrants)
      if (angleDegrees > 0) {
        angleDegrees -= 180; // Adding 360 degrees to negative angles
      }

      // Add 90 degrees for all segments
      angleDegrees += 90;

      gsap.to(this.target, {
        rotationZ: angleDegrees,
      });
    },
    onRelease: function () {
      gsap.to(this.target, {
        x: 0,
        y: 0,
        rotationZ: 0, // Use rotationX instead of rotateX
        rotationX: 0, // Use rotationZ instead of rotateZ
        rotationY: 0,
        ease: "elastic.out(1, 0.3)",
        duration: 1.75,
        onComplete: function () {
          // Resume the animation when element is released
          // animationTimeline();
        },
      });
    },
  });

const setTextFullWidth = (textElement: HTMLElement, width: number) => {
  const updatedFontSize = width / textElement.children.length;
  textElement.style.fontSize = updatedFontSize + "px";
};

const styleClasses = ref([
  { className: "necuro--mocha", probability: 0.01 },
  { className: "necuro--volt", probability: 0.05 },
  { className: "necuro--default", probability: 0.6 },
  { className: "necuro--beach", probability: 0.1 },
  { className: "necuro--black", probability: 0.3 },
  { className: "necuro--wine", probability: 0.08 },
]);

const getRandomStyleClass = () => {
  const totalProbability = styleClasses.value.reduce(
    (sum, styleClass) => sum + styleClass.probability,
    0
  );

  const randomValue = Math.random() * totalProbability;
  let cumulativeProbability = 0;
  for (const styleClass of styleClasses.value) {
    cumulativeProbability += styleClass.probability;
    if (randomValue <= cumulativeProbability) {
      return styleClass.className;
    }
  }
  return "necuro--default";
};

watchEffect(() => {
  if (space.value || escape.value) {
    logoAnimation.value.progress(1);
    backgroundAnimation.value.progress(1);
  }
});

onMounted(() => {
  if (necuroLogo.value) {
    textAnimation(necuroLogo.value);
    backgroundAnimation.value = gsap
      .timeline()
      .set(
        document.body,
        { className: styleClasses.value[0].className },
        "+=0.05"
      )
      .set(
        document.body,
        { className: styleClasses.value[1].className },
        "+=0.10"
      )
      .set(
        document.body,
        { className: styleClasses.value[2].className },
        "+=0.15"
      )
      .set(
        document.body,
        { className: styleClasses.value[3].className },
        "+=0.20"
      )
      .set(
        document.body,
        { className: styleClasses.value[4].className },
        "+=0.25"
      )
      .set(
        document.body,
        { className: styleClasses.value[5].className },
        "+=0.50"
      )
      .set(document.body, { className: getRandomStyleClass }, "+=1.25");
  }
});
</script>

<template>
  <div
    ref="header"
    class="w-full height--screen flex items-center justify-center absolute backdrop-blur-sm z-50 dark:bg-black bg-white dark:bg-opacity-10 bg-opacity-10"
  >
    <div class="flex flex-col items-center leading-none">
      <div
        ref="necuroLogo"
        class="necuro__logo font-display flex justify-center items-center text-9xl"
      >
        necuro
      </div>
      <!-- <div
        class="absolute -bottom-5 font-header tracking-[0.25rem] pointer-events-none uppercase text-xs"
      >
        playground
      </div> -->
    </div>
  </div>
</template>

<style lang="scss">
.necuro {
  transition: none !important;
  &--mocha {
    @extend .necuro;
    --text-color: #d7ceb2;
    --text-color-secondary: #ab947e;
    --bg-color: #593d3b;
    .necuro__logo {
      &--line {
        color: #66635b;
      }
    }
  }
  &--volt {
    @extend .necuro;
    --text-color: #d3fff3;
    --text-color-secondary: #afbbf2;
    --bg-color: #7f0799;
  }
  &--beach {
    @extend .necuro;
    --text-color: #fff;
    --text-color-secondary: #ffba08;
    --bg-color: #3f88c5;
    .necuro__logo {
      color: #ffba08;
    }
  }
  &--default {
    @extend .necuro;
    --text-color: #000;
    --text-color-secondary: #131313;
    --bg-color: #fff;
  }
  &--black {
    @extend .necuro;
    --text-color: #fff;
    --text-color-secondary: #eaeaea;
    --bg-color: #0d0d0d;
  }
  &--wine {
    @extend .necuro;
    --text-color: #fdecef;
    --text-color-secondary: #cecccc;
    --bg-color: #612940;
    .necuro__logo {
      &--line {
        color: #9d6381;
      }
    }
  }
}
</style>
