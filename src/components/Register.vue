<template>
  <div class="register_container">
    <!-- 登录页遮罩 -->
    <div class="register_mask"></div>
    <!-- 登录区域 -->
    <div class="register_box">
      <div class="register_txt">注册</div>
      <!-- 表单区域 -->
      <el-form :model="registerForm">
        <div class="register_input_box">
          <el-input v-model="registerForm.mobilePhone" placeholder="手机号" class="register_input">
            <template slot="prepend">+86</template>
          </el-input>
          <!-- 滑动块 -->
        </div>
        <div class="register_msg">
          <div class="register_msg_register">
            <a href="javascript:;">短信密码登录</a>
          </div>
          <div class="register_msg_forget">
            <a href="javascript:;">忘记密码 ？</a>
          </div>
        </div>
        <div class="register_btn">
          <el-button class="register_btn_pink">注册</el-button>
        </div>
      </el-form>
      <!-- 注册区域 -->
      <div class="register_register">
        <a href="javascript:;">
          <span class="register_register_no">已有账号？</span>
          <span class="register_register_now">立即登录</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 登录表单的数据绑定对象
      registerForm: {
        mobilePhone: "15577777777",
        password: "123"
      }
    };
  }
};
</script>

<style lang="less" scoped>
.register_container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.register_mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
  height: 100%;
  z-index: 999;
}
.register_box {
  width: 400px;
  height: 460px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 37px 30px;
  z-index: 1000;
  box-sizing: border-box;
}
.register_txt {
  height: 54px;
  line-height: 54px;
  text-align: center;
  color: #333;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
}
.register_input {
  margin-bottom: 21px;
}
.register_msg {
  padding: 0 13px;
  margin-bottom: 70px;
  font-size: 14px;
}
.register_msg_register {
  float: left;
}
.register_msg_forget {
  float: right;
}
.register_btn {
  margin-bottom: 34px;
}
.register_btn_pink {
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 117, 140, 1),
    rgba(255, 126, 179, 1)
  );
  border-radius: 6px;
  font-size: 16px;
  color: #fff;
}
.register_register a {
  float: right;
}
.register_register_no {
  font-size: 12px;
  color: #afafaf;
}
.register_register_now {
  font-size: 12px;
  color: #ff6a94;
}
</style>