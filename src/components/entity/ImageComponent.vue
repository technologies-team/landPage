<template>
  <img v-bind:src=src class=" " :width=width :height=height alt="">

</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    src: String,
    width: String,
    height: String,

  }
}
</script>

<style scoped>
</style>
