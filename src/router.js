import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Postem from './components/Postem.vue'

Vue.use(Router)

export default new Router({
    routes: [
        // 路由重定向到主页
        { path: '/', redirect: '/index' },
        { path: '/index', component: Index },
        { path: '/login', component: Login },
        { path: '/postem', component: Postem },
    ]
})