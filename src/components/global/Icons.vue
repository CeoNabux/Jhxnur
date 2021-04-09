<template lang="pug">
  svg.is-medium.has-text-white
    path(:d='path')
</template>

<script>
import icons from "@/components/helpers/icons.js";
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
      return icons[this.name];
    },
  },
};
</script>
