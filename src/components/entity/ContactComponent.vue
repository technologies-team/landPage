<script >

import TextAria from "@/components/TextArea.vue";
import classicButton from "@/components/entity/ClassicButton.vue";
import InputField from "@/components/InputField.vue";
import LoadingComponent from "@/components/entity/LoadingComponent.vue";
import axios from "axios";

import emailjs from 'emailjs-com';


export default {
  name: 'ContactComponent',
  components: {LoadingComponent, InputField,TextAria,classicButton},
  props: {
    modalOpenUpParent: Function,
    closeForm: Function,


  },
  data(){
    return{
      dynamicForm: null, // Variable to store the form element

      phone:"",
      error:false,
      inputValue:"",
      email:"",
      isOpen:false,
      emailUsername:"ppc@technologies.ae",
      emailPassword:"technologies@2024",
      isLoading:false,
      header:"",
      message:"",
      buttonText:"ok",
      recipient: 'muhammadqanah.1997@gmail.com',
      subject: 'FSFS',

    }
  },
  methods: {
    sendEmail(e) {
      try {
        const form = this.$refs.dynamicForm;
        console.log(e);
        emailjs.sendForm('service_q3vyjef', 'template_ewa20ug', form,
            'vk1DfBHAkna7JEF2s', {
              name: this.name,
              email: this.email,
              message: this.message
            })

      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
      isValidEmail() {
        return /^[^@]+@\w+(\.\w+)+\w$/.test(this.email);

      }
    ,
    handelEmail(value) {
      this.email = value; // Update inputValue in parent component
    }, handelName(value) {
      this.name = value; // Update inputValue in parent component
    }, handelMessage(value) {
      this.message = value; // Update inputValue in parent component
    }, handelPhone(value) {
      this.phone = value; // Update inputValue in parent component
    },
    mounted() {
      // Assign the form element to the dynamicForm variable
      this.dynamicForm = this.$refs.dynamicForm;
    },
    submitForm() {

      if(this.email==null||this.name==null||this.phone==null){
  this.error=true;
  console.log("empty")
  return 0;
}
if(!this.isValidEmail(this.email)){
  this.error=true;
}
      this.error=false;
this.sendEmail(this);
      console.log(this.email)

      this.isLoading=true;
     this.isLoading=true
      axios.post('/contact', this.formData)
          .then(response => {
            // Handle success
            this.isLoading=false
            this.isOpen=true
            this.header="success"
            this.closeForm();
            this.header="we receive your message"
            console.log(response)
            this.modalOpenUpParent();
            this.$router.push("/thankyou");

          })
          .catch(error => {
            this.modalOpenUpParent();

            this.closeForm();
            this.isLoading=false
            this.isOpen=true
            this.header="success"
            this.message="we receive your message"
            console.error(error);
            this.$router.push("/thankyou");
          });
    }
    },
}
</script>
<template>
  <div  class=" second-space d-flex flex-column position-relative  overflow-hidden">
    <LoadingComponent v-if="isLoading" />
    <h2 class="first-title text-start">Get Free App Consultation
    </h2>
    <form id="contactForm"  @submit.prevent  ref="dynamicForm">
    <div class="p-3 mb-2 bg-danger text-white" v-if="error">Fill All Form Fields </div>
    <InputField class="input-field"  :inputValue="name" fieldName="name" type="text" placeholder="Full Name" @input="handelName" />
    <InputField class="input-field required" :inputValue="email" value="email" fieldName="email" type="email" placeholder="Email" @input="handelEmail" />
    <InputField class="input-field required" :inputValue="phone" fieldName="phone" type="number" placeholder="Phone Number" @input="handelPhone" />
    <div class="text-area-parent">
      <TextAria class="required" fieldName="message" placeholder="Comment" @input="handelMessage"/>
    </div>
    </form>
    <div class="row justify-content-end">


      <classicButton  @click="submitForm()" class="col-3" name="submit" text="submit" />

      <div class="col-1"></div>
    </div>
  </div>


</template>

<style scoped>

.first-title{
  color: var(--second-color);
  font-weight: 700;
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
.second-space{
background-color: var(--light-color);
  border: 3px solid var(--main-color);
  border-radius: 30px;
  padding: 50px 20px 20px;
  box-shadow: 0 7px 29px 0 var(--main-color);
}
.overflow-hidden{
  overflow: hidden;
}

</style>
