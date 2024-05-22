
<template>
<div class="">
<div class="main-header ">
  <div class="d-flex justify-content-between ml-0 mr-0 p-0" >
  <div class="logo-space col-6 col-lg-2 col-md-2 col-sm-4">
    <div class="d-flex justify-content-center">
      <ImageComponent width="150px" :src="logo"/>

    </div>
  </div>
  <div class="menu-section col-6 d-flex ml-0 mr-0  p-0 d-none d-lg-block d-xl-none">

  </div>

  <div class="menu-section col-lg-2  col-md-3 d-flex ml-0 mr-0  p-0 col-sm-6 justify-content-end">
      <div class="col 8">

      <div class="detail">    <ImageComponent  width="25px" :src="flag"/>  +971(0)42233444</div>
      <div class="detail"> <ImageComponent  width="25px" :src="email"/> info@technologies.ae</div>
      <div class="detail"><ImageComponent  width="25px" :src="location"/> Dubai UAE</div>
    </div>

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
  box-shadow: 1px -1px 24px 0px rgba(181, 181, 181, 0.75);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
 width: 100%;
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
