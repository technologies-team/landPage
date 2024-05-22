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
    <section class="container mt-0">
      <div class="row  ">
        <div class="col-md-12">
          <h3 class="white f-40 f-700 text-center mb-4 ">
Industries We Are Working In
          </h3>

          <div class="align-items-center gx-5 d-none d-lg-flex row justify-content-center">
            <div class="col mb-3 cards-section" v-for="(item, index) in imgItems.slice(0, 5)" :key="index">
                <SmallCardComponent  :title=item.title   :url="item.thumbnail" :width="item.width" :description="item.description" />
            </div>
          </div>
          <div class="align-items-center gx-5 d-none d-lg-flex row justify-content-center">
            <div class="col mb-3 cards-section" v-for="(item, index) in imgItems.slice(5, 10)" :key="index">
              <SmallCardComponent  :title=item.title   :url="item.thumbnail" :width="item.width" :description="item.description" />
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

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SmallCardComponent from "@/components/CardComponent.vue";
export default {
  name: 'IndustrySection',
  props: {
    msg: String,
    Head: {
      type:String,
      default:""
    },
  },
  components: {
    SmallCardComponent,

  },
data(){
    return{
      imgItems: [
        {title:"E-commerce",
          thumbnail: require('../../assets/card/industry/E-commerce.png'),
          width:"75px",
          description: ''
        },
        {title:"Transport",
          thumbnail: require('../../assets/card/industry/Transport.png'),
          width:"75px",

          description: ''
        },
        {
          title:"Healthcare",
          thumbnail: require('../../assets/card/industry/Healthcare.png'),
          width:"60px",

          description: ''
        },
        {title:"Education",
          thumbnail: require('../../assets/card/industry/Education.png'),
          width:"75px",

          description: ''
        },
        {title:"Banking",
          thumbnail: require('../../assets/card/industry/finance.png'),
          width:"75px",

          description: ''
        },     {title:"Fashion",
          thumbnail: require('../../assets/card/industry/Fashion.png'),
          width:"75px",

          description: ''
        },
        {title:"Business",
          thumbnail: require('../../assets/card/industry/Business.png'),
          width:"75px",

          description: ''
        }
        , {title:"IT",
          thumbnail: require('../../assets/card/industry/IT.png'),
          width:"75px",

          description: ''
        }
        ,  {title:"Food",
          thumbnail: require('../../assets/card/industry/Food.png'),
          width:"75px",

          description: ''
        }
        ,{title:"Retail",
          thumbnail: require('../../assets/card/industry/Retail.png'),
          width:"75px",
          description: ''
        }
      ],
    }
  }



}

</script>

<style scoped>
.f-40{
  font-size: 40px;
}.f-25{
  font-size: 25px;
}
 .f-30{

  font-size: 30px;
 }
</style>
