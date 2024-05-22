
<template>
  <div class="">
    <div class="main-header d-flex justify-content-center align-items-center ml-0 mr-0 p-0">
      <div class="row justify-content-center w-75" >
        <div class="logo-space col-lg-8 col-md-12 col-sm-12 col-12">
          <div class="d-flex  justify-content-center flex-column">

            <ImageComponent width="150px" :src="logo"/>
            <div>
              Pioneering mobile app development for the past 25 years, Technologies is a leading UAE force in making innovative applications. We bring a quarter-century of expertise to build the tools that will power your business into the future.
            </div>

          </div>
        </div>


        <div class="menu-section col-lg-4  col-md-12 col-sm-12 col-12 d-flex ml-0 mr-0  p-0">
          <div class="menu-item col">
            <div class="col">

              <p class="detail">    <ImageComponent  width="25px" :src="flag"/>  +971(0)42233444</p>
              <p class="detail"> <ImageComponent  width="25px" :src="email"/> info@technologies.ae</p>
              <div class="d-flex"><p class="detail"><ImageComponent  width="25px" :src="location"/>  </p><p class="detail">Al-Mamzer Al-Raihan Building office 27</p>
              </div></div></div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ImageComponent from "@/components/entity/ImageComponent.vue";
export default {
  props: {
    scroll: { type: Function }
  },
  components: {  ImageComponent},

  data() {
    return {
      logo:require("@/assets/icon/logo/Logo-white.png"),
      flag:require("@/assets/icon/flag/united-arab-emirates.png"),
      email:require("@/assets/icon/gmail.png"),
      location:require("@/assets/icon/map.png"),
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.detail{
  font-size: 16px;
}
.main-header{
  background-color: var(--main-color);
  color: var(--light-color);
  width: 100%;
  border-top: 3px solid;
  min-height: 275px;
}
.menu-item{
  font-size: 20px;
  font-weight: 700;
  display: flex;
  /* align-content: center; */
  justify-content: center;
  align-items: center;
}
.menu-item:hover{
  transition: 0.3s ease-in-out;
  transform: scale(1.05);
  cursor: pointer;

}
</style>
