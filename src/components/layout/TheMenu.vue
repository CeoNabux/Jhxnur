<template lang="pug">
  .container.has-background-white
    .container.menu(:class="{'menu-hidden': show}")

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
  transform: translateX(-100%);
}
.menu {
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
