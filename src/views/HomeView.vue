<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <!--    测试按钮-->
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <!--    计数器-->
    <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { ref } from "vue";

const num = ref(1);
const handleChange = (value: number) => {
  console.log(value);
};
</script>
