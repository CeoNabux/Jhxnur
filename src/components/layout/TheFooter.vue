<template lang="pug">
  footer.footer.fondo.px-0.py-4
    .container.is-widescreen
      a(href='http://maverick.ec').is-flex.is-justify-content-center.is-align-items-center
        figure.image.is-32x32.mr-2
          img(src='@/assets/logo/maverick-white.png')
        .content.hast-text-left
          p#underline.has-text-white.is-underline Con Cariño de Team Maverick 💚
</template>

<style scoped>
.fondo {
  background: #000;
}
#underline {
  text-decoration: underline;
}
</style>
