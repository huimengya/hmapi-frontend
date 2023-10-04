<template>
  <el-dropdown @command="queryTotal">
    <span class="el-dropdown-link">
      <el-button color="#626aef" :dark="true" plain text>
        TOP<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="3">TOP 3</el-dropdown-item>
        <el-dropdown-item command="5">TOP 5</el-dropdown-item>
        <el-dropdown-item command="7">TOP 7</el-dropdown-item>
        <el-dropdown-item command="9">TOP 9</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <div id="main" class="chart-container"></div>
  <el-dropdown @command="queryUser">
    <span class="el-dropdown-link">
      <el-button color="#626aef" :dark="true" plain text>
        TOP<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="3">TOP 3</el-dropdown-item>
        <el-dropdown-item command="5">TOP 5</el-dropdown-item>
        <el-dropdown-item command="7">TOP 7</el-dropdown-item>
        <el-dropdown-item command="9">TOP 9</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <div id="main2" class="chart-container"></div>
</template>
<script setup lang="ts">
import * as echarts from "echarts";
import { nextTick, onMounted, ref } from "vue";
import { InterfaceInvokeCountControllerService } from "../../../generated";
import { ElMessage } from "element-plus";
import { ArrowDown } from "@element-plus/icons-vue";
// 绘制饼图，准备数据
const option = {
  title: {
    text: "接口调用统计",
    subtext: "TOP 3",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "接口调用统计",
      type: "pie",
      radius: "50%",
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
// 用户图表
const option2 = {
  title: {
    text: "用户调用统计",
    subtext: "TOP 3",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "接口调用统计",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "登陆可查看" },
        { value: 735, name: "请登陆" },
        { value: 580, name: "当前未登录" },
        { value: 484, name: "不可查看" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
// 页面加载完毕后，绘制图表
onMounted(async () => {
  await nextTick(); // 等待 DOM 渲染完成
  const myChart = echarts.init(document.getElementById("main"));
  myChart.setOption(option);
  await queryTotal(5);
  const myChart2 = echarts.init(document.getElementById("main2"));
  myChart2.setOption(option2);
  await queryUser(3);
});
/**
 * 查询接口调用统计
 */
const queryTotal = async (command: string | number | object) => {
  const res =
    await InterfaceInvokeCountControllerService.getTotalInvokesByAnyUsingGet(
      command
    );
  if (res.code === 0) {
    //ElMessage.warning(`TOP ${command}`);
    // 将后端响应的数据转换为图表需要的格式
    const chartData = res.data.map((item) => ({
      value: Number(item.totalInvokes), // 转换为数字
      name: item.interfaceName,
    }));
    // 更新图表的数据
    option.series[0].data = chartData;
    // 更新标题中的文本内容
    option.title.subtext = `TOP ${command}`;
    // 获取图表实例
    const myChart = echarts.init(document.getElementById("main"));

    // 更新图表选项
    myChart.setOption(option);
  } else {
    ElMessage.error(res.message);
  }
};
const queryUser = async (command: string | number | object) => {
  const res = await InterfaceInvokeCountControllerService.getUserInvokeUsingGet(
    command
  );
  if (res.code === 0) {
    // ElMessage.warning(`TOP ${command}`);
    // 将后端响应的数据转换为图表需要的格式
    const chartData = res.data.map((item) => ({
      value: Number(item.totalInvokes), // 转换为数字
      name: item.interfaceName,
    }));
    // 更新图表的数据
    option2.series[0].data = chartData;

    // 更新标题中的文本内容
    option2.title.subtext = `TOP ${command}`;
    // 获取图表实例
    const myChart2 = echarts.init(document.getElementById("main2"));

    // 更新图表选项
    myChart2.setOption(option2);
  } else {
    ElMessage.error(res.message);
  }
};
</script>
<style scoped>
.chart-container {
  width: 41%;
  height: 400px;
  display: inline-block;
  margin-right: 2%; /* 添加右边距，以分隔两个图表 */
}
</style>
