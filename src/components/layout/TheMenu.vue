<template lang="pug">
  .container.is-fluid.has-background-white.p-0.m-0.menu(:class="{'menu-hidden': !show}")
    .container.is-widescreen.py-4.menuContainer.is-centered
      .container.is-flex.is-justify-content-flex-end.py-2
        b-button.is-dark(outlined @click="drawerAction")
          .container.is-flex.is-justify-content-center.is-align-items-center
            icons.has-text-black(name="close" color="black")
      .container.mt-6.p-3(@click="drawerAction")
        VueSlickCarousel(v-bind="settings")
          div(v-for="item, i in home")
            router-link(:to="item.link")
              p.is-size-1 {{ item.item }}
      .container.mt-6.p-3(@click="drawerAction")
        VueSlickCarousel(v-bind="settings")
          div(v-for="item, i in extras")
            router-link(:to="item.link")
              p.is-size-1 {{ item.item }}
      .container.mt-6.p-3(@click="drawerAction")
        VueSlickCarousel(v-bind="settings")
          div(v-for="item, i in portfolio")
            router-link(:to="item.link")
              p.is-size-1 {{ item.item }}
      .container.mt-6.p-3(@click="drawerAction")
        VueSlickCarousel(v-bind="settings")
          div(v-for="item, i in me")
            router-link(:to="item.link")
              p.is-size-1 {{ item.item }}
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
    settings: {
      arrows: false,
      infinite: true,
      slidesToShow: 5,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 1000,
    },
    home: [
      { item: "Home", link: "/" },
      { item: "Home", link: "/" },
      { item: "Home", link: "/" },
      { item: "Home", link: "/" },
      { item: "Home", link: "/" },
      { item: "Home", link: "/" },
    ],
    extras: [
      { item: "Extras", link: "/extras-index" },
      { item: "Extras", link: "/extras-index" },
      { item: "Extras", link: "/extras-index" },
      { item: "Extras", link: "/extras-index" },
      { item: "Extras", link: "/extras-index" },
      { item: "Extras", link: "/extras-index" },
    ],
    portfolio: [
      { item: "Portfolio", link: "/portfolio-index" },
      { item: "Portfolio", link: "/portfolio-index" },
      { item: "Portfolio", link: "/portfolio-index" },
      { item: "Portfolio", link: "/portfolio-index" },
      { item: "Portfolio", link: "/portfolio-index" },
      { item: "Portfolio", link: "/portfolio-index" },
    ],
    me: [
      { item: "Me", link: "/me" },
      { item: "Me", link: "/me" },
      { item: "Me", link: "/me" },
      { item: "Me", link: "/me" },
      { item: "Me", link: "/me" },
      { item: "Me", link: "/me" },
      { item: "Me", link: "/me" },
      { item: "Me", link: "/me" },
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
@font-face {
  font-family: "Mandalore";
  src: local("Mandalore"),
    url("../../assets/fonts/mandalore/mandalore.ttf") format("truetype");
}
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
  transition-duration: 200ms;
  transition-delay: 10ms;
}
.menuContainer {
  width: 100vw;
  height: 100vh;
}
.sliderContainer {
  width: 85vw;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-content: space-between;
}
.slider {
  margin: auto 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 90vw;
}
.slider-track {
  display: flex;
  margin: 5px 0;
  padding: 10px 5px;
  overflow: hidden;
}
.slider-track {
  animation-play-state: paused;
}
.slide {
  animation: marquee 5s linear infinite;
  width: 200px;
  margin: 0 50px;
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 5s ease;
}
.slide2 {
  animation: marquee2 5s linear infinite;
  width: 200px;
  margin: 0 50px;
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.slide3 {
  animation: marquee3 5s linear infinite;
  width: 200px;
  margin: 0 50px;
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.slide:hover {
  cursor: pointer;
  transform: scale(1.1);
  background: white;
}
p {
  font-family: "Mandalore", cursive;
  font-size: 3rem;
  color: black;
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translate(-50%);
  }
}
@keyframes marquee2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translate(-50%);
  }
}
@keyframes marquee3 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translate(-50%);
  }
}
</style>
