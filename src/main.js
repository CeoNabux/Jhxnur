import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import { VueMdi, library } from "vue-mdi";
import { mdiAccount } from "@mdi/js";
import "vue-mdi/dist/mdi.css";

library.add({ mdiAccount });

Vue.usecomponent("vue-mdi", VueMdi);

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
