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
          this.clicky = false;
        }, 500);
      });
    },
    ubicacion(event) {
      this.x = event.pageX - 10 + "px";
      this.y = event.pageY - 10 + "px";
    },
  },
  destroyed: function () {
    this.cursorOut();
  },
};
</script>

<style scoped>
.cursor {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid orange;
  opacity: 0.6;
  position: absolute;
  z-index: 45;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
  pointer-events: none;
  animation: cursorAnim 0.5s infinite alternate;
}

.cursor::after {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  border: 8px solid rgb(255, 217, 147);
  border-radius: 50%;
  opacity: 0.5;
  top: -1px;
  left: -1px;
  animation: cursorAnim2 0.5s infinite alternate;
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
    transform: scale(5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
.expand {
  animation: cursorAnim;
  animation-duration: 500ms;
  border: 1px solid green;
}
@media only screen and (max-width: 1023px) {
  .cursor {
    display: none;
  }
}
</style>
