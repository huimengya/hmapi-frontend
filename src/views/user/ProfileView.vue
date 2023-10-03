<template>
  <div class="profile" v-if="formData.email">
    <!-- 使用 el-descriptions 显示个人信息 -->
    <el-descriptions title="个人信息" column="1" label-align="left">
      <el-descriptions-item>
        <AvatarView :biz="user_avatar" />
      </el-descriptions-item>
      <el-descriptions-item label="名字:">
        <span v-if="!editing" @click="startEditing">{{
          formData.userName
        }}</span>
        <input
          class="input-name"
          v-else
          v-model="formData.userName"
          @blur="stopEditing"
          @keydown.enter="stopEditing"
        />
      </el-descriptions-item>
      <el-descriptions-item label="邮箱:">
        {{ formData.email }}
      </el-descriptions-item>
      <el-descriptions-item label="邀请码:">
        {{ formData.invitationCode }}
      </el-descriptions-item>
    </el-descriptions>
    <el-divider />
    <!--    钱包余额-->
    <el-descriptions title="钱包余额" column="2" label-align="left">
      <el-descriptions-item>
        <el-icon class="custom-icon" size="30px" color="#0EB7EF">
          <CreditCard />
        </el-icon>
        <span class="red-text">{{ formData.balance }}</span
        ><span>星币</span>
      </el-descriptions-item>
      <!--  每日签到    -->
      <template #extra>
        <el-icon color="#409EFC" size="30px" @click="requestDailySign">
          <Calendar />
        </el-icon>
      </template>
      <el-descriptions-item>
        <!--    充值   -->
        <el-icon class="custom-icon" color="#16E647" size="30px">
          <WalletFilled />
        </el-icon>
        <el-button color="#626aef" plain size="small" text @click="toPay"
          >充值</el-button
        >
      </el-descriptions-item>
    </el-descriptions>
    <el-divider />
    <!--  开发者凭证  -->
    <el-descriptions title="开发者凭证" column="1" label-align="left">
      <!--       accessKey、secretKey -->
      <el-descriptions-item label="accessKey:">
        <span :style="{ color: '#017EFF' }">{{ formData.accessKey }}</span>
      </el-descriptions-item>
      <el-descriptions-item label="secretKey:">
        <span :style="{ color: '#017EFF' }">{{ formData.secretKey }}</span>
      </el-descriptions-item>
      <template #extra>
        <el-button type="success" plain text size="small" @click="updateASK"
          >更新凭证
        </el-button>
      </template>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import {
  ElButton,
  ElDescriptions,
  ElDescriptionsItem,
  ElMessage,
} from "element-plus";
import { useStore } from "vuex";
import { Calendar, WalletFilled, CreditCard } from "@element-plus/icons-vue";
// 引入图片上传组件
import AvatarView from "@/views/user/AvatarView.vue";
import {
  DailyCheckInControllerService,
  UserControllerService,
} from "../../../generated";

const store = useStore();

const formData = ref(store.state.user.loginUser);
/**
 * 将biz传递给子组件
 */
const user_avatar = "user_avatar";
/**
 * 用于判断是否处于编辑状态 默认为false 表示不处于编辑状态
 */
// 用于判断是否处于编辑状态
const editing = ref(false);

const startEditing = () => {
  editing.value = true;
};

const stopEditing = async () => {
  // 保存个人信息
  //alert(formData.value.userName);
  const res = await UserControllerService.updateUserUsingPost(formData.value);
  if (res.code === 0) {
    // 更新成功
    await store.dispatch("user/getLoginUser");
    ElMessage.success("更新成功");
    editing.value = false;
  } else {
    // 更新失败
    ElMessage.error("更新失败");
  }
};
/**
 *每日签到
 */
// 请求后端触发每日签到方法
const requestDailySign = async () => {
  const res = await DailyCheckInControllerService.doDailyCheckInUsingPost();
  if (res.code === 0) {
    // 重新刷新页面
    await store.dispatch("user/getLoginUser");
    ElMessage.success("签到成功");
  } else {
    // 更新失败
    ElMessage.error("签到失败，今日已签到");
  }
};
/**
 * 用于更新accessKey和secretKey
 */
const updateASK = async () => {
  const res = await UserControllerService.updateVoucherUsingPost();
  if (res.code === 0) {
    // 更新成功
    await store.dispatch("user/getLoginUser");
    ElMessage.success("更新成功");
  } else {
    // 更新失败
    ElMessage.error("更新失败");
  }
};
/**
 * 跳转到充值页面
 */
const toPay = () => {
  ElMessage.success("跳转到充值页面");
};
</script>

<style scoped>
.profile {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  width: 35%;
  margin: 0 auto; /* 居中 */
}

.input-name {
  border: none; /* 去掉边框 */
  outline: none; /* 去掉聚焦时的边框 */
  display: inline-block; /* 让输入框在同一行显示 */
  /*聚焦时，外边框为浅蓝色，长度随输入的内容变化*/
  border-bottom: 1px solid #409eff;
}

.custom-icon {
  vertical-align: middle; /* 垂直居中对齐 */
  margin-right: 2px; /* 可根据需要调整右边距 */
}

.red-text {
  color: red;
}
</style>
