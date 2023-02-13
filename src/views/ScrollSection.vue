<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".container",
  });

  gsap.to(".orange p", {
    scrollTrigger: ".orange",
    duration: 2,
    rotation: 360,
  });

  gsap.to(".red", {
    scrollTrigger: {
      trigger: ".red",
      toggleActions: "restart pause reverse pause",
    },
    duration: 1,
    backgroundColor: "#FFA500",
    ease: "none",
  });

  gsap.to(".yoyo p", {
    scrollTrigger: ".yoyo",
    scale: 2,
    repeat: -1,
    yoyo: true,
    ease: "power2",
  });
});
</script>

<template>
  <div class="container">
    <section class="bio">
      <div class="section__body">
        <div class="line">
          <h3>my name is</h3>
        </div>
        <div class="line">
          <h1>jordan andrzejczak</h1>
        </div>
        <div class="bio__body">
          <h4>I am</h4>
          <div class="bio__card-wrapper">
            <div class="bio__card hoverable">Web developer</div>
            <div class="bio__card hoverable">Animation enthusiast</div>
            <div class="bio__card hoverable">Graphic designer</div>
            <div class="bio__card hoverable">Student</div>
            <div class="bio__card hoverable">Beer enjoyer</div>
          </div>
        </div>
      </div>
    </section>

    <section class="panel orange">
      <p>This element will spin.</p>
    </section>

    <section class="panel red">
      <p>This background color will change</p>
    </section>

    <section class="panel blue yoyo">
      <p>Yoyo Text!</p>
    </section>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  section {
    display: flex;
    // justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    height: 100vh;
    .section__body {
      padding: 7rem 2rem 2rem;
      max-width: 1600px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      max-width: 40rem;
    }
  }
}

.bio {
  &__body {
    padding-top: 2rem;
  }
  &__card {
      position: relative;
      padding: 2rem;
      pointer-events: visible;
      border-radius: 15px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      border-left: 1px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      color: white;
      box-shadow: 0 50px 100px rgba(0, 0, 0, 0.6);
      margin: 0 1rem 1rem 0;
    &-wrapper {
      padding-top: 1rem;
      display: flex;
      flex-wrap: wrap;
    }
  }
}

.panel {
  scroll-snap-align: start;
  height: 100vh;
}

.red {
  background-color: #cf3535;
  background-image: none;
}

.panel p {
  font-size: 32px;
}
</style>
