<template>
  <div>
    <div class="asideUpload1" v-show="flag">
      <div class="uploadTitle">上传本地图片</div>
      <div class="uploadExplain">支持12M以下JPG\PNG\GIF格式图片</div>
      <div class="uploadHandle">
        <a href="#" class="uploadLocalImg">上传</a>
        <a href="javascript:;" @click="uploadPhoneImg" class="uploadPhoneImg">上传手机图片</a>
      </div>
    </div>
    <div class="asideUpload2" v-show="!flag">
      <div class="uploadTitle">上传手机图片</div>
      <div class="uploadExplain">支持12M以下JPG\PNG\GIF格式图片</div>
      <div class="QRcodeImg"></div>
      <div class="text">扫一扫，上传手机相册图片</div>
      <a class="returnLocal" @click="goBack">返回本地上传</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    uploadPhoneImg() {
      this.flag = false;
    },
    goBack() {
      this.flag = true;
    }
  }
};
</script>

<style lang="less" scoped>
.asideUpload1 {
  width: 330px;
  height: 862px;
  padding: 80px 60px;

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
}

.asideUpload2 {
  width: 330px;
  height: 862px;
  padding: 80px 50px;

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
}
</style>