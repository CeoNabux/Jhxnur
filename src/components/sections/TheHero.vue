<template lang="pug">
  section.hero.is-halfheight.fondo
    .container.m-0.is-flex.px-4.is-relative
      .container
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
      .container
        figure.image.gradiente
          img(src="@/assets/photos/chico-bengala.png")
</template>

<style scoped>
.fondo {
  background: #000;
}
.letter-spacing {
  letter-spacing: 40px;
}
.gradiente {
  position: relative;
}
.gradiente:before {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0.04805672268907568) 32%
  );
}
@media only screen and (max-width: 764px) {
  .letter-spacing {
    letter-spacing: 25px;
  }
}
@media only screen and (max-width: 580px) {
  .gradiente {
    display: none;
  }
}
@media only screen and (max-width: 420px) {
  .letter-spacing {
    letter-spacing: 20px;
  }
}
</style>
