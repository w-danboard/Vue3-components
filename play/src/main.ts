import { createApp } from 'vue'
import App from './App.vue'

import WIcon from '@w-ui/components/icon'

import '@w-ui/theme-chalk/src/index.scss'

const plugins = [WIcon]
const app = createApp(App)

plugins.forEach(comp => {
  app.use(comp)
})

app.mount('#app')
