import Me from "@/components/pages/Me.vue";
import Home from "@/components/Home.vue";
import Portfolio from "@/components/pages/Portfolio.vue";
import Extras from "@/components/pages/Extras.vue";

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
    path: "/extras",
    component: Extras,
    name: "extras",
  },
  {
    path: "/extras/:id",
    component: Extras,
    name: "extras",
  },
  {
    path: "/me",
    component: Me,
    name: "me",
  },
];

export default routes;
