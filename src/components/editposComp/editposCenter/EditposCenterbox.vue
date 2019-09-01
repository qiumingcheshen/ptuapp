<template>
  <div id="editpos-centerbox">
    <div class="posAreaImg">
      <div class="posImgArea">
        <edit-pos-box></edit-pos-box>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      // 中间海报区域
      imgArea: "",
      // 路由传参过来的id
      id: ""

      // 图片数据
    };
  },
  computed: {
    ...mapGetters(["eimgSrc"])
  },
  methods: {
    ...mapActions(["updateimgSrc"])
    // async getDatainfo() {
    //   const { data: res } = await this.$http.post(
    //     "api/puzzle/data/info?token=f2f26ffd-91af-494e-987e-5c71cf418e24&uid=1&id=1880"
    //   );
    //   console.log(res);
    // }
  },
  watch: {
    // 监听 eimgSrc中数据的改变，进而触发处理函数 getsrc，从而实现 imgArea的值的变化，从而改变视图
    // eimgSrc(newVal, oldVal) {
    //   this.getsrc();
    // }
  },
  created() {
    // this.agetinfo();
    // this.getimgInfo();
    // this.getDatainfo();
  }
};
</script>

<style lang="less" scoped>
// 中间的海报区域

.posAreaImg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  .posImgArea {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 30px;
  }
}
</style>