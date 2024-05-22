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
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-4  col-sm-12 col-md-12 left-side">
          <h1 class="head-title">
            Why should you get  <br>an app for your business?          </h1>
          <p class="p-description fw-400 text-start">
            UAE's tech boom means apps are king for <br>
           businesses. Don't miss out on millions - <br>
            get your app today! Here’s why you should <br>
            hire a mobile app development company in<br>
            Dubai Development Needs?
          </p>

          <p class="text-start p-font">
            <span class="highlighted">&#x2022; Competitive Advantage</span>
          </p>
          <p class="text-start p-font">
            <span class="highlighted">&#x2022; Better Customer Service </span></p>
          <p class="text-start p-font">

          <span class="highlighted">&#x2022; Improved Customer Engagement </span></p>

          <p class="text-start p-font">
            <span class="highlighted">&#x2022; Increased Sales and Revenue</span></p>
          <p class="text-start p-font">

            <span class="highlighted">&#x2022; Increased Visibility and Brand Recognition </span>

          </p>

          <div class="col-12 ">
              <PopupButtonComponent text="LET'S TALK" @click="modalOpenUpParent" />
          </div>
        </div>
        <div class="col-lg-5  col-sm-12 col-md-12 second-space">
          <ImageComponent :src=imgItem width="100%"/>
       </div>
      </div>

    </div>

  </div>
</template>

<script>
import ImageComponent from "@/components/entity/ImageComponent.vue";
import PopupButtonComponent from "@/components/entity/PupupButtonComponent.vue";
export default {
  name: 'FirstSection',
  props: {
    msg: String,
    modalOpen:Function
  },
  components: {
    PopupButtonComponent,
    ImageComponent},
  methods:{
    modalOpenUpParent() {
      this.modalOpen(); // Call the parent function passed as a prop
    },
  },
  data(){
    return{
      imgItem: require('../../assets/section/side-photo-3.png')
    }
  }



}

</script>

<style scoped>
.p-description{
  font-size: 18px;
}
.left-side{
  height: max-content;
  max-width:100%;

}
.head-title{
  background-image:linear-gradient(90deg,var(--main-color) ,var(--second-color),var(--third-color));
-webkit-background-clip: text;
  color: transparent;
  width: max-content;
  max-width: 100%;
  font-size:32px;
  font-weight: 700;
}
.second-title{
  font-weight: 700;

}
.title{
  font-size: 20px;
}
.p-font{
  font-size: 18px;
}
.highlighted{
  color:var(--primary-text);
}
.second-space{
  background-repeat: no-repeat;
  background-size: 100%;
}

</style>

