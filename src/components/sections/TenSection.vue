<script>
import InputField from "@/components/InputField.vue";
import classicButton from "@/components/entity/ClassicButton.vue";
import TextAria from "@/components/TextArea.vue";

export default {
  name: "TenSection",
  components: {InputField, TextAria ,classicButton}
}
</script>

<template>
  <div >
    <div class="container">
      <div class="row align-items-center">
        <div class="col text-start bg-color   row justify-content-center first-space">
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

        <div class="col second-space d-flex flex-column gap-3">
        <h2 class="first-title text-start">Have a Project To Discuss?
        </h2>
          <h1 class="second-title text-start">We're Ready!</h1>
          <InputField class="input-field" fieldName="name" placeholder="name" />
          <InputField class="input-field" fieldName="name" placeholder="name" />
          <InputField class="input-field" fieldName="name" placeholder="name" />
          <InputField class="input-field" fieldName="name" placeholder="name" />
          <div class="text-area-parent">
          <TextAria fieldName="name" placeholder="name" />
          </div>
          <div class="row justify-content-end">

            <classicButton  class="col-3" name="submit" text="submit"></classicButton>

            <div class="col-1"></div>
          </div>
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
.second-space{

  border: 3px solid var(--main-color);
  border-radius: 30px;
  padding: 50px 20px 20px;
  box-shadow: 0 7px 29px 0 var(--main-color);
}
.first-space{
  margin: 2%;
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
