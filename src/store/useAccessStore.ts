import type { IAccessUserInfo } from "@/type/store/AccessStore";
import { router } from "@/router";

export const useAccessStore = defineStore(
  "access",
  () => {
    const accessToken = ref("");
    const userInfo = ref<IAccessUserInfo>({
      name: "",
      cn: "",
      qq: "",
    });
    const isLogin = computed(() => {
      return userInfo.value.cn !== "";
    });
    async function login(data: IAccessUserInfo) {
      userInfo.value = data;
      router.push("/");
    }
    return {
      accessToken,
      userInfo,
      isLogin,
      login,
    };
  },
  {
    persist: true,
  }
);
