// types/form-layout.ts

import type { PropType } from 'vue'

// 定义操作函数类型
export type ActionFunction = () => Promise<unknown> | unknown

// 定义操作属性类型（可以是函数或布尔值）
export type ActionProp = ActionFunction | boolean | undefined
export type ThemeType = "default" | "card"
export enum EmitsEnum {
  CANCEL = "cancel",
  SUBMIT = "submit",
  CANCEL_COMPLETE = "cancel-complete",
  SUBMIT_COMPLETE = "submit-complete"
}
// 组件 Props 类型
export interface FormLayoutProps {
  // 布局相关
  bordered?: boolean
  compact?: boolean

  // 样式相关
  theme?: ThemeType

  // 底部相关
  showFooter?: boolean

  // 取消按钮相关
  showCancel?: boolean
  cancelText?: string
  cancelAction?: ActionProp

  // 提交按钮相关
  showSubmit?: boolean
  submitText?: string
  submitAction?: ActionProp
}

// 组件 Emits 类型
export interface FormLayoutEmits {
  (e: EmitsEnum.CANCEL): void
  (e: EmitsEnum.SUBMIT): void
  (e: EmitsEnum.CANCEL_COMPLETE, result?: unknown, error?: unknown): void
  (e: EmitsEnum.SUBMIT_COMPLETE, result?: unknown, error?: unknown): void
}

// 运行时 Props 定义（用于 defineProps 的选项式 API）
export const formLayoutProps = {
  // 布局相关
  bordered: {
    type: Boolean,
    default: false
  },
  compact: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String as PropType<ThemeType>,
    default: "default"
  },
  // 底部相关
  showFooter: {
    type: Boolean,
    default: true
  },
  // 取消按钮相关
  showCancel: {
    type: Boolean,
    default: true
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  cancelAction: {
    type: [Function, Boolean] as PropType<ActionProp>,
    default: false
  },
  // 提交按钮相关
  showSubmit: {
    type: Boolean,
    default: true
  },
  submitText: {
    type: String,
    default: '提交'
  },
  submitAction: {
    type: [Function, Boolean] as PropType<ActionProp>,
    default: false
  }
}
