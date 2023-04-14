<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { CSSProperties } from 'vue';
import { computed } from '@vue/reactivity'
import { createNamespace } from '@w-ui/utils/create'
import { iconProps } from './icon'

defineOptions({
  name: 'WIcon'
})

const props = defineProps(iconProps)

const style = computed<CSSProperties> (() => {
  if (!props.size && !props.color) return {}
  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.color ? { color: props.color } : {})
  }
})

const bem = createNamespace('icon')
</script>
