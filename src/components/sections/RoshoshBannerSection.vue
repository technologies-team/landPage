<template>
  <div >
    <section class="container">
      <div class="row justify-content-center ">
        <h1 class="head-title white f-30 f-700 text-center">
         On Demand  Car Wash At Home         </h1>
        <div class="col-md-12">
          <h6 class="white font50 f-700 text-center">
         Download Roshosh App today get your car to glow it cleaves<br>
          call our car washers to your home to give your car a premium wash
          </h6>
          <p class=" white font16 f-400 text-center"></p>
          <div class="align-items-center gx-5 d-none d-lg-flex row justify-content-center ">
            <div class="col-md-2 mb-4 cards-section" v-for="(item, index) in imgItems" :key="index">
              <ImageComponent  :src="item.thumbnail" :width="item.width" />
            </div>
          </div>
        </div>
        <div class="col-12 row justify-content-center ">
          <div class="col-5 ">
            <PopupButtonComponent text="Your App, Our Expertise -  Let's Connect " pop-up="true" @click="modalOpenUpParent"  />


        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImageComponent from "@/components/entity/ImageComponent.vue";
import PopupButtonComponent from "@/components/entity/PupupButtonComponent.vue";
export default {
  name: 'RoshoshBannerSection',
  props: {
    msg: String,
    modalOpen:Function
  },
  methods:{
    modalOpenUpParent() {
      this.modalOpen(); // Call the parent function passed as a prop
    },
  },
  components: {
    PopupButtonComponent,
    ImageComponent
  },
  data(){
    return{
      imgItems: [
        {title:"",
          country:"",
          width:"175px",
          thumbnail: require('../../assets/roshosh/card/Layer 7.png'),
          description: ''
        },
        {title:"",
          width:"200px",
          thumbnail: require('../../assets/roshosh/card/Layer 4.png'),
          description: ''},
        {
          title:" ",
          width:"175px",
          thumbnail: require('../../assets/roshosh/card/Layer 6.png'),
          description: ''
        },

      ],
    }
  }



}

</script>

<style scoped>

.head-title{
  background-image:linear-gradient(90deg,var(--main-color) ,var(--second-color),var(--third-color));
  -webkit-background-clip: text;
  color: transparent;
  width: max-content;
  max-width:100%;

  font-size:32px;
  font-weight: 700;
}
</style>
