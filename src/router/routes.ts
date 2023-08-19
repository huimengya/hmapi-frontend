import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserManagerView from "@/views/user/UserManagerView.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/user/manager",
    name: "用户管理",
    component: UserManagerView,
    meta: {
      access: "admin",
    },
  },
  {
    path: "/user/login",
    name: "用户登录",
    component: UserLoginView,
  },
  {
    path: "/error",
    name: "无权限",
    component: ErrorView,
    meta: {
      hideInMenu: true,
    },
  },
];

export default routes;
