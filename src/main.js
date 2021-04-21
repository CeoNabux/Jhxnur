import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueRouter from "vue-router";
import routes from "@/routes.js";
import store from "@/store.js";
import StoryblokVue from "storyblok-vue";

Vue.use(Buefy);

Vue.use(VueRouter);

Vue.use(StoryblokVue);

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
