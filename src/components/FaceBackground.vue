<script setup lang="ts">
import { storeToRefs } from "pinia";
import * as THREE from "three";
// @ts-ignore
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// @ts-ignore
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// @ts-ignore
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
// @ts-ignore
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { onMounted, ref, computed } from "vue";
import { useOrientationStore, useDeviceStore } from "@/stores/globalStore";
import { useColorMode } from "@vueuse/core";

const { system, store } = useColorMode();
const myColorMode = computed(() =>
  store.value === "auto" ? system.value : store.value
);

const orientationStore = useOrientationStore();
const deviceStore = useDeviceStore();
const { orientation } = storeToRefs(orientationStore);
const { isMobile } = storeToRefs(deviceStore);

const emit = defineEmits(["scene-ready"]);

function ease(start: number, end: number, amt: number): number {
  return (1 - amt) * start + amt * end;
}

let camera: any, scene: any, renderer: any, model: any, boxMesh: any;

let mousePosition = {
  x: 0,
  y: 0,
};

onMounted(() => {
  init();
  render();

  window.addEventListener("mousemove", (e) => {
    mousePosition.x = e.pageX - window.innerWidth / 2;
    mousePosition.y = e.pageY - window.innerHeight / 2;
  });
});

function init() {
  var container = document.getElementById("face") as HTMLElement;
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.01,
    100
  );
  camera.position.z = 1;
  camera.focalLength = 3;

  scene = new THREE.Scene();

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/libs/draco/");

  new RGBELoader()
    .setPath("/images/")
    .load("empty_warehouse_01_1k.hdr", function (texture: any) {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      scene.environment = texture;

      render();

      // model
      const loader = new GLTFLoader().setPath("/models/");
      loader.setDRACOLoader(dracoLoader);
      loader.load("face4DRACO.glb", function (gltf: any) {
        emit("scene-ready", true);
        model = gltf.scene;

        const material = new THREE.MeshPhysicalMaterial({
          // color: 0x000000,
          // transmission: 0.8,
          //@ts-ignore
          roughness: 0.4,
          envMap: texture,
        });

        model.traverse(function (child: any) {
          if (child.isMesh) {
            // child.material = material;
            child.material.color.set(0x000000);
          }
          if (child.isGeometry) {
            child.geometry.computeVertexNormals(true);
          }
        });

        model.scale.set(20, 20, 20);
        model.position.set(1, -0.5, 0);
        model.rotation.x = -1;

        const light = new THREE.PointLight(0xfffff, 1, 1);
        light.position.set(5, 0, 1);

        scene.add(light);

        // Glass models

        const roundedBox = new THREE.TorusKnotGeometry(
          0.12,
          0.07,
          100,
          26
        ).toNonIndexed();

        // const material = new THREE.MeshPhysicalMaterial({
        //   color: 0x000000,
        //   // transmission: 0.8,
        //   //@ts-ignore
        //   roughness: 0,
        //   envMap: texture,
        // });

        boxMesh = new THREE.Mesh(roundedBox, material);

        scene.add(model);

        render();
      });
    });

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0); // the default
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.toneMapping = THREE.ACESFilmicToneMapping;
  // renderer.toneMappingExposure = 1;
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", render); // use if there is no animation loop
  // controls.autoRotate = true;
  controls.minDistance = 0;
  controls.maxDistance = 10;
  controls.target.set(1, 0, 0);
  controls.update();

  animate();
  function animate() {
    if (model && !isMobile.value) {
      model.rotation.x = ease(
        model.rotation.x,
        mousePosition.y / (3 * window.innerWidth),
        0.075
      );
      model.rotation.y = ease(
        model.rotation.y,
        mousePosition.x / (3 * window.innerHeight),
        0.075
      );
    }
    if (model && isMobile.value) {
      model.rotation.x = ease(
        model.rotation.x,
        (orientation.value.b ?? 0) / 300 - 0.1,
        0.075
      );
      model.rotation.y = ease(
        model.rotation.y,
        (orientation.value.g ?? 0) / 300,
        0.075
      );
    }
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
  }

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  render();
}

function render() {
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}
</script>

<template>
  <div id="face" :class="['face-bg', { 'mobile-overlay': isMobile }]"></div>
</template>

<style scoped lang="scss">
.orient {
  font-size: 4rem;
  position: fixed;
  top: 0;
  left: 0;
}
.face-bg {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.mobile-overlay {
  &::after {
    content: "";
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
