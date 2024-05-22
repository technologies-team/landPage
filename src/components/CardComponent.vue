<template>
  <div class="row card-content  p-1  direction-column justify-content-around pt-4">
    <div class="col-lg-12 row justify-content-center" >
      <div class=" img-container">

        <ImageComponent v-bind:src=url  v-bind:width=width alt=""/>

      </div>
    </div>
    <p class="h-title font18 white fw700 text-center">{{title}}</p>

      <div class="col-lg-12  row justify-content-center">

    <p class=" font18 white fw700 text-center p-description" v-if="description">{{description}}</p>

  </div>


  </div>
</template>

<script>
import ImageComponent from "@/components/entity/ImageComponent.vue";

export default {
  name: 'InputField',
  components: {ImageComponent},
  props: {
    title: String,
    description: String,
    url: String,
    width: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-container{
  width: max-content;
  max-width:100%;
}
.card-content:hover{
  transition: 0.3s ease-in-out;
  border-radius: 30px;
  -webkit-box-shadow: 1px -1px 24px 0px rgba(181, 181, 181, 0.75);
  -moz-box-shadow: 1px -1px 24px 0px rgba(181, 181, 181, 0.75);
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0 7px 29px 0 var(--main-color);

}
.card-content{
  min-height: max-content;

  box-shadow: 1px -1px 24px 0px rgba(181, 181, 181, 0.75);

}
.h-title{
  font-size:18px ;
  font-weight: 700;
}
.p-description{
  font-size: 16px;
}
.card-content{
  justify-content: center;align-items: center;

  border-radius: 15px;
  text-align: start;
  color:var(--main-color)
;
  transition: all 1s ease-out;
}
.card-content:hover{
}
</style>
