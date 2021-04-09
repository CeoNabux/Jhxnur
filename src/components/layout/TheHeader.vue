<template lang="pug">
  nav.navbar.is-fluid.has-background-black.p-0.is-flex.justify-content
    .container.is-widescreen
      .navbar-brand.ml-2
        a(href='/')
          figure.image.is-64x64.is-flex.justify-content.aligm-item
            img(src='@/assets/logo/logo-white.svg')
      .navbar-menu.mr-2
        .navbar-end
          .navbar-item
            p MENU
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
