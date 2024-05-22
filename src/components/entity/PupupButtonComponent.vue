<template>
  <div class="popup-button">
    <button v-bind:name=name class=" btn btn-primary  btn-standard m-1 w-100" @click="modalOpen">
      {{ text }}
    </button>

  </div>
</template>

<script>
import axios from "axios";
import { provide } from 'vue';

export default {
  name: 'PopupButtonComponent',
  components: {},
  props: {
    text: String,
    fieldName: String,
    placeholder: String,
  }
  ,data(){
    return {
      isShow:false
    }
  },  setup() {
    const modalclose = () => {
      console.log("here")
      this.isShow=false    };

    provide('handleEvent', modalclose);

    return {};
  },
  methods: {
    submitForm() {
      this.isLoading=true
      axios.post('/contact', this.formData)
          .then(response => {
            // Handle success
            this.isLoading=false
            this.isShow=false
            this.header="success!"
            this.message="We received your application and will contact you shortly."
            console.log(response)

          })
          .catch(error => {
            this.isLoading=false
            this.isShow=false
            this.header="error"
            this.message=error
            console.error(error);

          });
    }
  },
}
</script>

<style scoped>
.btn-standard {
  min-height: 55px;
  background:linear-gradient(90deg, var(--second-color),var(--third-color));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 10px;
  border: unset;
  font-weight: 700;

}
.popup-button{
  width: max-content;
  max-width:100%;

}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
