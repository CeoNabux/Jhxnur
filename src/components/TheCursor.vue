<template lang="pug">
  #cursor(:style="{ top: this.y, left: this.x }")
</template>

<script>
export default {
  name: "TheCursor",
  data: () => ({
    x: 0,
    y: 0,
  }),
  mounted: function () {
    this.cursor();
  },
  methods: {
    cursor() {
      window.addEventListener("mousemove", this.ubicacion);
    },
    cursorOut() {
      window.removeEventListener("mousemove", this.ubicacion);
    },
    ubicacion(event) {
      this.x = event.pageX - 32 + "px";
      this.y = event.pageY - 32 + "px";
    },
  },
  destroyed: function () {
    this.cursorOut();
  },
};
</script>

<style scoped>
#cursor {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 8px solid white;
  opacity: 0.6;
  position: absolute;
  z-index: 45;
  transition-timing-function: ease-out;
  cursor: none;
  pointer-events: none;
}
</style>
