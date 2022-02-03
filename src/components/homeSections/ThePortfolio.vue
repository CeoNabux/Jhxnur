<template lang="pug">
  section.container.is-fullhd.is-flex.is-justify-content-center.my-6.mx-0.is-fluid.px-0
    .container.is-fullhd.mx-0
      .container.is-fullhd.is-flex.is-justify-content-center.mb-6.mx-0
        .content
          p.has-text-white.mb-2.px-4 JhxnUr
          h2.letter-spacing.is-size-2.has-text-white.px-4.m-0 Portfolio
      .container.px-4.is-centered
        .columns.is-desktop.is-multiline.is-centered
          .column.p-1.is-full-mobile.is-half-dektop.is-half-widescreen(v-if="i < 4" v-for="project,i in projects[0]" :key="i")
            router-link(:to="`portfolio/${project.id}`")
              .card.card-effect.m-2.is-relative
                .card-image.is-relative
                  figure.image.is-4by3
                    img(:src="project.portada")
                  //- .coverPhoto
                  //-   img(src="@/assets/plastic/paquete3.png")
                .card-content
                  .card-title.has-text-centered.is-is-size-4 {{ project.titulo }}

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
      accessToken: process.env.VUE_APP_STORYBLOK,
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
            return {
              project: res.data.stories.map((pt) => {
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
        this.projects.push(data.project);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style scoped>
.coverPhoto {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.coverPhoto img {
  height: 100%;
}
.letter-spacing {
  letter-spacing: 32px;
}
.card {
  transition: 0.5s ease-in-out;
}
.card-effect:hover {
  transform: translateY(20px);
}
.card:before {
  content: "  Conoce mas ---->";
  color: rgb(207, 135, 0);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    #000000,
    #3b3b3b,
    #777777,
    #b9b9b9,
    #ffffff
  );
  z-index: 3;
  transition: 0.5s all ease-in-out;
  opacity: 0;
}
.card-effect:hover:before {
  opacity: 0.5;
}

@media only screen and (max-width: 764px) {
  .letter-spacing {
    letter-spacing: 25px;
  }
}
@media only screen and (max-width: 420px) {
  .letter-spacing {
    letter-spacing: 12px;
  }
}
</style>
