<template>
  <div class="container">
    <b-carousel
      :autoplay="false"
      with-carousel-list
      :indicator="false"
      :overlay="gallery"
      @click="switchGallery(true)"
    >
      <b-carousel-item v-for="(imagen, i) in data.imagenes" :key="i">
        <figure class="image">
          <img :src="imagen" />
        </figure>
      </b-carousel-item>
      <span
        v-if="gallery"
        @click="switchGallery(false)"
        class="modal-close is-large"
      />
      <template #list="props">
        <b-carousel-list
          v-model="props.active"
          :data="images"
          v-bind="al"
          @switch="props.switch($event, false)"
          as-indicator
        />
      </template>
      <template #overlay>
        <div class="has-text-centered has-text-white">Hello i'am overlay!</div>
      </template>
    </b-carousel>
  </div>
</template>

<script>
import storyapi from "@/utils/api.js";

export default {
  data: () => ({
    data: [],
    images: [],
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
      try {
        await storyapi
          .get("cdn/stories/" + slug + "/" + this.$route.params.id, {
            version: version,
          })
          .then((res) => {
            this.data = {
              name: res.data.story.content.nombre,
              price: res.data.story.content.precio,
              description: res.data.story.content.decripcion,
              imagenes: res.data.story.content.imagenes.map(
                (img) => img.filename
              ),
            };

            const images = res.data.story.content.imagenes;

            images.forEach(({ filename: image }) =>
              this.images.push({ image })
            );
          });
      } catch (e) {
        console.error("Tienes que volverlo a intentar");
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
