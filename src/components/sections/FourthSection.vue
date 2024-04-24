<template>
  <div >
    <section class="container">
      <div class="row  ">
        <h3 class="head-title white f-30 f-700 text-center">
          UAE Brands We Have Created
        </h3>

        <div class="container" v-if="0">
          <div id="scroll-container">
            <div id="scroll-text">
              <div class=" d-flex  brands-tap">
                <div class="col-md-3 mb-3 cards-section" v-for="(item, index) in imgItems" :key="index">
              <Image width="200px" height="auto" title="name" :description="item.description" :src="item.thumbnail" />
            </div>
              </div>
            </div>
        </div>
        </div>
        <div class="col-md-12">


          <p class="p-description white font16 f-400 center">Dive Into Our Wide Array Of Services Designed To Meet Every Need. From Sleek UI/UX Design To Robust Cross-Platform Solutions, We Create A Mobile App Experience That Stands Out. Our Expertise In Mobile App Development Services Ensures Your App Looks Great And Performs Flawlessly Across Devices.</p>
          <div class="align-items-center gx-5 d-none d-lg-flex row justify-content-center ">
            <div class="col-md-2 mb-3 cards-section" v-for="(item, index) in imgItems" :key="index">
              <Image width="200px" height="auto" title="name" :description="item.description" :src="item.thumbnail" />
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
          thumbnail: require('../../assets/brand/3jeeb.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/discovery.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/fama group.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/fama health.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/vroom.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/fama luxe.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/fama_ beuty.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/goal vision.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/le cafe.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/roshosh.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/smn-01.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/Technologie.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/verona.jpg'),
          description: ''
        },
        {
          thumbnail: require('../../assets/brand/wikwik.jpg'),
          description: ''
        },
      ],
    }
  }



}

</script>

<style scoped>
.brands-tap{
}

.head-title{
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  background-image:linear-gradient(90deg, var(--main-color), var(--second-color), var(--third-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 4%;

}

#scroll-container {
  border-radius: 5px;
  overflow: hidden;
}

#scroll-text {
  width: 100%;
  /* animation properties */
  animation: my-animation 15s linear infinite;
}


/* for Chrome */


@keyframes my-animation {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-40%);
  }}

</style>
