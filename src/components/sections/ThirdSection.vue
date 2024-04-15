<template>
  <div >
    <section class="section">
      <div class="row  ">
        <div class="col-md-12">
          <h3 class="white f-30 f-700 center">
            Our Expert Mobile App Development Services In Dubai          </h3>
          <h2 class="white font50 f-700 cente">
            Mobile App Development Services
          </h2>
          <p class=" white font16 f-400 center">ur mobile app development agency in the UAE offers one of a kind services. Here's what we offer:</p>
          <div class="align-items-center gx-5 d-none d-lg-flex row ">
            <div class="col-md-4 mb-3 cards-section" v-for="(item, index) in imgItems" :key="index">
              <CardComponent :title=item.title :description="item.description" :url="item.thumbnail" />
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
import CardComponent from './../CardComponent.vue'
import classicButton from './../entity/ClassicButton.vue'
export default {
  name: 'ThirdSection',
  props: {
    msg: String,
  },
  components: {
    CardComponent,classicButton
  },
  data(){
    return{
      imgItems: [
        {title:"Android",
          thumbnail: require('../../assets/card/Android.webp'),
          description: 'We take Android app development to the next level by following a comprehensive approach, from ideation to launch.'
        },
        {title:"IOS",
          thumbnail: require('../../assets/card/Apple.webp'),
          description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
        },
        {
          title:"Flutter",
          thumbnail: require('../../assets/card/Flutter.webp'),
          description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
        },
        {title:"Web",
          thumbnail: require('../../assets/card/Web.webp'),
          description: 'We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.'
        },
        {title:"Hybrid",
          thumbnail: require('../../assets/card/React.webp'),
          description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.'
        },
        {title:"Native",
          thumbnail: require('../../assets/card/Native.webp'),
          description: 'We prioritize creating seamless user experiences in cross-platform app development.'
        }
      ],
    }
  }



}

</script>

<style scoped>

</style>
