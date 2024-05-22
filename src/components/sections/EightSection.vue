<template>
  <div    v-motion
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
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
         <h1 class="head-title">
           Why Choose Technologies for Your App Development Needs?
         </h1>

<p class="text-start p-font">
  At Technologies, we don't just build apps, we craft exceptional user experiences. Here's what sets us apart:
</p>
          <p class="text-start p-font ">
            Expertise Across Platforms: We're your one-stop shop for native,
            hybrid, and cross-platform app development. We'll recommend the perfect
            solution for your vision.
          </p>

          <p class="text-start p-font">
            Unmatched Performance: From blazing-fast Flutter apps to feature-rich native experiences,
            we prioritize performance and scalability for a seamless user experience
          </p>
          <p class="text-start p-font">
            Transparent Communication: We believe in close collaboration and keeping you informed throughout
            the development process. You'll benefit from agile methodologies and clear communication, ensuring
            your project stays on track and meets your expectations.
          </p>
          <p class="text-start p-font">
            Long-Term Vision: Our partnership extends beyond launch. We offer comprehensive support and maintenance services to keep your app running smoothly, and our team stays invested in your app's long-term success.
          </p>

          <div class="col-12  justify-content-center row">
            <PopupButtonComponent text="Contact Now" @click="modalOpenParent"/>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 second-space">
          <ImageComponent  width="100%" :src="src"></ImageComponent>
</div>
      </div>

    </div>

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
  methods:{
    modalOpenParent(){
      this.modalOpen()
    },
  },
  components: {
    PopupButtonComponent
    ,ImageComponent},
  data(){
    return{
      src:require('../../assets/section/side-photo-4.svg'),
      imgItems: [
        {title:"Experienced\n" +
              "Professionals",
          thumbnail: require('../../assets/icon/icon1.webp'),
          description: ''
        },  {title:"On-Time\n" +
              "Delivery",
          thumbnail: require('../../assets/icon/icon2.webp'),
          description: ''
        },  {title:"Cost-Effective\n" +
              "Solutions",
          thumbnail: require('../../assets/icon/icon3.webp'),
          description: ''
        },  {title:"Scalable and\n" +
              "Secure Apps",
          thumbnail: require('../../assets/icon/icon4.webp'),
          description: ''
        },  {title:"User-Centric <br>" +
              "Design",
          thumbnail: require('../../assets/icon/icon5.webp'),
          description: ''
        },  {title:"Customized\n" +
              "Development",
          thumbnail: require('../../assets/icon/icon6.webp'),
          description: ''
        },  {title:"Error-Free <br>" +
              "Delivery",
          thumbnail: require('../../assets/icon/icon7.webp'),
          description: ''
        },  {title:"Transparent\n" +
              "Communication",
          thumbnail: require('../../assets/icon/icon8.webp'),
          description: ''
        },  {title:"Support and\n" +
              "Maintenance",
          thumbnail: require('../../assets/icon/icon9.webp'),
          description: ''
        },


      ],
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

}
.p-font{
  font-size: 16px;
}
.highlighted{
  color:#f32f53;
}
.second-space{
  background-repeat: no-repeat;
  background-size: 100%;
}

</style>

