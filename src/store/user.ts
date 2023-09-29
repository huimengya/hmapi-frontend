import { StoreOptions } from "vuex";
import AccessEnum from "@/access/AccessEnum";
import { UserControllerService } from "../../generated";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {},
  }),
  actions: {
    async getLoginUser({ commit, state }, payload) {
      // TODO: 从后端获取登录用户信息
      // 1. 从后端获取登录用户信息
      //debugger;
      const res = await UserControllerService.getLoginUserUsingGet();
      console.log("查询当前登录用户，响应的数据", res);
      if (res.code === 0) {
        commit("updateLoginUser", res.data);
      } else {
        // 2.如果没有登录，那么就设置为未登录
        // debugger;
        commit("updateLoginUser", {});
      }
    },

    // 用户退出登录
    async logout({ commit }) {
      // 1. 从后端退出登录
      const res = await UserControllerService.userLogoutUsingPost();
      //console.log("退出登录，响应的数据", res);
      if (res.code === 0) {
        commit("updateLoginUser", {});
      }
    },
  },
  mutations: {
    updateLoginUser(state, payload) {
      //debugger;
      //console.log("更新登录用户", payload);
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
