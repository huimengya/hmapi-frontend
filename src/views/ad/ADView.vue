<template>
  <div>
    <!-- 广告跑马灯 -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 3" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <!-- 搜索框 -->
    <el-input
      v-model="searchKeyword.searchText"
      placeholder="请输入接口名称或描述..."
      style="
        width: 50%;
        height: 40px;
        margin: 20px 25%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        border-radius: 30px;
      "
      @keydown.enter="searchInterfaces"
    />

    <!-- 接口列表 -->
    <el-row v-if="apiList.length > 0">
      <el-col v-for="(api, index) in apiList" :key="index" :span="8">
        <el-card
          :body-style="{ padding: '0px' }"
          class="interface-card"
          style="width: 70%"
        >
          <img :src="api.avatarUrl" class="image" />
          <div style="padding: 14px">
            <span>{{ api.description }}</span>
            <div class="bottom">
              <time class="time">{{ api.name }}</time>
              <el-button
                type="success"
                :icon="Search"
                circle
                class="button"
                @click="viewApi(api)"
              >
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 当没有接口时显示提示信息 -->
    <div v-else>
      <el-empty description="暂无数据" />
    </div>

    <!-- 弹窗展示接口详情 -->
    <el-dialog
      title="接口详情"
      v-model="apiDialogVisible"
      width="40%"
      @closed="closeApiDialog"
    >
      <div style="text-align: left">
        <!-- 使用样式设置文本左对齐 -->
        <p><strong>接口名称: </strong> {{ selectedApi.name }}</p>
        <p><strong>接口描述: </strong> {{ selectedApi.description }}</p>
        <p><strong>请求方法: </strong> {{ selectedApi.method }}</p>
        <p><strong>请求地址: </strong> {{ selectedApi.url }}</p>
        <p><strong>请求头: </strong> {{ selectedApi.requestHeader }}</p>
        <p><strong>响应头: </strong> {{ selectedApi.responseHeader }}</p>
        <strong>请求参数: </strong>
        <div>
          <json-viewer
            :boxed="true"
            :expanded="true"
            :copyable="true"
            expand-depth="3"
            :show-array-index="false"
            :value="
              selectedApi.requestParams
                ? JSON.parse(selectedApi.requestParams)
                : {}
            "
          ></json-viewer>
        </div>
        <p>
          <strong>状态: </strong>
          <i
            class="status status-warning"
            title="审核中"
            v-if="selectedApi.status === 0"
          ></i>
          <i
            class="status status-success"
            title="已上线"
            v-else-if="selectedApi.status === 1"
          ></i>
          <i
            class="status status-danger"
            title="已下线"
            v-else-if="selectedApi.status === 2"
          ></i>
          {{ selectedApi.status === 0 ? "审核中" : "" }}
          {{ selectedApi.status === 1 ? "已上线" : "" }}
          {{ selectedApi.status === 2 ? "已下线" : "" }}
        </p>
        <p>
          <strong>更新时间: </strong>
          {{ moment(selectedApi.updateTime).format("YYYY-MM-DD hh:mm:ss") }}
        </p>
        <!-- 这里可以展示更多接口相关信息 -->
      </div>
      <div class="container">
        <div class="button-container">
          <el-button type="primary" @click="invoke">调试</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import {
  InterfaceInfo,
  InterfaceInfoControllerService,
  InterfaceInfoSearchTextRequest,
} from "../../../generated";

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
import JsonViewer from "vue-json-viewer";
import { ElButton, ElDialog, ElMessage } from "element-plus";
import moment from "moment/moment";
import { useRouter } from "vue-router";

const router = useRouter();
const searchKeyword = ref<InterfaceInfoSearchTextRequest>({
  searchText: "",
});
const apiList = ref([]); // 接口列表数据
const searchInterfaces = async () => {
  const res =
    await InterfaceInfoControllerService.listInterfaceInfoBySearchTextPageUsingPost(
      searchKeyword.value
    );
  if (res.code === 0) {
    // 将数据赋值给响应式变量
    apiList.value = res.data?.records;
  } else {
    ElMessage.error(res.message);
  }
};
/**
 * 请求后端
 */
onMounted(() => {
  loadData();
});
const loadData = async () => {
  const res =
    await InterfaceInfoControllerService.listInterfaceInfoByPageUsingPost({
      current: 1,
      pageSize: 10,
    });
  if (res.code !== 0) {
    ElMessage.error(res.message);
    return;
  } else {
    apiList.value = res.data.records;
    console.log("接口管理", res.data);
    // total.value = res.data.total;
  }
};
/**
 * 跳转到接口详情页面
 */
// 选中的接口和接口详情弹窗状态
let selectedApi = reactive<InterfaceInfo>({});
const apiDialogVisible = ref(false); // 默认不显示
// 查看接口详情
const viewApi = (row) => {
  apiDialogVisible.value = true;
  console.log("row", row);
  selectedApi = row;
};

// 关闭接口详情弹窗
const closeApiDialog = () => {
  apiDialogVisible.value = false;
};
/**
 *  调试接口
 */
const invoke = () => {
  // 跳转到调试页面 InvokeView.vue 并传递接口id、url、method、requestParams
  router.push({
    path: "/interface/invoke",
    query: {
      id: selectedApi.id,
      url: selectedApi.url,
      method: selectedApi.method,
      requestParams: selectedApi.requestParams,
    },
  });
};
</script>

<style scoped>
/*跑马灯*/

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.bottom {
  margin-top: 13px;
  line-height: 10px;
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
  padding: 10px;
  height: 90%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* 卡片阴影 */
}

/* 鼠标悬浮时的特效 */
.interface-card:hover {
  /* 在鼠标悬浮时改变背景颜色为黄色 */
  transform: scale(1.05); /* 在鼠标悬浮时稍微放大卡片 */
  transition: 0.3s ease, transform 0.3s ease; /* 添加过渡效果 */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

.button-container {
  margin-top: auto; /* 按钮容器向底部推动，始终在底部 */
  align-self: flex-end; /* 按钮容器右对齐 */
  position: absolute;
  bottom: 0; /* 按钮容器位于底部 */
}

/*状态实心圆*/
.status {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

/*状态颜色*/
.status-warning {
  background-color: #f1ae1b;
}

.status-success {
  background-color: #59c837;
}

.status-danger {
  background-color: #e9524a;
}
</style>
