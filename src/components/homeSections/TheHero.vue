<template lang="pug">
  section.is-large.fondo.my-4.is-flex.is-justify-content-center
    .container.is-widescreen.is-relative.py-2.mb-4.is-flex.m-0
      .is-flex.is-align-items-start.is-flex-direction-column.is-justify-content-center
        .is-flex.is-align-items-start
          .content.has-text-white.m-0
            p.p-2.is-size-7 Jhon león
        .is-flex
          .content.is-fluid.has-text-white
            h1
              .p-2.letter-spacing.has-text-white.is-size-1.is-size-2.mobile.m-0 CONTENT
              br
              .p-2.letter-spacing.has-text-white.is-size-1.is-size-2.mobile CREATOR
        .is-flex
          .content.has-text-white
            p.p-2.is-size-3.is-size-4-mobile.m-0 Amante al arte
            p.p-2.is-size-3.is-size-4-mobile materialicemos tus ideas
        .is-flex
          .content.has-text-warning.mt-4
            p.p-2.is-size-6.is-is-size-7-mobile Haz click, arratra y exprésate
      .container.p-0
        img.hero-image(src="@/assets/photos/chico-bengala.png")
</template>

<style scoped>
.hero-image {
  mask-image: linear-gradient(to right, transparent 12%, black 75%);
  width: 100%;
}
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
    rgba(0, 0, 0, 1) 8%,
    rgba(255, 255, 255, 0.04805672268907568) 42%
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
