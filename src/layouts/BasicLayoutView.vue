<template>
  <div id="basicLayoutView">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <!--  通过遍历routes，动态渲染菜单项-->
          <el-menu-item
            v-for="item in menuRoutes"
            :key="item.path"
            :index="item.path"
          >
            {{ item.name }}
          </el-menu-item>
        </el-menu>
      </el-header>
      <!--      中间内容-->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
// 引入我们定义的routes
import routes from "@/router/routes";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import checkAccess from "@/access/CheckAccess";

// 引入路由
const router = useRouter();
// 默认选中的菜单项
const activeIndex = ref("/");
// 引入全局状态
const store = useStore();

// 路由跳转后，将跳转后的地址赋值给activeIndex.value
router.afterEach((to, from, failure) => {
  //debugger;
  console.log("路由跳转后", to);
  activeIndex.value = to.path;
});
// 菜单项点击事件
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  router.push({
    path: key,
  });
};
// 从路由中过滤出不需要隐藏的菜单项
// const menuRoutes = routes.filter((item) => {
//   if (item.meta?.hideInMenu) {
//     return false;
//   }
//   return true;
// });
// 使用计算属性的方式过滤菜单和权限
const menuRoutes = computed(() => {
  return routes.filter((item) => {
    // true表示不隐藏，false表示隐藏 因为过滤出来的菜单项是需要显示的，所以默认为true
    if (item.meta?.hideInMenu) {
      return false;
    }
    // 根据权限过滤菜单项,使用全局的权限配置，如果有权限，则访问的页面显示，没有权限，则不显示
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});
</script>
<style scoped>
#basicLayoutView {
}
</style>
