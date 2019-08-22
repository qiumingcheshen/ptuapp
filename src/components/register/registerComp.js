// 注册组件
import RegisterComponent from './Register.vue';

const Register = {
    install: function(Vue) {
        Vue.component('Register', RegisterComponent)
    }
}

export default Register