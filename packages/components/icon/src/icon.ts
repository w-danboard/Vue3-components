// 这里要定义 icon组件的props属性

import { PropType, ExtractPropTypes } from 'vue'

// vue props 类型校验, props需要是仅读的
export const iconProps = {
  size: [Number, String] as PropType<number | string>,
  color: String
} as const

// 获取props的类型
export type IconProps = ExtractPropTypes<typeof iconProps>
