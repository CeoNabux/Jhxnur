<template lang="pug">
  router-link(:to="id")
    .card
      .card-image
        figure.image.is-1by1
          img(:src="image")
      .card-content
        .media
          .media-content
            p.title.is-size-5.has-text-black {{ title }}
            p.subtitle.is-6 {{ price }}
</template>

<script>
export default {
  name: "extraPreview",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
