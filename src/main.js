import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';

Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.axios = axios
Vue.use(VueAxios, axios)


Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
