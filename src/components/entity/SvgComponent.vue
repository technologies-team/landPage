<template>
  <div>

  </div>

</template>

<script>
import  Svg from src
export default {
  name: 'SvgComponent',
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
