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
import layoutView from "./layoutView.vue";
import { ref, Ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { addRouterArr } from "@/globalData/addRouter";
import type { FormInstance, FormRules, InputInstance } from "element-plus";
import type { IRouterItem } from "@/globalData/addRouter";
interface ILoginParams {
  userName: string;
  passWord: string;
}
const router = useRouter();

const ruleFormRef = ref<FormInstance>();
const userNameRef = ref<InputInstance>();
const loginParams: Ref<ILoginParams> = ref({
  userName: "admin",
  passWord: "admin123",
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
const loadView = (view: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  console.log(require(`@/views/${view}`));
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require(`@/views/${view}`).default;
  } else {
    // 使用 import 实现生产环境的路由懒加载
    return () => import(`@/views/${view}`);
  }
};
function onSubmit() {
  // router.push("/layout");
  router.push("/");
  if (!ruleFormRef.value) return;
  // const layoutObj = {
  //   path: "/index",
  //   name: "layout",
  //   component: layoutView,
  //   children: [],
  // };
  ruleFormRef.value.validate((validate: boolean) => {
    if (validate) {
      addRouterArr.forEach((v: IRouterItem) => {
        const obj: any = {
          path: v.path,
          name: v.name,
          component: loadView(`${v.component}`),
        };
        console.log(obj);

        router.addRoute("layout", obj);
      });
      console.log(router);
      // router.replace(router.currentRoute.value.fullPath);
      router.push("/chartPage/chartPageIndex");
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
