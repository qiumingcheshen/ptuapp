import axios from 'axios'

const state = {
    //  请求到的海报的信息
    posterData: []
}

const mutations = {
    initPosterData(state, posterData) {
        state.posterData = posterData
    }
}

const getters = {

}

const actions = {
    getPosInfo() {
        // state.id = this.$route.query.id;
        // const { data: res } = await this.$http.post(
        //     `api/puzzle/data/info?token=f2f26ffd-91af-494e-987e-5c71cf418e24&uid=1&id=1893`
        // );
        axios.post(`api/puzzle/data/info?token=f2f26ffd-91af-494e-987e-5c71cf418e24&uid=1&id=1893`).then(({ data }) => {
            console.log(data);
            if (data.status !== "1") {
                return this.$message.error("获取海报失败！");
            }

        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}