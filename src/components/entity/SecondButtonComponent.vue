<template>
    <button v-bind:name=name class=" btn btn-primary  btn-standard-second m-1 ">
        {{ text }}
    </button>

</template>

<script>
export default {
    name: 'SecondButtonComponent',
    props: {
        text: String,
        fieldName: String,
        placeholder: String,
    }
}
</script>

<style scoped>
.btn-standard-second {
    min-height: 45px;
  width: 100%;
  background: linear-gradient(90deg, var(--second-color), var(--third-color));;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 25px;
    border: unset;
    color:var(--main-color);
    font-weight: 700;

}
.btn-standard-second:hover {
  width: 150px;
}
.btn-standard-second{

  border: none;
  cursor: pointer;
  border-radius: 42px;
  transition:all 0.6s;


}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
