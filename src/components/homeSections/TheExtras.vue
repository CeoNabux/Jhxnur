<template lang="pug">
  section.container.is-widescreen.is-flex.is-flex-direction-column.is-relative.my-6
    .container.is-fullhd.mx-0
      .container.is-fullhd.has-text-centered.mb-6.mx-0
        h2.letter-spacing.is-size-2.has-text-white Extras
        p.has-text-white Con mucho esfuerzo y dedicacion se trabajó este proyecto con la finalidad de que expongas tu arte.
    .container.is-widescreen.m-0.p-2.is-relative.wrapper
      .is-flex.is-flex-direction-row.scroll-wrap
        .is-container.is-flex.is-flex-direction-column.is-justify-content-space-between(v-if="i < 5" v-for="extra, i in extras[0]" :key="i")
          router-link(:to="`extras/${extra.id}`")
            .card.fondo
              .card-image
                .asset-wrap.my-4.mx-4.is-flex.is-flex-direction-column.fondo
                  .is-relative
                    figure.image.is-4by3
                      img(:src='extra.image')
                    .coverPhoto
                      img(src="@/assets/plastic/paquete1.png")
              .card-content
                .media
                  .media-content
                    h3.has-text-white.has-text-centered {{ extra.title }}
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
.fondo {
  background: #000 !important;
}
.coverPhoto {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100%;
}
.wrapper {
  overflow: hidden;
}
.scroll-wrap {
  overflow-x: scroll;
  padding-bottom: 18px;
  box-sizing: content-box;
}
.asset-wrap {
  width: 250px;
}
.letter-spacing {
  letter-spacing: 32px;
}
@media only screen and (max-width: 764px) {
  .letter-spacing {
    letter-spacing: 24px;
  }
}
@media only screen and (max-width: 420px) {
  .letter-spacing {
    letter-spacing: 16px;
  }
}
@media only screen and (min-width: 1440px) {
  ::-webkit-scrollbar {
    background: transparent;
  }
}
</style>
