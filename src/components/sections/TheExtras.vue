<template lang="pug">
  section.container.is-widescreen.is-flex.is-flex-direction-column.is-relative
    .content.has-text-white
      h2.has-text-white Extras
      p Con mucho esfuerzo y dedicacion se trabajó este proyecto con la finalidad de que expongas tu arte.
    .container.is-widescreen.m-0.p-2.is-relative
      .is-flex.is-flex-direction-row.scroll-wrap
        .container(v-for='asset, i in assets' :key="i")
          .asset-wrap.my-4.mx-2.is-flex.is-flex-direction-column.fondo
            figure.image
              img(:src='asset.image')
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
    ],
  }),
};
</script>

<style scoped>
.fondo {
  background: #000 !important;
}
.scroll-wrap {
  overflow-x: scroll;
}
.asset-wrap {
  width: 250px;
}
</style>
