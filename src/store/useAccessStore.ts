import type { IAccessUserInfo } from "@/type/store/AccessStore";

export const useAccessStore = defineStore("access", () => {
  const accessToken = ref("");
  const userInfo = ref<IAccessUserInfo>({
    name: "",
    cn: "",
    qq: "",
  });
  const isLogin = computed(() => {
    return userInfo.value.cn !== "";
  });
  return {
    accessToken,
    userInfo,
    isLogin,
  };
});
