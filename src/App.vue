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
:root {
  --main-color: #3D5472;
  --second-color: #85c3cc;
  --third-color: #B2cc4D;
  --primary-text:#828385;
  --light-color:#ffffff
}
body{
  color:var(--primary-text)
}
</style>
