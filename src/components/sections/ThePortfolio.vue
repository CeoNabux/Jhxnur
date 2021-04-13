<template lang="pug">
  section.container.is-widescreen
    .container
      .content
        h2 JhxnUrb
        p Conoce mi trabajo artistico
    .container
      .column.is-desktop(v-for="project, i in projects" :key="i")
        .column.is-2
          .container
            figure.image.is-1by1
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
    ],
  }),
};
</script>
