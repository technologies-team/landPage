<script>

import ContactComponent from "@/components/entity/ContactComponent.vue";
import { inject } from 'vue';
export default {
  name: 'ModalContactComponent',
  components: { ContactComponent},
  props: {
    isOpen: Boolean,
    header:String,
    message:String,
    buttonText:String,
    modalOpenUp:Function,
    closeForm:Function

  },
  data: function() {
    return {
      isOpenStatus: true
    };
  },
  methods: {

    modalOpenUpParent() {
      this.modalOpenUp(); // Call the parent function passed as a prop
    },   closeFormParent() {
      this.closeForm(); // Call the parent function passed as a prop
    },
    close() {
      console.log('Clock this');
      this.isOpenStatus = false;
    }
  },

  setup() {
    const handleEvent = inject('close-up-modal');

    return {
      handleEvent
    };
  }
}

</script>

<template>
  <div class="modal-mask" v-if="isOpen" >
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">


        <h1>{{header}}</h1>
        <p>{{message}}</p>
        <div class="d-flex justify-content-center position-relative form-popup">
          <div class="text-end cursor-pointer" @click="closeFormParent()"> &#10006;</div>
          <ContactComponent :modalOpenUpParent="modalOpenUpParent" :closeForm="closeFormParent" >

          </ContactComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
:root {
  --vs-primary: 29 92 255;
}
.form-popup{
  width: max-content;
  max-width:100%;

  margin: auto;
}
.cursor-pointer{
  cursor: pointer;
  height: max-content;
  /* margin-left: 20px; */
  position: absolute;
  top: 25px;
  z-index: 1;
  right: 30px;
  font-size: 28px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal-container {
  width: 80%;
  margin: 150px auto;
  padding: 20px 30px;
  border-radius: 25px;
}
.modal-container:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .6;
  z-index: -1;
  background-color:var(--main-color);

}
</style>
