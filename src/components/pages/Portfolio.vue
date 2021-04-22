<template lang="pug">
  .container.is-widescreen
    .content
      h2.is-size-2.font-color conoce mi portafolio
    .container
      .columns.is-desktop.is-multiline
        .column.is-one-thirds.p-4
          router-link(to="/")
            .card
              .card-image
                figure.image.is-1by1
                  img(src="#")
              .card-content
                .media
                  .media-left
                    figure.image.is-48x-48
                      img(src="#")
                  .media-content
                    p.title.is-size-5.has-text-black Titulo del trabajo
                    p.subtitle.is-6 marca o empresa
</template>

<style scoped>
.font-color {
  background: -webkit-linear-gradient(
    270deg,
    rgba(254, 237, 44, 1) 3%,
    rgba(156, 65, 8, 1) 83%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: orange;
}
</style>
