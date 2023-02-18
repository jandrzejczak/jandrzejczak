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
    <section id="bio" class="bio">
      <div class="section__body-wrapper">
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
              <div class="bio__card hoverable">
                <div class="bio__card-text">Web developer</div>
              </div>
              <div class="bio__card hoverable">
                <div class="bio__card-text">Animation enthusiast</div>
              </div>
              <div class="bio__card hoverable">
                <div class="bio__card-text">Graphic designer</div>
              </div>
              <div class="bio__card hoverable">
                <div class="bio__card-text">Student</div>
              </div>
              <div class="bio__card hoverable">
                <div class="bio__card-text">Beer enjoyer</div>
              </div>
            </div>
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
  max-height: var(--app-height);
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  scroll-behavior: smooth;
  section {
    display: flex;
    // justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    height: var(--app-height);
    .section__body {
      padding: 5rem 2rem 2rem;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      max-width: 40rem;
      @media only screen and (max-width: 768px) {
        padding: 5rem 1rem 2rem;
      }
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
    border-radius: 15px;
    // overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    // backdrop-filter: blur(5px);
    // -webkit-backdrop-filter: blur(5px);
    color: white;
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.6);
    margin: 0 1rem 1rem 0;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    background-color: rgba(0, 0, 0, 0.25);
    &-text {
      transform: translateZ(20px);
    }
    &-wrapper {
      padding-top: 1rem;
      display: flex;
      flex-wrap: wrap;
    }
  }
}

.red {
  background-color: #cf3535;
  background-image: none;
}

.panel p {
  font-size: 32px;
}
</style>
