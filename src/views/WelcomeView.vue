<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref, Transition } from "vue";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { useResizeObserver } from "@vueuse/core";

gsap.registerPlugin(Draggable);

const necuroLogo = ref<HTMLElement | null>(null);
const header = ref<HTMLElement | null>(null);

const textAnimation = (element: HTMLElement) => {
  const characters = Array.from(element.innerText);

  const newText = characters
    .map((char) => (char === " " ? "<div>&nbsp;</div>" : `<div>${char}</div>`))
    .join("");

  element.innerHTML = newText;

  const targetsDiv = element.querySelectorAll("div");
  gsap
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

  targetsDiv.forEach((el) => {
    console.log(el);
    newDraggable(el);
  });
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

const newDraggable = (el: HTMLElement) =>
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

onMounted(() => {
  if (necuroLogo.value) {
    textAnimation(necuroLogo.value);
    gsap
      .timeline()
      .set(document.body, { className: "dark" }, "+=0.05")
      .set(document.body, { className: "purple" }, "+=0.10")
      .set(document.body, { className: "grey" }, "+=0.15")
      .set(document.body, { className: "red" }, "+=0.20")
      .set(document.body, { className: "dark" }, "+=0.25")
      .set(document.body, { className: "purple" }, "+=0.50")
      .set(document.body, { className: "red" }, "+=1.25");
  }
});
</script>

<template>
  <div
    ref="header"
    class="w-full height--screen flex items-center justify-center absolute backdrop-blur-sm z-50 bg-white bg-opacity-20"
  >
    <div
      ref="necuroLogo"
      id="element"
      class="draggable-element text-black font-display flex justify-center items-center text-9xl"
    >
      necuro
    </div>
  </div>
</template>
