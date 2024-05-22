<script>
import ContactComponent from "@/components/entity/ContactComponent.vue";

export default {
  name: "TenSection",
  components: {ContactComponent},
  props:{
    modalOpenUp:Function,
    closeForm:Function
  },
  methods:{
    modalOpenUpParent() {
      this.modalOpenUp(); // Call the parent function passed as a prop
    },   closeFormParent() {
      this.closeForm(); // Call the parent function passed as a prop
    },
  }
}
</script>

<template>
  <div    v-motion
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
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-5 col-md-12 col-sm-12 text-start bg-color   row justify-content-center first-space m-0 mb-3">
<div class="row h-100 align-items-center">
<div>
  <h6 class="maz-font-semibold fw-bold col"> 30 Minutes Strategy Session</h6>
  <h4 class="f45  fw-bold ">
    Get Your Free Initial <br>
    Consultation With Us <br>
    Right Away From Our App<br>
    Development Experts<br>
  </h4>

</div>

</div>

        </div>

        <div class="col-lg-6 col-md-12 col-sm-12  d-flex flex-column gap-3">

          <ContactComponent :modalOpenUpParent="modalOpenUpParent" :closeForm="closeFormParent" />
      </div>

    </div>

  </div>
  </div>
</template>

<style scoped>
.f45{
  font-size: 35px;
}
.bg-color{
  background-color: var(--main-color);
  color:var(--light-color);
  border-radius: 25px;
  height: 387px;
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
.second-title {
  width: max-content;
  max-width:100%;

  background: linear-gradient(90deg, var(--main-color),var(--second-color),var(--third-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color:transparent;
  font-weight: 700;
}
.first-title{
color: var(--second-color);
  font-weight: 700;
}
</style>
