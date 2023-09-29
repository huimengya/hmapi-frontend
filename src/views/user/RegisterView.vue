<template>
  <div class="github-style-container">
    <el-card class="github-style-card" shadow="hover">
      <h1>注册</h1>
      <!-- 注册表单 -->
      <el-form :model="loginForm">
        <el-form-item label="邮箱">
          <el-input
            v-model="loginForm.emailAccount"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>
        <!--        用户昵称-->
        <el-form-item label="昵称">
          <el-input
            v-model="loginForm.userName"
            placeholder="请输入昵称"
          ></el-input>
        </el-form-item>
        <!--          邀请码-->
        <el-form-item label="邀请码">
          <el-input
            v-model="loginForm.invitationCode"
            placeholder="请输入邀请码（选填）"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证">
          <el-input
            style="width: 70px"
            type="text"
            v-model="loginForm.captcha"
            placeholder="验证码"
          ></el-input>
          <!--          给倒计时加浅蓝色边框-->
          <el-button
            type="warning"
            plain
            v-if="showCountdown"
            disabled
            style="
              margin-left: 20px;
              border: 1px solid lightblue;
              padding: 5px 10px;
              border-radius: 5px;
            "
          >
            重新发送:({{ countdown }}s)
          </el-button>

          <el-button
            type="primary"
            plain
            @click="send"
            style="margin-left: 20px"
            v-show="!isSending"
            >发送
          </el-button>
        </el-form-item>
        <el-form-item>
          <!--    登陆按钮使用行内样式与输入框对齐      -->
          <el-button
            type="success"
            plain
            @click="goToLogin"
            style="margin-left: 40px"
            >返回
          </el-button>
          <el-button
            type="primary"
            plain
            style="margin-left: 30px"
            @click="register"
            >注册
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import {
  UserControllerService,
  UserEmailRegisterRequest,
} from "../../../generated";

// 使用router
const router = useRouter();
const isSending = ref(false);
const showCountdown = ref(false);
const countdown = ref(300); // 5 minutes in seconds

// 定义登录和注册的表单数据和验证规则
const loginForm = ref<UserEmailRegisterRequest>({});

// 定义表单验证规则

// 定义登录和注册的方法
const register = async () => {
  // 调用后端API验证登录信息的地方可以在这里完成
  const res = await UserControllerService.userEmailRegisterUsingPost(
    loginForm.value
  );
  if (res.code === 0) {
    // 注册成功 ,跳转到登录页面
    ElMessage.success("注册成功");
    router.push("/user/login");
  } else {
    // 注册失败
    ElMessage.error(res.message);
  }
};
// 定义跳转到登陆页面的方法
const goToLogin = () => {
  // 跳转到注册页面
  router.push("/user/login");
};
// 定义发送验证码的方法
const send = async () => {
  if (!isSending.value) {
    isSending.value = true; // 隐藏发送按钮
    showCountdown.value = true; // 显示倒计时

    // Start the countdown
    const interval = setInterval(() => {
      countdown.value--;

      if (countdown.value === 0) {
        // Countdown finished, re-enable the button
        isSending.value = false;
        showCountdown.value = false;
        countdown.value = 300; // Reset the countdown timer
        clearInterval(interval); // Stop the countdown interval
      }
    }, 1000);

    // Send the captcha logic here
    const res = await UserControllerService.getCaptchaUsingGet(
      loginForm.value.emailAccount
    );
    console.log("获取验证码", res);
    ElMessage.success("验证码发送成功");
  }
};
</script>

<style scoped>
.github-style-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.github-style-card {
  width: 300px;
  text-align: center;
}

.el-input {
  width: 100%;
}
</style>
