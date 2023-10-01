<script setup lang="ts">
import { storeToRefs } from "pinia";
import * as TWEEN from "@tweenjs/tween.js";
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
// @ts-ignore
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
// @ts-ignore
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
// @ts-ignore
import { SSAOPass } from "three/addons/postprocessing/SSAOPass.js";
// @ts-ignore
// import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import {
  computeBoundsTree,
  disposeBoundsTree,
  acceleratedRaycast,
  MeshBVH,
} from "three-mesh-bvh";
import { onMounted, ref, computed, watch, onUnmounted, toRaw } from "vue";
import { useDeviceStore } from "@/stores/globalStore";

THREE.Mesh.prototype.raycast = acceleratedRaycast;
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;

const deviceStore = useDeviceStore();
const { getCurrentColor } = storeToRefs(deviceStore);

const emit = defineEmits(["scene-ready"]);

let bulding = ref<null | HTMLElement>(null);
let camera: any = null;
let scene: any = null;
let renderer: any = null;
let model: any = null;
let controls: any = null;
let raycaster: any = null;
let composer: any = null;
let pointer = new THREE.Vector2();
const sceneReady = ref(false);
const activeFloor = ref();
const selectedFloor = ref();
const animatingCamera = ref(false);

const onPointerMove = (event: MouseEvent) => {
  const wrapperElement = bulding.value?.getBoundingClientRect();
  if (!wrapperElement) {
    return;
  }
  pointer.x = (event.clientX / wrapperElement.width) * 2 - 1;
  pointer.y = -(event.clientY / wrapperElement.height) * 2 + 1;

  if (!sceneReady.value) {
    return;
  }

  raycaster.setFromCamera(pointer, camera);

  const intersectObjects = scene.children[1].children.filter((el: any) =>
    el.name.startsWith("floor_0"),
  );

  raycaster.firstHitOnly = true;
  const intersects = raycaster.intersectObjects(intersectObjects);

  if (intersects.length > 0) {
    if (activeFloor.value != intersects[0].object) {
      document.documentElement.style.cursor = "pointer";
      if (activeFloor.value)
        activeFloor.value.material.emissive.setHex(
          activeFloor.value.currentHex,
        );
      activeFloor.value = intersects[0].object;
      activeFloor.value.currentHex =
        activeFloor.value.material.emissive.getHex();
      activeFloor.value.material.emissive.setHex(0xff0000);
      // const newMaterial = new THREE.MeshStandardMaterial({
      //   color: 0xff0000,
      //   transparent: true,
      //   // opacity: 0.5,
      // });
      // intersects[0].object.material = newMaterial;
    }
  } else {
    document.documentElement.style.cursor = "default";
    if (activeFloor.value)
      activeFloor.value.material.emissive.setHex(activeFloor.value.currentHex);

    activeFloor.value = null;
  }
};

const onPointerClick = (event: MouseEvent) => {
  if (!activeFloor.value) {
    return;
  }
  selectedFloor.value = activeFloor.value;
};

