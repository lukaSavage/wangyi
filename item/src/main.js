import Vue from 'vue'
import App from './App.vue'
import './tools/rem.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由器
  router
}).$mount('#app')
