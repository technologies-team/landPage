<template>
  <div class="row card-content  justify-content-center p-1">

    <div class="d-flex align-items-center flex-column align-content-center ">

      <img  class="m-3" v-bind:src=url  alt=""/>
      <h3 class="h-title white fw600 text-center">{{title}}</h3>
      <p class="font12 white fw400 p-description"> {{description}}</p>
    </div>


  </div>
</template>

<script>
export default {
  name: 'SmallCardComponent',
  props: {
    title: String,
    description: String,
    url: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.h-title{
  font-size:16px ;
  font-weight: 600;
}
.p-description{
  font-size: 12px;
}
.card-content{
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
  color: var(--light-color);
  border: 2px solid #3d3d3d;
  border-radius: 25px;
  border-top-right-radius: 0px;
  height: 180px;
  width: 190px;
  text-align: start;
;
  transition: all 1s ease-out;
  box-shadow: 0 7px 29px 0 hsla(240, 5%, 41%, .31);

}

</style>
