<template>
  <div class="row card-content  p-1">

  <div class="col-lg-6  ">
    <h3 class="h-title font18 white fw700">{{title}}</h3>
  </div>
    <div class="col-lg-6" >
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
  background-color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 15px;
  height: 100px;
  text-align: start;
  color:var(--light-color)
;
  transition: all 1s ease-out;
}
.card-content:hover{
  background-color: var(--second-color);
}
</style>
