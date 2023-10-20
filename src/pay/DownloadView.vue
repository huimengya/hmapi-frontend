<template>
  <div class="bg-fa of">
    <section id="index" class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">微信账单申请</span>
        </h2>
      </header>

      <el-form :inline="true">
        <el-form-item>
          <el-date-picker
            v-model="billDate"
            value-format="yyyy-MM-dd"
            placeholder="选择账单日期"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="downloadBill('tradebill')"
            >下载交易账单
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="downloadBill('fundflowbill')"
            >下载资金账单
          </el-button>
        </el-form-item>
      </el-form>
    </section>

    <section id="index" class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">支付宝账单申请</span>
        </h2>
      </header>

      <el-form :inline="true">
        <el-form-item>
          <el-date-picker
            v-model="billDateAlipay"
            value-format="yyyy-MM-dd"
            placeholder="选择账单日期"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="downloadBillAliPay('trade')"
            >下载交易账单
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="downloadBillAliPay('signcustomer')"
            >下载资金账单
          </el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
//import billApi from "../api/bill";

const billDate = ref("");
const billDateAlipay = ref("");

const downloadBill = (type) => {
  if (type === "tradebill") {
    // 下载微信交易账单
    billApi.downloadBillWxPay(billDate.value, type).then((response) => {
      const element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:application/vnd.ms-excel;charset=utf-8," +
          encodeURIComponent(response.data.result)
      );
      element.setAttribute("download", billDate.value + "-" + type);
      element.style.display = "none";
      element.click();
    });
  } else if (type === "fundflowbill") {
    // 下载微信资金账单
    // 实现您的下载逻辑
  }
};

const downloadBillAliPay = (type) => {
  // 下载支付宝账单
  billApi.downloadBillAliPay(billDateAlipay.value, type).then((response) => {
    const element = document.createElement("a");
    element.setAttribute("href", response.data.downloadUrl);
    element.setAttribute("download", billDateAlipay.value + "-" + type);
    element.style.display = "none";
    element.click();
  });
};
</script>
