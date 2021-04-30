<template lang="pug">
  router-link(:to="`portfolio/${id}`")
    .card
      .card-image
        figure.image.is-1by1
          img(:src="coverPhoto")
      .card-content
        .media
          .media-left
            figure.image.is-48x48
              img(:src="logo")
          .media-content
            p.title.is-size-5.has-text-black {{ title }}
            p.subtitle.is-6 {{ client }}
</template>

<script>
export default {
  name: "projectPreview",
  props: {
    title: {
      type: String,
      require: true,
    },
    client: {
      type: String,
      require: true,
    },
    coverPhoto: {
      type: String,
      require: true,
    },
    id: {
      type: String,
      require: true,
    },
    logo: {
      type: String,
      require: true,
    },
  },
};
</script>
