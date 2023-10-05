import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InterfaceManagerView from "@/views/interface/InterfaceManagerView.vue";
import ErrorView from "@/views/ErrorView.vue";
import LoginView from "@/views/user/LoginView.vue";
import RegisterView from "@/views/user/RegisterView.vue";
import InvokeView from "@/views/interface/InvokeView.vue";
import ProfileView from "@/views/user/ProfileView.vue";
import AvatarView from "@/views/upload/AvatarView.vue";
import TextView from "@/views/user/TextView.vue";
import InvokeCountView from "@/views/interface/InvokeCountView.vue";
import AdManagerView from "@/views/ad/AdManagerView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/text",
    name: "文本",
    component: TextView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/avatar",
    name: "头像",
    component: AvatarView,
    props: (route) => ({
      biz: route.query.biz,
      bizId: route.query.bizId,
    }),
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/user/profile",
    name: "个人中心",
    component: ProfileView,
    meta: {
      hideInMenu: true,
    },
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
    path: "/interface/count",
    name: "调用统计",
    component: InvokeCountView,
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
    path: "/ad/manager",
    name: "广告管理",
    component: AdManagerView,
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
