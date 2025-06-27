<script lang="ts" setup>
import type { FormInstanceFunctions } from "tdesign-mobile-vue";
import type { IAccessUserInfo } from "@/type/store/AccessStore";
import { useAccessStore } from "@/store/useAccessStore";

const { login } = useAccessStore();
const formData = reactive<IAccessUserInfo>({
  name: "",
  cn: "",
  qq: "",
});
const FormRef = ref<FormInstanceFunctions | null>(null);
const rules = {
  cn: [
    {
      min: 1,
      required: true,
      max: 8,
      message: "长度大于1个字符小于8个字符",
    },
  ],
  qq: [
    {
      required: true,
      min: 5,
      max: 11,
      message: "长度大于5个字符小于11个字符",
    },
  ],
};
async function handleLogin() {
  const status = await FormRef.value?.validate();
  console.log(status, "status");

  if (status) {
    await login(formData);
  }
}
</script>

<template>
  <div class="login flex">
    <div class="login_box mt-80px h-300px w-full flex flex-col p-20px">
      <div class="form_box flex-1">
        <t-form
          ref="FormRef"
          :data="formData"
          :rules="rules"
          reset-type="initial"
          show-error-message
          label-align="left"
          :label-width="0"
          scroll-to-first-error="auto"
        >
          <t-form-item label="" name="cn">
            <t-input
              v-model="formData.cn"
              borderless
              placeholder="请输入cn或者名字"
            />
          </t-form-item>
          <t-form-item label="" name="qq">
            <t-input v-model="formData.qq" borderless placeholder="请输入qq" />
          </t-form-item>
        </t-form>
      </div>
      <div class="operation_box">
        <t-button
          block
          size="large"
          theme="primary"
          type="button"
          @click="handleLogin"
        >
          登录
        </t-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
}
</style>
