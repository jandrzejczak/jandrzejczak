<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/stores/globalStore";

const deviceStore = useDeviceStore();
const { isMobile } = storeToRefs(deviceStore);

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

function initExpandCards() {
  var toggleExpand = document.querySelectorAll(".timeline__element");
  toggleExpand.forEach((e) => {
    if (isMobile.value) {
      e.addEventListener("click", (event) => {
        event.preventDefault();
        var container = e.querySelector(".expandable") as HTMLElement;
        if (!container.classList.contains("expanded")) {
          const expandedElements = document.querySelectorAll(".expanded");
          expandedElements.forEach((el: any) => {
            el.style.height = "0px";
            el.addEventListener(
              "transitionend",
              () => {
                el.classList.remove("expanded");
              },
              {
                once: true,
              }
            );
          });
          container.classList.add("expanded");
          container.style.height = "auto";
          var height = container.clientHeight + "px";
          container.style.height = "0px";
          setTimeout(() => {
            container.style.height = height;
          }, 0);
        } else {
          container.style.height = "0px";
          container.addEventListener(
            "transitionend",
            () => {
              container.classList.remove("expanded");
            },
            {
              once: true,
            }
          );
        }
      });
    } else {
      e.addEventListener("mouseenter", (event) => {
        var container = e.querySelector(".expandable") as HTMLElement;
        container.classList.add("expanded");
        container.style.height = "auto";
        var height = container.clientHeight + "px";
        container.style.height = "0px";
        setTimeout(() => {
          container.style.height = height;
        }, 0);
      });
      e.addEventListener("mouseleave", (event) => {
        var container = e.querySelector(".expandable") as HTMLElement;
        container.style.height = "0px";
        container.addEventListener(
          "transitionend",
          () => {
            container.classList.remove("expanded");
          },
          {
            once: true,
          }
        );
      });
    }
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
  initExpandCards();
  initSectionListener();
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
              <h4>I'm a</h4>
            </div>
            <div class="bio__card-wrapper">
              <div
                :class="['bio__card', 'hoverable', { 'mobile-card': isMobile }]"
              >
                <div class="bio__card-text">Web developer</div>
              </div>
              <div
                :class="['bio__card', 'hoverable', { 'mobile-card': isMobile }]"
              >
                <div class="bio__card-text">Animation enthusiast</div>
              </div>
              <div
                :class="['bio__card', 'hoverable', { 'mobile-card': isMobile }]"
              >
                <div class="bio__card-text">Graphic designer</div>
              </div>
              <div
                :class="['bio__card', 'hoverable', { 'mobile-card': isMobile }]"
              >
                <div class="bio__card-text">Student</div>
              </div>
              <div
                :class="['bio__card', 'hoverable', { 'mobile-card': isMobile }]"
              >
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
              <div class="timeline__header">
                <div class="line">
                  <h3>Medior Vue.js Developer</h3>
                </div>
                <div class="line">
                  <h4>AFS Group Netherlands</h4>
                </div>
                <div class="line">
                  <h5>September 2022 – Present</h5>
                </div>
              </div>
              <ul class="expandable">
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo placeat cupiditate deleniti repudiandae eos cum
                  excepturi corrupti sequi veritatis quod eligendi saepe,
                </li>
                <li>
                  accusantium consequatur necessitatibus obcaecati veniam, nam
                  distinctio rem.
                </li>
              </ul>
            </div>
          </div>
          <div class="timeline__wrapper">
            <div class="timeline__line"><div class="timeline__line-dot" /></div>
            <div class="timeline__element">
              <div class="timeline__header">
                <div class="line">
                  <h3>Web Developer</h3>
                </div>
                <div class="line">
                  <h4>Custommerce sp. z o. o.</h4>
                </div>
                <div class="line">
                  <h5>October 2021 – September 2022</h5>
                </div>
              </div>
              <ul class="expandable">
                <li>
                  Created rich content cards for well-known brands like Nivea,
                  iRobot, Remington or Legrand and implemented them in numerous
                  e-commerce shops in Poland,
                </li>
                <li>
                  Developed unique system for optimizing HTML and CSS in Node.js
                </li>
              </ul>
            </div>
          </div>
          <div class="timeline__wrapper">
            <div class="timeline__line"><div class="timeline__line-dot" /></div>
            <div class="timeline__element">
              <div class="timeline__header">
                <div class="line">
                  <h3>Front-end Web Developer</h3>
                </div>
                <div class="line">
                  <h4>INFOCENTRUM sp. z o. o.</h4>
                </div>
                <div class="line">
                  <h5>August 2020 – January 2022</h5>
                </div>
              </div>
              <ul class="expandable">
                <li>
                  Software for production efficiency and countering the spread
                  of COVID-19 for one of the largest companies in Poland H.
                  CEGIELSKI-POZNAŃ S. A.
                </li>
                <li>Websites and e-commerce shops for individual clients</li>
              </ul>
            </div>
          </div>
          <div class="timeline__wrapper">
            <div class="timeline__line"><div class="timeline__line-dot" /></div>
            <div class="timeline__element">
              <div class="timeline__header">
                <div class="line">
                  <h3>Web Developer</h3>
                </div>
                <div class="line">
                  <h4>ITM-Software sp. z o. o.</h4>
                </div>
                <div class="line">
                  <h5>June 2019 – July 2020</h5>
                </div>
              </div>
              <ul class="expandable">
                <li>
                  Promo materials for company, new website, dedicated UI designs
                  for upcoming software.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="education" class="education">
      <div class="section__body-wrapper">
        <div class="section__body">
          <div class="timeline__wrapper">
            <div class="timeline__line"><div class="timeline__line-dot" /></div>
            <div class="timeline__element">
              <div class="timeline__header">
                <div class="line">
                  <h3>Uniwerystet im.&nbsp;Adama&nbsp;Mickiewicza</h3>
                </div>
                <div class="line">
                  <h4>Software Engineer</h4>
                </div>
                <div class="line">
                  <h5>October 2021 – Present</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline__wrapper">
            <div class="timeline__line"><div class="timeline__line-dot" /></div>
            <div class="timeline__element">
              <div class="timeline__header">
                <div class="line">
                  <h3>Zespół Szkół Komunikacji im.&nbsp;Hipolita&nbsp;Cegielskiego</h3>
                </div>
                <div class="line">
                  <h4>IT Technician</h4>
                </div>
                <div class="line">
                  <h5>September 2018 – May 2021</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="skills">
      <div class="section__body-wrapper">
        <div class="section__body">
          <div class="bio__body">
            <div class="bio__card-wrapper">
              <div
                :class="['bio__card', 'hoverable', { 'mobile-card': isMobile }]"
              >
                <div class="bio__card-text">Web developer</div>
              </div>
              <div
                :class="['bio__card', 'hoverable', { 'mobile-card': isMobile }]"
              >
                <div class="bio__card-text">Animation enthusiast</div>
              </div>
              <div
                :class="['bio__card', 'hoverable', { 'mobile-card': isMobile }]"
              >
                <div class="bio__card-text">Graphic designer</div>
              </div>
              <div
                :class="['bio__card', 'hoverable', { 'mobile-card': isMobile }]"
              >
                <div class="bio__card-text">Student</div>
              </div>
              <div
                :class="['bio__card', 'hoverable', { 'mobile-card': isMobile }]"
              >
                <div class="bio__card-text">Beer enjoyer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
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
        padding: 1rem 1rem 1rem 2rem;
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
  &__line {
    min-width: 0.1rem;
    background-color: var(--color-heading);
    position: relative;
    border-radius: 1rem;
    &-dot {
      position: absolute;
      width: 0.75rem;
      height: 0.75rem;
      top: 2.5rem;
      left: 50%;
      transform: translate(-50%, -0%);
      background-color: #fff;
      border-radius: 100%;
    }
  }
  &__wrapper {
    padding-left: 0.5rem;
    display: flex;
    overflow: hidden;
  }
  &__element {
    padding: 1rem 1rem 1rem 3rem;
  }
  &__header {
    h3 {
      line-height: 1;
      color: var(--color-heading);
    }
    h4 {
      padding-bottom: 0.125rem;
      line-height: 1.2;
    }
  }
  .expandable {
    line-height: 1.2;
    height: 0px;
    opacity: 0;
    padding-left: 1rem;
    padding-top: 0.5rem;
    transition: 0.45s cubic-bezier(0.69, 0, 0.27, 1);
    overflow-y: hidden;
    @media only screen and (max-width: 768px) {
      padding-left: 1.5rem;
      line-height: 1;
    }
    &.expanded {
      opacity: 1;
    }
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
