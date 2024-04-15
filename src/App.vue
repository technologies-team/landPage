<template>
  <div>
    <LandPage msg="Interactive & Innovative " />
  </div>
</template>

<script>
import LandPage from './components/LandPage.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  name: 'App',
  components: {
    LandPage
  }
}
</script>

<style>
#app {
  font-family: "Lexend Deca", Sans-serif;
  ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

body {
  color: #ffffff;
  background-color: black !important;

}
</style>
