import type { IStrokeListItem } from "@/type/store/StrokeListType";
import { useIndexedDB } from "@/hooks/UseIndexedDB";
import { router } from "@/router";

const STORE_NAME = "StrokeList";
export function useStrokeList() {
  const strokeList = ref<IStrokeListItem[]>([])
  const loading = ref(false)
  const { openDB, add, getAll, remove } = useIndexedDB(STORE_NAME);
  async function handleAddStrokeList(FormModel: any) {
    const res = await add(FormModel)
    console.log(res, "add");
    router.push("/strokelist")
  }
  async function getStrokeList() {
    loading.value = true
    strokeList.value = await getAll()
    loading.value = false
  }
  async function delStrokeList(id?: string | number) {
    if (!id) return
    await remove(id)
    getStrokeList()
  }
  function init() {
    openDB();
    nextTick(() => {
      getStrokeList()
    })
  }
  init()

  return {
    handleAddStrokeList,
    getStrokeList,
    delStrokeList,
    strokeList,
    loading
  }
}
// export const useStrokeList = defineStore(
//   STORE_NAME,
//   () => {
//     const strokeList = ref<IStrokeListItem[]>([]);
//     const { openDB } = useIndexedDB(STORE_NAME);

//     function getStrokeList() {}
//     openDB();
//     return {
//       handleAddStrokeList,
//       strokeList,
//       getStrokeList,
//     };
//   },
//   {
//     persist: true,
//   }
// );
