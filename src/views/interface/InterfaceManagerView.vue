<template>
  <!-- 表格 -->
  <el-table :data="dataList" style="width: 100%">
    <el-table-column label="ID" prop="id" />
    <el-table-column label="名字" prop="name" />
    <el-table-column label="描述" prop="description" />
    <el-table-column label="请求头" prop="requestHeader" />
    <el-table-column label="响应头" prop="responseHeader" />
    <el-table-column label="URL" prop="url" />
    <el-table-column label="方法" prop="method" />
    <el-table-column label="状态" prop="status">
      <template v-slot="scope">
        {{ scope.row.status === 1 ? "开启" : "关闭" }}
      </template>
    </el-table-column>
    <el-table-column align="center">
      <template #header>
        <el-button type="primary" size="small" @click="handleNew()"
          >新建
        </el-button>
      </template>
      <template #default="scope">
        <el-button
          v-if="scope.row.status === 0"
          size="small"
          @click="onAndOffline(scope.$index, scope.row)"
          >发布
        </el-button>
        <el-button
          v-if="scope.row.status === 1"
          size="small"
          @click="onAndOffline(scope.$index, scope.row)"
          >下架
        </el-button>
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >编辑
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 编辑对话框 -->
  <el-dialog title="编辑接口信息" v-model="editDialogVisible">
    <!-- 编辑表单 -->
    <el-form :model="editForm" label-width="80px">
      <el-form-item label="名字">
        <el-input v-model="editForm.name"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="editForm.description"></el-input>
      </el-form-item>
      <el-form-item label="请求头">
        <el-input v-model="editForm.requestHeader"></el-input>
      </el-form-item>
      <el-form-item label="响应头">
        <el-input v-model="editForm.responseHeader"></el-input>
      </el-form-item>
      <el-form-item label="请求参数">
        <el-input
          type="textarea"
          style="width: 50%"
          v-model="editForm.requestParams"
        ></el-input>
      </el-form-item>
      <el-form-item label="URL">
        <el-input v-model="editForm.url"></el-input>
      </el-form-item>
      <el-form-item label="方法">
        <el-input v-model="editForm.method"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input v-model="editForm.status"></el-input>
      </el-form-item>
    </el-form>
    <!-- 确认和取消按钮 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisibleClose">取消</el-button>
        <el-button type="primary" @click="dialogVisible"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { InterfaceControllerService } from "../../../generated";

const search = ref("");

// 添加编辑对话框相关数据
const editDialogVisible = ref(false);
const editForm = ref({}); // 用于编辑的表单数据

/** 处理新建按钮点击事件*/
const handleNew = () => {
  console.log("新建按钮点击");
  // 清空新建表单数据
  editForm.value = {};
  // 打开新建对话框
  editDialogVisible.value = true;
};
/** 处理编辑按钮点击事件*/
const handleEdit = (index, row) => {
  // 修改
  console.log("编辑按钮点击，当前行数据：", row);
  // 将当前行的数据填充到编辑表单中
  editForm.value = { ...row };
  // 打开编辑对话框
  editDialogVisible.value = true;
};
// 保存编辑后的数据
const dialogVisible = async () => {
  // 发送请求将编辑后的数据保存到后端，这里需要你实现相应的请求逻辑
  // console.log("对话框：", editForm.value);
  const res = await InterfaceControllerService.updateInterfaceUsingPost(
    editForm.value
  );
  console.log("更新数据", res);
  if (res.code === 0) {
    loadData();
    // 保存成功后关闭编辑对话框
    editDialogVisible.value = false;
    ElMessage.success("更新成功!");
  }
};
/** 关闭对话框 */
const dialogVisibleClose = () => {
  // 关闭对话框
  editDialogVisible.value = false;
};
/** 处理删除按钮点击事件*/
const handleDelete = async (index, row) => {
  confirm("是否删除？");
  console.log(index, row);
  const res = await InterfaceControllerService.deleteInterfaceUsingPost(row);
  console.log("删除数据：", row.id);
  if (res.code === 0) {
    loadData();
  }
};
// 请求后端
const show = ref(false);
// 定义响应式数组 用于存放表格数据
const dataList = ref([]);
// 定义响应式对象 用于存放总条数
// const total = ref(0);

// 搜索 todo：搜索
// const onChange = async () => {
//   console.log("输入的值：", search.value);
//   const res = await InterfaceControllerService.listInterfaceByPageUsingGet({
//     queryParams,
//   });
//   console.log("查询数据：", res);
// };
// 向后端发送请求，获取数据
onMounted(() => {
  loadData();
});
/**
 * 定义一个函数，用于分页
 */
// todo: 分页
const loadData = async () => {
  show.value = false;
  const res = await InterfaceControllerService.listInterfaceByPageUsingGet();
  if (res.code !== 0) {
    ElMessage.error(res.message);
    return;
  } else {
    dataList.value = res.data.records;
    console.log("接口管理", res.data);
    // total.value = res.data.total;
    show.value = true;
  }
};
/**
 * 发布和下架
 */
const onAndOffline = async (index, row) => {
  //console.log("发布", row.id);
  const res = await InterfaceControllerService.onlineInterfaceUsingPost({
    id: row.id,
  });
  console.log("res", res);
  if (res.code === 0) {
    loadData();
    ElMessage.success("success");
  } else {
    ElMessage.error("error");
  }
};
</script>
<style scoped></style>
