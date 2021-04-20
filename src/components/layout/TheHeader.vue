<template lang="pug">
  //- SE ABRE EL HEADER
  nav.navbar.is-fluid.fondo.p-0.is-flex.justify-content-center
    //-CONTENEDOR CON LOS ELEMENTOS DEL HEADER
    .container.is-widescreen.is-flex.is-justify-content-space-between.is-align-items-center.px-3
      //-LOGO
      figure.image.is-96x96.is-flex.is-align-items-center
        img(src='@/assets/logo/logo-white.gif')

      //-MENU-BURGER
      .containaer.is-flex.is-flex-direction-row.is-align-items-center
        p.has-text-white.mr-4 MENU
        b-button.is-dark(outlined)
          .container.is-flex.is-justify-content-center.is-align-items-center
            icons.has-text-white(name='menu' color='white')
</template>

<script>
import Icons from "@/components/global/Icons.vue";
export default {
  components: {
    Icons,
  },
};
</script>

<style scoped>
.fondo {
  background: #000;
}
.btn {
  border: 1px solid white;
  border-radius: 4px;
}
</style>
