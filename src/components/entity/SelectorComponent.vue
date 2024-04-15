<template>
    <div class="d-flex flex-row">

        <select v-model="service" class="standard-input-filed px-2 ">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SelectoComponent',
    props: {
        msg: String,
        fieldName: String,
        placeholder: String,
    }
}
</script>
<style scoped>
.standard-input-filed {
    background-color: transparent;
    border: 1px solid #ffffff;
    height: 50px;
    width: 50%;
    border-radius: 5px;
    margin: 3px;
    color: light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4));


}
</style>