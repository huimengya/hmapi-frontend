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
            测试
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
        <p><strong>请求参数: </strong> {{ selectedApi.requestParams }}</p>
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
      <div class="container" title="请求参数">
        <el-input
          type="textarea"
          v-model="inputPara"
          :style="{ width: '85%' }"
          placeholder="请输入请求参数..."
        ></el-input>
        <div class="button-container">
          <el-button type="primary" @click="send">发送</el-button>
        </div>
      </div>
      <div>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>响应</span>
            </div>
          </template>
          <div class="text">
            {{ responseParam }}
          </div>
        </el-card>
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
import { InterfaceInfo, InterfaceInfoControllerService } from "../../generated";

// 接口列表数据
const apiList = ref([
  // { name: "接口1", description: "这是接口1的描述" },
  // { name: "接口2", description: "这是接口2的描述" },
  // 在这里添加更多接口数据
]);

// 选中的接口和接口详情弹窗状态
let selectedApi = reactive<InterfaceInfo>({});
const apiDialogVisible = ref(false);

// 输入的参数
const inputPara = ref();
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
  const res =
    await InterfaceInfoControllerService.listInterfaceInfoByPageUsingGet();
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
 *  发送
 */
const responseParam = ref();
const send = async () => {
  //console.log("输入的参数：", inputPara.value);
  //console.log("id：", selectedApi.id);
  const res = await InterfaceInfoControllerService.invokeInterfaceInfoUsingPost(
    {
      id: selectedApi.id,
      userRequestParam: inputPara.value,
    }
  );
  console.log("res", res);
  if (res.code === 0) {
    responseParam.value = res.data;
    ElMessage.success("成功");
  } else if (res.code === 40100) {
    ElMessage.info("您还没有登陆！！！");
  } else {
    ElMessage.error("调用失败");
  }
};
</script>

<style scoped>
/* 可以在这里添加样式，美化您的网站首页 */
.home {
  text-align: center;
  margin-top: 20px;
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

.card-header {
  display: flex;
  justify-content: space-between;
}

.text {
  font-size: 14px;
  text-align: left;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin-top: 10px;
  width: 85%;
}
</style>
