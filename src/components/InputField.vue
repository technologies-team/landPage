<template>
    <input col="6" :type="type" v-bind:placeholder=placeholder v-bind:name=fieldName @input="updateValue($event.target.value)" class="standard-input-filed px-3">
    {{ msg }}

</template>

<script>
export default {
    name: 'InputField',
    props: {
        msg: String,
        fieldName: String,
      value: String,
      inputValue: String,
        type:{type:String,
          default:"text",},
        placeholder: String,
    },
  methods: {
    updateValue(value) {
      this.$emit('input', value); // Emit an 'input' event to update the parent component's data
    }
}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.standard-input-filed {
    width: 95%;
    margin: 5px;
    color: var(--primary-text);
    height: 55px;
    border: 3px solid var(--primary-text);
    border-radius: 13px;
}
</style>
