
<template>
    <b-col>
        <textarea type="text" v-bind:name=fieldName v-bind:placeholder=placeholder @input="updateValue($event.target.value)" class="standard-text-area-filed">

        </textarea>
        {{ msg }}
    </b-col>

</template>

<script>
export default {
    name: 'TextArea',
    props: {
        msg: String,
        fieldName: String,
        placeholder: String,
    },
    methods:{
      updateValue(value) {
        this.$emit('input', value); // Emit an 'input' event to update the parent component's data
      }
    }
}
</script>
<style scoped>
.standard-text-area-filed{
  border: 3px solid var(--primary-text);
  border-radius: 13px;
  background-color: var(--light-color);
  color:var(--primary-text)
}
.standard-text-area-filed::placeholder { /* Edge 12-18 */
  color: var(--primary-text);
}
</style>
