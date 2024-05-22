<template>
  <div class="main-section">
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
    }"

    >
  <section class="container">
    <!-- Event snippet for Lead Form - Technologies LP conversion page -->

    <div class="d-flex justify-content-center">
      <div class="col-md-9 ">
        <h1 class="head-title">
          {{ Head }}
        </h1>

        <div class="description">
          {{description}}
        </div>
<Image></Image>
      </div>

      <router-link to="/"><classic-component text="back to home"></classic-component></router-link>

    </div>
    <div class="row pr-30"><div class=" col-md-1 mt-3"></div></div>

  </section>
      </div>
  </div>
</template>
<script >

import "vue-phone-number-input/dist/vue-phone-number-input.css";
import Image from "@/components/entity/ImageComponent.vue";
import ClassicComponent from "@/components/entity/ClassicButton.vue";
export default {
  name: 'ThankYouSection',
  props: {
    Head: String,
    Title: String,
    description: String,
    number:String,
    modalOpenUp:Function,
    closeForm:Function
  },
  components: {
    ClassicComponent,
    Image


  },


  methods:{
    modalOpenUpParent() {
      this.modalOpenUp(); // Call the parent function passed as a prop
    },   closeFormParent() {
      this.closeForm(); // Call the parent function passed as a prop
    },
  },


  data() {
    return {
      vuePhone: {
        phone: "",
        props: {
          clearable: true,
          fetchCountry: true,
          preferredCountries: ["US", "GB"],
          noExample: false,
          translations: {
            countrySelectorLabel: "Country code",
            countrySelectorError: "Error",
            phoneNumberLabel: "Enter your phone",
            example: "Example:"
          }
        }
      },
      imgItems: [

        {title:"IOS",
          thumbnail: require('../../assets/slides/073e304b0da1a3516e43c41ee0e53ed1.png'),
          description: 'We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.'
     , width:"100px"
        },
        {
          title:"Flutter",
          thumbnail: require('../../assets/slides/mad_reports_5e254d641d2281579502948.webp'),
          description: 'Our team of expert Flutter app developers at BitsWits use the latest tools and techniques.'
          , width:"100px"
        },
        {title:"Web",
          thumbnail: require('../../assets/slides/Update.png'),
          description: 'We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.'
          , width:"100px"
        },


        {title:"Native",
          thumbnail: require('../../assets/slides/Top.png'),
          description: 'We prioritize creating seamless user experiences in cross-platform app development.'
          , width:"150px"
        }


      ],
    };
  }
}
</script >
<style scoped>
.main-section{
  background-image: url('/src/assets/section/full-photo-1.jpg') ;
  background-size: cover;
  background-position: center;

  width: 100%;
  height: auto;
  padding-top: 10px;

}
.description{
  color:var(--main-color);
}
.country-phone-input .dropdown:focus {
  outline: none;
  color: grey;
}
.head-title{

;
  background: linear-gradient(90deg, var(--main-color), var(--second-color), var(--third-color));
  -webkit-background-clip: text;
  color: transparent;
}
.m-phone-number-input.--responsive[data-v-174cbd16]{
}
.m-select .m-select-list[data-v-fb03c8b8]
{  background-color: #e4e5e7;


}
.description{
  font-size: 25px;
}

.f45{
  font-size: 35px;
}
.bg-color{
  background-color: var(--main-color);
  color:var(--light-color);
  border-radius: 25px;
  height: 387px;
}


.text-area-parent{
  margin: 5px;
  width : 95% !important;
}
.input-field{
  height: 55px;
  border: 1px solid var(--main-color);
  background-color: var(--main-color);
  border-radius: 13px;
  color: var(--light-color);
}
.second-title {
  width: max-content;
  max-width:100%;

  color: var(--main-color);
  font-weight: 700;
}

</style>
