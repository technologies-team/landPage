<template>
  <buuton v-bind:name=name class=" btn btn-primary  btn-standard m-1 ">
    {{ text }}
  </buuton>

</template>

<script>
export default {
  name: 'ClassicComponent',
  props: {
    text: String,
    fieldName: String,
    placeholder: String,
  }
}
</script>

<style scoped>
.btn-standard {
  height: 55px;
  background-color: #f32f53;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 10px;
  border: unset;
  font-weight: 700;

}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
