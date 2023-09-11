<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";
import { onMounted, ref, computed, watchEffect } from "vue";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { useColorMode, useMagicKeys } from "@vueuse/core";
import { useDeviceStore } from "@/stores/globalStore";
import { storeToRefs } from "pinia";
import MenuButton from "@/components/Navigation/MenuButton.vue";
import { vOnClickOutside } from "@vueuse/components";

const deviceStore = useDeviceStore();
const { isMobileDevice } = storeToRefs(deviceStore);
const { space, escape, enter } = useMagicKeys();
const colorMode = useColorMode({
  emitAuto: true,
});
const router = useRouter();
const routePath = computed(() => router.currentRoute.value.path);

colorMode.value = "auto";

gsap.registerPlugin(Draggable);

const necuroLogo = ref<HTMLElement | null>(null);
const header = ref<HTMLElement | null>(null);
const logoAnimation = ref();
const backgroundAnimation = ref();
const activeColor = ref("");
const isMenuOpen = ref(false);
const isAnimationFinished = ref(false);

const styleClasses = ref([
  { className: "necuro--mocha", probability: 0.01, color: "#593d3b" },
  { className: "necuro--volt", probability: 0.05, color: "#7f0799" },
  { className: "necuro--default", probability: 0.3, color: "#ffffff" },
  { className: "necuro--beach", probability: 0.1, color: "#3f88c5" },
  { className: "necuro--black", probability: 0.3, color: "#0d0d0d" },
  { className: "necuro--wine", probability: 0.08, color: "#612940" },
  { className: "necuro--fedex", probability: 0.1, color: "#660099" },
  { className: "necuro--coca-cola", probability: 0.07, color: "#b91212" },
  { className: "necuro--forest", probability: 0.06, color: "#3e363f" },
]);

const textAnimation = (element: HTMLElement) => {
  const characters = Array.from(element.innerText);

  const newText = characters
    .map((char) =>
      char === " "
        ? "<div>&nbsp;</div>"
        : `<div class="relative"><div>${char}</div><div class="necuro__logo--line absolute top-0 font-display-line">${char}</div></div>`,
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
      0.1,
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
  });
};

