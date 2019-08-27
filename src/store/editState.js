const state = {
    // 记录中心编辑区域图片的 src
    eimgSrc: {},
}

const getters = {
    eimgSrc(state) {
        return state.eimgSrc
    }
}

const actions = {
    updateimgSrc(store, src) {
        store.state.eimgSrc = src
    }
}

export default {
    state,
    actions,
    getters
}