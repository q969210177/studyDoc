import type { IComboPiceItem } from "@/type/store/ComboPiceType";
import { nanoid } from "nanoid";

export const useComboPiceList = defineStore(
  "ComboPiceList",
  () => {
    const comboPiceList = ref<IComboPiceItem[]>([]);
    function addComboPice(comboPice: IComboPiceItem) {
      comboPiceList.value.push({
        ...comboPice,
        id: nanoid(),
      });
    }
    function removeComboPice(id: string) {
      comboPiceList.value = comboPiceList.value.filter(
        (item: IComboPiceItem) => item.id !== id
      );
    }
    function updateComboPice(id: string, comboPice: IComboPiceItem) {
      comboPiceList.value = comboPiceList.value.map((item: IComboPiceItem) =>
        item.id === id ? { ...item, ...comboPice } : item
      );
    }
    return {
      comboPiceList,
      addComboPice,
      removeComboPice,
      updateComboPice,
    };
  },
  {
    persist: true,
  }
);
