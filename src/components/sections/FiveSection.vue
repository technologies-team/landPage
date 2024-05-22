<template>
  <div >
    <section class="container">
      <div class="row  ">
        <div class="col-md-12">

          <h2 class="white font50 f-700 text-center p-2">
            We Are Recognized By          </h2>
          <p class=" white font16 f-400 center">ur mobile app development agency in the UAE offers one of a kind services. Here's what we offer:</p>
          <div class="align-items-center gx-5 d-none d-lg-flex row ">
            <div class="col-md-2 mb-3 cards-section" v-for="(item, index) in imgItems" :key="index">
              <Image :title=item.title :description="item.description" :src="item.thumbnail" />
            </div>
          </div>
        </div>
        <div class="col-12 row justify-content-center ">
          <div class="col-5 ">
            <PopupButtonComponent text="Your App, Our Expertise -  Let's Connect " pop-up="true" @click="modalOpenUpParent"/>

        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Image from './../entity/ImageComponent.vue'
import PopupButtonComponent from "@/components/entity/PupupButtonComponent.vue";
export default {
  name: 'FiveSection',
  props: {
    msg: String,
    modalOpen:Function
  },
  components: {
    PopupButtonComponent,
    Image
  },
  methods:{
    modalOpenUpParent() {
      this.modalOpen(); // Call the parent function passed as a prop
    },
  },
  data(){
    return{
      imgItems: [
        {title:"Android",
          thumbnail: require('../../assets/card/Android.svg'),
          description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
        },
        {title:"IOS",
          thumbnail: require('../../assets/card/Apple.svg'),
          description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
        },
        {
          title:"Flutter",
          thumbnail: require('../../assets/card/Flutter.svg'),
          description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
        },
        {title:"Web",
          thumbnail: require('../../assets/card/Web.svg'),
          description: 'We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.'
        },
        {title:"Hybrid",
          thumbnail: require('../../assets/card/React.svg'),
          description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
        },
        {title:"Native",
          thumbnail: require('../../assets/card/Native.svg'),
          description: 'We prioritize creating seamless user experiences in cross-platform app development.'
        }
      ],
    }
  }



}

</script>

<style scoped>

</style>
