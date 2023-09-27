import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import HeadView from "@/views/HeadView.vue";
import HomeView from "@/views/HomeView.vue";
import CardPageView from "@/views/CardPageView.vue";
import BuildingExploreView from "@/views/BuildingExploreView.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import { viewTransitionHelper } from "@/utils";

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
    {
      path: "/building/",
      name: "Explore Building",
      component: BuildingExploreView,
    },
  ],
});

export default router;
