<template lang="pug">
  section.container.is-widescreen.my-6
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
        .container
          figure.image
            img.imageBack(:scr="images.imageBack")
          figure.image
            img.imageFront(:scr="images.imageFront")


</template>

<script>
export default {
  data: () => ({
    images: {
      imageBack: require("@/assets/noBackgroundPhotos/chico-de-pie-escalera.png"),
      imageFront: require("@/assets/noBackgroundPhotos/foto-arrugada.png"),
    },
  }),
};
</script>

<style scoped>
.letter-spacing {
  letter-spacing: 12px;
}
.imageBack {
  width: 250px;
  height: 250px;
}
.imageFront {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
}
</style>
