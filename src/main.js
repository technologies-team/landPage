import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import axios from 'axios';
import Vue from "@vue/cli-plugin-eslint/eslintOptions";

// Set base URL for Axios
axios.defaults.baseURL = 'https://stage.roshosh.ae/';
import { MotionPlugin } from '@vueuse/motion'

Vue.config.productionTip = false;
const app = createApp(App).use(router)
app.use(MotionPlugin)
app.mount('#app')
