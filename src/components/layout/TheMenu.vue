<template lang="pug">
  .container.is-fluid.has-background-white.p-0.m-0.menu(:class="{'menu-hidden': !show}")
    .container.is-widescreen.py-4
      .container.is-flex.is-justify-content-flex-end.py-2
        b-button.is-dark(outlined @click="drawerAction")
          .container.is-flex.is-justify-content-center.is-align-items-center
            icons.has-text-black(name="close" color="black")
    section
      .content(v-for="(item, i) in items" :key="i")
        router-link(:to="item.link")
          vue-slick-carousel
            p.is-size-3(@click="drawerAction") {{ item.item }}

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Icons from "@/components/global/Icons.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  components: {
    Icons,
    VueSlickCarousel,
  },
  data: () => ({
    image: require("@/assets/img/wave.png"),
    items: [
      { item: "Extras", link: "/extras-index" },
      { item: "Portfolio", link: "/portfolio-index" },
      { item: "Me", link: "/me" },
    ],
  }),
  computed: {
    ...mapGetters("config_drawer", ["show"]),
  },
  methods: {
    ...mapActions("config_drawer", ["active"]),
    drawerAction() {
      if (this.show) {
        return this.active(false);
      }
      return this.active(true);
    },
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
