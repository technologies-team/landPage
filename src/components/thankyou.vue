<template>
  <div>
    <section >

      <div>
        <ThankYouSection :isOpen="isOpen" @submitForm="submitForm" Head="Thank you For Your Form Submission" :modalOpenUp="modalOpenUp" :closeForm="closeForm"
                     description="we will answer you shortly ."/>
      </div>
    </section>
  </div>
</template>
<script>


import axios from "axios";
import {provide} from "vue";
import ThankYouSection from "@/components/sections/ThankYouSection.vue";
export default {


  name: 'ThankYou',
  props: {
    msg: String,
  },
  components: {
    ThankYouSection,
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
