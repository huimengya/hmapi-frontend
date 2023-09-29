<template>
  <div id="userLoginView">
    <el-form :model="form" label-width="120px">
      <el-form-item label="账号">
        <el-input
          style="width: 320px"
          placeholder="请输入账号..."
          v-model="form.userAccount"
        />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          style="width: 320px"
          type="password"
          placeholder="请输入密码..."
          v-model="form.userPassword"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登 录</el-button>
        <el-button>取 消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const router = useRouter();
// do not use same name with ref
const form = reactive({
  userAccount: "",
  userPassword: "",
}) as UserLoginRequest;
// 使用全局状态
const store = useStore();
const onSubmit = async () => {
  // 调用后端
  const res = await UserControllerService.userLoginUsingPost(form);
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
    ElMessage.error("账号或密码错误 (╥_╥)");
  }
};
</script>
<style scoped>
#userLoginView {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
