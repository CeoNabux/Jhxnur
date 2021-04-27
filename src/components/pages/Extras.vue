<template lang="pug">
  .container.is-widescreen.fondo
    .container
      b-carousel(:autoplay="true" with-carousel-list :indicator="false" :overlay="gallery" @click="switchGallery(true)")
        b-carousel-item(v-for="item, i in items" :key="i")
          figure.image
            img(:src="item.image")
        span.modal-close.is-large(v-if="gallery" @click="switchGallery(false)")
        template(#list="props")
          b-carousel-list(v-model="props.active" :data="items" :v-bind="al" @switch="props.switch($event, false)" as-indicator)
        template#overlay
          .has-text-centered.has-text-white Hello i am overlay

      p {{}}
      p {{}}
</template>

<script>
import storyapi from "@/utils/api.js";

export default {
  data: () => ({
    extra: [],
    gallery: false,
    al: {
      hasGrayScale: true,
      itemsToShow: 2,
      breakpoints: {
        768: {
          hasGrayScale: false,
          itemsToShow: 4,
        },
        960: {
          hasGrayScale: true,
          itemsToShow: 6,
        },
      },
    },
    items: [],
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
      this.getStory("extras", "draft");
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
        let i;
        data = await storyapi
          .get("cdn/stories/extras", +slug, {
            version: version,
          })
          .then((res) => {
            return {
              items: res.data.story.content.imagenes[i].filename,
              title: res.data.story.content.nombre,
              description: res.data.story.content.descripcion,
              precio: res.data.story.content.precio,
            };
          });
        this.items.push(data.items);
      } catch (e) {
        console.error(e);
      }
    },
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        document.documentElement.classList.add("is-clipped");
      } else {
        document.documentElement.classList.remove("is-clipped");
      }
    },
  },
};
</script>

<style scoped>
.fondo {
  background: #000;
}
</style>
