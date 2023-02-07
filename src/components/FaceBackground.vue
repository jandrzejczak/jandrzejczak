<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { onMounted } from "vue";

let camera, scene, renderer, model;

let mousePosition = {
  x: 0,
  y: 0,
}

onMounted(() => {
  init();
  render();

  window.addEventListener("mousemove", (e) => {
    mousePosition.x = window.innerWidth/2 - e.pageX;
    mousePosition.y = window.innerHeight/2 - e.pageY;
    // console.table({x: mousePosition.x, y: mousePosition.y})
  });
});

function init() {
  var container = document.getElementById("face");
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.25,
    20
  );
  camera.position.set(-1, 0, 0);

  scene = new THREE.Scene();

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/jsm/libs/draco/");

  new RGBELoader()
    .setPath("/")
    .load("royal_esplanade_1k.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      scene.environment = texture;

      render();

      // model
      const loader = new GLTFLoader().setPath("/models/");
      loader.setDRACOLoader(dracoLoader);
      loader.load("face.glb", function (gltf) {
        console.log("object ready");
        model = gltf.scene;
        scene.add(gltf.scene);

        render();
      });
    });

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0); // the default
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
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
    };
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
  renderer.render(scene, camera);
}


</script>

<template>
  <div id="face" class="face-bg"></div>
</template>

<style scoped>
.face-bg {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
</style>
