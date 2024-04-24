<template>
  <div class="section container">
    <section class="section d-flex g-3 flex-column " >
<div   v-for="(Q, index) in FQA" :key="index" @click="toggleActive(Q)" class="my-2">
  <div class="main-field">
    <div class="FQA  d-flex"> <div class="col-11 text-start">{{Q.question}}
    </div>
<div class="col-1">

      <ImageComponent  v-if="!Q.isActive" :src=openIcon></ImageComponent>
      <ImageComponent  v-if="Q.isActive" :src=closeIcon></ImageComponent>
</div>


    </div>


  </div>
<div class="FQA-answer mb-md-2 d-block text-start" v-if="Q.isActive">{{Q.answer}}</div>
</div>
    </section>
  </div>
</template>

<script>
import ImageComponent from "@/components/entity/ImageComponent.vue";

export default {
  name: 'FQASection',
  props: {
    msg: String,
  },
  components: {
    ImageComponent

  },
  methods: {
    toggleActive: function (item) {
      const previousIsActive = item.isActive;
      this.closeAll();
      item.isActive = !previousIsActive; // Toggle the isActive property
    },
    handleClick() {

      console.log('Div clicked!');
    },
    closeAll() {
      this.FQA.forEach(item => {
        item.isActive = false;
      });
    }
  },
  data() {
    return {
      FQA: [
        {question:"How much does it cost to build a mobile app in the UAE?",answer:"It costs around 15,000 AED to 300,000 AED to build an app in the UAE.",isActive:false},
        {question:"How long does it take to build a mobile app in the UAE?", answer:"It typically takes around 4-6 months to build a mobile app in the UAE.",isActive:false},
        {question:"How can I choose the best mobile app development company in Dubai?", answer:"You can make an informed decision by looking into the Experience and Expertise, Portfolio Review, Communication and Client-Centricity, Development Process, Company Reputation, and Cost and Payment Structure.",isActive:false},
        {question:"How can I contact Technologies for my mobile app development project?", answer:"Simple fill the form and one of our representatives will connect with you shortly.",isActive:false},
        {question:"Which companies do Technologies make apps for?", answer:"Technologies caters to all of the industries despite their nature except for illegal industries. Hence you can get an app of healthcare, ecommerce, entertainment, technology, delivery, transport, fashion and many more!",isActive:false},
        ] ,
        openIcon:require('../../assets/card/open.webp'),
      closeIcon:require('../../assets/card/close.webp'),
    };
  },


}

</script>

<style>
.main-field{
  width: 100%;

  cursor:pointer;
  border-image:linear-gradient(90deg,var(--main-color),var(--second-color),var(--third-color)) ;
  transform-origin: top;
  -webkit-border-radius: 25px;
  background:
      linear-gradient(var(--light-color) 0 0) padding-box, /*this is your grey background*/
      linear-gradient(to right,var(--main-color),var(--second-color),var(--third-color)) border-box;
  color: var(--main-color);
  padding: 20px;
  border: 4px solid transparent;
  border-radius: 15px;
  display: inline-block;
}
.FQA{


}
.FQA-answer{
  width: 100%;
  padding: 20px;
  border: 4px solid;
  border-top: none;
margin-top: -7px;
  cursor:pointer;
  border-image:linear-gradient(90deg,var(--main-color),var(--second-color),var(--third-color)) 10;
  border-radius: 10px;
  animation: growDown .7s ease-in-out forwards;
  transform-origin: top;
}

@keyframes growDown {
  0% {
    transform: scaleY(0)
  }

  80% {
    transform: scaleY(1.1)
  }

  to {
    transform: scaleY(1)
  }
}
</style>
