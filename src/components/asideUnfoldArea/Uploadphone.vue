<template>
  <div class="asideUpload">
    <div class="uploadTitle">上传手机图片</div>
    <div class="uploadExplain">支持12M以下JPG\PNG\GIF格式图片</div>
    <div class="QRcodeImg"></div>
    <div class="text">扫一扫，上传手机相册图片</div>
    <a class="returnLocal" @click="goBack">返回本地上传</a>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.asideUpload {
  width: 330px;
  height: 862px;
  padding: 80px 50px;
}
.uploadTitle {
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #000;
  font-size: 24px;
  margin-bottom: 15px;
}
.uploadExplain {
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #afafaf;
  margin-bottom: 42px;
}
.QRcodeImg {
  width: 170px;
  height: 170px;
  background-color: goldenrod;
  margin-left: 30px;
  margin-bottom: 66px;
}
.text {
  font-size: 18px;
  color: #666;
  text-align: center;
}
.returnLocal {
  display: block;
  width: 170px;
  height: 44px;
  border-radius: 22px;
  background-color: #f4f4f4;
  border: 1px solid #e5e5e5;
  font-size: 14px;
  color: #333;
  text-align: center;
  line-height: 42px;
  margin-left: 30px;
  margin-top: 15px;
}
.returnLocal:hover {
  background: #ff7ba4;
  color: #fff;
}
</style>