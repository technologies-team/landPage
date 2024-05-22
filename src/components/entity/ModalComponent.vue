<script>

import ClassicComponent from "@/components/entity/ClassicButton.vue";

export default {
  name: 'ContactComponent',
  components: {ClassicComponent},
  props: {
    modalCloseUp:Function,
    isShow: Boolean,
    header:String,
    message:String,
    buttonText:String,

  },
  data(){

  },
  methods: {
    modalCloseUpParent() {
      this.modalCloseUp(); // Call the parent function passed as a prop
    }
  },
}

</script>

<template>
  <div v-if="isShow" class="modal-mask " >
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <h1>{{header}}</h1>
        <p>{{message}}</p>
        <div class="d-flex justify-content-end">

          <classic-component @click="modalCloseUpParent" :text="buttonText" ></classic-component>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Please ❤ this if you like it! */
/* Follow Me https://codepen.io/designfenix */
/**/
/**/
/**/
/**/
/**/
/**/
/**/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
:root {
  --vs-primary: 29 92 255;
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
  width: 300px;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
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
