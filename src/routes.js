import Me from "@/components/pages/Me.vue";
import Home from "@/components/Home.vue";
import Portfolio from "@/components/pages/Portfolio.vue";
import ExtrasIndex from "@/components/pages/ExtrasIndex.vue";
import Extra from "@/components/pages/Extra.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/portfolio",
    component: Portfolio,
    name: "portfolio",
  },
  {
    path: "/extras-index",
    component: ExtrasIndex,
    name: "extras-index",
  },
  {
    path: "/extra/:id",
    component: Extra,
    name: "extra",
  },
  {
    path: "/me",
    component: Me,
    name: "me",
  },
];

export default routes;
