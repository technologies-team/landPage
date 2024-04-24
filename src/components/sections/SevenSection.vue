<template>
  <div >
    <section class="container">
      <div class="row justify-content-center ">

        <h3 class="white f-30 f-700 text-center head-title">
          Mobile App Development Project Process

        </h3>
        <h1 class="white font50 f-700 text-center second-title">
          Explore Our App Development Journey
        </h1>
        <p class=" white font16 f-400 text-center ">Our Work Speaks For Us. See How We Create Powerful, Customer-Centric Mobile Applications
          <br>
          For Various Industry Verticals To Help Them Achieve Their Business Objectives.</p>
        <div class="col-md-12">
          <div class="container">
            <div class="row justify-content-center">
              <ImageComponent class="main-photo" :title=title :description="description" :src="thumbnail" />

            </div>

          </div>
        </div>
        <div class="col-12 row justify-content-center ">
          <div class="col-5 ">
            <classicButton text="Your App, Our Expertise -  Let's Connect " />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import classicButton from './../entity/ClassicButton.vue'
import ImageComponent from "@/components/entity/ImageComponent.vue";
export default {
  name: 'SevenSection',
  props: {
    msg: String,
  },
  components: {
    ImageComponent
    ,classicButton
  },
  data(){
    return{
        title:"process",
          thumbnail: require('../../assets/process.webp'),
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
  width: 70%;
  margin: auto;
}
</style>
