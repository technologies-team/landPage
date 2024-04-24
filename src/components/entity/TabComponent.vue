<template lang="html">
  <div v-if="isActive" class="  d-flex justify-content-center w-75 flex-wrap gap-5">
    <div  v-for="(imgItem) in imgItems" class="col-2 d-flex flex-column align-items-center gap-3 tab-entity p-4 "
         :key="imgItem.title">

      <div  >
        <ImageComponent class="img-fluid" :src="imgItem.thumbnail"></ImageComponent>
      </div>
      <div>
        {{imgItem.title}}

      </div>
    </div>
    <slot>

    </slot>
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
  border-radius: 25px;
  border-top-right-radius: 0px;
  background-color: var(--main-color);
}
</style>
