<script setup lang="ts">
import { storeToRefs } from 'pinia';
import * as THREE from "three";
// @ts-ignore
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// @ts-ignore
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// @ts-ignore
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
// @ts-ignore
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { onMounted, ref } from "vue";
import { useOrientationStore } from "@/stores/orientation"

const store = useOrientationStore();
const { orientation } = storeToRefs(store)

const emit = defineEmits(["scene-ready"]);

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
    // console.table({x: mousePosition.x, y: mousePosition.y})
  });

  // if (window.DeviceOrientationEvent) {
  //   window.addEventListener(
  //     "deviceorientation",
  //     function (event: any) {
  //       tilt([event.beta, event.gamma]);
  //     },
  //     true
  //   );
  // } else if (window.DeviceMotionEvent) {
  //   window.addEventListener(
  //     "devicemotion",
  //     function (event: any) {
  //       tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
  //     },
  //     true
  //   );
  // } else {
  //   window.addEventListener(
  //     "MozOrientation",
  //     function (orientation: any) {
  //       tilt([orientation.x * 50, orientation.y * 50]);
  //     },
  //     true
  //   );
  // }
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
  dracoLoader.setDecoderPath("/jsm/libs/draco/");

  new RGBELoader()
    .setPath("/images/")
    .load("empty_warehouse_01_1k.hdr", function (texture: any) {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      scene.environment = texture;

      render();

      // model
      const loader = new GLTFLoader().setPath("/models/");
      loader.setDRACOLoader(dracoLoader);
      loader.load("face2DRACO.glb", function (gltf: any) {
        emit("scene-ready", true);
        model = gltf.scene;

        model.traverse( function ( child: any ) {
          if ( child.isMesh ) {
            // child.material = material;
            child.material.color.set( 0x000000 );
          }
        });

        model.scale.set(20, 20, 20)
        model.position.set(1, -0.5, 0);

        const light = new THREE.PointLight(0xfffff, 1, 1);
        light.position.set(5, 0, 1);
        
        scene.add(light);
        // scene.add(model);

        // Glass models

        const roundedBox = new THREE.TorusKnotGeometry( 0.12, 0.07, 100, 26 ).toNonIndexed();

        const material = new THREE.MeshPhysicalMaterial({
          color: 0x000000,
          // transmission: 0.8,
          //@ts-ignore
          roughness: 0,
          envMap: texture,
        });

        boxMesh = new THREE.Mesh(roundedBox, material);

        scene.add(boxMesh);

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

    if (model) {
      model.rotation.x = mousePosition.y / (3 * window.innerWidth);
      model.rotation.y = mousePosition.x / (3 * window.innerHeight);
    }
    // if (boxMesh) {
    //   boxMesh.rotation.x = mousePosition.y / (3 * window.innerWidth);
    //   boxMesh.rotation.y = mousePosition.x / (3 * window.innerHeight);
    // }
    if (boxMesh) {
      boxMesh.rotation.x = orientation.value.a ?? 1 / (3 * window.innerWidth);
      boxMesh.rotation.y = orientation.value.b ?? 1 / (3 * window.innerHeight);
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
  // camera.position.x += ( mousePosition.x - camera.position.x ) * .01;
  // camera.position.y += ( -  mousePosition.y - camera.position.y ) * .01;

  camera.lookAt( scene.position );
  
  renderer.render(scene, camera);
}
</script>

<template>
  <div id="face" class="face-bg"></div>
</template>

<style scoped>
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
}
</style>
