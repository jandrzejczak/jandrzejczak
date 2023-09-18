<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/stores/globalStore";

const deviceStore = useDeviceStore();
const { isMobileDevice } = storeToRefs(deviceStore);

function initExpandCards() {
  var toggleExpand = document.querySelectorAll(".timeline__element");
  toggleExpand.forEach((e) => {
    if (isMobileDevice.value()) {
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
onMounted(() => {
  initExpandCards();
});
</script>

<template>
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
                Worked on an internal software system for energy market brokers and redesigned the entirety of&nbsp;the system,
              </li>
              <li>
                Developed new ideas and novel aproaches for upcoming consulting web application using Vue&nbsp;3, Pinia and GraphQL,
              </li>
              <li>
                Used software development methodologies like Agile and&nbsp;Waterfall to&nbsp;plan and execute the development process.
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
                Created rich content cards for well&#8209;known brands like Nivea,
                iRobot, Remington or Legrand and implemented them in numerous
                e&#8209;commerce shops in Poland,
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
                <h4>Infocentrum sp. z o. o.</h4>
              </div>
              <div class="line">
                <h5>August 2020 – January 2022</h5>
              </div>
            </div>
            <ul class="expandable">
              <li>
                Software for production efficiency and countering the spread of
                COVID-19 for one of the largest companies in Poland H.
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
</template>
