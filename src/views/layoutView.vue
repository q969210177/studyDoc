<template>
  <div class="layoutView">
    <header>111111</header>
    <article></article>
    <aside>
      <router-view />
    </aside>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

// console.log(import("@/views/chartPage/chartPageIndex.vue"));
</script>
<style lang="scss" scoped>
@import "~@/assets/style/layout.scss";
.layoutView {
  width: 100%;
  height: 100%;
  @include flex-row-s-s;
  flex-wrap: wrap;
  border: 1px solid blue;
  header {
    width: 100%;
    height: 60px;
    border: 1px solid red;
  }
  article {
    width: 100px;
    height: calc(100% - 60px);
    background: yellow;
  }
  aside {
    width: calc(100% - 100px);
    height: calc(100% - 60px);
    background: black;
  }
}
</style>
