<template>
  <div >
    <section class="container">
      <div class="row  ">
        <h2 class="head-title white font50 f-700 text-center">
          We Are Recognized By          </h2>
        <div class="col-md-12">


          <p class=" white font16 f-400 text-center">ur mobile app development agency in the UAE offers one of a kind services. Here's what we offer:</p>

          <carousel :items-to-show="4" :wrapAround="true" :transition="3000" :autoplay="1">
            <slide v-for="(item, index) in imgItems" :key="index">
              <div class="col-md-2 mb-2 cards-section">
                <Image :title=item.title :description="item.description" :src="item.thumbnail" />
              </div>
            </slide>
          </carousel>
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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import Image from "@/components/entity/ImageComponent.vue";

export default {
  name: 'SixSection',
  props: {
    msg: String,
  },
  components: {
    Image,
    classicButton,Carousel,
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
