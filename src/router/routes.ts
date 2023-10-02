import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InterfaceManagerView from "@/views/interface/InterfaceManagerView.vue";
import ErrorView from "@/views/ErrorView.vue";
import LoginView from "@/views/user/LoginView.vue";
import RegisterView from "@/views/user/RegisterView.vue";
import AboutView from "@/views/interface/InvokeView.vue";
import InvokeView from "@/views/interface/InvokeView.vue";
import ADView from "@/views/ad/ADView.vue";
import TestView from "@/views/ad/TestView.vue";
import ProfileView from "@/views/user/ProfileView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/user/profile",
    name: "个人中心",
    component: ProfileView,
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
    path: "/interface/invoke",
    name: "接口调试",
    component: InvokeView,
    props: (route) => ({
      id: route.query.id,
      url: route.query.url,
      method: route.query.method,
      requestParams: route.query.requestParams,
    }),
    meta: {
      hideInMenu: true,
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
