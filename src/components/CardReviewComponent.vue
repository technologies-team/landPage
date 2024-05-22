<template>
  <div class="row card-content  p-1 justify-content-around">
    <div class="stars mr-3"><div>
  <span v-for="index in stars" :key="index">
    &starf;
  </span>
      <span v-for="index in 5-stars" :key="index">&star;</span>
    </div></div>

    <div class="comments row justify-content-center direction-column align-items-center"><div>{{description}}</div></div>
  <div class="col-lg-7 col-md-7 col-sm-7 ">
    <p class="h-title font18 white fw700">{{title}}</p>
  </div>
    <div class="col-lg-3 col-md-3 col-sm-3 p-3" >
      <img v-bind:src=url  width="50px" alt=""/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CardReviewComponent',
  props: {
    title: String,
    description: String,
    url: String,
    stars:{
      type:Number,
    default:5
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comments{
  min-height: 200px;

}
.stars{
  color: #ffd340;
  font-size: 30px;
}
.h-title{

  font-size:18px ;
  font-weight: 700;
}
.p-description{
  font-size: 12px;
}
.card-content{
  justify-content: center;align-items: center;

  box-shadow: 0 7px 29px 0 var(--main-color);
  border-radius: 15px;
  height: 100px;
  text-align: start;
  color:var(--main-color)
;
  transition: all 1s ease-out;
}

.card-content{
  height: max-content;
}
</style>
