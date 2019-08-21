<template>
  <div class="asideUpload">
    <div class="uploadTitle">上传本地图片</div>
    <div class="uploadExplain">支持12M以下JPG\PNG\GIF格式图片</div>
    <div class="uploadHandle">
      <a href="#" class="uploadLocalImg">上传</a>
      <a href="javascript:;" @click="uploadPhoneImg" class="uploadPhoneImg">上传手机图片</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    uploadPhoneImg() {
      this.$router.push("/goUploadPhone");
    }
  }
};
</script>

<style lang="less" scoped>
.asideUpload {
  width: 330px;
  height: 862px;
  padding: 80px 60px;
}
.uploadTitle {
  width: 210px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #000;
  font-size: 24px;
  margin-bottom: 15px;
}
.uploadExplain {
  width: 210px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #afafaf;
  margin-bottom: 70px;
}
.uploadHandle {
  padding: 20px;
  a {
    display: block;
    width: 170px;
    height: 44px;
    border-radius: 22px;
    background-color: #f4f4f4;
    border: 1px solid #e5e5e5;
    margin-bottom: 20px;
    font-size: 14px;
    color: #333;
    text-align: center;
    line-height: 42px;
  }
  a:hover {
    background: #ff7ba4;
    color: #fff;
  }
}
</style>