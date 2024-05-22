<template>
  <div >
    <section class="container"    v-motion
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
    }"
    >
      <div class="row  ">
        <h3 class="head-title white f-30 f-700 text-center">
         Apps We Have Created
        </h3>


        <div class="col-md-12 " v-if="0">
          <div class="align-items-center gx-5 d-none d-lg-flex row justify-content-center ">
            <div class="col-md-2 mb-3 cards-section" v-for="(item, index) in imgItems" :key="index">
              <Image width="200px" height="auto" title="name" :description="item.description" :src="item.thumbnail" />
            </div>
          </div>
        </div>
        <div class="row   justify-content-center">
          <div class="col-md-12">
            <carousel :items-to-show="pageSize" :wrapAround="true" :transition="200" :autoplay="0">
              <slide v-for="(item, index) in imgItems" :key="index">
                <div class="col-md-10 mb-2 cards-section">
                  <Image  width=370px  :title=item.title :description="item.description" :src="item.thumbnail" />
                  <h3 class="text-start">{{item.title}}</h3>
                  <p class="text-start">{{item.description}}</p>
                </div>
              </slide>
              <template #addons>

                <navigation />
                <pagination />
              </template>
            </carousel>
          </div>

        </div>

        <div class="col-12 row justify-content-center mt-5">
            <PopupButtonComponent  class="col-2 " text=" Get Your App" pop-up="true" @click="modalOpenUpParent"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Image from './../entity/ImageComponent.vue'
import 'vue3-carousel/dist/carousel.css'

import {Carousel, Slide,Navigation, Pagination,} from "vue3-carousel";
import PopupButtonComponent from "@/components/entity/PupupButtonComponent.vue";
export default {
  computed: {
    pageSize() {
      if(window.innerWidth >= 1024){
        return 3;
      }
      else return 1;

    }
  },
  name: 'FourthSection',
  props: {
    msg: String,
    modalOpen:Function
  },

  components: {
    PopupButtonComponent,
    Slide,
    Navigation, Pagination,
    Carousel,
    Image
  },
  data(){
    return{
      imgItems: [

        {

          thumbnail: require('../../assets/brand/1.jpg'),
       title:"Boom Message",
          description: 'Boom is a social commerce application equipped with interactive messaging and social networking functions'

        },

        {
          thumbnail: require('../../assets/brand/2.jpg'),
          title:"Enqueue",

          description: 'Enqueue is an automated platform empowering users to minimize their queue waiting times.'
        },
        {
          thumbnail: require('../../assets/brand/3.jpg'),
          title:"Glee",

          description: 'Glee is an app that helps in uncovering thrilling events and mingling with fellow enthusiasts of revelry.'
        },
        {
          thumbnail: require('../../assets/brand/4.jpg'),
          title:"Faucet Sounds",

          description: 'Faucet Sounds is a mobile application created to transform ordinary audio snippets into recognizable melodies through music identification.'
        },
        {
          thumbnail: require('../../assets/brand/5.jpg'),
          title:"Spirit of Speed",

          description: 'The first comprehensive automotive aftersales ecosystem that connects workshops and customers, addressing the gap between them.'
        },
      ],
    }
  },methods:{
    next() {
      this.carousel.next()
    },
    prev() {
      this.carousel.prev()
    },
    modalOpenUpParent() {
      this.modalOpen(); // Call the parent function passed as a prop
    },
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
