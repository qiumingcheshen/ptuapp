import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Postem from './components/Postem.vue'
import Editpos from './components/Editpos.vue'
import EditposDrawer from './components/EditposDrawer.vue'

Vue.use(Router)

export default new Router({
    routes: [
        // 路由重定向到主页
        { path: '/', redirect: '/index' },
        {
            path: '/postem',
            component: Postem,
            children: [
                { path: '/login', component: Login },
                { path: '/register', component: Register }
            ]
        },
        {
            path: '/index',
            component: Index,
            children: [{ path: '/login', component: Login }]
        },
        {
            path: '/editpos',
            component: Editpos,
            children: [{ path: '/drawer', component: EditposDrawer }]
        },


    ]
})