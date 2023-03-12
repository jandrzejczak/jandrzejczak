import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/ScrollSection.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
