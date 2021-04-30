<template lang="pug">
  .container.is-widescreen
    .content
      h2.is-size-2.font-color conoce mi portafolio
    .container
      .columns.is-desktop.is-multiline(v-for="project,i in projects" :key="i")
        .column.is-one-thirds.p-4
          router-link(:to="project.id")
            .card
              .card-image
                figure.image.is-1by1
                  img(:src="project.portada")
              .card-content
                .media
                  .media-left
                    figure.image.is-48x-48
                      img(:src="project.logo")
                  .media-content
                    p.title.is-size-5.has-text-black {{ project.titulo }}
                    p.subtitle.is-6 {{ project.cliente }}
</template>

<script>
import storyapi from "@/utils/api.js";

export default {
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
              project: res.data.stories.map((port) => {
                console.log(port);
                return {
                  id: port.slug,
                  titulo: port.content.titulo,
                  cliente: port.content.cliente,
                  logo: port.content.logo.filename,
                  portada: port.content.portada.filename,
                };
              }),
            };
          });
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
