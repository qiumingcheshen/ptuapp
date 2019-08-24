import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入全局样式表
import './assets/global.css'
// 基于断点的隐藏类
import 'element-ui/lib/theme-chalk/display.css';

// 自动化全局注册
import "./components/index"


import axios from 'axios'



Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')



axios.interceptors.request.use(config => {
    //为请求头对象，添加token验证的Authorization字段
    config.headers.Authorization = window.sessionStorage.getItem("token")
    return config
})