<template lang="html">
  <div v-if="isActive" class="  row justify-content-center  flex-wrap gap-5">
    <div  v-for="(imgItem) in imgItems" class="col d-flex flex-column align-items-center justify-content-between gap-3 tab-entity p-3 "
         :key="imgItem.title">

      <div>
        <ImageComponent width="50px" class="img-fluid" :src="imgItem.thumbnail"></ImageComponent>
      </div>
      <div>
        {{imgItem.title}}

      </div>
    </div>

  </div>
</template>

<script>
import ImageComponent from "@/components/entity/ImageComponent.vue";

export default {
  components: {ImageComponent},
  props: {
    title: {
      type: String,
      default: 'Tab',
    },
    content: {
      type: String,
      default: 'Tab',
    },
    isActive: {
      type: Boolean,
      default: false,
    }
    ,
    imgItems:{
      type:Array
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.tab-entity{

}
</style>
