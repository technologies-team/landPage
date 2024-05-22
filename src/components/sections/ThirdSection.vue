<template>
  <div   v-motion
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
    <section class="container data-mdb-lazy-load-init">


      <div class="row  ">
        <div class="col-md-12">
          <h3 class="white f-40 f-700 text-center mb-4 ">
            Our Expert Mobile App Development Services In Dubai          </h3>

          <p class=" white font25 f-400 text-center mb-5">Our mobile app development agency in the UAE offers one of a kind services. Here's what we offer:</p>
          <div class="align-items-center gx-5 d-none d-lg-flex row ">
            <div class="col-1g-4 col-md-4 col-sm-6 mb-3 cards-section" v-for="(item, index) in imgItems" :key="index">
              <div class="">
                <SmallCardComponent  :title=item.title   :url="item.thumbnail" :width="item.width" :description="item.description" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 row justify-content-center mt-4 ">
          <div class="row ">

            <h1 class="head-title text-center f-30">
              {{Head}}
            </h1>
            <div>

            </div>
            <div class="p-3 mb-2 bg-danger text-white" v-if="error">Fill All Form Fields </div>
            <div class="col-md-12 mt-4 ">
              <div class="row justify-content-center">
                <form  class="col-md-9 col-sm-12 row  px-0" id="contactForm"  @submit.prevent  ref="dynamicForm">
                <div class="col-md-4 col-sm-12 col-lg-4  d-flex justify-content-center">
                  <InputField  class="input-field"  :inputValue="name" fieldName="name" type="text" placeholder="Full Name" @input="handelName" />
                </div>
                <div class="col-md-4  col-sm-12  d-flex justify-content-center">
                  <InputField   :inputValue="email" value="email" fieldName="email" type="email" placeholder="Email" @input="handelEmail"  />
                </div>
                <div class="col-md-4 col-sm-12 d-flex justify-content-center">
                  <InputField :inputValue="phone" fieldName="phone" type="number" placeholder="Phone Number" @input="handelPhone"/>
                </div>
                </form>
                <div class="col-md-3 px-0">
                  <ButtonComponent text="SUBMIT" @click="submitForm()" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SmallCardComponent from "@/components/CardComponent.vue";
import ButtonComponent from "@/components/entity/ButtonComponent.vue";
import InputField from "@/components/InputField.vue";
import emailjs from "emailjs-com";
import axios from "axios";
export default {
  computed: {
    pageSize() {
      if(window.innerWidth >= 1024){
        return 3;
      }
      else return 2;

    }
  },
  name: 'ThirdSection',
  props: {
    msg: String,
    Head: {
      type: String,
      default: "",

    },
    modalOpenUp:Function,
    closeForm:Function
  },
  components: {
    InputField, ButtonComponent,
    SmallCardComponent,

  },

  data() {
    return {
      imgItems: [
        {title:"Android",
          thumbnail: require('../../assets/card/service/android-01-01.png'),
          width:"75px",
          description: 'Breathe life into your Android vision with Kotlin and the Android Studio. Deliver exceptional experiences across all devices.'
        },
        {title:"IOS",
          thumbnail: require('../../assets/card/service/apple-01-01.png'),
          width:"75px",

          description: 'Make innovative iOS apps with Swift and Xcode. Build the future with cutting-edge technologies like AR/VR and AI.'
        },
        {
          title:"Flutter",
          thumbnail: require('../../assets/card/service/Flutter-01.png'),
          width:"60px",

          description: 'Flutter it up! Get stunning apps for iOS, Android, and web - all from one codebase. Build beautiful, blazing-fast apps for any device.'
        },
        {title:"Web",
          thumbnail: require('../../assets/card/service/web-01.png'),
          width:"75px",

          description: 'Forge dynamic web applications that captivate users. We leverage the latest frameworks to build secure and scalable solutions.'
        },
        {title:"Hybrid",
          thumbnail: require('../../assets/card/service/Hybrid-01.png'),
          width:"75px",

          description: 'Streamline mobile development. Build cross-platform apps with web technologies and native features.'
        },
        {title:"Native",
          thumbnail: require('../../assets/card/service/Native-01.png'),
          width:"75px",

          description: 'Dive deep into native development. Get high-performance apps that unlock the full potential of each device.'
        }
      ],
      dynamicForm: null, // Variable to store the form element

      phone: "",
      error: false,
      inputValue: "",
      email: "",
      isOpen: false,
      emailUsername: "ppc@technologies.ae",
      emailPassword: "technologies@2024",
      isLoading: false,
      header: "",
      message: "",
      buttonText: "ok",
      recipient: 'muhammadqanah.1997@gmail.com',
      subject: 'FSFS',

    }
  },
  methods: {
    modalOpenUpParent() {
      this.modalOpenUp(); // Call the parent function passed as a prop
    },   closeFormParent() {
      this.closeForm(); // Call the parent function passed as a prop
    },
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

      } catch (error) {
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
      if (this.email == null || this.name == null || this.phone == null) {
        this.error = true;
        console.log("empty")
        return 0;
      }
      if (!this.isValidEmail(this.email)) {
        this.error = true;
      }
      this.error = false;
      this.sendEmail(this);
      console.log(this.email)

      this.isLoading = true;
      this.isLoading = true
      axios.post('/contact', this.formData)
          .then(response => {
            // Handle success
            this.isLoading = false
            this.isOpen = true
            this.header = "success"
            this.closeForm();
            this.header = "we receive your message"
            console.log(response)
            this.modalOpenUpParent();
            this.$router.push("/thankyou");


          })
          .catch(error => {
            this.modalOpenUpParent();

            this.closeForm();
            this.isLoading = false
            this.isOpen = true
            this.header = "success"
            this.message = "we receive your message"
            console.error(error);
            this.$router.push("/thankyou");

          });
    }
  },
}

</script>

<style scoped>
.standard-input-filed{
  width: 100% !important;
}
.f-40{
  font-size: 40px;
}.f-25{
  font-size: 25px;
}
 .f-30{

  font-size: 30px;
 }
</style>
