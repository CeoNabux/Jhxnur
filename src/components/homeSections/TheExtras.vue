<template lang="pug">
  section.container.is-widescreen.is-flex.is-flex-direction-column.is-relative.my-6
    .content.has-text-white.px-4
      h2.letter-spacing.is-size-2.has-text-white Extras
      p Con mucho esfuerzo y dedicacion se trabajó este proyecto con la finalidad de que expongas tu arte.
    .container.is-widescreen.m-0.p-2.is-relative.wrapper
      .is-flex.is-flex-direction-row.scroll-wrap
        .container(v-for="extra, i in extras[0]" :key="i")
          .asset-wrap.my-4.mx-4.is-flex.is-flex-direction-column.fondo
            figure.image
              img(:src='extra.image')
            .coverPhoto
              img(src="@/assets/plastic/paquete1.png")
            .media
              .media-content
                h3.has-text-white.has-text-centered {{ extra.nombre }}
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
  height: 100%;
}
.coverPhoto img {
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
/* ::-webkit-scrollbar {
  background: transparent;
} */
.asset-wrap {
  width: 250px;
}
.letter-spacing {
  letter-spacing: 40px;
}
@media only screen and (max-width: 764px) {
  .letter-spacing {
    letter-spacing: 25px;
  }
}
@media only screen and (max-width: 420px) {
  .letter-spacing {
    letter-spacing: 20px;
  }
}
</style>
