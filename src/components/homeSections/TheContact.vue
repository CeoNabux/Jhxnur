<template lang="pug">
  .container.is-widescreen.mt-6
    .container.is-flex.is-flex-direction-column
      .content
        h2.has-text-white.letter-spacing.is-size-2.is-size-3-mobile ¿Tienes un proyecto en mente?
        p.has-text-white.letter-spacing.is-size-5 Cuéntame qué construiremos
      .form.my-4
        .container.is-flex.is-justify-content-center.is-flex-direction-column.is-align-items-center
          .field.mb-6
            label.labelText.mb-6 Nombre
            .control
              input.inputText.fondo(type='text' placeholder="Escribe tu nombre")
          .field.mb-6
            label.labelText.mb-6 Correo
            .control
              input.inputText.fondo(type='text' placeholder="Coloca tu correo")
          .field.mb-6
            label.labelText.mb-6 Cuéntame de tu proyecto
            .control
              input.inputText.fondo(type='text' placeholder="Explícame tu proyecto")
      .container.is-flex.my-4
        .columns
          .column
            figure.image.is-96x96
              img(src="@/assets/logo/logo-white.gif")
          .column.is-flex.is-align-items-center.is-justify-content-center
            .columns
              .column.is-flex.is-justify-content-center
                a(href="https://www.instagram.com/jhxnur")
                  icons.has-text-white(name="instagram")
              .column.is-flex.is-justify-content-center
                a(href="https://youtube.com/channel/UCmYaKnHayQMyxm-j3kq499g")
                  icons.has-text-white(name="youtube")
              .column.is-flex.is-justify-content-center
                a(href="https://www.behance.net/jhonlen")
                  img(src="@/assets/icons/behance.svg")
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
  color: white;
}
.inputText:focus {
  outline: none;
  color: white;
  border-bottom-style: groove;
  border-color: white;
}
.field:focus-within label {
  color: white;
}


@media only screen and (max-width: 480px) {
  .inputText {
    width: 280px;
  }
}
</style>
