<template lang="html">
  <div class=" container"    v-motion
       :initial="{
      opacity: 0,
      y: 100,
    }"
       :visibleOnce="{
      opacity: 1,
      y: 0,
        transition: {
      type: 'spring',
      stiffness: '100',
      delay: 300,
    },
    }">
    <div class="row">
      <h1 class=" head-title font-weight-600 text-center pb-3">
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
-webkit-background-clip: text;
  color: transparent;
}
.font-weight-600{
  font-weight: 700;
  font-size: 50px;
}
</style>
