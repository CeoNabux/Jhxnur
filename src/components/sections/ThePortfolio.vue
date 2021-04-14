<template lang="pug">
  section.container.is-widescreen.my-6
    .container.mb-4
      .content
        p.has-text-white.mb-0 JhxnUr
        h2.letter-spacing.is-size-2.has-text-white.m-0 Portfolio
    .container.is-widescreen.is-flex.is-flex-wrap-wrap.is-justify-content-center.is-relative
      .container.m-2.fondo(v-for="project, i in projects" :key="i")
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
        image: require("@/assets/noBackgroundPhotos/chica-de-cerca.png"),
        title: "Titulo de ejemplo",
      },
      {
        image: require("@/assets/noBackgroundPhotos/chica-de-negro.png"),
        title: "Titulo de ejemplo",
      },
      {
        image: require("@/assets/noBackgroundPhotos/chico-agachado.png"),
        title: "Titulo de ejemplo",
      },
      {
        image: require("@/assets/noBackgroundPhotos/chico-en-escalera.png"),
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
.coverPhoto img {
  height: 100%;
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
    letter-spacing: 12px;
  }
}
</style>
