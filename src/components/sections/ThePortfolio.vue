<template lang="pug">
  section.container.is-widescreen
    .container.mb-4
      .content
        h2 JhxnUrb
        p Conoce mi trabajo artistico
    .container.is-widescreen.is-flex.is-flex-wrap-wrap.is-justify-content-center.is-relative
      .card.m-2.fondo(v-for="project, i in projects" :key="i")
        .card-image
          figure.image.is-5by6
            img(:src="project.image")
        .coverPhoto
          img(src="@/assets/plastic/plastic10.png")
        .card-content
          .card-title.has-text-centered {{ project.title }}

</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        image: require("@/assets/noBackgroundPhotos/chico-en-mesa.png"),
        title: "Titulo de ejemplo",
      },
      {
        image: require("@/assets/noBackgroundPhotos/chico-en-mesa.png"),
        title: "Titulo de ejemplo",
      },
      {
        image: require("@/assets/noBackgroundPhotos/chico-en-mesa.png"),
        title: "Titulo de ejemplo",
      },
      {
        image: require("@/assets/noBackgroundPhotos/chico-en-mesa.png"),
        title: "Titulo de ejemplo",
      },
    ],
  }),
};
</script>

<style scoped>
.fondo {
  background: #000;
}
.coverPhoto {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
</style>
