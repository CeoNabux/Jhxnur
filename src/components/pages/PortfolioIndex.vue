<template lang="pug">
  .container.is-widescreen
    .content
      h2.is-size-2.font-color conoce mi portafolio
    .container
      .columns.is-desktop.is-multiline(v-for="project,i in projects[0]" :key="i")
        .column.is-one-thirds.p-4
          projectPreview(:id="project.id" :coverPhoto="project.portada" :client="project.cliente" :logo="project.logo" :title="project.titulo")
</template>

<script>
import storyapi from "@/utils/api.js";
import projectPreview from "@/components/portfolioSections/projectPreview.vue";

export default {
  components: {
    projectPreview,
  },
  data: () => ({
    projects: [],
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
      let data;
      try {
        data = await storyapi
          .get("cdn/stories/", {
            starts_with: "portfolio",
            version: version,
          })
          .then((res) => {
            console.log(res);
            return {
              project: res.data.stories.map((pt) => {
                console.log(pt);
                return {
                  id: pt.slug,
                  titulo: pt.content.titulo,
                  cliente: pt.content.cliente,
                  logo: pt.content.logo.filename,
                  portada: pt.content.portada.filename,
                };
              }),
            };
          });
        console.log(data);
        console.log(data.project.id);
        this.projects.push(data.project);
        console.log(this.projects);
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
