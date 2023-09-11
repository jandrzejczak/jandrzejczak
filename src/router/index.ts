import { createRouter, createWebHistory } from "vue-router";
import HeadView from "@/views/HeadView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      component: HomeView,
    },
    {
      path: "/head",
      name: "Head",
      component: HeadView,
    },
  ],
});

export default router;
