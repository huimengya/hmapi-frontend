<template>
  <div class="bg-fa of">
    <section id="index" class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">订单列表</span>
        </h2>
      </header>
      <el-table :data="list" border style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column
          prop="orderNo"
          label="订单编号"
          width="230"
        ></el-table-column>
        <el-table-column prop="title" label="订单标题"></el-table-column>
        <el-table-column prop="totalFee" label="订单金额">
          <template v-slot="scope">
            {{ (scope.row.totalFee / 100).toFixed(2) }} 元
          </template>
        </el-table-column>
        <el-table-column prop="paymentType" label="支付方式"></el-table-column>
        <el-table-column label="订单状态">
          <template v-slot="scope">
            <el-tag v-if="scope.row.orderStatus === '未支付'"
              >{{ scope.row.orderStatus }}
            </el-tag>
            <el-tag v-if="scope.row.orderStatus === '支付成功'" type="success"
              >{{ scope.row.orderStatus }}
            </el-tag>
            <el-tag v-if="scope.row.orderStatus === '超时已关闭'" type="warning"
              >{{ scope.row.orderStatus }}
            </el-tag>
            <el-tag v-if="scope.row.orderStatus === '用户已取消'" type="info"
              >{{ scope.row.orderStatus }}
            </el-tag>
            <el-tag v-if="scope.row.orderStatus === '退款中'" type="danger"
              >{{ scope.row.orderStatus }}
            </el-tag>
            <el-tag v-if="scope.row.orderStatus === '已退款'" type="info"
              >{{ scope.row.orderStatus }}
            </el-tag>
            <el-tag v-if="scope.row.orderStatus === '退款异常'" type="danger"
              >{{ scope.row.orderStatus }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100" align="center">
          <template v-slot="scope">
            <el-button
              v-if="scope.row.orderStatus === '未支付'"
              type="text"
              @click="cancel(scope.row.orderNo, scope.row.paymentType)"
              >取消
            </el-button>
            <el-button
              v-if="scope.row.orderStatus === '支付成功'"
              type="text"
              @click="refund(scope.row.orderNo, scope.row.paymentType)"
              >退款
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>

    <!-- 退款对话框 -->
    <el-dialog
      v-model="dialogVisible"
      title="退款"
      width="30%"
      :before-close="handleClose"
    >
      <!--   退款原因   -->
      <el-form>
        <el-form-item label="申请退款">
          <el-select
            v-model="refundForm.reason"
            placeholder="请选择退款原因"
            style="width: 100%"
          >
            <el-option label="不喜欢" value="不喜欢"></el-option>
            <el-option label="买错了" value="买错了"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="toRefund"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ApIv3Service, Service } from "../../payRequest";
import { ElMessage } from "element-plus";

// 订单列表
const list = ref([]);

// 退款原因
const refundForm = ref({
  reason: "",
});
// 退款提交按钮是否禁用
const refundSubmitBtnDisabled = ref(false);

/**
 * 页面加载时查询订单
 */
onMounted(() => {
  showOrderList();
});
const showOrderList = async () => {
  // 在这里编写获取订单列表的逻辑
  const res = await Service.listUsingGet();
  console.log("订单列表", res);
  if (res.code === 0) {
    list.value = res.data.list;
  } else {
    ElMessage.error("获取订单列表失败");
  }
};

/**
 * 用户取消订单
 * @param orderNo 订单号
 * @param paymentType 支付方式
 */
const cancel = async (orderNo, paymentType) => {
  // 微信支付
  if (paymentType === "微信") {
    // 在这里编写取消订单的逻辑
    const res = await ApIv3Service.cancelUsingPost1(orderNo);
    if (res.code === 0) {
      ElMessage.success(res.message);
      // 刷新订单列表
      await showOrderList();
    } else {
      ElMessage.error(res.message);
    }
  } else {
    // 支付宝支付
    // 在这里编写取消订单的逻辑
    const res = await Service.cancelUsingPost(orderNo);
    if (res.code === 0) {
      ElMessage.success(res.message);
      // 刷新订单列表
      await showOrderList();
    } else {
      ElMessage.error(res.message);
    }
  }
};
/**
 * 退款对话框
 * @type {Ref<UnwrapRef<boolean>>}
 */
const dialogVisible = ref(false);
// 订单号、支付方式,避免混淆，导致数据错乱
const orderNoN = ref("");
const paymentTypeN = ref("");

const refund = (orderNo, paymentType) => {
  dialogVisible.value = true;
  orderNoN.value = orderNo;
  paymentTypeN.value = paymentType;
};
const handleClose = () => {
  dialogVisible.value = false;
  refundForm.value.reason = "";
  refundSubmitBtnDisabled.value = false;
};
/**
 * 确认退款
 */
const toRefund = async () => {
  refundSubmitBtnDisabled.value = true; //禁用按钮，防止重复提交
  console.log("paymentType", paymentTypeN.value);
  console.log("orderNo", orderNoN.value);
  debugger;
  if (paymentTypeN.value === "微信") {
    const res = await ApIv3Service.refundsUsingPost1(
      orderNoN.value,
      refundForm.value.reason
    );
    if (res.code === 0) {
      handleClose();
      await showOrderList();
    } else {
      ElMessage.error(res.message);
    }
  } else {
    const res = await Service.refundsUsingPost(
      orderNoN.value,
      refundForm.value.reason
    );
    if (res.code === 0) {
      handleClose();
      await showOrderList();
    } else {
      ElMessage.error(res.message);
    }
  }
};
</script>
