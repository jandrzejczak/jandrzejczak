<script setup lang="ts">
import { storeToRefs } from "pinia";
// @ts-ignore
import Typewriter from "typewriter-effect/dist/core";
import * as THREE from "three";
// @ts-ignore
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// @ts-ignore
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// @ts-ignore
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
// @ts-ignore
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { onMounted, ref, onUnmounted, toRaw, nextTick, watchEffect } from "vue";
import { useMagicKeys } from "@vueuse/core";

const { enter } = useMagicKeys();

const bulding = ref<null | HTMLElement>(null);
const camera = ref();
const scene = ref();
const renderer = ref();
const model = ref();
const controls = ref();

const animationStarted = ref(false);
const animationEnded = ref(false);
const helloMatyldzia = ref<null | HTMLElement>(null);

const mousePosition = ref({
  x: 0,
  y: 0,
});

const updateMousePosition = (e: MouseEvent) => {
  mousePosition.value.x = e.pageX - window.innerWidth / 2;
  mousePosition.value.y = e.pageY - window.innerHeight / 2;
};

const init = () => {
  camera.value = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    10000,
  );
  camera.value.position.z = 1000;
  camera.value.position.x = 0;
  camera.value.position.y = 0;

  scene.value = new THREE.Scene();

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/libs/draco/");

  new RGBELoader()
    .setPath("/images/")
    .load("empty_warehouse_01_1k.hdr", (texture: any) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      scene.value.environment = texture;

      render();

      const darkGreyMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000,
        roughness: 0.4,
        metalness: 0.8,
      });

      const pinkGlossMaterial = new THREE.MeshStandardMaterial({
        color: 0xf4b5eb,
        roughness: 0.4,
        metalness: 0.5,
      });

      // model
      const loader = new GLTFLoader().setPath("/models/");
      loader.setDRACOLoader(dracoLoader);
      loader.load("kuromi.glb", (gltf: any) => {
        model.value = gltf.scene;

        model.value.traverse((child: any) => {
          if (child.isMesh) {
            if (
              child.name === "Object_22" ||
              child.name === "Object_12" ||
              child.name === "Object_10" ||
              child.name === "Object_7"
            ) {
              child.material = darkGreyMaterial;
            } else if (child.name === "Object_9") {
              child.material = pinkGlossMaterial;
            }
            child.castShadow = true;
            child.receiveShadow = true;
          }
          if (child.isGeometry) {
            child.geometry.computeVertexNormals(true);
          }
        });

        model.value.scale.set(20, 20, 20);

        const floorGeometry = new THREE.PlaneGeometry(10000, 10000, 1, 1);
        const floorMaterial = new THREE.MeshPhongMaterial({
          color: 0xb0b0b0,
        });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -38;
        floor.receiveShadow = true;
        scene.value.add(floor);

        const fogColor = new THREE.Color(0x7a1c6d);
        const near = 1;
        const far = 3500;

        scene.value.fog = new THREE.Fog(fogColor, near, far);

        scene.value.background = fogColor;

        scene.value.add(model.value);

        const dirLight = new THREE.DirectionalLight(0xbd46ac, 2);
        dirLight.position.set(50, 100, 150);
        let t = new THREE.Object3D();
        t.translateX(0);
        t.translateY(0);
        t.translateZ(0);
        dirLight.target = t;
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 40;
        dirLight.shadow.camera.bottom = -40;
        dirLight.shadow.camera.left = -50;
        dirLight.shadow.camera.right = 50;
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 1000;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        scene.value.add(dirLight);
        scene.value.add(dirLight.target);

        render();
      });
    });

  renderer.value = new THREE.WebGLRenderer({
    antialias: true,
    logarithmicDepthBuffer: true,
  });
  renderer.value.setClearColor(0x000000, 0); // the default
  renderer.value.setPixelRatio(window.devicePixelRatio);
  renderer.value.setSize(window.innerWidth, window.innerHeight);
  renderer.value.shadowMap.enabled = true;
  renderer.value.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.value.outputEncoding = THREE.sRGBEncoding;

  bulding.value?.appendChild(renderer.value.domElement);

  controls.value = new OrbitControls(camera.value, renderer.value.domElement);
  controls.value.update();
  controls.value.enablePan = false;
  controls.value.enableDamping = true;
  controls.value.dampingFactor = 0.05;
  controls.value.minDistance = 600;
  controls.value.maxDistance = 1000;
  controls.value.maxPolarAngle = Math.PI / 2 - 0.1;

  const animate = () => {
    if (scene.value && camera.value) {
      requestAnimationFrame(animate);
      renderer.value.render(toRaw(scene.value), camera.value);
      controls.value.update();
    }
  };

  animate();

  window.addEventListener("resize", onWindowResize);
};

