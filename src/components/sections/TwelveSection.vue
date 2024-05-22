<template>
  <div >
    <section class="container">
      <div class="row justify-content-center ">

        <h3 class="white f-30 f-700 text-center head-title">
          App Development Hurdles?
        </h3>
        <div class="col-md-12">
          <div >
            <div class="row justify-content-center">
              <ImageComponent class="main-photo col-5" width="100%" :title=title :description="description" :src="thumbnail" />

            </div>

          </div>
        </div>
        <div class="col-12 row justify-content-center ">
          <div class="col-5 row justify-content-center ">
            <classicButton text="Talk To An Expert" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import classicButton from './../entity/ClassicButton.vue'
import ImageComponent from "@/components/entity/ImageComponent.vue";
export default {
  name: 'TwelveSection',
  props: {
    msg: String,
  },
  components: {
    ImageComponent
    ,classicButton
  },
  data(){
    return{
        title:"process",
          thumbnail: require('../../assets/Hurdles.png'),
          description: ''



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
  background: linear-gradient(90deg, var(--main-color), var(--second-color), var(--third-color));
  color: transparent;
  -webkit-background-clip: text;
}
.main-photo{
  width: 100%;
  margin: auto;
}
</style>
