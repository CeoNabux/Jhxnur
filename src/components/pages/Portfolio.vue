<template lang="pug">
  .container
    .container.is-widescreen.is-flex.px-4
      .columns.is-multiline
        .column.is-full(v-for="imagen, i in stories.imagenes" :key="i")
          figure.image
            img(v-lazy="imagen.image")
</template>

<script>
import storyapi from "@/utils/api.js";
import isLoading from "@/components/global/isLoading.vue";

export default {
  components: {
    isLoading,
  },
  data: () => ({
    stories: [],
  }),
  created() {
    // 4. Initialize the Storyblok Client Bridge to allow us to subscribe to events
    // from the editor itself.
    window.storyblok.init({
      accessToken: "zTjkyshEcSSUYrcrcXL9Hgtt",
    });
    window.storyblok.on("change", () => {
      // this will indicate to load the home story, exchange that with the full slug of your content
      // either it is the page URL or hardcoded as in the example below
      this.getStory("portfolio", "draft");
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory("portfolio", "draft");
      } else {
        this.getStory("portfolio", "published");
      }
    });
  },
  methods: {
    async getStory(slug, version) {
      try {
        await storyapi
          .get("cdn/stories/" + slug + "/" + this.$route.params.id, {
            version: version,
          })
          .then(({ data }) => {
            const { imagenes, portada } = data.story.content;

            this.stories = {
              portada,
              imagenes: [],
            };

            imagenes.forEach(({ filename: image }) =>
              this.stories.imagenes.push({ image })
            );

            return true;
          });
      } catch (e) {
        console.error("Tienes que volverlo a intentar");
      }
    },
  },
};
</script>
