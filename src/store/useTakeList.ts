import type { IACGListItem } from "@/type/store/ACGListType";
import { nanoid } from "nanoid";

export const useTakeList = defineStore(
  "TakeList",
  () => {
    // const takeList = ref<IACGListItem[]>([]);
    // function addACG(acg: any) {
    //   acgList.value.push({
    //     id: nanoid(),
    //     ...acg,
    //   });
    // }
    // function removeACG(id: string) {
    //   acgList.value = acgList.value.filter((item: IACGListItem) => item.id !== id);
    // }
    // function updateACG(id: string, acg: any) {
    //   acgList.value = acgList.value.map((item: IACGListItem) =>
    //     item.id === id ? { ...item, ...acg } : item,
    //   );
    // }
    return {
      //   acgList,
      //   addACG,
      //   removeACG,
      //   updateACG,
    };
  },
  {
    persist: true,
  }
);
