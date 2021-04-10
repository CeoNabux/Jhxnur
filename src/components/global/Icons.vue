<template lang="pug">
  svg#icon.select-none.is-flex.is-align-items-center
    path(:d='path')
</template>

<script>
import Icons from "@/components/helpers/Icons.js";
export default {
  name: "Icons",
  props: {
    name: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
  },
  computed: {
    path() {
      return Icons[this.name];
    },
  },
};
</script>

<style scoped>
#icon {
  width: 20px;
  height: 20px;
  stroke: 2.5px;
  fill: currentColor;
}
</style>
