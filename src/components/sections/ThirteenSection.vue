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
    <section class="container">
      <div class="row justify-content-center mx-auto ">
        <h3 class="head-title white f-30 f-700 text-center">
          What People Say About Us         </h3>
        <div class="col-md-12">
          <h2 class="white font50 f-700 text-center">
            All Over The UAE
          </h2>
          <p class=" white font16 f-400 text-center"></p>
          <div class="align-items-center gx-5  d-lg-flex row justify-content-center ">
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4 cards-section" v-for="(item, index) in imgItems" :key="index">
              <CardComponent :title=item.title :description="item.description" :url="item.thumbnail" />
            </div>
          </div>
        </div>
        <div class="col-12 row justify-content-center ">
          <div class="col-12 col-lg-3 col-md-4 col-sm-6 row justify-content-center">
          <PopupButtonComponent text=" Let's Talk "  @click="modalOpenUpParent"/>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardComponent from './../CardReviewComponent.vue'
import PopupButtonComponent from "@/components/entity/PupupButtonComponent.vue";
export default {
  name: 'ThirteenSection',
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
    CardComponent
  },
  data(){
    return{
      imgItems: [
        {title:"Zayd bin Faisal",
          country:"",
          thumbnail: require('../../assets/card/comments/1.png'),
          description: 'I worked with Technologies to develop\n' +
                       'my fitness app,and I couldn\'t be happier! \n' +
                       'They took my idea and turned it into a  \n' +
                       'user-friendly app that\'s already getting  \n' +
                        'amazing feedback. Highly recommend it!  \n'
        },
        {title:"Omar Khalil",
          thumbnail: require('../../assets/card/comments/3.png'),
          description: 'Technologies made the whole app development process so smooth. They were always available to answer my questions and kept me updated on progress. My app launched ahead of schedule and is a huge hit with my customers!'
        },
        {
          title:"Karim Amin",
          thumbnail: require('../../assets/card/comments/2.png'),
          description: 'These guys are the best! They don\'t just build apps, they build partnerships. They\'re invested in the success of my app just as much as I am.'
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
  max-width: 100%;
  font-size:32px;
  font-weight: 700;
}
</style>
