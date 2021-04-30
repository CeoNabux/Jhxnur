<template lang="pug">
  .container.is-widescreen(v-if="!isLoaded")
    .is-flex.is-justify-content-center
      figure.image.is-128x128
        img(src="@/assets/logo/logo-white.gif")
</template>

<script>
export default {
  name: "isLoading",
  data: () => {
    return { isLoaded: false };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        return (this.isLoaded = true);
      }
    };
  },
};
</script>
