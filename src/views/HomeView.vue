<template>
  <div class="home">
    <h2>API接口浏览</h2>

    <!-- 列表展示接口 -->
    <el-table :data="apiList" style="width: 100%" v-if="apiList.length > 0">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="description" label="接口描述"></el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="primary" size="small" @click="viewApi(scope.row)">
            查看接口
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 当没有接口时显示提示信息 -->
    <div v-else>
      <p>暂无接口信息</p>
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
        <p>
          <strong>状态: </strong>
          {{ selectedApi.status === 0 ? "关闭" : "开启" }}
        </p>
        <p>
          <strong>更新时间: </strong>
          {{ moment(selectedApi.updateTime).format("YYYY-MM-DD hh:mm:ss") }}
        </p>
        <!-- 这里可以展示更多接口相关信息 -->
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import moment from "moment";
import {
  ElTable,
  ElTableColumn,
  ElButton,
  ElDialog,
  ElMessage,
} from "element-plus";
import { Interface, InterfaceControllerService } from "../../generated";

// 接口列表数据
const apiList = ref([
  // { name: "接口1", description: "这是接口1的描述" },
  // { name: "接口2", description: "这是接口2的描述" },
  // 在这里添加更多接口数据
]);

// 选中的接口和接口详情弹窗状态
let selectedApi = reactive<Interface>({});
const apiDialogVisible = ref(false);

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
 * 请求后端
 */
onMounted(() => {
  loadData();
});
const loadData = async () => {
  const res = await InterfaceControllerService.listInterfaceByPageUsingGet();
  if (res.code !== 0) {
    ElMessage.error(res.message);
    return;
  } else {
    apiList.value = res.data.records;
    console.log("接口管理", res.data);
    // total.value = res.data.total;
  }
};
</script>

<style scoped>
/* 可以在这里添加样式，美化您的网站首页 */
.home {
  text-align: center;
  margin-top: 20px;
}
</style>
