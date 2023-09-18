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
import { onMounted, ref, computed, watch, onUnmounted, toRaw } from "vue";
import { useOrientationStore, useDeviceStore } from "@/stores/globalStore";

const orientationStore = useOrientationStore();
const deviceStore = useDeviceStore();
const { orientation } = storeToRefs(orientationStore);
const { isMobileDevice, getCurrentColor } = storeToRefs(deviceStore);

const emit = defineEmits(["scene-ready"]);

const faceBackground = ref<null | HTMLElement>(null);
const camera = ref();
const scene = ref();
const renderer = ref();
const model = ref();
const controls = ref();

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
    60,
    window.innerWidth / window.innerHeight,
    0.01,
    100,
  );
  camera.value.position.z = 1;
  camera.value.focalLength = 3;

  scene.value = new THREE.Scene();

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/libs/draco/");

  new RGBELoader()
    .setPath("/images/")
    .load("empty_warehouse_01_1k.hdr", (texture: any) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      scene.value.environment = texture;

      render();

      // model
      const loader = new GLTFLoader().setPath("/models/");
      loader.setDRACOLoader(dracoLoader);
      loader.load("face5.glb", (gltf: any) => {
        emit("scene-ready", true);
        model.value = gltf.scene;

        model.value.traverse((child: any) => {
          if (child.isMesh) {
            child.material.color.set(
              Number("0x" + getCurrentColor.value.slice(1)),
            );
            child.material.roughness = 0.1;
          }
          if (child.isGeometry) {
            child.geometry.computeVertexNormals(true);
          }
        });

        model.value.scale.set(20, 20, 20);
        model.value.position.set(1, -0.5, 0);
        model.value.rotation.x = -1;

        const light = new THREE.PointLight(0xfffff, 1, 1);
        light.position.set(5, 0, 1);

        scene.value.add(light);

        scene.value.add(model.value);

        render();
      });
    });

  renderer.value = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.value.setClearColor(0x000000, 0); // the default
  renderer.value.setPixelRatio(window.devicePixelRatio);
  renderer.value.setSize(window.innerWidth, window.innerHeight);
  renderer.value.outputEncoding = THREE.sRGBEncoding;
  faceBackground.value?.appendChild(renderer.value.domElement);

  controls.value = new OrbitControls(camera.value, renderer.value.domElement);
  controls.value.addEventListener("change", render); // use if there is no animation loop
  controls.value.minDistance = 0;
  controls.value.maxDistance = 10;
  controls.value.target.set(1, 0, 0);
  controls.value.update();

  const animate = () => {
    if (model.value) {
      if (isMobileDevice.value()) {
        model.value.rotation.x = ease(
          model.value.rotation.x,
          (orientation.value.b ?? 0) / 300 - 0.1,
          0.075,
        );
        model.value.rotation.y = ease(
          model.value.rotation.y,
          (orientation.value.g ?? 0) / 300,
          0.075,
        );
      } else {
        model.value.rotation.x = ease(
          model.value.rotation.x,
          mousePosition.value.y / (3 * window.innerWidth),
          0.075,
        );
        model.value.rotation.y = ease(
          model.value.rotation.y,
          mousePosition.value.x / (3 * window.innerHeight),
          0.075,
        );
      }
    }
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

const ease = (start: number, end: number, amt: number): number => {
  return (1 - amt) * start + amt * end;
};

watch(getCurrentColor, (newVal) => {
  if (model.value) {
    model.value.traverse((child: any) => {
      if (child.isMesh) {
        child.material.color.set(Number("0x" + newVal.slice(1)));
      }
      if (child.isGeometry) {
        child.geometry.computeVertexNormals(true);
      }
    });
  }
});

onMounted(() => {
  init();
  render();
  window.addEventListener("mousemove", updateMousePosition);
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
    // Traverse the model and dispose of materials and geometries if needed
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
  <div
    ref="faceBackground"
    :class="['face-bg', { 'mobile-overlay': isMobileDevice() }]"
  ></div>
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
    background-color: var(--bg-color);
    opacity: 0.5;
  }
}
</style>
