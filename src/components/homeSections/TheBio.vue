<template lang="pug">
  section.container.is-widescreen.my-6.px-2
    .columns.is-desktop.px-2.m-0
      .column
        .content.px-4
          p.is-size-4.has-text-white.mb-3 Hola, soy
          h2.letter-spacing.is-size-2.is-size-3-mobile.has-text-white.m-0 Jhon León
        .content.px-4
          p.is-size-4.has-text-white.mb-3 y me dedico a
          h2.letter-spacing.is-size-2.is-size-3-mobile.has-text-white.m-0 crar contenido digital
        .content.px-4
          p.is-size-4.has-text-white.mb-3 dirigido a
          h2.letter-spacing.is-size-2.is-size-3-mobile.has-text-white.m-0 empresas y marcas en redes sociales
        router-link.px-4(to="/me")
          b-button.is-warning(alternate) Quieres conocer más sobre
      .column.auto
        .container.px-4
          .contaner
            img.imageBack(scr="@/assets/noBackgroundPhotos/chico-de-pie-escalera.png")
          .container
            img.imageFront(scr="@/assets/noBackgroundPhotos/foto-arrugada.png")


</template>

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
