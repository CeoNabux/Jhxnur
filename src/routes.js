import Me from "@/components/pages/Me.vue";
import Home from "@/components/Home.vue";
import Portfolio from "@/components/pages/Portfolio.vue";
import PortfolioIndex from "@/components/pages/PortfolioIndex.vue";
import ExtrasIndex from "@/components/pages/ExtrasIndex.vue";
import Extras from "@/components/pages/Extras.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/portfolio-index",
    component: PortfolioIndex,
    name: "portfolio-index",
  },
  {
    path: "/portfolio/:id",
    component: Portfolio,
    name: "portfolio",
  },
  {
    path: "/extras-index",
    component: ExtrasIndex,
    name: "extras-index",
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
