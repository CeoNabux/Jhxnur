<template lang="pug">
  .container.is-fluid.has-background-white.m-0.menu(:class="{'menu-hidden': !show}")
    .container
      p Esto es un trabajo increible

</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("config_drawer", ["show"]),
  },
};
</script>

<style scoped>
.menu-hidden {
  transform: translateX(100%);
}
.menu {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition-duration: 500ms;
  transition-delay: 100ms;
}
</style>
