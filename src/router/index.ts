import { createRouter, createWebHistory } from "vue-router";
import HeadView from "@/views/HeadView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HeadView,
    },
    {
      path: "/head",
      name: "Head",
      component: HeadView,
    },
  ],
});

export default router;
