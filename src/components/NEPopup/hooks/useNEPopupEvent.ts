import type { INEPopupProps } from "../types/NEPopupTypes"
import { isFunction } from "lodash-es";

export function useNEPopupEvent(props: INEPopupProps) {
  const PopupRef = ref<any>(null)
  const visible = ref(false)
  function getShow() {
    return visible.value
  }
  function openPopup() {
    visible.value = true;
    console.log(visible.value);
  }
  async function closePopup() {
    // if (props.beforeClose && isFunction(props.beforeClose)) {
    //   const status = await handleBeforeClose()
    //   if (status) {
    //     visible.value = false
    //     return
    //   }
    //   return
    // }
    visible.value = false
  }
  // 处理 beforeClose 函数，无论它是普通函数还是返回 Promise 的函数
  async function handleBeforeClose() {
    if (!props.beforeClose) return false
    try {
      const result = await props.beforeClose();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);

      const result = props.beforeClose();
      return result;
    }
  }
  function togglePopup() {
    if (visible.value) {
      closePopup()
    } else {
      openPopup()
    }
  }
  return {
    PopupRef,
    openPopup,
    closePopup,
    visible,
    togglePopup,
    getShow,
  }
}
