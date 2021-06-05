import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resetCSS from './global.css'

import 'spectre.css/dist/spectre-icons.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  resetCSS,
  render: h => h(App)
}).$mount('#app')
