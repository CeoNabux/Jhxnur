<template lang="pug">
  header.navbar.is-fluid.has-background-black.p-0
    .navbar-brand
      a(href='/')
        img(src='')
    .navbar-menu
      icons(icon='menu')
</template>

<script>
import Icons from "@/components/global/Icons.vue";
export default {
  components: {
    Icons,
  },
};
</script>
