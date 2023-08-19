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

// do not use same name with ref
const form = reactive({
  userAccount: "",
  userPassword: "",
});
// 使用全局状态
const store = useStore();
const onSubmit = () => {
  console.log("submit!");
  // 使用store中的dispatch方法，参数一就是user getLoginUser 参数2是要传递的对象
  store.dispatch("user/getLoginUser", {
    userName: "张三",
  });
};
</script>
<style scoped>
#userLoginView {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
