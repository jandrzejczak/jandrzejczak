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
// @ts-ignore
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { onMounted, ref, computed, watch, onUnmounted, toRaw } from "vue";
import { useOrientationStore, useDeviceStore } from "@/stores/globalStore";

const orientationStore = useOrientationStore();
const deviceStore = useDeviceStore();
const { orientation } = storeToRefs(orientationStore);
const { isMobileDevice, getCurrentColor } = storeToRefs(deviceStore);

const emit = defineEmits(["scene-ready"]);

const bulding = ref<null | HTMLElement>(null);
const camera = ref();
const scene = ref();
const renderer = ref();
const model = ref();
const controls = ref();
const transformControls = ref();

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
  camera.value.position.z = 500;
  camera.value.position.x = 500;
  camera.value.position.y = 500;

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
      loader.load("building.glb", (gltf: any) => {
        emit("scene-ready", true);
        model.value = gltf.scene;

        model.value.traverse((child: any) => {
          if (child.isMesh) {
            child.material.transparent = true;
            child.material.roughness = 1;
            const name = Number(child.name.charAt(child.name.length - 1));
            if (name === 1) {
              const newMaterial = new THREE.MeshStandardMaterial({
                color: 0xff0000,
                transparent: true,
                // opacity: 0.5,
              });
              child.material = newMaterial;
              // child.material.color.set(0x000000);
            }
          }
          if (child.isGeometry) {
            child.geometry.computeVertexNormals(true);
          }
        });

        model.value.scale.set(20, 20, 20);
        // model.value.position.set(1, -0.5, 0);
        // model.value.rotation.x = -1;

        const light = new THREE.PointLight(0xfffff, 1, 1);
        light.position.set(5, 0, 1);

        const floorGeometry = new THREE.PlaneGeometry(10000, 10000, 1, 1);
        const floorMaterial = new THREE.MeshBasicMaterial({
          color: Number("0x" + getCurrentColor.value.slice(1)),
        });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -1;
        scene.value.add(floor);

        const fogColor = new THREE.Color(0x000000);
        const near = 1;
        const far = 3500;

        scene.value.fog = new THREE.Fog(fogColor, near, far);

        scene.value.background = fogColor;

        scene.value.add(light);

        scene.value.add(model.value);
        render();
      });
    });

  renderer.value = new THREE.WebGLRenderer({
    antialias: true,
    // alpha: true,
    logarithmicDepthBuffer: true,
  });
  renderer.value.setClearColor(0x000000, 0); // the default
  renderer.value.setPixelRatio(window.devicePixelRatio);
  renderer.value.setSize(window.innerWidth, window.innerHeight);
  renderer.value.outputEncoding = THREE.sRGBEncoding;

  //
  // transformControls.value = new TransformControls(
  //   camera.value,
  //   renderer.value.domElement,
  // );
  // transformControls.value.size = 0.75;
  // transformControls.value.showX = false;
  // transformControls.value.space = "world";
  // // transformControls.value.attach( OOI.target_hand_l );
  // scene.value.add(transformControls.value);

  bulding.value?.appendChild(renderer.value.domElement);

  controls.value = new OrbitControls(camera.value, renderer.value.domElement);
  controls.value.update();
  controls.value.enablePan = false;
  controls.value.enableDamping = true;
  controls.value.dampingFactor = 0.05;
  // controls.value.addEventListener("change", render); // use if there is no animation loop
  controls.value.minDistance = 200;
  controls.value.maxDistance = 1000;
  controls.value.maxPolarAngle = Math.PI / 3 - 0.1;
  controls.value.minPolarAngle = Math.PI / 3 - 0.1;
  // controls.value.autoRotate = true;
  // controls.value.target.set(1, 0, 0);
  // controls.value.update();

  const animate = () => {
    if (model.value) {
      // Rotate the camera around the model
      // camera.value.position.x = 50 * Math.cos(Date.now() * 0.0001);
      // camera.value.position.z = 50 * Math.sin(Date.now() * 0.0001);
      camera.value.lookAt(0, 40, 0);
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
  <div ref="bulding" :class="['face-bg']"></div>
</template>

<style scoped lang="scss">
.orient {
  font-size: 4rem;
  position: fixed;
  top: 0;
  left: 0;
}
.face-bg {
  // z-index: -1;
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
