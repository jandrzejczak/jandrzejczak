<script setup lang="ts">
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

const emit = defineEmits(["scene-ready"]);

let camera: any, scene: any, renderer: any, model: any;

let mousePosition = {
  x: 0,
  y: 0,
};

let orientation = ref({
    a: 0,
    b: 0,
    g: 0,
  });

onMounted(() => {
  init();
  render();

  window.addEventListener("mousemove", (e) => {
    mousePosition.x = window.innerWidth / 2 - e.pageX;
    mousePosition.y = window.innerHeight / 2 - e.pageY;
    // console.table({x: mousePosition.x, y: mousePosition.y})
  });

  window.addEventListener("deviceorientation", function(event) {
    orientation.value.a = event.alpha || 0;
    orientation.value.b = event.beta || 0;
    orientation.value.g = event.gamma || 0;
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
    45,
    window.innerWidth / window.innerHeight,
    0.25,
    20
  );
  camera.position.set(-0.5, 0, 0);

  scene = new THREE.Scene();

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/jsm/libs/draco/");

  new RGBELoader()
    .setPath("/")
    .load("royal_esplanade_1k.hdr", function (texture: any) {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      scene.environment = texture;

      render();

      // model
      const loader = new GLTFLoader().setPath("/models/");
      loader.setDRACOLoader(dracoLoader);
      loader.load("face.glb", function (gltf: any) {
        emit("scene-ready", true);
        model = gltf.scene;

        // const newMaterial = new THREE.MeshPhongMaterial({
        //   color: 0xff0000,
        //   shininess: 10,
        // });

        // model.traverse((o) => {
        //   o.material = newMaterial;
        // });

        const light = new THREE.PointLight(0xff0000, 1, 1);
        light.position.set(0, 0, 0);

        const geometry = new THREE.IcosahedronGeometry(0.1, 10);
        const material = new THREE.MeshPhysicalMaterial({  
          roughness: 0.2,  
          transmission: 0.4,  
        });
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh);

        scene.add(light);
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
