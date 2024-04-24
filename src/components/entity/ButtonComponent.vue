<template>
    <button v-bind:name=name class=" btn btn-primary  btn-standard m-1 ">
        {{ text }}
    </button>

</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        text: String,
        fieldName: String,
        placeholder: String,
    }
}
</script>

<style scoped>
.btn-standard {
    min-height: 55px;
    background-color: var(--second-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 10px;
    border: unset;
    font-weight: 700;
  width: 100%;

}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
