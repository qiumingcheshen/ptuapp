<template>
  <div id="editpos-centerbox">
    <div class="posAreaImg">
      <div class="posImgArea">
        <img :src="imgArea" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 中间海报区域
      imgArea: ""
    };
  },
  methods: {
    // 获取中间海报图片
    agetinfo() {
      this.$http.get("http://localhost:8081/mock/home.json").then(response => {
        this.imgArea = response.data.data.canvases[0].varcoverpic[0].pic;
      });
    }
  },
  mounted() {
    this.agetinfo();
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
    padding: 40px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // box-sizing: content-box;
    // margin: 0 auto;
    // overflow: visible;
    // position: relative;
  }
}
</style>