const init = () => {
  camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / 2 / window.innerHeight,
    0.1,
    10000,
  );
  camera.position.z = 500;
  camera.position.x = -500;
  camera.position.y = 500;

  scene = new THREE.Scene();

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/libs/draco/");

  new RGBELoader()
    .setPath("/images/")
    .load("empty_warehouse_01_1k.hdr", (texture: any) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      scene.environment = texture;

      render();

      // model
      const loader = new GLTFLoader().setPath("/models/");
      loader.setDRACOLoader(dracoLoader);
      loader.load("FinalBuildingInterior3.glb", (gltf: any) => {
        model = gltf.scene;
        model.traverse((child: any) => {
          if (child.isMesh) {
            child.material.transparent = true;
            child.material.roughness = 1;
            // const name = Number(child.name.charAt(child.name.length - 1));
            child.castShadow = true;
            child.receiveShadow = true;
            if (
              child instanceof THREE.Mesh &&
              (child.name.includes("left_") ||
                child.name.includes("right_") ||
                child.name.includes("apartment_"))
            ) {
              child.visible = false;
            } else {
              const newMaterial = new THREE.MeshPhongMaterial({
                // color: Math.random() * 0xffffff,
              });
              child.material = newMaterial;
              // child.material.color.set(0x000000);
            }
          }
          if (child.isGeometry) {
            child.geometry.computeVertexNormals(true);
            // child.geometry.boundsTree = new MeshBVH(child.geometry);
          }
        });

        model.scale.set(2, 2, 2);
        // model.value.position.set(1, -0.5, 0);
        // model.value.rotation.x = -1;

        // const light = new THREE.DirectionalLight(0xffffff, 3);
        // light.position.set(1, 1, 1).normalize();

        const floorGeometry = new THREE.PlaneGeometry(10000, 10000, 1, 1);
        const floorMaterial = new THREE.ShadowMaterial();
        floorMaterial.opacity = 0.5;
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;

        scene.add(floor);

        // const fogColor = new THREE.Color(0x000000);
        // const near = 1;
        // const far = 3500;

        // scene.fog = new THREE.Fog(fogColor, near, far);

        // scene.background = fogColor;

        // scene.value.add(light);

        scene.add(model);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 1);
        hemiLight.position.set(0, 20, 0);
        scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 3);
        dirLight.position.set(80, 150, 50);
        let t = new THREE.Object3D();
        t.translateX(0);
        t.translateY(50);
        t.translateZ(0);
        dirLight.target = t;
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 40;
        dirLight.shadow.camera.bottom = -40;
        dirLight.shadow.camera.left = -50;
        dirLight.shadow.camera.right = 50;
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 1000000;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        scene.add(dirLight);
        scene.add(dirLight.target);

        // composer = new EffectComposer(renderer);

        // const renderPass = new RenderPass(scene, camera);
        // composer.addPass(renderPass);

        // const ssaoPass = new SSAOPass(scene, camera, window.innerWidth, window.innerHeight);
        // composer.addPass(ssaoPass);

        // const outputPass = new OutputPass();
        // composer.addPass(outputPass);

        emit("scene-ready", true);
        sceneReady.value = true;
        render();
      });
    });

  raycaster = new THREE.Raycaster();

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    logarithmicDepthBuffer: true,
  });
  renderer.setClearColor(0x000000, 0); // the default
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth / 2, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;

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

  bulding.value?.appendChild(renderer.domElement);
  renderer.domElement.addEventListener("mousemove", onPointerMove, true);
  renderer.domElement.addEventListener("click", onPointerClick, true);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();
  controls.enablePan = true;
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  // controls.value.addEventListener("change", render); // use if there is no animation loop
  controls.minDistance = 200;
  controls.maxDistance = 1000;
  // controls.maxPolarAngle = Math.PI / 3 - 0.1;
  // controls.minPolarAngle = Math.PI / 3 - 0.1;
  controls.target.set(0, 50, 0);
  // controls.value.autoRotate = true;
  // controls.value.target.set(1, 0, 0);
  // controls.value.update();

  const animate = () => {
    if (model) {
      if (animatingCamera.value) {
        // camera.lookAt(0, selectedFloor.value.position.y * 1.5, 0);
        controls.target.set(0, selectedFloor.value.position.y, 0);

        // const cube = selectedFloor.value;
        // const coords = { x: camera.position.x, y: camera.position.y };
        // camera.position.set(cube.position.x, cube.position.y, camera.position.z);
        // new TWEEN.Tween(coords)
        //   .to({ x: cube.position.x, y: cube.position.y })
        //   .onUpdate(() =>
        //     camera.position.set(coords.x, coords.y, camera.position.z),
        //   )
        //   .start();

        // controls.position.y = 700;
        console.log(camera.position);
        controls.update();
        camera.updateMatrix();
        camera.updateMatrixWorld();

        animatingCamera.value = false;
      }
    }
    if (scene && camera) {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    }
  };

  animate();
  window.addEventListener("resize", onWindowResize);
  // document.addEventListener("mousemove", onPointerMove);
};

const render = () => {
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / 2 / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth / 2, window.innerHeight);

  render();
};

const ease = (start: number, end: number, amt: number): number => {
  return (1 - amt) * start + amt * end;
};

watch(getCurrentColor, (newVal) => {
  if (model) {
    model.traverse((child: any) => {
      if (child.isMesh) {
        child.material.color.set(Number("0x" + newVal.slice(1)));
      }
      if (child.isGeometry) {
        child.geometry.computeVertexNormals(true);
      }
    });
  }
});

watch(selectedFloor, () => {
  animatingCamera.value = true;
  const selectedFloorNumber = +activeFloor.value.name.split("_").pop();
  const visibleFloors = scene.children[1].children.filter((element: any) => {
    console.log(element.name);
    const splitName = element.name.split("_");
    return splitName[0] === "apartment" ||
      splitName[0] === "left" ||
      splitName[0] === "right"
      ? +splitName.pop() === selectedFloorNumber
      : +splitName.pop() <= selectedFloorNumber;
  });
  // Remove floors over the current one

  if (visibleFloors) {
    scene.children[1].children.forEach((child: any) => {
      if (child.isMesh) {
        if (child.name !== "building_base") {
          child.visible = false;
        }
      }
    });
    visibleFloors.forEach((child: any) => {
      if (child.isMesh) {
        child.visible = true;
      }
    });
  }
});

onMounted(() => {
  init();
  render();
});

onUnmounted(() => {
  window.removeEventListener("click", onPointerMove);
  window.removeEventListener("resize", onWindowResize);
  controls.removeEventListener("change", render); // use if there is no animation loop

  // Dispose of camera
  if (camera) {
    camera = null;
  }

  // Dispose of scene
  if (scene) {
    // Remove all objects from the scene
    scene.traverse((obj: THREE.Object3D) => {
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
    scene = null;
  }

  // Dispose of renderer
  if (renderer) {
    // Clean up the DOM element
    const domElement = renderer.domElement;
    domElement.parentNode?.removeChild(domElement);

    // Dispose of the renderer
    renderer.dispose();
    renderer = null;
  }

  // Dispose of model
  if (model) {
    // Traverse the model and dispose of materials and geometries if needed
    model.traverse((obj: THREE.Object3D) => {
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
    if (scene) {
      scene.remove(model);
    }

    model = null;
  }
});
</script>

<template>
  <div class="grid flex-1 grid-cols-2">
    <div>
      <div ref="bulding" class="fixed left-0 top-0 w-[50vw]" />
    </div>

    <div class="flex flex-col p-8">
      <div
        class="h-32 w-full rounded-2xl bg-zinc-500/50 backdrop-blur-md"
      ></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.orient {
  font-size: 4rem;
  position: fixed;
  top: 0;
  left: 0;
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
