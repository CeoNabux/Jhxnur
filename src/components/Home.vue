<template lang="pug">
  .container.is-fluid.fondo
    .container.if-fullhd
      the-hero
      the-extras
      the-portfolio
</template>

<script>
import TheHero from "@/components/sections/TheHero.vue";
import TheExtras from "@/components/sections/TheExtras.vue";
import ThePortfolio from "@/components/sections/ThePortfolio.vue";

export default {
  components: {
    TheHero,
    TheExtras,
    ThePortfolio,
  },
};
</script>

<style scoped>
.fondo {
  background: #000;
}
</style>
