import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Postem from './components/Postem.vue'
import Editpos from './components/Editpos.vue'
import AsideTem from './components/asideUnfoldArea/AsideTem.vue'
import AsideUpload from './components/asideUnfoldArea/AsideUpload.vue'
import AsidePoster from './components/asideUnfoldArea/AsidePoster.vue'
import AsideCollect from './components/asideUnfoldArea/AsideCollect.vue'
import Uploadphone from './components/asideUnfoldArea/Uploadphone.vue'

Vue.use(Router)

export default new Router({
    routes: [
        // 路由重定向到主页
        { path: '/', redirect: '/index' },
        {
            path: '/index',
            component: Index,
            children: [
                { path: '/login', component: Login },
                { path: '/register', component: Register },

            ]
        },
        {
            path: '/postem',
            component: Postem,
        },

        // { path: '/register', component: Register },
        {
            path: '/editpos',
            component: Editpos,
            children: [
                { path: '/', redirect: '/AsideTem' },
                { path: '/asideTem', component: AsideTem },
                { path: '/asideUpload', component: AsideUpload },
                { path: '/goUploadPhone', component: Uploadphone },
                { path: '/asideCollect', component: AsideCollect },
                { path: '/asidePoster', component: AsidePoster },
            ]
        },


    ]
})