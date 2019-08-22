import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Postem from './components/Postem.vue'
import Editpos from './components/Editpos.vue'

Vue.use(Router)

export default new Router({
    routes: [
        // 路由重定向到主页
        { path: '/', redirect: '/index' },
        {
            path: '/index',
            component: Index,
        },
        {
            path: '/postem',
            component: Postem,
        },
        {
            path: '/editpos',
            component: Editpos,
        },


    ]
})