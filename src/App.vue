<template lang="pug">
  #app
    .fondo.aver.is-flex.is-flex-direction-column.is-justify-content-space-between.px-0.is-relative
      the-header

      the-menu

      router-view.px-0

      the-footer.margin

      the-cursor
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheMenu from "@/components/layout/TheMenu.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import { mapGetters } from "vuex";
import TheCursor from "@/components/TheCursor.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMenu,
    TheFooter,
    TheCursor,
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
* {
  box-sizing: border-box;
}
.margin {
  margin-top: auto;
}
.aver {
  min-height: 100vh;
}
.fondo {
  background: #000;
}
</style>
