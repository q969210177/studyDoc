<script lang="ts" setup>
const FormRef = ref(null);
const formModel = reactive({
  name: "",
});
const rules = {
  name: [{ required: true, message: "请输入行程名称" }],
};
</script>

<template>
  <div class="strokeForm">
    <t-form ref="FormRef" :model="formModel" :rules="rules">
      <t-form-item label="行程名称" prop="name">
        <t-input v-model="formModel.name" />
      </t-form-item>
    </t-form>
  </div>
</template>

<style lang="scss" scoped>
.strokeForm {
  width: 100%;
  height: 100%;
  min-height: 500px;``
}
</style>
