import type { IACGListItem } from "@/type/store/ACGListType";
import { nanoid } from "nanoid";

// 行程列表的数据
export const useACGList = defineStore(
  "ACGList",
  () => {
    const acgList = ref<IACGListItem[]>([]);
    function addACG(acg: any) {
      acgList.value.push({
        id: nanoid(),
        ...acg,
      });
    }
    function removeACG(id: string) {
      acgList.value = acgList.value.filter(
        (item: IACGListItem) => item.id !== id
      );
    }
    function updateACG(id: string, acg: any) {
      acgList.value = acgList.value.map((item: IACGListItem) =>
        item.id === id ? { ...item, ...acg } : item
      );
    }
    const getACGList = computed(() => {
      return acgList.value;
    });
    return {
      acgList,
      addACG,
      removeACG,
      updateACG,
      getACGList,
    };
  },
  {
    persist: true,
  }
);
