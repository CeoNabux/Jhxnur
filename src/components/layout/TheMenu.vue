<template lang="pug">
  .container.is-fluid.has-background-white.p-0.m-0.menu(:class="{'menu-hidden': !show}")
    .container.is-widescreen.py-4.menuContainer
      .container.is-flex.is-justify-content-flex-end.py-2
        b-button.is-dark(outlined @click="drawerAction")
          .container.is-flex.is-justify-content-center.is-align-items-center
            icons.has-text-black(name="close" color="black")
      section
        vue-slick-carousel
          .content(v-for="(item, i) in extras" :key="i")
            router-link(:to="item.link")
              p.is-size-3(@click="drawerAction") {{ item.item }}
        vue-slick-carousel
          .content(v-for="(item, i) in portfolio" :key="i")
            router-link(:to="item.link")
              p.is-size-3(@click="drawerAction") {{ item.item }}
        vue-slick-carousel
          .content(v-for="(item, i) in me" :key="i")
            router-link(:to="item.link")
              p.is-size-3(@click="drawerAction") {{ item.item }}
        vue-slick-carousel
          .content(v-for="(item, i) in home" :key="i")
            router-link(:to="item.link")
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
    home: [
      { item: "Home", link: "/" },
      { item: "Home", link: "/" },
      { item: "Home", link: "/" },
      { item: "Home", link: "/" },
    ],
    portfolio: [
      { item: "Portfolio", link: "/portfolio-index" },
      { item: "Portfolio", link: "/portfolio-index" },
      { item: "Portfolio", link: "/portfolio-index" },
      { item: "Portfolio", link: "/portfolio-index" },
    ],
    extras: [
      { item: "Extras", link: "/extras-index" },
      { item: "Extras", link: "/extras-index" },
      { item: "Extras", link: "/extras-index" },
      { item: "Extras", link: "/extras-index" },
    ],
    me: [
      { item: "Me", link: "/me" },
      { item: "Me", link: "/me" },
      { item: "Me", link: "/me" },
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
.menuContainer {
  width: 100vw;
  height: 100vh;
}
</style>
