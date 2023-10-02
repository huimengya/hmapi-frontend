<template>
  <div>
    <!-- 功能一：请求方法、地址、发送请求   -->
    <el-select v-model="selectedMethod" style="width: 10%" disabled>
      <el-option label="GET" value="GET"></el-option>
      <el-option label="POST" value="POST"></el-option>
      <!-- 添加其他请求方法选项 -->
    </el-select>
    <el-input
      v-model="requestUrl"
      style="width: 50%; margin-left: 5px"
      placeholder="输入地址"
    />
    <el-button color="#626aef" style="margin-left: 5px" @click="sendRequest"
      >发送
    </el-button>
    <!-- 功能二：设置请求参数   -->
    <!-- 表格用来显示参数 -->
    <el-table :data="requestParams" border style="width: 75%; margin-top: 5px">
      <el-table-column align="center" label="参数名" prop="name">
        <template v-slot="scope">
          <el-input v-model="scope.row.fieldName" placeholder="参数名" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="参数值" prop="value">
        <template v-slot="scope">
          <el-input v-model="scope.row.value" placeholder="参数值" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template v-slot="scope">
          <el-button
            type="danger"
            @click="removeParam(scope.$index)"
            :icon="Delete"
            circle
          />
        </template>
      </el-table-column>
    </el-table>
    <el-button
      @click="addParam"
      type="success"
      circle
      style="margin-top: 5px; margin-left: 30%"
    >
      +
    </el-button>
    <!--  功能三：响应  -->
    <div>
      <h4>响应内容：</h4>
      <div class="response-container">
        <json-viewer
          :boxed="true"
          :expanded="true"
          :copyable="true"
          expand-depth="3"
          :show-array-index="false"
          :value="jsonResponse"
        ></json-viewer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import JsonViewer from "vue-json-viewer";
import { InterfaceInfoControllerService } from "../../../generated";

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";

const requestUrl = ref("");
const selectedMethod = ref("GET"); // 初始为空，需要在下拉列表中选择

// 功能二：设置请求参数
const requestParams = ref([]);

const addParam = () => {
  requestParams.value.push({ fieldName: "", value: "" });
};

const removeParam = (index: number) => {
  requestParams.value.splice(index, 1);
};
// 功能三：响应
const jsonResponse = ref({}); // 初始化为一个空对象
const sendRequest = async () => {
  // 更新jsonResponse为实际的响应数据对象
  /* jsonResponse.value = [
     {
       id: "1706657106238844930",
       returnFormat: "JSON",
       name: "test",
       url: "/api/name",
       userId: "1706581025376837634",
       method: "GET",
       totalInvokes: "0",
       requestParams:
         '[{"id":"param1","fieldName":"param1","type":"string","desc":"Parameter description","required":"true"}]',
       responseParams:
         '[{"id":"field1","fieldName":"field1","type":"string","desc":"Response field description"}]',
       description: "test",
       requestExample: "https://example.com/api/request",
       reduceScore: 0,
       avatarUrl: "/avatar.jpg",
       requestHeader: "Content-Type: application/json",
       responseHeader: "Content-Type: application/json",
       status: 0,
       createTime: "2023-09-26T13:08:56.000+00:00",
       updateTime: "2023-09-29T15:40:23.000+00:00",
       isDelete: 0,
     },
   ];
   */
  // 请求后端接口，获取响应数据
  console.log(requestParams.value);
  const res = await InterfaceInfoControllerService.invokeInterfaceUsingPost({
    id: "1707790476440129537",
    requestParams: requestParams.value,
  });
  console.log("接口响应", res);
  if (res.code === 0) {
    jsonResponse.value = res.data;
  } else {
    jsonResponse.value = { error: res.message };
  }
};
/**
 * 调试接口
 *  接收路由参数：接口id，请求地址，请求方法，请求参数
 */
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  requestParams: {
    type: String,
    required: true,
  },
});
// 将路由参数传递给data中的变量
const propsData = reactive({
  id: props.id,
  url: props.url,
  method: props.method,
  requestParams: props.requestParams,
});
// "[{"id":"接口id","fieldName":"name"}]"
requestUrl.value = propsData.url;
selectedMethod.value = propsData.method;
requestParams.value = JSON.parse(propsData.requestParams);
</script>
<style scoped>
.response-container {
  width: 50%;
}
</style>
