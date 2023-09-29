import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InterfaceManagerView from "@/views/interface/InterfaceManagerView.vue";
import ErrorView from "@/views/ErrorView.vue";
import LoginView from "@/views/user/LoginView.vue";
import RegisterView from "@/views/user/RegisterView.vue";
import AboutView from "@/views/AboutView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/test",
    name: "测试",
    component: AboutView,
  },
  {
    path: "/user/login",
    name: "登陆",
    component: LoginView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/user/register",
    name: "注册",
    component: RegisterView,
    meta: {
      hideInMenu: true,
    },
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
];

export default routes;
