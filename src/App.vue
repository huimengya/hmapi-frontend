<template>
  <div id="app">
    <BasicLayoutView />
  </div>
</template>
<script setup lang="ts">
import BasicLayoutView from "@/layouts/BasicLayoutView.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

// 主要看这里，在路由跳转之前会进行监听
router.beforeEach((to, from, next) => {
  console.log(to);
  // 判断当前点击的组件是否加了权限
  if (to.meta.access === "admin") {
    // 获取当前登录用户的角色信息，判断是否有权限访问该页面
    if (store.state.user?.loginUser?.role !== "admin") {
      next({ path: "/error" });
      return;
    }
  } else {
    next();
  }
});
</script>
<style scoped>
#app {
}
</style>
