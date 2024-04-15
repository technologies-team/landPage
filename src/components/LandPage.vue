<template>
  <div>
    <section class="section">
      <div class="row">
        <div class="col-md-6">
          <h1 class="head-title">
            {{ msg }}
          </h1>
          <div class="title-desc">
            Mobile Apps
          </div>
          <div class="description">
            We are a 25 years old mobile app development company in Dubai, dedicated to creating simple, easy to use and user-friendly apps. Get 10x more conversions for your business now and let your user fall in love with you through the app!

            .
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-row">
            <InputField fieldName="name" placeholder="name" />
            <InputField fieldName="email" placeholder="email" />
          </div>


         <SelectorComponent></SelectorComponent>
          <div>
            <TextArea fieldName="message" placeholder="Message" />

          </div>
          <div class="row pr-30">
            <div class=" col-md-1"></div><button class="submit-button col-md-3 mt-3">submit</button>
          </div>
        </div>
      </div>

    </section>
    <section >
      <SecondSection :slides="slides" :interval="3000" />
      <ThirdSection :slides="slides" :interval="3000" />
      <FourthSection :slides="slides" :interval="3000" />
      <FiveSection :slides="slides" :interval="3000" />
    </section>
  </div>
</template>

<script>
import InputField from './InputField.vue'
import TextArea from './TextArea.vue'
import SecondSection from './sections/SecondSection.vue';
import ThirdSection from './sections/ThirdSection.vue';
import FourthSection from './sections/FourthSection.vue';
import FiveSection from './sections/FiveSection.vue';
import SelectorComponent from './entity/SelectorComponent.vue';


export default {
  name: 'LandPage',
  props: {
    msg: String,
  },


  components: {
    InputField,
    TextArea,SecondSection,ThirdSection,SelectorComponent,FourthSection,FiveSection
  },

  data() {
    return {
      slides: ['Slide 1', 'Slide 2', 'Slide 3','Slide 4', 'Slide 25', 'Slide 6'] // Add your slide content here
    };
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>




.section {
  animation: scroll 20s linear infinite;
  max-width: 1300px;
  margin: auto;
  color:#ffffff;
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






.submit-button:hover {
  transform: translateY(-6px);
  transition-duration: 0.6s;
}

.submit-button {
  border: none;
  cursor: pointer;
  border-radius: 42px;

  height: 40px;
  background-image: linear-gradient(90deg, #5ce4ff 0%, #e5c349 100%);

  ;

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
