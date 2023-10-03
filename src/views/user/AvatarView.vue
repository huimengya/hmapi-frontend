<template>
  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
  <el-upload
    ref="upload"
    class="upload-demo"
    :action="avatarUrl"
    :limit="1"
    :on-exceed="handleExceed"
    :auto-upload="false"
    :with-credentials="true"
    :on-success="handleAvatarSuccess"
  >
    <template #trigger>
      <el-button type="primary" plain text size="small">选择图片</el-button>
    </template>
    <el-button
      style="margin-left: 10px"
      class="ml-3"
      type="success"
      :icon="Check"
      circle
      text
      @click="submitUpload"
      size="small"
    >
    </el-button>
    <template #tip>
      <div class="el-upload__tip text-red">
        一次只能上传一张图片，新的图片会覆盖旧的图片
      </div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, ref } from "vue";
import { genFileId } from "element-plus";
import type { UploadInstance, UploadProps, UploadRawFile } from "element-plus";
import { Check, Upload } from "@element-plus/icons-vue";

const upload = ref<UploadInstance>();

const handleExceed: UploadProps["onExceed"] = (files) => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
};

//为了提高组件的复用性，定义属性类型
interface Props {
  biz: string;
}

// withDefaults 用于给组件指定初始值
const props = withDefaults(defineProps<Props>(), {
  biz: () => "",
});
// 定义一个常量，用于拼接URL
const avatarUrl = "http://localhost:7529/api/file/upload" + "?biz=" + props.biz;
// 上传到服务器
const submitUpload = () => {
  //alert("上传到服务器");
  upload.value!.submit();
};
// 图片上传成功后的回调

const imageUrl = ref("");
const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};
</script>
<style scoped>
/* 上传图片的样式 圆形 50*50 */
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
