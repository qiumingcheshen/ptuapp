<template>
  <!-- 登录区域 -->
  <div class="login_box">
    <!-- 表单区域 -->
    <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
      <div class="login_input_box">
        <el-form-item prop="mobilePhone">
          <el-input v-model="loginForm.mobilePhone" placeholder="手机号" class="login_input">
            <template slot="prepend">+86</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
            class="login_input login_input_password"
            type="password"
          >
            <template slot="prepend">密码</template>
          </el-input>
        </el-form-item>
      </div>
      <div class="login_msg">
        <div class="login_msg_login">
          <a href="javascript:;">短信密码登录</a>
        </div>
        <div class="login_msg_forget">
          <a href="javascript:;">忘记密码 ？</a>
        </div>
      </div>
      <div class="login_btn">
        <el-button class="login_btn_pink">登录</el-button>
      </div>
    </el-form>
    <!-- 注册区域 -->
    <div class="login_register">
      <a href="javascript:;">
        <span class="login_register_no">没有账号？</span>
        <span class="login_register_now" @click="showRegisterDialog()">立即注册</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 自定义表单验证规则
    // 手机号码
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号码不能为空"));
      } else {
        if (value !== "") {
          var reg = /^1[3456789]\d{9}$/;
          if (!reg.test(value)) {
            callback(new Error("请输入有效的手机号码"));
          }
        }
        callback();
      }
    };
    // 密码
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请设置正确格式的密码"));
      } else if (value.length < 6) {
        callback(new Error("密码长度最小为6位"));
      } else if (value.length > 18) {
        callback(new Error("密码长度最大为18位"));
      } else {
        callback();
      }
    };
    return {
      // 登录表单的数据绑定对象
      loginForm: {
        mobilePhone: "",
        password: ""
      },

      // 表单的验证规则对象
      loginFormRules: {
        // 验证手机号码是否合法
        mobilePhone: [{ validator: validatePhone, trigger: "blur" }],
        // 验证密码是否合法
        password: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    showRegisterDialog() {
      // 让注册页的显示开关打开，同时关闭登录页的开关
      let switchParams = {
        registerDialogVisible: true,
        loginDialogVisible: false
      };
      this.$emit("openResterDialog", switchParams);
      // 重置登录表单操作
      this.$refs.loginFormRef.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.login_box {
  width: 340px;
  height: 330px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
}
.login_input {
  margin-bottom: 21px;
}
.login_msg {
  padding: 0 13px;
  margin-bottom: 70px;
  font-size: 14px;
}
.login_msg_login {
  float: left;
  a {
    color: #666;
  }
}
.login_msg_forget {
  float: right;
  a {
    color: #000;
  }
}
.login_btn {
  margin-bottom: 34px;
}
.login_btn_pink {
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
.login_register a {
  float: right;
}
.login_register_no {
  font-size: 12px;
  color: #afafaf;
}
.login_register_now {
  font-size: 12px;
  color: #ff6a94;
}
</style>

<style>
/* 验证表单的错误信息弹框 css */
.el-form-item__error {
  font-size: 16px;
  top: 50px;
  left: 180px;
}
</style>