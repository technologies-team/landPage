<template>
  <div class="row card-content  p-1">

  <div class="col-lg-10  ">
    <h3 class="h-title font18 white fw700">{{title}}</h3>
    <p class="font12 white fw400 p-description"> {{description}}</p>
  </div>
    <div class="col-lg-2" >
      <img v-bind:src=url  alt=""/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'InputField',
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
  font-size:18px ;
  font-weight: 700;
}
.p-description{
  font-size: 12px;
}
.card-content{
  justify-content: center;align-items: center;
  background-color: #000;
  border: 2px solid #3d3d3d;
  border-radius: 15px;
  height: 201px;
  text-align: start;
;
  transition: all 1s ease-out;
}
.card-content:hover{
  background-color: #f32f53;
}
</style>
