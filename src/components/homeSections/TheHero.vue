<template lang="pug">
  section.is-fullhd.mb-6
    .container.is-fullhd.fondo.is-centered.is-flex
      .content-container.is-flex.is-align-items-center
        .hero-body.is-flex.is-flex-direction-column.py-2
          .block.content
            p.is-size-4.has-text-white Jhon león
          .block.content
            h1
              .letter-spacing.has-text-white.is-size-hero.is-size-2.mobile.m-0 CONTENT
              br
              .letter-spacing.has-text-white.is-size-hero.is-size-2.mobile CREATOR
          .block.content
            p.is-size-3.is-size-4-mobile.m-0.has-text-white.subtitle Amante al arte
            p.is-size-3.is-size-4-mobile.has-text-white.subtitle materialicemos tus ideas
      .image-container
</template>

<style scoped>
.letter-spacing {
  letter-spacing: 33px;
}
.fondo {
  clip-path: polygon(0 19%, 100% 6%, 100% 94%, 0 91%);
  background-image: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.2413340336134454) 0%,
      rgba(0, 0, 0, 0.9948354341736695) 100%
    ),
    url("../../assets/photos/moto-no-exif-min.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.is-size-hero {
  font-size: 3.25rem;
}
.content-container {
  position: relative;
  top: 0;
  left: 0;
  z-index: 8;
  height: 500px;
}

@media only screen and (max-width: 764px) {
  .letter-spacing {
    letter-spacing: 25px;
  }
  .hero-image {
    display: none;
  }
}
@media only screen and (max-width: 580px) {
  .hero-image {
    display: none;
  }
}
@media only screen and (min-width: 321px) {
  .content-container {
    margin: 0 0 0 3rem;
  }
}
@media only screen and (max-width: 420px) {
  .letter-spacing {
    letter-spacing: 20px;
  }
  .content-container {
    margin: 0;
  }
}
</style>
