<script lang="ts" setup>
const formData = reactive({
  name: "",
  password: "",
  gender: "",
  birth: "",
  place: "",
  age: 3,
  description: 2,
  resume: "",
});
const FormRef = ref(null);
const rules = {
  name: [
    {
      validator: (val: any) => val.length === 8,
      message: "只能输入8个字符英文",
    },
  ],
  password: [
    { validator: (val: any) => val.length > 6, message: "长度大于6个字符" },
  ],
  gender: [{ validator: (val: any) => val !== "", message: "不能为空" }],
  birth: [{ validator: (val: any) => val !== "", message: "不能为空" }],
  place: [{ validator: (val: any) => val !== "", message: "不能为空" }],
  description: [
    { validator: (val: any) => val > 3, message: "分数过低会影响整体评价" },
  ],
  resume: [{ validator: (val: any) => val !== "", message: "不能为空" }],
};
</script>

<template>
  <div class="login flex">
    <div class="login-box mt-80px h-300px w-full p-20px">
      <t-form
        ref="FormRef"
        :data="formData"
        :rules="rules"
        reset-type="initial"
        show-error-message
        label-align="top"
        scroll-to-first-error="auto"
      >
        <t-form-item label="用户名" name="name" help="输入cn">
          <t-input
            v-model="formData.name"
            borderless
            placeholder="请输入内容"
          />
        </t-form-item>
        <t-form-item label="用户名" name="name" help="输入qq">
          <t-input
            v-model="formData.name"
            borderless
            placeholder="请输入内容"
          />
        </t-form-item>
      </t-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
}
</style>
