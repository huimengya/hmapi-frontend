<template>
  <p>Basic text button</p>
  <div class="flex justify-space-between mb-4 flex-wrap gap-4">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      >{{ button.text }}
    </el-button>
    <el-button text>hhhh</el-button>
  </div>
</template>

<script setup lang="ts">
const buttons = [{ type: "success", text: "success" }] as const;
</script>
