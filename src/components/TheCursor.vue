<template lang="pug">
  #cursor
</template>

<script>
export default {
  name: "TheCursor",
};
</script>

<style scoped>
#cursor {
  width: 24px;
  height: 24px;
  border: 4px solid white;
  border-radius: 50%;
  background: transparent;
  opacity: 0.6;
  position: absolute;
  z-index: 45;
  top: 10px;
  left: 20px;
}
</style>
