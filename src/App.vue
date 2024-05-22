<template>
  <div>
    <DefaultHeader></DefaultHeader>
      <router-view/>
    <DefaultFooter ></DefaultFooter>
  </div>
</template>

<script>
import DefaultHeader from "./components/Headers/DefaultHeader";
import DefaultFooter from "@/components/Footers/DefaultFooter";
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  name: 'App',
  components: {
    DefaultHeader,
    DefaultFooter
  }
}
</script>

<style>
@media (prefers-color-scheme: light) {

  :root {
    --main-color: #3D5472;
    --second-color: #85c3cc;
    --third-color: #B2cc4D;
    --primary-text:#828385;
    --light-color:#ffffff
  }}

/* Dark mode */
@media (prefers-color-scheme: dark) {

  :root {
    --main-color: #3D5472;
    --second-color: #85c3cc;
    --third-color: #B2cc4D;
    --primary-text:#828385;
    --light-color:#ffffff
  }}
a{
  text-decoration: none;
}
body{
  color:var(--primary-text)
}
svg{
  width: 100px !important;
height: auto!important;
color:var(--light-color) !important;
}
</style>
