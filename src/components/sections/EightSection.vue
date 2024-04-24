<template>
  <div >
    <div class="container">
      <div class="row">
        <div class="col">
         <h1 class="head-title">
           Why Choose Us
         </h1>
<h2 class="head-title text-start">
  For Your Mobile App
  <br>
  Development Needs?
</h2>
<p class="text-start p-font">

  Our<span class="highlighted"> mobile app development services </span>turn your innovative ideas into success stories by
  <br>crafting apps that stand out in the market. While you<span class="highlighted"> focus on your business</span>, Bitswits will<br>
  le the technical aspects of developing your app.<br>
</p>
          <p class="text-start p-font ">
            Did you know that a<span class="highlighted"> poorly developed app </span>can negatively impact your brand's reputation?<br>
            That's a risk you don't want to take. But with Bitswits, there's no need to worry. We ensure
            <br>your app functions seamlessly and enhances your brand's digital presence.<br>
          </p>
          <p class="text-start p-font">
            Unlike<span class="highlighted"> Mobile app development firms</span>, we don't believe in a one-size-fits-all approach<br>. We understand that the reason behind
            an underperforming app often lies in its<br> development and user experience. That's where our expertise comes into
            play. With a <br><span class="highlighted">team of seasoned mobile app developers</span>, the latest technological resources, and a<br> bespoke development strategy.
          </p>
          <p class="text-start p-font">
            Every app we develop undergoes thorough quality checks to ensure <span class="highlighted">IT'S NOT JUST <br>GOOD, BUT GREAT.</span>
</p>
          <div class="col-12 ">
            <classicButton text="Choose Expertise, Choose Bitswits – Let's Get Started" />
          </div>
        </div>
        <div class="col second-space">
          <ImageComponent></ImageComponent>

          <div class="align-items-center gx-5 d-none d-lg-flex row ">
            <div class="col-md-4 mb-3 cards-section" v-for="(item, index) in imgItems" :key="index">
              <SmallCardComponent :title=item.title :description="item.description" :url="item.thumbnail" />
            </div>
          </div></div>
      </div>

    </div>

  </div>
</template>

<script>
import ImageComponent from "@/components/entity/ImageComponent.vue";
import SmallCardComponent from "@/components/SmallCardComponent.vue";
import classicButton from "@/components/entity/ClassicButton.vue";
export default {
  name: 'SevenSection',
  props: {
    msg: String,
  },
  components: {
    classicButton,
    SmallCardComponent
    ,ImageComponent},
  data(){
    return{
      imgItems: [
        {title:"Experienced\n" +
              "Professionals",
          thumbnail: require('../../assets/icon/icon1.webp'),
          description: ''
        },  {title:"On-Time\n" +
              "Delivery",
          thumbnail: require('../../assets/icon/icon2.webp'),
          description: ''
        },  {title:"Cost-Effective\n" +
              "Solutions",
          thumbnail: require('../../assets/icon/icon3.webp'),
          description: ''
        },  {title:"Scalable and\n" +
              "Secure Apps",
          thumbnail: require('../../assets/icon/icon4.webp'),
          description: ''
        },  {title:"User-Centric <br>" +
              "Design",
          thumbnail: require('../../assets/icon/icon5.webp'),
          description: ''
        },  {title:"Customized\n" +
              "Development",
          thumbnail: require('../../assets/icon/icon6.webp'),
          description: ''
        },  {title:"Error-Free <br>" +
              "Delivery",
          thumbnail: require('../../assets/icon/icon7.webp'),
          description: ''
        },  {title:"Transparent\n" +
              "Communication",
          thumbnail: require('../../assets/icon/icon8.webp'),
          description: ''
        },  {title:"Support and\n" +
              "Maintenance",
          thumbnail: require('../../assets/icon/icon9.webp'),
          description: ''
        },


      ],
    }
  }



}

</script>

<style scoped>
.head-title{
  color:var(--main-color);
  font-size:32px;
  font-weight: 700;
}
.second-title{
  font-weight: 700;

}
.p-font{
  font-size: 14px;
}
.highlighted{
  color:#f32f53;
}
.second-space{
  background-image: url("~@/assets/bg-image.png");
  background-repeat: no-repeat;
  background-size: 100%;
}

</style>

