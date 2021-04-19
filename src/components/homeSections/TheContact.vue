<template lang="pug">
  .container.is-widescreen.mt-6
    .container.is-flex.is-flex-direction-column
      .content
        h2.has-text-white.letter-spacing.is-size-2.is-size-3-mobile ¿Tienes un proyecto en mente?
        p.has-text-white.letter-spacing.is-size-5 Cuéntame qué construiremos
      .form.my-4
        .container.is-flex.is-justify-content-center.is-flex-direction-column.is-align-items-center
          .field.mb-8
            label.mb-6 Nombre
            .control
              input.inputText.fondo(type='text' placeholder="Escribe tu contenido")
          .field.mb-8
            label.mb-6 Correo
            .control
              input.inputText.fondo(type='text' placeholder="Escribe tu contenido")
          .field.mb-8
            label.mb-6 Cuéntame de tu proyecto
            .control
              input.inputText.fondo(type='text' placeholder="Escribe tu contenido")
      .container.is-flex.my-4
        .columns
          .column
            figure.image.is-96x96
              img(src="@/assets/logo/logo-white.gif")
          .column.is-flex.is-align-items-center.is-justify-content-center
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
}
.inputText {
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  outline-color: none;
  width: 450px;
}
.inputText:focus {
  outline: none;
  color: white;
}
@media only screen and (max-width: 480px) {
  .inputText {
    width: 280px;
  }
}
</style>
