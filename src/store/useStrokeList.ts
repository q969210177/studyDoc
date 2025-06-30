export const useStrokeList = defineStore(
  "StrokeList",
  () => {
    const strokeList = ref<IStrokeListItem[]>([]);
  },
  {
    persist: true,
  }
);
