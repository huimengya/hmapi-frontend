<template>
  <div class="card-grid">
    <el-card v-for="product in productList" :key="product.id" class="box-card">
      <template #header>
        <div class="card-header">
          <span :class="{ highlightedTitle: product.title }">{{
            product.title
          }}</span>
          <el-button
            class="button"
            type="success"
            text
            @click="toPay(product.id)"
            >立即购买
          </el-button>
        </div>
      </template>
      <!--  商品描述    -->
      <div class="text item">{{ product.description }}</div>
      <div :class="{ highlighted: product.price / 100 }">
        ¥ {{ product.price / 100 }}
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElCard, ElMessage } from "element-plus";
import { onMounted, ref } from "vue";
import { ApIv3Service, Service } from "../../payRequest";
import { useRouter } from "vue-router";
// 测试数据
/*const products = ref([
  { id: 1, name: "AI-Code", price: 40, description: "6元60积分" },
  {
    id: 2,
    name: "Product 2",
    price: 30,
    description: "Another product description",
  },
  // Add more products as needed
  {
    id: 3,
    name: "Product 3",
    price: 20,
    description: "Another product description",
  },
  {
    id: 4,
    name: "Product 4",
    price: 10,
    description: "Another product description",
  },
  {
    id: 5,
    name: "Product 5",
    price: 5,
    description: "Another product description",
  },
]);*/
// 在这里编写立即购买的逻辑
const payBtnDisabled = ref(false);
// 二维码弹窗
const codeDialogVisible = ref(false);
// 产品列表
const productList = ref([]);
// 订单信息
const payOrder = ref({
  productId: "",
  payType: "alipay",
});
// 二维码
const codeUrl = ref("");
// 订单号
const orderNo = ref("");
// 定时器
let timer = null;

/*const selectItem = (productId) => {
  payOrder.value.productId = productId;
};

const selectPayType = (type) => {
  payOrder.value.payType = type;
};*/

const toPay = async (productId: string) => {
  //alert(productId);
  payBtnDisabled.value = true;

  if (payOrder.value.payType === "wxpay") {
    // 调用统一下单接口-微信支付
    const res = await ApIv3Service.nativePayUsingPost(productId);
    console.log("微信支付", res);
    // 支付成功
    codeUrl.value = res.data.codeUrl;
    orderNo.value = res.data.orderNo;
    // 打开二维码弹窗
    codeDialogVisible.value = true;

    // 启动定时器，查询订单是否支付成功
    timer = setInterval(() => {
      queryOrderStatus();
    }, 3000);
  } else if (payOrder.value.payType === "alipay") {
    // 调用统一下单接口-支付宝支付
    const res = await Service.tradePagePayUsingPost(productId);
    // 跳转到支付宝支付页面
    document.write(res.data.formStr);
  }
};

//关闭微信支付二维码对话框时让“确认支付”按钮可用
const closeDialog = () => {
  // 关闭二维码弹窗
  payBtnDisabled.value = false;
  // 清除定时器
  clearInterval(timer);
};
/**
 * 查询订单是否支付成功
 */
const router = useRouter();
const queryOrderStatus = async () => {
  // 调用查询订单接口
  const res = await Service.queryOrderStatusUsingGet(orderNo.value);
  if (res.code === 0) {
    // 清除定时器
    clearInterval(timer);
    // 支付成功后的页面跳转
    setTimeout(() => {
      router.push({ path: "/success" });
    }, 3000);
  }
};
/**
 * 获取产品列表
 */
// 页面加载完成后调用
onMounted(() => {
  loadProductList();
});
const loadProductList = async () => {
  const res = await Service.listUsingGet1();
  //console.log("商品列表：", res);
  if (res.code === 0) {
    productList.value = res.data.productList;
    console.log("商品列表2：", productList.value);
  } else {
    ElMessage.info("获取商品列表失败");
  }
};
</script>
<style scoped>
.highlighted {
  color: red;
}

.highlightedTitle {
  color: #409eff;
}

.card-grid {
  display: flex; /* 作用是让卡片横向排列 */
  flex-wrap: wrap; /* 作用是让卡片换行 */
  margin: -10px; /* 作用是让卡片之间有间距，-10px是为了抵消卡片的margin */
  justify-content: space-between; /* 作用是让卡片左右对齐 */
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 20%; /* calc作用是计算宽度，10%是每个卡片的宽度，20px是margin的宽度 */
  margin: 10px; /* Margin to create space between cards */
}
</style>
