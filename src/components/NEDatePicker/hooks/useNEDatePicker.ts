/**
 * 对话框组合式函数
 * @param {Partial<ModelProps>} [props] - 初始属性
 * @returns {ModelReturn}
 */
export function useNEDatePicker(props = null) {
  // const dialogInstance = ref(null);
  // // 通过方法带默认参  来实现 代理
  // function register(instance) {
  //   if (!instance) return console.error('useFuDialog instance is required');
  //   if (props && Object.keys(props).length) {
  //     // 这里参数里面 正常使用  instance 是一定有方法的
  //     instance.setProps(props);
  //   }
  //   if (instance) {
  //     dialogInstance.value = instance;
  //   }
  // }
  // // 代理方法 下面全是代理方法
  // function setProps(params) {
  //   if (dialogInstance.value && unref(dialogInstance).setProps) {
  //     unref(dialogInstance).setProps(params);
  //   }
  // }
  // // 打开弹窗
  // function openModel(params = null) {
  //   if (dialogInstance.value && dialogInstance.value.openModel) {
  //     dialogInstance.value.openModel(params);
  //   }
  // }
  // // 关闭弹窗
  // function closeModel() {
  //   if (dialogInstance.value && dialogInstance.value.closeModel) {
  //     dialogInstance.value.closeModel();
  //   }
  // }
  // // 获取弹窗状态的函数
  // function getModelData() {
  //   if (dialogInstance.value && dialogInstance.value.getModelData) {
  //     return dialogInstance.value.getModelData();
  //   }
  // }
  // return [register, { openModel, closeModel, getModelData, setProps }];
}
