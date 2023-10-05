import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import HeadView from "@/views/HeadView.vue";
import HomeView from "@/views/HomeView.vue";
import CardPageView from "@/views/CardPageView.vue";
import BuildingExploreView from "@/views/BuildingExploreView.vue";
import CityExploreView from "@/views/CityExploreView.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import HelloMatyldzia from "@/views/HelloMatyldzia.vue";
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
      path: "/building/:floor?/:apartment?",
      name: "ExploreBuilding",
      component: BuildingExploreView,
    },
    {
      path: "/city/",
      name: "Explore City",
      component: CityExploreView,
    },
    {
      path: "/hello_matyldzia/",
      name: "Hello Matyldzia",
      component: HelloMatyldzia,
    },
  ],
});

export default router;