const collapseHeader = (element: HTMLElement) => {
  gsap.to(element, {
    ease: "power3.inOut",
    maxHeight: isMobileDevice.value() ? "7rem" : "5rem",
    duration: 1.75,
    onComplete: () => {
      //   element.classList.remove("max-h-screen", "height--screen");
      isAnimationFinished.value = true;
    },
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

const getRandomStyleClass = () => {
  const totalProbability = styleClasses.value.reduce(
    (sum, styleClass) => sum + styleClass.probability,
    0,
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

const handleRouterGoBack = () => {
  router.go(-1);
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const shuffleArray = (array: any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

watchEffect(() => {
  if (space.value || escape.value || enter.value) {
    logoAnimation.value.progress(1);
    backgroundAnimation.value.progress(1);
  }
});

onMounted(() => {
  shuffleArray(styleClasses.value);
  if (necuroLogo.value) {
    textAnimation(necuroLogo.value);
    backgroundAnimation.value = gsap
      .timeline()
      .set(
        document.body,
        {
          className: styleClasses.value[0].className,
          onUpdate: () => {
            activeColor.value = styleClasses.value[0].color;
          },
        },
        "+=0.05",
      )
      .set(
        document.body,
        {
          className: styleClasses.value[1].className,
          onUpdate: () => {
            activeColor.value = styleClasses.value[1].color;
          },
        },
        "+=0.10",
      )
      .set(
        document.body,
        {
          className: styleClasses.value[2].className,
          onUpdate: () => {
            activeColor.value = styleClasses.value[2].color;
          },
        },
        "+=0.15",
      )
      .set(
        document.body,
        {
          className: styleClasses.value[3].className,
          onUpdate: () => {
            activeColor.value = styleClasses.value[3].color;
          },
        },
        "+=0.20",
      )
      .set(
        document.body,
        {
          className: styleClasses.value[4].className,
          onUpdate: () => {
            activeColor.value = styleClasses.value[4].color;
          },
        },
        "+=0.25",
      )
      .set(
        document.body,
        {
          className: styleClasses.value[5].className,
          onUpdate: () => {
            activeColor.value = styleClasses.value[5].color;
          },
        },
        "+=0.50",
      )
      .set(
        document.body,
        {
          className: getRandomStyleClass,
          onUpdate: () => {
            const result = styleClasses.value.find((obj) => {
              return obj.className === document.body.className;
            });
            activeColor.value = result?.color || "";
          },
        },
        "+=1.25",
      );
  }
});
</script>

<template>
  <meta name="theme-color" :content="activeColor" />
  <div
    ref="header"
    :class="[
      'height--screen fixed z-[999] flex max-h-screen w-full items-start justify-center pt-4 backdrop-blur-md pb-safe-offset-4',
      { 'bottom-0': isMobileDevice() },
      { 'top-0': !isMobileDevice() },
    ]"
  >
    <div class="flex h-full w-full items-center justify-between leading-none">
      <div class="flex justify-center px-4">
        <v-icon
          @click="handleRouterGoBack()"
          :class="[
            'h-12 w-12 cursor-pointer transition-opacity duration-700',
            isAnimationFinished && routePath !== '/'
              ? 'opacity-100'
              : 'opacity-0',
            routePath === '/' ? 'pointer-events-none opacity-0' : '',
          ]"
          name="hi-arrow-sm-left"
        />
      </div>
      <div
        ref="necuroLogo"
        class="necuro__logo flex grow items-center justify-center font-display text-8xl sm:text-9xl"
      >
        necuro
      </div>
      <div
        :class="[
          'flex justify-end px-4 transition-[width] duration-500',
          isMenuOpen ? 'w-1/2' : 'w-20',
        ]"
      >
        <MenuButton
          :class="[
            'transition-opacity duration-700',
            isAnimationFinished ? 'opacity-100' : 'opacity-0',
          ]"
          v-model="isMenuOpen"
        >
        </MenuButton>
      </div>
      <div
        v-on-click-outside="closeMenu"
        :class="[
          `height--screen fixed right-0 -z-10 flex w-full justify-end overflow-hidden transition-transform duration-500 after:absolute after:top-0 after:h-full after:w-full after:bg-background after:opacity-75 after:content-[''] sm:w-[24rem]`,
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
          isMobileDevice() ? 'bottom-0' : 'top-0',
        ]"
      >
        <div
          :class="[
            'relative z-10 flex h-full flex-col items-end px-6 ',
            isMobileDevice() ? 'justify-end pb-32' : 'pt-32',
          ]"
        >
          <RouterLink @click="closeMenu" class="pb-4" to="/">
            <span class="font-header text-5xl font-bold">home page</span>
          </RouterLink>
          <RouterLink @click="closeMenu" class="pb-4" to="/head">
            <span class="font-header text-5xl font-bold">andrzejczak</span>
          </RouterLink>
          <RouterLink @click="closeMenu" class="pb-4" to="/">
            <span class="font-header text-5xl font-bold">about</span>
          </RouterLink>
          <RouterLink @click="closeMenu" class="pb-4" to="/">
            <span class="font-header text-5xl font-bold">???</span>
          </RouterLink>
          <RouterLink @click="closeMenu" class="pb-4" to="/">
            <span class="font-header text-5xl font-bold">profit</span>
          </RouterLink>
        </div>
      </div>
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
  &--fedex {
    @extend .necuro;
    --text-color: #ff6600;
    --text-color-secondary: #fff;
    --bg-color: #660099;
    .necuro__logo {
    }
  }
  &--coca-cola {
    @extend .necuro;
    --text-color: #ffffff;
    --text-color-secondary: #000000;
    --bg-color: #b91212;
    .necuro__logo {
    }
  }
  &--forest {
    @extend .necuro;
    --text-color: #e1ad01;
    --text-color-secondary: #73a580;
    --bg-color: #3e363f;
    .necuro__logo {
    }
  }
}
</style>
