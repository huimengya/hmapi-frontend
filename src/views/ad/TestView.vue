<template>
  <el-row style="height: 70%">
    <el-col v-for="(api, index) in apiList" :key="index" :span="6">
      <el-card
        :body-style="{ padding: '0px' }"
        class="interface-card"
        style="width: 70%"
      >
        <img :src="api.imageUrl" class="image" />
        <div style="padding: 14px">
          <span>{{ api.description }}</span>
          <div class="bottom">
            <time class="time">{{ api.name }}</time>
            <el-button text class="button" @click="showDetails(api)">{{
              api.details
            }}</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const currentDate = ref(new Date());

const apiList = ref([
  {
    imageUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    name: "接口1",
    description: "这是接口1的描述",
    details: "详情",
  },
  {
    imageUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    name: "接口2",
    description: "这是接口2的描述",
    details: "详情",
  },
  {
    imageUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    name: "接口2",
    description: "这是接口2的描述",
    details: "详情",
  },
  {
    imageUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    name: "接口2",
    description: "这是接口2的描述",
    details: "详情",
  },
]);

const showDetails = (api: any) => {
  // 在这里处理显示接口详情的逻辑，可以使用弹窗或者路由跳转等方式
  alert(`显示接口详情：${api.name}`);
};
</script>

<style>
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

/* 这里可以添加样式以美化接口卡片，给它们一个高级感 */
.interface-card {
  margin: auto;
  padding: 5px;
  height: 90%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* 卡片阴影 */
}

.interface-card h4 {
  //font-size: 1.5rem; //margin-bottom: 10px;
}

/* 鼠标悬浮时的特效 */
.interface-card:hover {
  /* 在鼠标悬浮时改变背景颜色为黄色 */
  transform: scale(1.05); /* 在鼠标悬浮时稍微放大卡片 */
  transition: 0.3s ease, transform 0.3s ease; /* 添加过渡效果 */
}
</style>
