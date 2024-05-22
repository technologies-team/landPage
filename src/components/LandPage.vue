<template>
  <div>
    <section>
      <div>
        <MainSection :isOpen="isOpen" @submitForm="submitForm" Head="UAE’s No.1 Mobile App Development Company in Dubai" :modalOpenUp="modalOpenUp" :closeForm="closeForm"
                     description="We are a 25 years old mobile app development company in Dubai, dedicated to creating simple, easy to use and user-friendly apps. Get 10x more conversions for your business now and let your user fall in love with you through the app!."/>
        <SixSection  :modalOpen="modalOpen" />
        <ThirdSection :modalOpen="modalOpen" Head="Get Our App Development Service" :modalOpenUp="modalOpenUp" :closeForm="closeForm"/>
        <FourthSection :modalOpen="modalOpen" />
        <FirstSection :modalOpen="modalOpen" />
        <IndustrySection :modalOpen="modalOpen" />
        <SevenSection :modalOpen="modalOpen" />
        <ThirteenSection :modalOpen="modalOpen" />
        <EightSection :modalOpen="modalOpen" />
        <NineSection  :modalOpen="modalOpen" />
        <TenSection  :modalOpenUp="modalOpenUp"  :closeForm="closeForm" />
        <FAQSection :modalOpen="modalOpen"  />
        <ModalComponent :isShow="isShow"  :modalCloseUp="modalCloseUp" :header="header" :message="message" :button-text="buttonText" />
        <ModalContactComponent :is-open="isOpen" :modalOpenUp="modalOpenUp" :closeForm="closeForm"  />

      </div>
    </section>
  </div>
</template>
<script>

import MainSection from './sections/MainSection.vue';
import ThirdSection from './sections/ThirdSection.vue';
import FourthSection from './sections/FourthSection.vue';
import SixSection from './sections/SixSection.vue';
import SevenSection from './sections/SevenSection.vue';
import NineSection from './sections/NineSection.vue';
import FAQSection from './sections/FAQSection.vue';
import EightSection from './sections/EightSection.vue';
import TenSection from "@/components/sections/TenSection.vue";
import FirstSection from "@/components/sections/FirstSection.vue";
import ThirteenSection from "@/components/sections/ThirteenSection.vue";
import IndustrySection from "@/components/sections/IndustrySection.vue";
import ModalComponent from "@/components/entity/ModalComponent.vue";
import axios from "axios";
import {provide} from "vue";
import ModalContactComponent from "@/components/entity/ModalContactComponent.vue";
export default {
  name: 'LandPage',
  props: {
    msg: String,
  },
  components: {
    ModalContactComponent,
    ModalComponent,

    IndustrySection,
    ThirteenSection,
    FirstSection,
    TenSection,
    MainSection,
    ThirdSection,FourthSection,SixSection,SevenSection,FAQSection,EightSection,NineSection
  },

  data() {
    return {

      header:"Success!",
      message:"We received your application and will contact you shortly.",
      buttonText:"confirm",
      isOpen:false,
      isShow:false,
      slides: ['Slide 1', 'Slide 2', 'Slide 3','Slide 4', 'Slide 25', 'Slide 6'] // Add your slide content here
    };
  }
,  setup() {
  const modalclose = () => {
    console.log("here")
    this.isShow=false

  };

  provide('handleEvent', modalclose);

  return {};
},
  methods: {
    modalOpen(){
      this.isOpen=true;

      },
    modalCloseUp(){
      console.log("here parents")
      this.isOpen=false;
      this.isShow=false;

    },    modalOpenUp(){
      console.log("here parents")
      this.isShow=true;

    },   closeForm(){
      console.log("here parents")
      this.isOpen=false;

    },
    submitForm() {
      axios.post('/contact', this.formData)
          .then(response => {
            // Handle success
            console.log(response.data);
          })
          .catch(error => {
            // Handle error
            console.error(error);
          });
    }
  }
}

</script>

<style>


.container{
  margin-top: 50px;
  margin-bottom: 100px;
}


.slideTrack {
  width: calc(150px* 20);
  display: flex;
  animation: scroll 20s linear infinite;
  justify-content: space-between;
}

.head-title {
  text-align: start;
  font-weight: 700;
}


.description{
  margin-top: 30px;
  text-align:start;
}
.standard-text-area-filed {
  width: 100%;
  height: 150px;
  background-color: transparent;
  border: 1px solid #e4e5e7;
  border-radius: 5px;
  color: light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4));

}








h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
