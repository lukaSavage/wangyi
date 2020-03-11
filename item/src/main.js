import Vue from 'vue'

import App from './App.vue'
import './tools/rem.js'
import router from './router'
import store from './store'
// 验证表单的文件
import './tools/validate.js'




Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 注册路由器
    router,
    // 注册vuex的store仓库
    store
}).$mount('#app')
