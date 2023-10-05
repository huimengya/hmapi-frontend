<template>
  <div id="basicLayoutView">
    <!-- 使用 flex 布局将菜单栏和头像放在同一行 -->
    <div class="header">
      <!--    网站头像  -->
      <div class="logo">
        <img
          src="@/assets/logo.png"
          alt="logo"
          style="width: 50px; height: 50px"
        />
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        style="width: 100%"
        @select="handleSelect"
      >
        <!-- 通过遍历routes，动态渲染菜单项 -->
        <el-menu-item
          v-for="item in menuRoutes"
          :key="item.path"
          :index="item.path"
        >
          {{ item.name }}
        </el-menu-item>
      </el-menu>
      <!-- 在菜单栏右侧添加圆形头像 -->
      <div class="avatar-container">
        <el-dropdown @command="handleMenuCommand">
          <el-avatar
            class="avatar"
            size="default"
            :src="
              store.state.user.loginUser.userAvatar
                ? store.state.user.loginUser.userAvatar
                : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
            "
            shape="circle"
          ></el-avatar>
          <template #dropdown>
            <!--       如果用户没有登陆只显示立即登陆-->
            <el-dropdown-menu>
              <el-dropdown-item
                v-if="!store.state.user.loginUser.createTime"
                command="login"
                >立即登陆
              </el-dropdown-item>
              <el-dropdown-item
                v-if="store.state.user.loginUser.createTime"
                command="profile"
                >个人中心
              </el-dropdown-item>
              <el-dropdown-item
                v-if="store.state.user.loginUser.createTime"
                command="logout"
                >退出登陆
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div style="margin-top: 10px">
      <router-view />
    </div>
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
/**
 * 头像下拉菜单
 */
import { ElMessage } from "element-plus";

const handleMenuCommand = async (command) => {
  if (command === "login") {
    // 执行登录操作，可以调用相应的方法
    await router.push("/user/login");
  } else if (command === "profile") {
    // 跳转到个人中心页面或执行相关操作
    await router.push("/user/profile");
  } else if (command === "logout") {
    // 执行退出登录操作，可以调用相应的方法
    // 退出登录后，跳转到首页
    ElMessage.success("退出登录成功");
    await store.dispatch("user/logout");
    // 跳转到首页,replace: true表示替换当前路由，不会在history中留下记录,然后刷新页面
    await router.push({
      path: "/",
      replace: true,
    });
  }
};
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

/* 样式可以根据你的需要进行调整 */
/* 调整头像容器的样式，使其显示在菜单栏右侧 */
/* 使用 flex 布局将菜单栏和头像水平排列 */
.header {
  display: flex;
  justify-content: space-between; /* 将元素分散排列，头像在菜单栏右侧 */
  align-items: center; /* 垂直居中对齐 */
  /*大小*/
  height: 40px;
}

/* 调整头像的样式 */
.avatar-container {
  margin-right: 5px;
  margin-top: 5px;
  width: 50px;
  height: 50px;
}

/* 默认样式 */
.avatar {
  cursor: pointer; /* 鼠标悬停时显示手型光标 */
  width: 100%;
  height: 100%;
}

/*设置页面的背景颜色为白色*/
#basicLayoutView {
  background-color: white;
}
</style>
