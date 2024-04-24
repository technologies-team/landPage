<template>
  <div>
    <section >
      <div style="display: none">
        <FiveSection :slides="slides" :interval="3000" />


      </div>

      <MainSection :slides="slides" :interval="3000" Head="Mobile Apps"
      description="We are a 25 years old mobile app development company in Dubai, dedicated to creating simple, easy to use and user-friendly apps. Get 10x more conversions for your business now and let your user fall in love with you through the app!."
      />
      <SecondSection :slides="slides" :interval="3000" />
      <ThirdSection :slides="slides" :interval="3000" />
      <FourthSection :slides="slides" :interval="3000" />
      <SixSection :slides="slides" :interval="3000" />
      <SevenSection :slides="slides" :interval="3000" />
      <EightSection :slides="slides" :interval="3000" />
      <NineSection :slides="slides" :interval="3000" />
      <TenSection :slides="slides" :interval="3000" />
      <FirstSection  :slides="slides" :interval="3000"/>
      <FQASection :slides="slides" :interval="3000" />

    </section>
  </div>
</template>

<script>

import SecondSection from './sections/SecondSection.vue';
import MainSection from './sections/MainSection.vue';
import ThirdSection from './sections/ThirdSection.vue';
import FourthSection from './sections/FourthSection.vue';
import SixSection from './sections/SixSection.vue';
import SevenSection from './sections/SevenSection.vue';
import NineSection from './sections/NineSection.vue';
import FiveSection from './sections/FiveSection.vue';
import FQASection from './sections/FQASection.vue';
import EightSection from './sections/EightSection.vue';
import TenSection from "@/components/sections/TenSection.vue";
import FirstSection from "@/components/sections/FirstSection.vue";
export default {
  name: 'LandPage',
  props: {
    msg: String,
  },
  components: {
    FirstSection,
    TenSection,
    MainSection,
    SecondSection,ThirdSection,FourthSection,FiveSection,SixSection,SevenSection,FQASection,EightSection,NineSection
  },

  data() {
    return {
      slides: ['Slide 1', 'Slide 2', 'Slide 3','Slide 4', 'Slide 25', 'Slide 6'] // Add your slide content here
    };
  }
}

</script>

<style>


.container{
  margin-top: 50px;
  margin-bottom: 50px;
}


.slideTrack {
  width: calc(150px* 20);
  display: flex;
  animation: scroll 20s linear infinite;
  justify-content: space-between;
}

.head-title {
  font-size: 58px;
  text-align: start;
  font-weight: 700;
}

.title-desc {
font-size: 65px;
text-align: start;

  font-family: sans-serif;
  background: linear-gradient(to right, rgba(255, 215, 255, 0) 0%, rgba(225, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0) 61%), linear-gradient(rgb(97, 183, 217) 52%, rgb(224, 246, 255) 60%, rgb(78, 99, 132) 61%);
  /* you rgba(92, 45, 92, 0)  /*add this line, it defines how far the background should extend within an element, here we set it to text */
  -webkit-background-clip: text;
  /* add this line, for browsers compatibility */
  -webkit-text-fill-color: transparent;
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
