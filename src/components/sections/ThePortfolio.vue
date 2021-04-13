<template lang="pug">
  section.container.is-widescreen
    .container.mb-4
      .content
        h2 JhxnUrb
        p Conoce mi trabajo artistico
    .container.is-widescreen
      .columns.is-desktop
        .column.is-full-mobile.is-one-thirds-tablet.is-half-desktop(v-for="project, i in projects" :key="i")
          figure.image.is-3by4
            img(:src="project.image")
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
        image: require("@/assets/noBackgroundPhotos/chica-de-cerca.png"),
        title: "Titulo de ejemplo",
      },
    ],
  }),
};
</script>
