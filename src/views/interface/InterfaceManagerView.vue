<template>
  <!--搜索表单：接口名称、接口状态搜索-->
  <el-form :inline="true" :model="search" class="demo-form-inline">
    <el-form-item label="接口名称">
      <el-input v-model="search.name" placeholder="请输入接口名称"></el-input>
    </el-form-item>
    <el-form-item label="接口状态">
      <el-select v-model="search.status" placeholder="请选择">
        <el-option label="审核中" value="0"></el-option>
        <el-option label="上线" value="1"></el-option>
        <el-option label="下线" value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        plain
        :icon="Search"
        circle
        @click="loadData"
      ></el-button>
      <el-button color="#626aef" plain @click="handleNew()">新建</el-button>
    </el-form-item>
  </el-form>
  <!-- 表格 -->
  <el-table :data="dataList" style="width: auto">
    <el-table-column label="ID" prop="id" width="160" />
    <el-table-column label="名字" prop="name" width="100" />
    <el-table-column label="描述" prop="description" width="200" />
    <el-table-column label="请求头" prop="requestHeader" width="120" />
    <el-table-column label="响应头" prop="responseHeader" width="120" />
    <el-table-column label="请求URL" prop="url" width="120" />
    <el-table-column label="方法" prop="method" width="60" />
    <el-table-column label="状态" prop="status" align="center" width="60">
      <template v-slot="scope">
        <i
          class="status status-warning"
          title="审核中"
          v-if="scope.row.status === 0"
        ></i>
        <i
          class="status status-success"
          title="已上线"
          v-else-if="scope.row.status === 1"
        ></i>
        <i
          class="status status-danger"
          title="已下线"
          v-else-if="scope.row.status === 2"
        ></i>
      </template>
    </el-table-column>
    <!--    操作-->
    <el-table-column label="操作" align="center" width="260">
      <template v-slot="scope">
        <!--        状态按钮-->
        <el-button
          size="small"
          :type="getStatusButtonType(scope.row.status)"
          @click="onAndoff(scope.$index, scope.row)"
        >
          {{ getStatusButtonText(scope.row.status) }}
        </el-button>
        <el-button
          type="primary"
          :icon="Edit"
          circle
          @click="handleEdit(scope.$index, scope.row)"
        >
        </el-button>
        <el-popconfirm
          title="你确定要删除?"
          @confirm="confirmEvent(scope.$index, scope.row)"
          @cancel="cancelEvent"
        >
          <template #reference>
            <el-button type="danger" :icon="Delete" circle></el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <!-- 编辑对话框 -->
  <el-dialog title="新增/编辑" v-model="editDialogVisible">
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
          style="width: 100%"
          v-model="editForm.requestParams"
        ></el-input>
      </el-form-item>
      <el-form-item label="响应参数">
        <el-input
          type="textarea"
          style="width: 100%"
          v-model="editForm.responseParams"
        ></el-input>
      </el-form-item>
      <el-form-item label="请求URL">
        <el-input v-model="editForm.url"></el-input>
      </el-form-item>
      <el-form-item label="方法">
        <el-input v-model="editForm.method"></el-input>
      </el-form-item>
      <el-form-item label="消耗积分">
        <el-input v-model="editForm.reduceScore"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input v-model="editForm.status"></el-input>
      </el-form-item>
      <el-form-item label="调用次数">
        <el-input v-model="editForm.totalInvokes"></el-input>
      </el-form-item>
      <el-form-item label="接口头像" v-if="!isNew">
        <AvatarView :biz="inter" :bizId="editForm.id" />
      </el-form-item>
      <el-form-item label="头像URL">
        <el-input
          v-model="editForm.avatarUrl"
          disabled
          placeholder="更新接口头像会自动更新接口URL"
        ></el-input>
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
  <!-- 分页 -->
  <div class="pagination-class">
    <el-pagination
      @size-change="handlePageSizeChange"
      @current-change="handleCurrentPageChange"
      showTotal="true"
      :current-page="search.current"
      :page-sizes="[7, 10, 15, 20, 50]"
      :page-size="search.pageSize"
      :total="parseInt(total, 10)"
      small
      layout="prev, pager, next"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import {
  InterfaceInfoControllerService,
  InterfaceInfoQueryRequest,
} from "../../../generated";
import { Delete, Edit, Search } from "@element-plus/icons-vue";
import AvatarView from "@/views/upload/AvatarView.vue";

const inter = "interface_avatar";
// 添加编辑对话框相关数据
const editDialogVisible = ref(false);
const editForm = ref({}); // 用于编辑的更新表单数据

/** 处理新建按钮点击事件*/
// 是否是新建
const isNew = ref(false);
const handleNew = () => {
  console.log("新建按钮点击");
  // 清空编辑表单
  editForm.value = {};
  // 设置为新建
  isNew.value = true;
  // 打开新建对话框
  editDialogVisible.value = true;
};

