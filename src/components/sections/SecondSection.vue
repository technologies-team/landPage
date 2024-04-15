<template>
    <div >
        <section class="section">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="head-title">
                        Turn Your App Idea Into An App
                    </h1>
                    <div class="row">
                        <div class="col-md-3 px-0">
                            <InputField fieldName="name" placeholder="name" />
                        </div>
                        <div class="col-md-3 px-0">
                            <InputField fieldName="email" placeholder="email" />
                        </div>
                        <div class="col-md-3 px-0">
                            <InputField fieldName="email" placeholder="email" />
                        </div>
                        <div class="col-md-3 px-0">
                            <ButtonComponent text="SUBMIT" placeholder="email" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import InputField from './../InputField.vue'
import ButtonComponent from './../entity/ButtonComponent.vue'
export default {
    name: 'SecondSection',
    props: {
        msg: String,
    },
    components: {
        InputField, ButtonComponent
    },



}

</script>

<style scoped>
.head-title {
    text-align: center;
    font-size: 40px;
}

.standard-input-filed {
    background-color: transparent;
    border: 1px solid #db0d0d;
    height: 50px;
    width: 95%;
    border-radius: 5px;
    margin: 5px;
    color: light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4));


}
</style>
