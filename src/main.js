import Vue from 'vue';
import App from './App.vue';
import Axios from "axios";
import VueAxios from "vue-axios";
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false;
Vue.use(VueAxios, Axios);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
