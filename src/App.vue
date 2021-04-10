<template lang="pug">
  #app
    the-header


    the-footer
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

#app {
  font-family: "Bebas Neue";
}
</style>
