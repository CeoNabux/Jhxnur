<template lang="pug">
  .container.is-widescreen
    .content
      h2.is-size-2.font-color Crea tu propio arte Urbano
    .container
      .columns.is-desktop.is-multiline
        .column.is-one-thirds.p-4
          extraPreview(:title="title" :price="price" :id="id" :image="image")
</template>

<script>
import storyapi from "@/utils/api.js";
import extraPreview from "@/components/extrasSections/extraPreview.vue";

export default {
  components: {
    extraPreview,
  },
  data: () => ({
    title: "title",
    price: 2.5,
    id: "/",
    image: "#",
  }),
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
        data = await storyapi.get("cdn/stories/" + slug, {
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
