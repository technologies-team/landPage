<template lang="html">
  <div class=" container">
    <div class="row">
      <h1 class=" head-title font-weight-600 text-center">
        Technologies We Work With
      </h1>


    </div>
    <tabs :mode="mode">

    </tabs>
  </div>
</template>

<script>
import Tabs from './../entity/TabsComponent.vue'

export default {
  components: {

    Tabs
  },
  data () {
    return {
      mode: 'dark'
    }
  },
  methods: {
    changeStyle () {
      if (this.mode === 'dark') {
        this.mode = 'light'
      } else {
        this.mode = 'dark'
      }
    }
  }
}
</script>
<style scoped>
.head-title{
  background-image: linear-gradient(90deg,var(--main-color),var(--second-color),var(--third-color));

}
.font-weight-600{
  font-weight: 700;
  font-size: 50px;
}
</style>