const render = () => {
  camera.value.lookAt(scene.value.position);

  renderer.value.render(toRaw(scene.value), camera.value);
};

const onWindowResize = () => {
  camera.value.aspect = window.innerWidth / window.innerHeight;
  camera.value.updateProjectionMatrix();

  renderer.value.setSize(window.innerWidth, window.innerHeight);

  render();
};

const startAnimation = () => {
  animationStarted.value = true;
  nextTick(() => {
    setTimeout(() => {
      new Typewriter(helloMatyldzia.value, {
        strings: [
          "Najdroższa Matyldo.",
          "Niezależnie od tego ile wspólnych dni spędzimy,",
          "Niezależnie od tego ile razy wspólnie przyjdzie nam narzekać,",
          "Niezależnie od tego z iloma nam przyjdzie się zmierzyć kłótniami,",
          "Każda chwila z Tobą jest dla mnie jak poranny brzask, który ogrzewa mą skroń,",
          "Każda niedola bezustannie buduje nasz fundament,",
          "Każde tarcie zbliża nas do siebie po poprzedzającym uśmiechu,",
          "Pragnę, aby trwało to ponad wieczność,",
          "Gdzie zawsze będziemy kwitnącym ogrodem, którego owocem jest nasza przyjaźn.",
          "Kocham Cię,",
          "Twój na zawsze,",
          "– Jorduś.",
          "Wszystkiego najlepszego!",
        ],
        autoStart: true,
        delay: 40,
        deleteSpeed: 20,
        pauseFor: 2500,
      }).callFunction(() => {
        setTimeout(() => {
          animationEnded.value = true;
        }, 500);
      });
    }, 1500);
  });
};

watchEffect(() => {
  if (enter.value) {
    animationEnded.value = true;
  }
});

onMounted(() => {
  init();
  render();
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updateMousePosition);
  window.removeEventListener("resize", onWindowResize);
  controls.value.removeEventListener("change", render); // use if there is no animation loop

  // Dispose of camera
  if (camera.value) {
    camera.value = null;
  }

  // Dispose of scene
  if (scene.value) {
    // Remove all objects from the scene
    scene.value.traverse((obj: THREE.Object3D) => {
      if (obj instanceof THREE.Mesh) {
        // Dispose of any materials and geometries associated with objects
        if (obj.material) {
          obj.material.dispose();
        }
        if (obj.geometry) {
          obj.geometry.dispose();
        }
      }
    });

    // Remove the scene itself
    scene.value = null;
  }

  // Dispose of renderer
  if (renderer.value) {
    // Clean up the DOM element
    const domElement = renderer.value.domElement;
    domElement.parentNode?.removeChild(domElement);

    // Dispose of the renderer
    renderer.value.dispose();
    renderer.value = null;
  }

  // Dispose of model
  if (model.value) {
    model.value.traverse((obj: THREE.Object3D) => {
      if (obj instanceof THREE.Mesh) {
        if (obj.material) {
          obj.material.dispose();
        }
        if (obj.geometry) {
          obj.geometry.dispose();
        }
      }
    });

    // Remove the model from the scene
    if (scene.value) {
      scene.value.remove(model.value);
    }

    model.value = null;
  }
});
</script>

<template>
  <div ref="bulding" class="kuromi"></div>
  <transition>
    <div
      v-if="!animationEnded"
      class="height--screen fixed flex w-screen items-center justify-center bg-background"
    >
      <transition mode="out-in">
        <button
          @click="startAnimation"
          v-if="!animationStarted"
          style="view-transition-name: matyldzia"
          class="animate-bounce rounded-full bg-primary px-6 py-4 font-header text-2xl text-background shadow-lg transition-all hover:bg-slate-300/75"
        >
          Hello Matyldziu
        </button>
        <div v-else class="max-w-sm text-center text-3xl">
          <div ref="helloMatyldzia"></div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.orient {
  font-size: 4rem;
  position: fixed;
  top: 0;
  left: 0;
}
.kuromi {
  // z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.typewriter {
  position: relative;
  color: #fff;
  font-size: 24px;
  font-family: monospace;
}

.cursor {
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 24px;
  background-color: #fff;
  animation: blink 0.7s infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
