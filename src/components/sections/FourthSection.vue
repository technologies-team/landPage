<template>
  <div >
    <section class="section">
      <div class="row  ">
        <div class="col-md-12">
          <h3 class="head-title white f-30 f-700 center">
            UAE Brands We Have Created

          </h3>

          <p class="p-description white font16 f-400 center">Dive Into Our Wide Array Of Services Designed To Meet Every Need. From Sleek UI/UX Design To Robust Cross-Platform Solutions, We Create A Mobile App Experience That Stands Out. Our Expertise In Mobile App Development Services Ensures Your App Looks Great And Performs Flawlessly Across Devices.</p>
          <div class="align-items-center gx-5 d-none d-lg-flex row ">
            <div class="col-md-12 mb-3 cards-section" v-for="(item, index) in imgItems" :key="index">
              <Image title="name" :description="item.description" :src="item.thumbnail" />
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
import Image from './../entity/ImageComponent.vue'
import classicButton from './../entity/ClassicButton.vue'
export default {
  name: 'FourthSection',
  props: {
    msg: String,
  },
  components: {
    Image,classicButton
  },
  data(){
    return{
      imgItems: [
        {
          thumbnail: require('../../assets/card/Apple.webp'),
          description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
        },

      ],
    }
  }



}

</script>

<style scoped>
.head-title{
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  background-image: linear-gradient(90deg, #f32f53, #f32fc2, #1153ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 4%;

}
</style>
