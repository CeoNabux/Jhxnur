<template lang="pug">
  .container.is-fluid.has-background-white.p-0.m-0.menu(:class="{'menu-hidden': !show}")
    .container.is-widescreen
      .navbar
        .navbar-menu.px-4.py-5
          .navbar-end
            .navbar-item
              p.has-text-black.mr-1 close
            .navbar-item
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
      { item: "Extras", link: "/extras" },
      { item: "Portfolio", link: "/portfolio" },
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
.waves-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgb(129, 129, 129);
}
section .wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background-size: 100px 1000px;
}
.wave1 {
  animation: waving 30s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;
  left: 0;
}
.imgClass {
  background-repeat: repeat-y;
}

@keyframes waving {
  0% {
    transform: translate(0);
  }
  100% {
    transform: translateY(1000px);
  }
}

.wave2 {
  animation: waving2 15s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -5;
  left: 10px;
}

@keyframes waving2 {
  0% {
    transform: translate(0);
  }
  100% {
    transform: translateY(-1000px);
  }
}

.wave3 {
  animation: waving 20s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: -2s;
  left: 15px;
}

.wave4 {
  animation: waving2 5s linear infinite;
  z-index: 997;
  opacity: 0.7;
  animation-delay: -5;
  left: 20px;
}
.wave5 {
  animation: waving 10s linear infinite;
  z-index: 996;
  opacity: 0.6;
  animation-delay: -5;
  left: 20px;
}
</style>
