<template lang="pug">
  .container.is-widescreen
    .content
      h2.is-size-2.font-color Crea tu propio arte Urbano
    .container
      .columns.is-desktop.is-multiline
        .column.is-one-thirds.p-4
          router-link(to="/")
            .card
              .card-image
                figure.image.is-1by1
                  img(src="#")
              .card-content
                .media
                  .media-content
                    p.title.is-size-5.has-text-black Titulo de ejemplo
                    p.subtitle.is-6 precio del producto
</template>

<style scoped>
.font-color {
  background: -webkit-linear-gradient(
    270deg,
    rgba(254, 237, 44, 1) 3%,
    rgba(156, 65, 8, 1) 83%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: orange;
}
</style>

<script>
import storyapi from "@/utils/api.js";

export default {
  created() {
    window.storyblok.init({
      accessToken: process.env.VUE_APP_TOKEN,
    });
    window.storyblok.on("change", () => {
      if (window.storyblok.inInEditor()) {
        this.getStory("extras", "draft");
      } else {
        this.getStory("extras", "published");
      }
    });
  },
  methods: {
    async getStory(slug, version) {
      let data;
      try {
        data = await storyapi.get("cdn/stories/extras" + slug, {
          version: version,
        });
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
