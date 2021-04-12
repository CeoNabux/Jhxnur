<template lang="pug">
  .container.is-widescree.has-background-black
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
