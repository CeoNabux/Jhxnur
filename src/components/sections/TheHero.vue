<template lang="pug">
  section.hero.is-halfheight.has-background-black.is-flex.is-justify-content-center
    .container.is-flex.is-justify-content-between.flex-wrap.is-align-items-center.px-4
      .container.py-6.is-half
        .content.has-text-white.m-0
          p.is-size-7 Jhon león
        .content.is-fluid.has-text-white
          h1
            .letter-spacing.has-text-white.is-size-1.is-size-2.mobile.m-0 CONTENT
            br
            .letter-spacing.has-text-white.is-size-1.is-size-2.mobile CREATOR
        .content.has-text-white
          p.is-size-3.is-size-4-mobile.m-0 Amante al arte
          p.is-size-3.is-size-4-mobile materialicemos tus ideas
        .content.has-text-warning.mt-4
          p.is-size-6.is-is-size-7-mobile Haz click, arratra y exprésate
      .container.is-half.pt-4
        .gradiente
          figure.image.is-full
            img(src='@/assets/noBackgroundPhotos/chico-de-espaldas.png')

</template>

<style scoped>
.letter-spacing {
  letter-spacing: 40px;
}
.gradiente {
  position: relative;
  z-index: 5;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0.04805672268907568) 50%
  );
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
  .gradiente {
    display: none;
  }
  .fondo {
    background-image: url("../../assets/noBackgroundPhotos/chico-en-mesa.png");
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
