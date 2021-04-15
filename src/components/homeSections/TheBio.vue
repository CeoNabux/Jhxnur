<template lang="pug">
  section.container.is-widescreen
    .columns.is-desktop
      .column.is-full-mobile.is-half-desktop
        .content
          p.is-size-4.has-text-white.mb-3 Hola, soy
          h2.letter-spacing.is-size-2.is-size-3-mobile.has-text-white.m-0 Jhon León
        .content
          p.is-size-4.has-text-white.mb-3 y me dedico a
          h2.letter-spacing.is-size-2.is-size-3-mobile.has-text-white.m-0 crar contenido digital
        .content
          p.is-size-4.has-text-white.mb-3 dirigido a
          h2.letter-spacing.is-size-2.is-size-3-mobile.has-text-white.m-0 empresas y marcas en redes sociales
      .column.auto
        .card-image
          figure.image
            img(:scr="imageBack")
        .imageFront
          img(:scr="imageFront")
</template>

<script>
export default {
  data: () => ({
    imageBack: require("@/assets/noBackgroundPhotos/chico-en-escalera.png"),
    imageFront: require("@/assets/noBackgroundPhotos/foto-arrugada.png"),
  }),
};
</script>

<style scoped>
.letter-spacing {
  letter-spacing: 12px;
}
.imageFront {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
}
</style>
