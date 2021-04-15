<template lang="pug">
  .container.is-fluid.fondo
    .container.if-fullhd
      the-hero
      the-extras
      the-portfolio
      the-bio
</template>

<script>
import TheHero from "@/components/homeSections/TheHero.vue";
import TheExtras from "@/components/homeSections/TheExtras.vue";
import ThePortfolio from "@/components/homeSections/ThePortfolio.vue";
import TheBio from "@/components/homeSections/TheBio.vue";

export default {
  components: {
    TheHero,
    TheExtras,
    ThePortfolio,
    TheBio,
  },
};
</script>

<style scoped>
.fondo {
  background: #000;
}
</style>
