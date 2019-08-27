import Vue from 'vue'
import Vuex from 'vuex'
import editState from './store/editState'

Vue.use(Vuex)

const modules = { editState }

const store = new Vuex.Store({
    modules
})

export default store