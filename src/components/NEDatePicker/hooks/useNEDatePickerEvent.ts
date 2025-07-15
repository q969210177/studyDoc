/**
 * 对话框组合式函数
 * @param {Partial<ModelProps>} [props] - 初始属性
 * @returns {ModelReturn}
 */
import { useNEPopup } from "@/components/NEPopup";

export function useNEDatePickerEvent(props = null) {
  const visible = ref(false)
  const [register, { openPopup, closePopup }] = useNEPopup()
  return {
    visible,
    register,
    openPopup,
    closePopup
  }
  // return [register, { openModel, closeModel, getModelData, setProps }];
}
