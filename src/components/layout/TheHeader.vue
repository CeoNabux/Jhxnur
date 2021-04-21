<template lang="pug">
  //- SE ABRE EL HEADER
  nav.navbar.is-fluid.fondo.p-0.is-flex.justify-content-center.px-4
    //-CONTENEDOR CON LOS ELEMENTOS DEL HEADER
    .container.is-widescreen.is-flex.is-justify-content-space-between.is-align-items-center.px-3
      //-LOGO
      .navbar-brand
        router-link(to="/")
          figure.image.is-96x96.is-flex.is-align-items-center
            img(src='@/assets/logo/logo-white.gif')

      //-MENU-BURGER
      .containaer.is-flex.is-flex-direction-row.is-align-items-center
        p.has-text-white.mr-4 MENU
        b-button.is-dark(outlined @click="drawerAction")
          .container.is-flex.is-justify-content-center.is-align-items-center
            icons.has-text-white(name="menu" color='white')
</template>

<script>
import Icons from "@/components/global/Icons.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Icons,
  },
  computed: {
    ...mapGetters("config_drawer", ["show"]),
  },
  methods: {
    ...mapActions("config_drawer", ["active"]),
    drawerAction() {
      if (this.show) {
        return this.active(false);
      }
      return this.active(true);
    },
  },
};
</script>

<style scoped>
.fondo {
  background: #000;
}
</style>
