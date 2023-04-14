import _Icon from './src/icon.vue'
import { withInstall } from '@w-ui/utils/with-install'

const Icon = withInstall(_Icon)

export default Icon

export * from './src/icon'

export type IconInstance = InstanceType<typeof Icon> // 让用户可以通过ref使用组件的类型，还需要增加instance实例类型

// 为了再使用WIcon的时候，可以组件提示(在模板中) 需要配合volar
declare module 'vue' {
  export interface GlobalComponents {
    WIcon: typeof Icon
  }
}