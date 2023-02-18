<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import { storeToRefs } from 'pinia';
import { useDeviceStore } from "@/stores/globalStore"

const deviceStore = useDeviceStore();
const { isMobile } = storeToRefs(deviceStore)

function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".container",
  });

  gsap.from("#bio .line>h3", {
    scrollTrigger: "#bio",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 0.25,
    ease: "power3.out",
  });

  gsap.from("#bio .line>h1", {
    scrollTrigger: "#bio",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from("#bio .line>h4", {
    scrollTrigger: "#bio",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 0.75,
    ease: "power3.out",
  });

  gsap.from("#bio .bio__card-wrapper>.bio__card", {
    scrollTrigger: "#bio",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 1,
    ease: "power3.out",
    stagger: {
      each: 0.75,
      amount: 0.5
    }
  });

  gsap.from("#timeline .timeline__wrapper>.timeline__line", {
    scrollTrigger: "#timeline",
    duration: 1,
    y: "-100%",
    autoAlpha: 0,
    delay: 1,
    ease: "power3.out",
    stagger: {
      each: 1,
      amount: 2.5,
    }
  });

  gsap.from("#timeline .timeline__wrapper>.timeline__line-dot", {
    scrollTrigger: "#timeline",
    duration: 1,
    scale: 0,
    autoAlpha: 0,
    delay: 1.5,
    ease: "power3.out",
    stagger: {
      each: 1,
      amount: 2.5,
    }
  });



  gsap.from(".orange span>span", {
    scrollTrigger: ".orange",
    duration: 1,
    y: "150%",
    autoAlpha: 0,
    delay: 0.5,
    ease: "power3.out",
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
}

onMounted(() => {
  initAnimations();
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
            <div class="line">
              <h4>I am</h4>
            </div>
            <div class="bio__card-wrapper">
              <div :class="['bio__card', 'hoverable', {'mobile-card': isMobile}]">
                <div class="bio__card-text">Web developer</div>
              </div>
              <div :class="['bio__card', 'hoverable', {'mobile-card': isMobile}]">
                <div class="bio__card-text">Animation enthusiast</div>
              </div>
              <div :class="['bio__card', 'hoverable', {'mobile-card': isMobile}]">
                <div class="bio__card-text">Graphic designer</div>
              </div>
              <div :class="['bio__card', 'hoverable', {'mobile-card': isMobile}]">
                <div class="bio__card-text">Student</div>
              </div>
              <div :class="['bio__card', 'hoverable', {'mobile-card': isMobile}]">
                <div class="bio__card-text">Beer enjoyer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="timeline" class="timeline">
      <div class="section__body-wrapper">
        <div class="section__body">
          <div class="timeline__wrapper">
            <div class="timeline__line"><div class="timeline__line-dot" /></div>
            <div class="timeline__element">
              <span><span>
                Headline
              </span></span>
              <p>some text...</p>
            </div>
          </div>
          <div class="timeline__wrapper">
            <div class="timeline__line"><div class="timeline__line-dot" /></div>
            <div class="timeline__element">
              <span><span>
                Headline
              </span></span>
              <p>some text...</p>
            </div>
          </div>
          <div class="timeline__wrapper">
            <div class="timeline__line"><div class="timeline__line-dot" /></div>
            <div class="timeline__element">
              <span><span>
                Headline
              </span></span>
              <p>some text...</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="panel red">
      <div class="section__body-wrapper">
        <div class="section__body">
          <p>This background color will change</p>
        </div>
      </div>
    </section>

    <section class="panel blue yoyo">
      <div class="section__body-wrapper">
        <div class="section__body">
          <p>Yoyo Text!</p>
        </div>
      </div>
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
      padding: 2rem;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      max-width: 40rem;
      @media only screen and (max-width: 768px) {
        padding: 2rem 2rem 2rem;
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
  .mobile-card {
      backdrop-filter: blur(5px);
     -webkit-backdrop-filter: blur(5px);
     background-color: rgba(0, 0, 0, 0.15);
    }
}
.timeline {
  // .section__body {
  //   position: relative;
  //   &::after {
  //     content: '';
  //     height: 100%;
  //     width: 1rem;
  //     background-color: #cf3535;
  //     position: absolute;
  //     left: 0;
  //     top: 0;
  //   }
  // }
  &__line {
    width: 0.25rem;
    background-color: var(--color-text);
    position: relative;
    &-dot {
      position: absolute;
      width: 1rem;
      height: 1rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #cf3535;
      border-radius: 100%;
    }
  }
  &__wrapper {
    padding-left: 2rem;
    display: flex;
    overflow: hidden;
  }
  &__element {
    padding: 1rem 1rem 1rem 3rem;
  }
}

.line {
  overflow: hidden;
  * {
    display: block;
  }
}
.orange {
  span {
    display: block;
    overflow: hidden;
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
