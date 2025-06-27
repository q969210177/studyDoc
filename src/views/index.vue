<script lang="ts" setup>
import Card from "@/components/Card.vue";
import { useACGList } from "@/store/useACGList";

const { getACGList } = useACGList();
</script>

<template>
  <div class="index">
    <div class="p-12px">
      <Card title="行程总计">
        {{ getACGList.length }}
      </Card>
    </div>
    <div class="p-12px">
      <Card title="价格表">
        {{ getACGList.length }}
        <template #actions>
          <t-button theme="primary" type="button" block> 查看 </t-button>
        </template>
      </Card>
    </div>
    <div class="p-12px">
      <Card title="行程总计">
        {{ getACGList.length }}
      </Card>
    </div>
    <div class="p-12px">
      <Card title="行程总计">
        {{ getACGList.length }}
      </Card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
}
</style>
