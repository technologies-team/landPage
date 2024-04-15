<template>
  <img v-bind:src=src class=" " alt="">

</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    src: String,

  }
}
</script>

<style scoped>
</style>
