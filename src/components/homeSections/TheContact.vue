<template lang="pug">
  .container.is-widescreen.mt-6
    .container.is-flex.is-flex-direction-column
      .content
        h2.has-text-white.letter-spacing.is-size-2.is-size-3-mobile ¿Tienes un proyecto en mente?
        p.has-text-white.letter-spacing.is-size-5 Cuéntame qué construiremos
      .form
      .container.is-flex
        .columns
          .column
            figure.image.is-4by3
              img(src="@/assets/noBackgroundPhotos/chico-en-escalera.png")
          .column
            .columns
              .column
                a(href="")
                  icons.has-text-white(name="facebook")
</template>

<script>
import Icons from "@/components/global/Icons.vue";

export default {
  components: {
    Icons,
  },
};
</script>

<style scoped>
.letter-spacing {
  letter-spacing: 5px;
}
</style>
