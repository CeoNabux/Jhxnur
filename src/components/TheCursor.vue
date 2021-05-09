<template lang="pug">
  .cursor(:style="{ top: this.y, left: this.x }" :class="{'expand': clicky}")
</template>

<script>
export default {
  name: "TheCursor",
  data: () => ({
    x: 0,
    y: 0,
    clicky: false,
  }),
  mounted: function () {
    this.cursor();
    this.cursorClick();
  },
  methods: {
    cursor() {
      window.addEventListener("mousemove", this.ubicacion);
    },
    cursorOut() {
      window.removeEventListener("mousemove", this.ubicacion);
    },
    cursorClick() {
      document.addEventListener("click", () => {
        this.clicky = true;
        setTimeout(() => {
          this.click = false;
        }, 500);
      });
    },
    ubicacion(event) {
      this.x = event.pageX - 16 + "px";
      this.y = event.pageY - 16 + "px";
    },
  },
  destroyed: function () {
    this.cursorOut();
  },
};
</script>

<style scoped>
.cursor {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid white;
  opacity: 0.6;
  position: absolute;
  z-index: 45;
  transition-timing-function: ease-out;
  pointer-events: none;
  animation: cursorAnim 0.5s infinite alternate;
}

.cursor::after {
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  border: 8px solid gray;
  border-radius: 50%;
  opacity: 0.5;
  top: -9px;
  left: -9px;
  animation: cursorAnim2 0.5 infinite alternate;
}
@keyframes cursorAnim {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.7);
  }
}
@keyframes cursorAnim2 {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.4);
  }
}
@keyframes cursorAnim3 {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(3);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
.expand {
  animation: cursoAnim3 0.5 infinite;
  border: 1px solid #42b983;
}
</style>
