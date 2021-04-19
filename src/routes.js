import Me from "@/components/pages/Me.vue";
import Home from "@/components/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/me",
    component: Me,
    name: "me",
  },
];

export default routes;
