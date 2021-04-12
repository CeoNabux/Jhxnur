<template lang="pug">
  section.container.is-widescreen.is-flex.is-flex-direction-column
    .content.has-text-white
      h2.has-text-white Extras
      p Con mucho esfuerzo y dedicacion si trabajo este proyecto con la finalidad de que expongas tu arte
    .container.p-2
      .columns
        .column.is-3(v-for='asset, i in assets' :key="i")
          .card.my-4.mx-2.is-flex.is-flex-direction-column.has-background-black
            .card-image
              Figure.image
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
    ],
  }),
};
</script>
