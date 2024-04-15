<template>
    <div>
        <input type="tel" v-model="telephoneNumber" class="standard-input-filed" placeholder="Telephone Number" />
    </div>
</template>

<script>
export default {
    name: 'TelephoneInput',
    data() {
        return {
            telephoneNumber: '',
        }
    },
    watch: {
        telephoneNumber(newVal) {
            // Add formatting to the telephone number
            this.telephoneNumber = newVal.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        },
    },
}
</script>

<style scoped>
.standard-input-filed {
    /* Add your styles here */
}
</style>