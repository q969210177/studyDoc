import type { AttachNode, OverlayProps, TNode } from "tdesign-mobile-vue";
import type { PropType } from 'vue';

export type ENEPopupType = "bottom" | "top" | "center" | "left" | "right" | 'message' | 'dialog'
// export interface INEPopupProps {
//   type?: ENEPopupType
//   radius?: string
//   show?: boolean
//   showClose?: boolean
//   beforeClose?: () => boolean | Promise<boolean>
// }

export interface INEPopupEvent {
  getShow: () => boolean
  togglePopup: () => void
  closePopup: () => void
  openPopup: () => void
}

export interface INEPopupEmits {
  (event: "register", instance: INEPopupEvent): void
  (event: "update:show", show: boolean): void
}
export interface INEPopupProps {
  /**
   * 指定挂载节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  attach?: AttachNode;
  /**
   * 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；也可以自定义关闭按钮
   */
  closeBtn?: boolean | TNode;
  /**
   * 点击遮罩层是否关闭
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * 是否在关闭浮层时销毁浮层
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * 动画过渡时间
   * @default 240
   */
  duration?: number;
  /**
   * 遮罩层的属性，透传至 overlay
   * @default {}
   */
  overlayProps?: OverlayProps;
  /**
   * 浮层出现位置
   * @default top
   */
  placement?: 'top' | 'left' | 'right' | 'bottom' | 'center';
  /**
   * 是否阻止背景滚动
   * @default true
   */
  preventScrollThrough?: boolean;
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 弹出层内容区的动画名，等价于transition组件的name属性
   * @default ''
   */
  transitionName?: string;
  /**
   * 是否显示浮层
   */
  visible?: boolean;
  /**
   * 是否显示浮层，非受控属性
   */
  defaultVisible?: boolean;
  /**
   * 是否显示浮层
   */
  // modelValue?: boolean;
  /**
   * 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500
   */
  zIndex?: number;
  /**
   * 组件准备关闭时触发
   */
  onClose?: (context: { e: MouseEvent }) => void;
  /**
   * 组件关闭且动画结束后执行
   */
  onClosed?: () => void;
  /**
   * 组件准备展示时触发
   */
  onOpen?: () => void;
  /**
   * 组件展示且动画结束后执行
   */
  onOpened?: () => void;
  /**
   * 当浮层隐藏或显示时触发
   */
  onVisibleChange?: (visible: boolean, trigger: PopupSource) => void;
}

export type PopupSource = 'close-btn' | 'overlay';
export default {
  /** 指定挂载节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body */
  attach: {
    type: [String, Function] as PropType<INEPopupProps['attach']>,
    default: 'body',
  },
  /** 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；也可以自定义关闭按钮 */
  closeBtn: {
    type: [Boolean, Function] as PropType<INEPopupProps['closeBtn']>,
  },
  /** 点击遮罩层是否关闭 */
  closeOnOverlayClick: {
    type: Boolean,
    default: true,
  },
  /** 是否在关闭浮层时销毁浮层 */
  destroyOnClose: Boolean,
  /** 动画过渡时间 */
  duration: {
    type: Number,
    default: 240,
  },
  /** 遮罩层的属性，透传至 overlay */
  overlayProps: {
    type: Object as PropType<INEPopupProps['overlayProps']>,
    default: () => ({}),
  },
  /** 浮层出现位置 */
  placement: {
    type: String as PropType<INEPopupProps['placement']>,
    default: 'bottom' as INEPopupProps['placement'],
    validator(val: INEPopupProps['placement']): boolean {
      if (!val) return true;
      return ['top', 'left', 'right', 'bottom', 'center'].includes(val);
    },
  },
  /** 是否阻止背景滚动 */
  preventScrollThrough: {
    type: Boolean,
    default: true,
  },
  /** 是否显示遮罩层 */
  showOverlay: {
    type: Boolean,
    default: true,
  },
  /** 弹出层内容区的动画名，等价于transition组件的name属性 */
  transitionName: {
    type: String,
    default: '',
  },
  /** 是否显示浮层 */
  visible: {
    type: Boolean,
    default: undefined,
  },
  modelValue: {
    type: Boolean,
    default: undefined,
  },
  /** 是否显示浮层，非受控属性 */
  defaultVisible: Boolean,
  /** 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500 */
  zIndex: {
    type: Number,
  },
  /** 组件准备关闭时触发 */
  onClose: Function as PropType<INEPopupProps['onClose']>,
  /** 组件关闭且动画结束后执行 */
  onClosed: Function as PropType<INEPopupProps['onClosed']>,
  /** 组件准备展示时触发 */
  onOpen: Function as PropType<INEPopupProps['onOpen']>,
  /** 组件展示且动画结束后执行 */
  onOpened: Function as PropType<INEPopupProps['onOpened']>,
  /** 当浮层隐藏或显示时触发 */
  onVisibleChange: Function as PropType<INEPopupProps['onVisibleChange']>,
};
