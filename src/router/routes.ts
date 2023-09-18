import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import InterfaceManagerView from "@/views/interface/InterfaceManagerView.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/interface/manager",
    name: "接口管理",
    component: InterfaceManagerView,
    meta: {
      access: "admin",
    },
  },
  {
    path: "/error",
    name: "错误页面",
    component: ErrorView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/user/login",
    name: "用户登录",
    component: UserLoginView,
  },
];

export default routes;
