import { createRouter, createWebHistory } from "vue-router";
import HeadView from "@/views/HeadView.vue";
import HomeView from "@/views/HomeView.vue";
import CardPageView from "@/views/CardPageView.vue";
import ModalDialog from "@/components/ModalDialog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/flower",
      name: "Flowers",
      component: CardPageView,
    },
    {
      path: "/head",
      name: "Head",
      component: HeadView,
    },
    {
      path: "/flower/:id",
      name: "Author",
      component: ModalDialog,
    },
  ],
});

export default router;
