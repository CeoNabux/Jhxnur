<template lang="pug">
  #app
    .container.is-fluid.fondo.is-flex.is-justify-content-space-between.is-flex-direction-column.px-0
      the-header

      the-menu

      router-view.px-0

      the-footer
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheMenu from "@/components/layout/TheMenu.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMenu,
    TheFooter,
  },
  computed: {
    ...mapGetters("config_drawer", ["show"]),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

#app {
  font-family: "Bebas Neue";
  background: #000;
}
.mb-auto {
  margin-bottom: 100vh;
}
.fondo {
  background: #000;
}
</style>
