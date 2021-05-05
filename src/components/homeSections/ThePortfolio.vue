<template lang="pug">
  section.container.is-widescreen.my-6
    .container.mb-4
      .content.px-4
        p.has-text-white.mb-0 JhxnUr
        h2.letter-spacing.is-size-2.has-text-white.m-0 Portfolio
    .container.is-widescreen.px-4
      .columns.is-desktop.is-multiline
        .column.is-one-third(v-for="project,i in projects[0]" :key="i")
          .card.effect.m-2.fondo.is-relative
            .card-image.is-relative
              figure.image.is-4by3
                img(:src="project.portada")
              //- .coverPhoto
              //-   img(src="@/assets/plastic/paquete3.png")
            .card-content
              .card-title.has-text-centered.is-is-size-4 {{ project.titulo }}
          .hoverEffect.has-background-white
            .content
              p ver proyecto 👉

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
        this.projects.push(data.project);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style scoped>
.fondo {
  background: #000;
}
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
  letter-spacing: 40px;
}
.effect:hover .hoverEffect {
  animation: cardEffect;
}
.hoverEffect {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
}
@keyframes cardEffect {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translatex(100%);
  }
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
