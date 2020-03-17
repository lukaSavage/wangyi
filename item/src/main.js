import Vue from 'vue'

import App from './App.vue'
import './tools/rem.js'
import router from './router'
import store from './store'
// 验证表单的文件
import './tools/validate.js'
// 懒加载插件
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
    // 配置懒加载
    error: 'static/img/error.png',    // 加载不到代替的图片
    loading: 'static/img/loading.jpg'   // 正在加载的图片

})


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 注册路由器
    router,
    // 注册vuex的store仓库
    store
}).$mount('#app')
