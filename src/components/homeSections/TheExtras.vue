<template lang="pug">
  section.container.is-widescreen.is-flex.is-flex-direction-column.is-relative
    .content.has-text-white
      h2.letter-spacing.is-size-2.has-text-white Extras
      p Con mucho esfuerzo y dedicacion se trabajó este proyecto con la finalidad de que expongas tu arte.
    .container.is-widescreen.m-0.p-2.is-relative.wrapper
      .is-flex.is-flex-direction-row.scroll-wrap
        .container(v-for='asset, i in assets' :key="i")
          .asset-wrap.my-4.mx-4.is-flex.is-flex-direction-column.fondo
            figure.image
              img(:src='asset.image')
            .coverPhoto
              img(src="@/assets/plastic/paquete1.png")
            .media
              .media-content
                h3.has-text-white.has-text-centered {{ asset.title }}
</template>

<script>
export default {
  data: () => ({
    assets: [
      {
        image: require("@/assets/photos/casa-ladrillos.png"),
        title: "Titulo de ejemplo",
      },
      {
        image: require("@/assets/photos/chica-en-techo.png"),
        title: "Titulo de ejemplo",
      },
      {
        image: require("@/assets/photos/chica-en-techo.png"),
        title: "Titulo de ejemplo",
      },
      {
        image: require("@/assets/photos/chica-en-techo.png"),
        title: "Titulo de ejemplo",
      },
      {
        image: require("@/assets/photos/chica-en-techo.png"),
        title: "Titulo de ejemplo",
      },
      {
        image: require("@/assets/photos/chica-en-techo.png"),
        title: "Titulo de ejemplo",
      },
    ],
  }),
};
</script>

<style scoped>
.fondo {
  background: #000 !important;
}
.coverPhoto {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.coverPhoto img {
  height: 100%;
}
.wrapper {
  overflow: hidden;
}
.scroll-wrap {
  overflow-x: scroll;
  padding-bottom: 18px;
  box-sizing: content-box;
}
/* ::-webkit-scrollbar {
  background: transparent;
} */
.asset-wrap {
  width: 250px;
}
.letter-spacing {
  letter-spacing: 40px;
}
@media only screen and (max-width: 764px) {
  .letter-spacing {
    letter-spacing: 25px;
  }
}
@media only screen and (max-width: 420px) {
  .letter-spacing {
    letter-spacing: 20px;
  }
}
</style>
