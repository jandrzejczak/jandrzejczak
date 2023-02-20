<script setup lang="ts">
import { onMounted } from "vue";
import gsap from 'gsap';

function setupCursor() {
  let mouseCursor = document.querySelector("#cursor") as HTMLElement;
  let mouseCursorInner = document.querySelector("#cursor__inner") as HTMLElement;
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.2;
  const xSet = gsap.quickSetter(mouseCursor, "x", "px");
  const ySet = gsap.quickSetter(mouseCursor, "y", "px");

  
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;  
    mouseCursorInner.style.top = e.pageY + "px";
    mouseCursorInner.style.left = e.pageX + "px";
  });
  window.addEventListener("mouseout", () => {
    mouseCursor.style.display = "none";
    mouseCursorInner.style.display = "none";
  });
  window.addEventListener("mouseover", () => {
    mouseCursor.style.display = "block";
    mouseCursorInner.style.display = "block";
  });

 
  gsap.ticker.add(() => {
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
    pos.x += (mouse.x - pos.x - 32) * dt;
    pos.y += (mouse.y - pos.y - 32) * dt;
    xSet(pos.x);
    ySet(pos.y);
});

  const hoverableItems = document.querySelectorAll(".hoverable");

  hoverableItems.forEach((e) => {
    e.addEventListener("mouseover", () => {
      mouseCursor.classList.add("hovered");
      mouseCursorInner.classList.add("hovered");
    });
    e.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("hovered");
      mouseCursorInner.classList.remove("hovered");
    });
  });
}

onMounted(() => {
  setupCursor();
});
</script>

<template>
  <!-- <div id="cursor__inner">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="100%"
      filter="blur(0px)"
      transform="rotate(-60)"
      style="opacity: 1"
    >
      <path class="blob" style="opacity: 1">
        <animate
          attributeName="d"
          dur="8400ms"
          repeatCount="indefinite"
          values="M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M429.79847,339.54154Q392.67727,429.08308,294.97368,455.00137Q197.27008,480.91966,143.94598,403.56786Q90.62188,326.21607,83.52769,246.22992Q76.43351,166.24376,136.8518,92.77008Q197.27008,19.29641,287.1482,55Q377.02632,90.70359,421.97299,170.3518Q466.91966,250,429.79847,339.54154Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z"
        ></animate>
      </path>
    </svg>
  </div> -->
  <div id="cursor">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="100%"
      class="blobSvg"
      filter="blur(0px)"
      transform="rotate(-60)"
      style="opacity: 1"
    >
      <path class="blob" style="opacity: 1">
        <animate
          attributeName="d"
          dur="8400ms"
          repeatCount="indefinite"
          values="M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M429.79847,339.54154Q392.67727,429.08308,294.97368,455.00137Q197.27008,480.91966,143.94598,403.56786Q90.62188,326.21607,83.52769,246.22992Q76.43351,166.24376,136.8518,92.77008Q197.27008,19.29641,287.1482,55Q377.02632,90.70359,421.97299,170.3518Q466.91966,250,429.79847,339.54154Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z"
        ></animate>
      </path>
    </svg>
  </div>
</template>

<style scoped lang="scss">
#cursor {
  width: 4rem;
  height: 4rem;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  display: none;
  z-index: 9999;
  transition: all 0.2s ease-in-out;
  transition-property: height, width;
  transform-origin: 100% 100%;
  .blob {
    stroke: var(--color-text);
    stroke-width: 15px;
    stroke-linejoin: round;
    transition: all 0.3s ease-in-out;
    color: transparent;
    fill: transparent;
  }
  &.hovered {
    width: 1rem;
    height: 1rem;
    .blob {
      stroke-width: 0px;
    }
  }
}
#cursor__inner {
  width: 2rem;
  height: 2rem;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  display: none;
  z-index: 9999;
  transition: all 0.2s ease-in-out;
  transition-property: height, width;
  transform-origin: 100% 100%;
  .blob {
    stroke: var(--color-text);
    stroke-width: 15px;
    stroke-linejoin: round;
    transition: all 0.3s ease-in-out;
    color: transparent;
    fill: transparent;
  }
  &.hovered {
    width: 1rem;
    height: 1rem;
    .blob {
      stroke-width: 0px;
    }
  }
}
</style>

<style> 
* {
  cursor: none !important;
}
</style>