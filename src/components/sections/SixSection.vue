<template>
  <div
      v-motion
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
    <section class="container mb-0">
      <div class="row  gy-5">
        <h2 class="head-title white font50 f-700 text-center p-2">
        Trusted By UAE Government Projects</h2>
        <div class="col-md-12">



          <carousel :items-to-show="pageSize" :wrapAround="true" :transition="3000" :autoplay="1">
            <slide v-for="(item, index) in imgItems" :key="index">
              <div class="col-12 col-sm-12 col-md-2 mb-2 cards-section">
                <Image  width=350px :title=item.title :description="item.description" :src="item.thumbnail" />
              </div>
            </slide>
          </carousel>
        </div>
        <div class="col-12 row justify-content-center mt-4 ">
          <div class="col-lg-3 col-md-6 col-sm-8 row w-100 justify-content-center">
          <PopupButtonComponent text="Let's Connect " pop-up="true" @click="modalOpenParent" />
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import Image from "@/components/entity/ImageComponent.vue";
import PopupButtonComponent from "@/components/entity/PupupButtonComponent.vue";

export default {
  computed: {
    pageSize() {
      if(window.innerWidth >= 1024){
        return 3;
      }
      else if(window.innerWidth >= 768) return 2;
      else return 1;
    }
  },
  name: 'SixSection',
  props: {
    msg: String,
    modalOpen:Function
  },
  components: {
    PopupButtonComponent,
    Image
  ,Carousel,
    Slide,

  },

  data(){
    return{
      value: 0,
      imgItems: [
        {title:"Android",
          thumbnail: require('../../assets/client/arn_.png'),
          description: ''
        },
        {title:"IOS",
          thumbnail: require('../../assets/client/auh.png'),
          description: ''
        },
        {
          title:"Flutter",
          thumbnail: require('../../assets/client/eM.png'),
          description: ''
        },
        {title:"Web",
          thumbnail: require('../../assets/client/dp WORLD_.png'),
          description: ''
        },
        {title:"Hybrid",
          thumbnail: require('../../assets/client/KIPCO.png'),
          description: ''
        },
        {title:"Native",
          thumbnail: require('../../assets/client/ABU DHABI POLIC.png'),
          description: ''
        }
        ,
        {title:"Native",
          thumbnail: require('../../assets/client/DUBAI SME.png'),
          description: ''
        }

        ,
        {title:"Native",
          thumbnail: require('../../assets/client/dxb MUNICIPALITY.png'),
          description: ''
        }


        ,
        {title:"Native",
          thumbnail: require('../../assets/client/eMARAT.png'),
          description: ''
        }

        ,
        {title:"Native",
          thumbnail: require('../../assets/client/GOVERMENT OF AJMAN.png'),
          description: ''
        }

        ,
        {title:"Native",
          thumbnail: require('../../assets/client/HAMRIYA.png'),
          description: ''
        }

        ,
        {title:"Native",
          thumbnail: require('../../assets/client/MINISTRY OF EDUCATION.png'),
          description: ''
        }

        ,
        {title:"Native",
          thumbnail: require('../../assets/client/MINISTRY OF INTERIOR.png'),
          description: ''
        }


      ],
      slides: ['Slide 1', 'Slide 2', 'Slide 3','Slide 4', 'Slide 5', 'Slide 6'],
      currentIndex: 0,
      offset: 0,
      interval: null
    }
  },
  mounted() {
  },
  methods: {
    startSlider() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 3000); // Adjust the time interval as needed
    },
    modalOpenParent(){
      this.modalOpen()
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.offset = -this.currentIndex * this.$refs.slide.offsetWidth;
    }
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
}

</script>

<style scoped>
.head-title{
  background: linear-gradient(90deg,var(--main-color),var(--second-color),var(--third-color));
  color: transparent;
  -webkit-background-clip: text;
}
.slide {
  display: flex;
  transition: transform 0.5s ease;
}
.carousel__slide{
  height: 130px;
}
</style>
