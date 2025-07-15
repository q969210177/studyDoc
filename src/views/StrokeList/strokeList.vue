<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useStrokeList, } from "@/views/StrokeList/hooks/useStrokeList";

const { delStrokeList, strokeList, loading } = useStrokeList()

const router = useRouter()
function handleOperClick(type: "add" | "edit", data: any = null) {
  const query = {
    type,
    id: undefined
  }
  if (type === "edit") {
    console.log(data);
    query.id = data.id
  }
  router.push({ path: "/strokeForm", query })
}
onMounted(() => {
  // handleGetList()
});
</script>

<template>
  <div class="strokeList">
    <div class="strokeList-header">
      <div class="strokeList-header-title">
        <t-button
          theme="primary"
          type="button"
          size="small"
          @click="handleOperClick('add')"
        >
          创建行程
        </t-button>
      </div>
    </div>

    <t-list :async-loading="loading">
      <t-cell v-for="item in strokeList" :key="item" :title="item.name" align="middle">
        <t-link @click="delStrokeList(item.id)">
          删除
        </t-link>
      </t-cell>
    </t-list>
  </div>
</template>

<style lang="scss" scoped>
$header-height: 100px;
.strokeList {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .strokeList-content {
    width: 100%;
    height: calc(100% - $header-height);
    overflow-y: scroll;
    max-height: calc(100% - $header-height - 50px);
  }
  .strokeList-header {
    width: 100%;
    height: $header-height;
    background-color: #fff;
  }
}
</style>
