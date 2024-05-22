<template>
  <img  v-bind:src=src class=" " :width=width :height=height alt="">


</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    src: String,
    width:{
      type:String,
    default:"100px"
    },
    height: {

      type:String,
      default:"auto"
    },

  }
}
</script>

<style scoped>

</style>
