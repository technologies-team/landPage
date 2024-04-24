
<template>
    <b-col>
        <textarea type="text" v-bind:name=fieldName v-bind:placeholder=placeholder class="standard-text-area-filed">

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
    }
}
</script>
<style scoped>
.standard-text-area-filed{
  border: 3px solid var(--primary-text);
  border-radius: 13px;
}
</style>
