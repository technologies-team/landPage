<template>
  <div>
  <section class="container">
    <div class="row">
      <div class="col-md-6">
        <h1 class="head-title">
          {{ Head }}
        </h1>

        <div class="description">
          {{description}}
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex flex-row">
          <InputField fieldName="name" placeholder="name" />
          <InputField fieldName="email" placeholder="email" />
        </div>
        <div class="col-md-12">
          <div class="d-flex flex-row" >
            <MazPhoneNumberInput
                v-model="phoneNumber"
                v-model:country-code="countryCode"
                show-code-on-list
                :noFlags="true"
                :preferred-countries="['UA', 'BE', 'DE', 'US', 'GB']"
                :ignored-countries="['SY']"
                @update="results = $event"
            />
            <div style="width: 500px; margin: 20px auto;">

            </div>
            <SelectorComponent class="col-md-6"></SelectorComponent>
          </div>

        <code>
        </code>
        </div>

        <div>
          <TextArea fieldName="message" placeholder="Message" />

        </div>
        <div class="row pr-30"><div class=" col-md-1 mt-3"></div>
          <div class=" col-md-3 mt-3"> <SecondButtonComponent class="submit-button" text="submit"/></div>

        </div>
      </div>
    </div>

  </section>
  </div>
</template>
<script >
import InputField from './../InputField.vue'
import TextArea from './../TextArea.vue'
import SelectorComponent from './../entity/SelectorComponent.vue';

import "vue-phone-number-input/dist/vue-phone-number-input.css";
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import SecondButtonComponent from "@/components/entity/SecondButtonComponent.vue";
export default {
  name: 'MainSection',
  props: {
    Head: String,
    Title: String,
    description: String,
    number:String
  },
  components: {

    SecondButtonComponent,
    InputField,TextArea,SelectorComponent,MazPhoneNumberInput

  },

  data() {
    return {
      vuePhone: {
        phone: "",
        props: {
          clearable: true,
          fetchCountry: true,
          preferredCountries: ["US", "GB"],
          noExample: false,
          translations: {
            countrySelectorLabel: "Country code",
            countrySelectorError: "Error",
            phoneNumberLabel: "Enter your phone",
            example: "Example:"
          }
        }
      }
    };
  }
}
</script>
<style>
.country-phone-input .dropdown:focus {
  outline: none;
  color: grey;
}
.head-title{
  width: max-content;
  background: linear-gradient(90deg, var(--main-color), var(--second-color), var(--third-color));
  -webkit-background-clip: text;
  color: transparent;
}
.m-phone-number-input.--responsive[data-v-174cbd16]{
}
.m-select .m-select-list[data-v-fb03c8b8]
{  background-color: #e4e5e7;


}
</style>
