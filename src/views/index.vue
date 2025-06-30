<script lang="ts" setup>
import { useRouter } from "vue-router";
import Card from "@/components/Card.vue";
import { useACGList } from "@/store/useACGList";

const router = useRouter();
const { getACGList } = useACGList();
</script>

<template>
  <div class="index">
    <div class="p-12px">
      <Card title="行程总计">
        <template #extra>
          <t-button
            theme="primary"
            type="button"
            size="small"
            @click="router.push('/strokelist')"
          >
            去维护
          </t-button>
        </template>
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <div class="text-2xl font-bold">100</div>
            <div class="text-sm text-gray-500">行程总数</div>
          </div>
        </div>
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
      <Card title="总收入">
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
