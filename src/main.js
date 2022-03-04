import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import API from './api'
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
Vue.prototype.$API = API

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
