<template>
  <div class="github-style-container">
    <el-card class="github-style-card" shadow="hover">
      <h1>登录</h1>
      <el-form :model="loginForm">
        <el-form-item label="邮箱">
          <el-input
            v-model="loginForm.emailAccount"
            placeholder="请输入邮箱"
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
            重新发送: ({{ countdown }} s)
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
          <el-button type="primary" @click="login" style="margin-left: 40px"
            >登录
          </el-button>
          <el-button
            type="success"
            plain
            style="margin-left: 30px"
            @click="goToRegister"
            >去注册
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  UserControllerService,
  UserEmailLoginRequest,
} from "../../../generated";
import { ElMessage } from "element-plus";
import store from "@/store";

const isSending = ref(false);
const showCountdown = ref(false);
const countdown = ref(300); // 5 minutes in seconds

const router = useRouter();

// 定义表单数据
const loginForm = ref<UserEmailLoginRequest>({});
// 定义表单验证规则

// 定义登录和注册的方法
const login = async () => {
  // 登录逻辑，这里就像你在登门神拦住的守卫大叔前面，你需要提供邮箱和密码才能进入
  // 调用后端
  const res = await UserControllerService.userEmailLoginUsingPost(
    loginForm.value
  );
  if (res.code === 0) {
    // 登录成功 ,跳转到主页
    console.log(res);
    // 获取登录用户信息存到全局状态管理,因为user.ts中获取登录用户的方法使用的async ，所以使用await使异步变同步
    await store.dispatch("user/getLoginUser");
    ElMessage.success("登录成功啦 (つ´ω`)つ");
    // 路由到主页
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    // 登录失败
    console.log(res);
    ElMessage.error("该邮箱未注册、账号或密码错误 (╥_╥)");
  }
};
// 定义跳转到注册页面的方法
const goToRegister = () => {
  // 跳转到注册页面
  router.push("/user/register");
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
  margin-top: 60px;
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
