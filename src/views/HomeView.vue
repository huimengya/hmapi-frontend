<template>
  <div class="home">{{ store }}}</div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
</script>
