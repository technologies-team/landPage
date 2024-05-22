<template>
  <div  class="d-flex justify-content-center align-items-center  w-100 h-100 position-absolute loading">
    <image-component :src="loading" height="100px" />
  </div>
</template>
<script>
import ImageComponent from "@/components/entity/ImageComponent.vue";

export default {
  name: 'LoadingComponent',
  components: {ImageComponent},
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
  },
  data(){
    return{
      loading: require('../../assets/img/loading.gif'),
    }
  },
}
</script>
<style scoped>
.loading{
  overflow: hidden;
  background-color: rgba(var(--), 0.6);

  left: 0;
  right: 0;
  top:0
}
</style>
