<template lang="pug">
  .container.is-widescreen
    .content
      h2.is-size-2.font-color Crea tu propio arte Urbano
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
                  .media-content
                    p.title.is-size-5.has-text-black Titulo de ejemplo
                    p.subtitle.is-6 precio del producto
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
