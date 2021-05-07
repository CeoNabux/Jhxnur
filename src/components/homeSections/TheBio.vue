<template lang="pug">
    section.container.is-widescreen.is-centered
      .columns.is-desktop.mx-0.my-4.py-4
        .column.p-0.mb-6.fondo
          .content.px-4.my-4
            p.is-size-4.has-text-white.mb-3 Hola, soy
            h2.letter-spacing.is-size-2.is-size-3-mobile.has-text-white.m-0 Jhon León
          .content.px-4
            p.is-size-4.has-text-white.mb-3 y me dedico a
            h2.letter-spacing.is-size-2.is-size-3-mobile.has-text-white.m-0 crar contenido digital
          .content.px-4
            p.is-size-4.has-text-white.mb-3 dirigido a
            h2.letter-spacing.is-size-2.is-size-3-mobile.has-text-white.m-0 empresas y marcas en redes sociales
          .is-flex.is-justify-content-center
            router-link.px-4(to="/me")
              b-button.is-warning(alternate) Quieres conocer más sobre
        .column
          .container.px-4.is-relative
            figure.image-container2
              img.imageBack
            figure.image-container
              img.imageFront


</template>

<style scoped>
.fondo {
  background-image: none;
  background-position: top right;
  background-repeat: no-repeat;
  background-size: contain;
}
.letter-spacing {
  letter-spacing: 12px;
}
.imageFront {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/noBackgroundPhotos/foto-arrugada.png");
  background-position: center;
  background-repeat: no-repeat;
  padding: 12px;
}
.image-container {
  width: 220px;
  height: 260px;
  margin: 0 auto;
  position: absolute;
  bottom: -10%;
  right: 15%;
}
.image-container2 {
  width: 350px;
  height: 420px;
  margin: 0 auto;
}
.imageBack {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/noBackgroundPhotos/chico-de-pie-escalera.png");
  background-origin: center;
  background-repeat: no-repeat;
  padding: 12px;
}

@media only screen and (max-width: 425px) {
  .image-container2 {
    width: 274px;
    padding: 6px;
  }
  .fondo {
    background-image: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .fondo {
    background-image: url("../../assets/img/blob.svg");
    background-position: top right;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
