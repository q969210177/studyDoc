<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <!-- 基础卡片结构 -->
  <div
    class="card bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
  >
    <!-- 图片区域（可选） -->
    <div v-if="$slots.image" class="card-image">
      <slot name="image" />
    </div>

    <!-- 内容区域 -->
    <div class="p-4">
      <!-- 标题 -->
      <h3 v-if="$slots.title || title" class="text-lg font-semibold mb-2">
        <slot name="title">{{ title }}</slot>
      </h3>

      <!-- 正文 -->
      <div class="text-gray-600">
        <slot />
      </div>

      <!-- 底部操作区（可选） -->
      <div v-if="$slots.actions" class="mt-4 pt-3 border-t border-gray-100">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
