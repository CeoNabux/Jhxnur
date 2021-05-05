<template>
  <div class="container px-4">
    <div class="content mb-4">
      <h2 class="has-text-white is-size-2 is-size-4-mobile has-text-centered">
        {{ stories.nombre }}
      </h2>
    </div>
    <div class="columns is-dektop is-multiline my-6">
      <div class="column is-half">
        <b-carousel
          :autoplay="false"
          with-carousel-list
          :indicator="false"
          :overlay="gallery"
          @click="switchGallery(true)"
        >
          <b-carousel-item v-for="(img, i) in stories.imagenes" :key="i">
            <figure class="image">
              <img :src="img.image" />
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
              :data="stories.imagenes"
              v-bind="al"
              @switch="props.switch($event, false)"
              as-indicator
            />
          </template>
          <template #overlay>
            <div class="has-text-centered has-text-white">
              Hello i'am overlay!
            </div>
          </template>
        </b-carousel>
      </div>
      <div class="column auto">
        <div class="content">
          <p class="has-text-white is-size-3 has-text-centered">
            {{ stories.nombre }}
          </p>
        </div>
        <div class="content has-text-white">
          <rich-text-renderer
            :document="stories.descripcion"
            class="has-text-white"
          >
          </rich-text-renderer>
        </div>
        <div class="content">
          <p class="has-text-white is-size-5">$ {{ stories.precio }}</p>
        </div>
        <div class="block">
          <b-button @click="redirection" class="is-success">
            <icons name="whatsapp"></icons>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import storyapi from "@/utils/api.js";
import icons from "@/components/global/Icons.vue";

export default {
  components: {
    icons,
  },
  data: () => ({
    stories: {},
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
          .then(({ data }) => {
            const {
              nombre,
              precio,
              descripcion,
              imagenes,
            } = data.story.content;

            this.stories = {
              nombre,
              precio,
              descripcion,
              imagenes: [],
            };

            imagenes.forEach(({ filename: image }) =>
              this.stories.imagenes.push({ image })
            );

            return true;
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
    redirection() {
      window.open(
        `https://api.whatsapp.com/send?phone=+593993030840&text=Que%20tal%20Jhon,%20Que%20tal!%20Me%20interesa%20adquirir%20este%20asset%20${this.stories.nombre}`
      );
    },
  },
};
</script>

<style scoped>
.fondo {
  background: #000;
}
</style>
