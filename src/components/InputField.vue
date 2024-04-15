<template>
    <input col="6" type="text" v-bind:placeholder=placeholder v-bind:name=fieldName class="standard-input-filed px-3">
    {{ msg }}

</template>

<script>
export default {
    name: 'InputField',
    props: {
        msg: String,
        fieldName: String,
        placeholder: String,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.standard-input-filed {
    background-color: transparent;
    border: 1px solid #ffffff;
    height: 50px;
    width: 95%;
    border-radius: 5px;
    margin: 5px;
    color: light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4));


}
</style>