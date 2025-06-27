<script lang="ts" setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import { useAccessStore } from "@/store/useAccessStore";

defineOptions({ name: "LayoutContent" });
</script>

<template>
  <div class="basic">
    <div class="container">
      <div class="header">111</div>
      <div class="body">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$header-height: 40px;
.basic {
  width: 100%;
  height: 100%;
  .container {
    margin: 0 auto;
    max-width: 750px;
    height: 100%;
    border: 1px solid red;
    .header {
      width: 100%;
      height: $header-height;
      background-color: #000;
    }
    .body {
      width: 100%;
      height: calc(100% - $header-height);
      background-color: #fff;
    }
  }
}
</style>
