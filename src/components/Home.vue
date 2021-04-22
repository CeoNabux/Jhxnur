<template lang="pug">
  .container.is-fluid.fondo
    .container.is-fluid.p-0
      the-hero
      the-extras
      the-portfolio
      the-bio
      the-contact
</template>

<script>
import TheHero from "@/components/homeSections/TheHero.vue";
import TheExtras from "@/components/homeSections/TheExtras.vue";
import ThePortfolio from "@/components/homeSections/ThePortfolio.vue";
import TheBio from "@/components/homeSections/TheBio.vue";
import TheContact from "@/components/homeSections/TheContact.vue";

export default {
  components: {
    TheHero,
    TheExtras,
    ThePortfolio,
    TheBio,
    TheContact,
  },
};
</script>

<style scoped>
.fondo {
  background: #000;
}
</style>
