import Vue from "vue";
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './main.scss'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

import App from "./App.vue";
import router from "./router";
import store from "./store";

//#region axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'
//#endregion axios

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");