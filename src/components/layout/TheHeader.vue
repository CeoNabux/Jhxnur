<template lang="pug">
  //- SE ABRE EL HEADER
  nav.navbar.is-fluid.has-background-black.p-0.is-flex.justify-content-center
    //-CONTENEDOR CON LOS ELEMENTOS DEL HEADER
    .container.is-widescreen.is-flex.is-justify-content-space-between.is-align-items-center.px-3
      //-LOGO
      figure.image.is-64x64.is-flex.is-align-items-center
        img(src='@/assets/logo/logo-white.svg')

      //-MENU-BURGER
      .is-flex.is-align-items-center
        p.has-text-white.m-2 MENU
        figure.is-image.is-24x24.is-flex.is-align-items-center.has-text-white
          icons(name='menu' color='white')
</template>

<script>
import Icons from "@/components/global/Icons.vue";
export default {
  components: {
    Icons,
  },
};
</script>
