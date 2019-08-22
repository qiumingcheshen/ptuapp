<template>
  <!-- 注册区域 -->
  <div class="register_box">
    <!-- 表单区域 -->
    <el-form :model="registerForm">
      <div class="register_input_box">
        <el-form-item>
          <el-input v-model="registerForm.mobilePhone" placeholder="手机号" class="register_input">
            <template slot="prepend">+86</template>
          </el-input>
        </el-form-item>
      </div>
      <div class="slideBox">
        <slide></slide>
      </div>
      <div class="securityCodeBox">
        <el-input
          type="text"
          v-model="registerForm.verificate"
          placeholder="请输入验证码"
          class="inputCode"
        ></el-input>

        <el-button class="setCode">发送验证码</el-button>
      </div>
      <div class="register_password">
        <el-form-item>
          <el-input
            type="password"
            v-model="registerForm.password"
            placeholder="请输入6-18位密码"
            class="inputPassword"
          ></el-input>
        </el-form-item>
      </div>
      <div class="register_btn">
        <el-button class="register_btn_pink">注册</el-button>
      </div>
    </el-form>
    <!-- 登录区域 -->
    <div class="register_register">
      <a href="javascript:;">
        <span class="register_register_no">已有账号？</span>
        <span class="register_register_now" @click="showLoginDialog()">立即登录</span>
      </a>
    </div>
    <div class="protocol">
      <i class="protocolIcon el-icon-check"></i>
      <a href="javascript:;">《功能开通及手续费协议》</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 注册表单的数据绑定对象
      registerForm: {
        mobilePhone: "",
        verificate: "",
        password: ""
      }
    };
  },
  methods: {
    showLoginDialog() {
      // 让登录页的显示开关打开，同时关闭注册页的开关
      let switchParams = {
        registerDialogVisible: false,
        loginDialogVisible: true
      };
      this.$emit("openLoginDialog", switchParams);
    }
  }
};
</script>

<style lang="less" scoped>
.register_box {
  width: 340px;
  height: 420px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
}
.register_input {
  margin-bottom: 21px;
}
// 滑块
.slideBox {
  width: 340px;
  height: 34px;
  background-color: pink;
  margin-bottom: 18px;
}
// 验证码
.securityCodeBox {
  width: 340px;
  height: 44px;
  margin-bottom: 18px;
  .inputCode {
    width: 211px;
    height: 44px;
    border-radius: 6px;
    margin-right: 10px;
  }
  .setCode {
    width: 115px;
    height: 44px;
    border: 1px solid #ff6a94;
    background: #ffe1ea;
    color: #ff6a94;
  }
}
.register_password {
  width: 340px;
  height: 44px;
  margin-bottom: 33px;
}

.register_btn {
  margin-bottom: 22px;
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
.register_register {
  height: 11px;
  a {
    float: right;
  }
}
.register_register_no {
  font-size: 12px;
  color: #afafaf;
}
.register_register_now {
  font-size: 12px;
  color: #ff6a94;
}
.protocol {
  width: 340px;
  height: 25px;
  margin-top: 30px;
  text-align: center;
  .protocolIcon {
    width: 20px;
    height: 20px;
    background: #ff6a94;
    border-radius: 10px;
    line-height: 20px;
    color: #fff;
    margin-right: 8px;
  }
  a {
    color: #afafaf;
  }
}
.register_input_box .el-form-item {
  margin-bottom: 0;
}
</style>
