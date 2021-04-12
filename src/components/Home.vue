<template lang="pug">
  .container.is-fluid.fondo
    .container.if-fullhd
      the-hero
      the-extras
</template>

<script>
import TheHero from "@/components/sections/TheHero.vue";
import TheExtras from "@/components/sections/TheExtras.vue";

export default {
  components: {
    TheHero,
    TheExtras,
  },
};
</script>

<style scoped>
.fondo {
  background: #000;
}
</style>
