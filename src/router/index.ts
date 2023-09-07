import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/ScrollSection.vue";
import HeadView from "@/views/HeadView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/head-view",
      name: "home",
      component: HeadView,
    },
  ],
});

export default router;
