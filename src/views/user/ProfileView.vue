<template>
  <div class="profile">
    <el-row>
      <el-col :span="24">
        <el-card>
          <div class="clearfix">
            <span>个人中心</span>
          </div>
          <el-row>
            <el-col :span="24">
              <el-form style="width: 30%">
                <el-form-item label="用户名">
                  <el-input v-model="user.userAccount" disabled></el-input>
                </el-form-item>
                <el-form-item label="昵称">
                  <el-input v-model="user.userName"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model="user.email" disabled></el-input>
                </el-form-item>
                <el-form-item label="邀请码">
                  <el-input v-model="user.invitationCode" disabled></el-input>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    {{ store.state.user.loginUser }}
  </div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
const user = store.state.user.loginUser;
</script>
<style scoped>
.profile {
  padding: 20px;
}
</style>
