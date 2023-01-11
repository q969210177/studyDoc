<template>
  <div class="loginView">
    <div class="login_box">
      <el-form
        style="min-width: 400px"
        :model="loginParams"
        label-width="120px"
        :rules="rules"
        ref="ruleFormRef"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            :maxlength="15"
            ref="userNameRef"
            v-model="loginParams.userName"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input
            show-password
            type="password"
            :maxlength="15"
            v-model="loginParams.passWord"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit"> 登录 </el-button>
          <el-button @click="cancal">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref, reactive } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance, FormRules, InputInstance } from "element-plus";
interface ILoginParams {
  userName: string;
  passWord: string;
}
const router = useRouter();
const ruleFormRef = ref<FormInstance>();
const userNameRef = ref<InputInstance>();
const loginParams: Ref<ILoginParams> = ref({
  userName: "",
  passWord: "",
});
const rules = reactive<FormRules>({
  userName: [
    { required: true, message: "请输入账户名", trigger: "blur" },
    { min: 5, max: 15, message: "账户名长度在6-15个字符之间", trigger: "blur" },
  ],
  passWord: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 15, message: "密码长度在6-15个字符之间", trigger: "blur" },
  ],
});
function onSubmit() {
  if (!ruleFormRef.value) return;
  console.log(ruleFormRef.value);
  ruleFormRef.value.validate((validate: boolean) => {
    if (validate) {
      // router.addRoute("layout");
      router.push("/");
    }
  });
  //
}
function cancal() {
  if (userNameRef.value) {
    userNameRef.value.focus();
  }
  loginParams.value = {
    userName: "",
    passWord: "",
  };
  //
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/layout.scss";
.loginView {
  width: 100%;
  height: 100%;
  @include flex-row-c-c;
  .login_box {
    width: 40%;
    height: 40%;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    @include flex-row-c-c;
  }
}
</style>
