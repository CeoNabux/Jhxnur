import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueRouter from "vue-router";
import routes from "@/routes.js";
import store from "@/store.js";
import StoryblokVue from "storyblok-vue";
import VueLazyLoad from "vue-lazyload";
import VueCompositionApi from "@vue/composition-api";
import VueRichTextRenderer from "@marvr/storyblok-rich-text-vue-renderer";
import Extras from "@/components/pages/Extras.vue";

Vue.use(VueCompositionApi);

Vue.use(VueRichTextRenderer, {
  resolvers: {
    Extras,
  },
});

Vue.use(VueLazyLoad);

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