// 保存编辑后的数据
const dialogVisible = async () => {
  // 发送请求将编辑后的数据保存到后端，这里需要你实现相应的请求逻辑
  // 将输入的内容转为JSON格式
  const requestParams = JSON.parse(editForm.value.requestParams);
  const responseParams = JSON.parse(editForm.value.responseParams);
  if (isNew.value) {
    // 新建
    console.log("新增:", requestParams);
    console.log("新增:", responseParams);
    const res = await InterfaceInfoControllerService.addInterfaceInfoUsingPost(
      (editForm.value = {
        ...editForm.value,
        requestParams,
        responseParams,
      })
    );
    console.log("新增数据", res);
    if (res.code === 0) {
      loadData();
      // 保存成功后关闭编辑对话框
      editDialogVisible.value = false;
      ElMessage.success("新增成功!");
    }
    return;
  } else {
    // 更新
    //alert("更新");
    const res =
      await InterfaceInfoControllerService.updateInterfaceInfoUsingPost(
        (editForm.value = {
          ...editForm.value,
          requestParams,
          responseParams,
        })
      );
    console.log("更新数据", res);
    if (res.code === 0) {
      loadData();
      // 保存成功后关闭编辑对话框
      editDialogVisible.value = false;
      ElMessage.success("更新成功!");
    }
  }
};
/** 关闭对话框 */
const dialogVisibleClose = () => {
  // 关闭对话框
  editDialogVisible.value = false;
};
/**操作按钮*/
const onAndoff = (index, row) => {
  console.log("操作按钮点击", row);
  if (row.status === 0) {
    online(index, row);
  } else if (row.status === 1) {
    offline(index, row);
  } else if (row.status === 2) {
    online(index, row);
  }
};
const handleEdit = (index, row) => {
  // 修改
  console.log("编辑按钮点击，当前行数据：", row);
  // 设置为非新建
  isNew.value = false;
  // 将当前行的数据填充到编辑表单中
  editForm.value = { ...row };
  // 打开编辑对话框
  editDialogVisible.value = true;
};
// 删除
const confirmEvent = (index, row) => {
  handleDelete(index, row);
};
const cancelEvent = () => {
  console.log("cancel!");
};
const handleDelete = async (index, row) => {
  console.log(index, row);
  const res = await InterfaceInfoControllerService.deleteInterfaceInfoUsingPost(
    row
  );
  console.log("删除数据：", row.id);
  if (res.code === 0) {
    ElMessage.success("删除成功!");
    loadData();
  }
};
// 定义响应式数组 用于存放表格数据
const dataList = ref([]);

onMounted(() => {
  loadData();
});
/**
 * 定义一个函数，用于分页
 */
// 定义响应式对象 用于存放总条数,确保分页正常
const total = ref(0);
// 在 setup 部分添加处理分页变化的函数
const handlePageSizeChange = (pageSize) => {
  search.value.pageSize = pageSize; // 更新 pageSize
  loadData(); // 重新加载数据
};

const handleCurrentPageChange = (currentPage) => {
  search.value.current = currentPage; // 更新 current
  loadData(); // 重新加载数据
};
/**
 * 搜索
 */
// 定义搜索表单数据 status: 0, // 状态 0:审核中 1:上线 2:下线
const search = ref<InterfaceInfoQueryRequest>({
  name: "",
  status: undefined,
  current: 1,
  pageSize: 7,
});
const loadData = async () => {
  // 发送请求获取数据
  const res =
    await InterfaceInfoControllerService.listInterfaceInfoByPageUsingPost(
      search.value
    );
  if (res.code === 0) {
    // 将数据赋值给响应式变量
    dataList.value = res.data?.records;
    console.log("接口管理", res.data);
    total.value = res.data?.total;
    console.log("total", res.data?.total);
  } else {
    ElMessage.error(res.message);
  }
};
/**
 * 状态按钮
 */
// 获取按钮类型的函数
const getStatusButtonType = (status: number) => {
  switch (status) {
    case 0:
      return "warning"; // 审核中，黄色按钮
    case 1:
      return "success"; // 上线，绿色按钮
    case 2:
      return "danger"; // 下线，红色按钮
    default:
      return "default"; // 默认按钮类型
  }
};
// 获取按钮文本的函数
const getStatusButtonText = (status: number) => {
  switch (status) {
    case 0:
      return "上线";
    case 1:
      return "下线";
    case 2:
      return "上线";
    default:
      return "未知状态";
  }
};
/**
 * 发布和下架
 */
const online = async (index, row) => {
  //console.log("发布", row.id);
  const res = await InterfaceInfoControllerService.onlineInterfaceInfoUsingPost(
    {
      id: row.id,
    }
  );
  console.log("res", res);
  if (res.code === 0) {
    loadData();
    ElMessage.success("success");
  } else {
    ElMessage.error("error");
  }
};
const offline = async (index, row) => {
  //console.log("发布", row.id);
  const res =
    await InterfaceInfoControllerService.offlineInterfaceInfoUsingPost({
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
<style scoped>
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

/*分页*/
.pagination-class {
  margin-top: 10px;
  /*分页居中对齐*/
  margin-left: 50%;
}
</style>
