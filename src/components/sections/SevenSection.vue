<template>
  <div   v-motion
         :initial="{
      opacity: 0,
      y: 100,
    }"
         :visibleOnce="{
      opacity: 1,
      y: 0,
        transition: {
      type: 'spring',
      stiffness: '100',
      delay: 300,
    },
    }">
    <section class="container">
      <div class="row justify-content-center ">

        <h3 class="white f-30 f-700 text-center head-title">
          Mobile App Development Project Process

        </h3>
        <h1 class="white font50 f-700 text-center second-title">
          Explore Our App Development Journey
        </h1>

        <div class="col-md-10">
            <div class="row justify-content-center">
              <ImageComponent class="main-photo" width="100%" :title=title :description="description" :src="thumbnail" />



            </div>
        </div>
        <div class="col-12 row justify-content-center ">
          <div class="col-12 col-lg-5 col-md-8 col-sm-12  row justify-content-center ">
            <PopupButtonComponent text="Start Your App Development Journey "  @click="modalOpenUpParent"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImageComponent from "@/components/entity/ImageComponent.vue";
import PopupButtonComponent from "@/components/entity/PupupButtonComponent.vue";
export default {
  name: 'SevenSection',
  props: {
    msg: String,
    modalOpen:Function
  },
  components: {
    PopupButtonComponent,
    ImageComponent

  },
  methods:{
    modalOpenUpParent() {
      this.modalOpen(); // Call the parent function passed as a prop
    },
  },
  data(){
    return{
        title:"process",
          thumbnail: require('../../assets/process.svg'),
          description: ''



    }
  }



}

</script>

<style scoped>

.head-title{
  color:var(--main-color);
  font-size:32px;
  font-weight: 700;
}
.second-title{
  font-weight: 700;
  background: linear-gradient(90deg, var(--main-color), var(--second-color), var(--third-color));
  color: transparent;
  -webkit-background-clip: text;
}
.main-photo{
  width: 100%;
  margin: auto;
}
</style>
