<template lang="pug">
  .container.is-widescreen.mt-6
    .container.is-flex.is-flex-direction-column
      .content
        h2.has-text-white.letter-spacing.is-size-2.is-size-3-mobile ¿Tienes un proyecto en mente?
        p.has-text-white.letter-spacing.is-size-5 Cuéntame qué construiremos
      .form.my-4
        .container.is-flex.is-justify-content-center.is-flex-direction-column
          .field.mb-8
            label.mb-6 Nombre
            .control
              input.fondo(type='text')
          .field.mb-8
            label.mb-6 Nombre
            .control
              input.fondo(type='text')
          .field.mb-8
            label.mb-6 Nombre
            .control
              input.fondo(type='text')
      .container.is-flex
        .columns
          .column
            figure.image.is-96x96
              img(src="@/assets/logo/logo-white.gif")
          .column.is-flex.is-align-items-center
            .columns
              .column
                a(href="https://www.instagram.com/jhxnur")
                  icons.has-text-white(name="instagram")
              .column
                a(href="https://youtube.com/channel/UCmYaKnHayQMyxm-j3kq499g")
                  icons.has-text-white(name="youtube")
              .column
                a(href="https://www.instagram.com/jhxnur")
                  icons.has-text-white(name="instagram")
</template>

<script>
import Icons from "@/components/global/Icons.vue";

export default {
  components: {
    Icons,
  },
};
</script>

<style scoped>
.letter-spacing {
  letter-spacing: 5px;
}
.fondo {
  background: #000;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-bottom-style: white;
  outline: none;
}
</style>
