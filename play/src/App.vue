<script setup lang="ts">
import { Accessibility } from '@vicons/ionicons5'
import { IconInstance } from '@w-ui/components/icon'
import { ref } from 'vue'

const IconInstance = ref<IconInstance>()
</script>

<template>
  <WIcon :size="20" color="blue" ref="IconInstance">
    <Accessibility></Accessibility>
  </WIcon>
</template>

<style scoped>
</style>
