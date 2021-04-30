<template lang="pug">
  .container.is-widescreen
    .content
      h2.is-size-2.font-color Crea tu propio arte Urbano
    .container
      .columns.is-desktop.is-multiline
        .column.is-one-thirds.p-4(v-for="extra, i in extras[0]" :key="i")
          extraPreview(:title="extra.title" :price="extra.precio" :id="extra.id" :image="extra.image")
</template>

<script>
import storyapi from "@/utils/api.js";
import extraPreview from "@/components/extrasSections/extraPreview.vue";

export default {
  components: {
    extraPreview,
  },
  data: () => ({
    extras: [],
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
      this.getStory("extras-index", "draft");
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
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
        data = await storyapi
          .get("cdn/stories/", {
            starts_with: "extras/",
            version: version,
          })
          .then((res) => {
            console.log(res)
            return {
              extras: res.data.stories.map((ex) => {
                return {
                  id: ex.slug,
                  title: ex.content.nombre,
                  precio: ex.content.precio,
                  image: ex.content.portada.filename,
                };
              }),
            };
          });
        this.extras.push(data.extras);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

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
