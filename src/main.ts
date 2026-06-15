import { ViteSSG } from 'vite-ssg/single-page'
import { plugin as formKitPlugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import formKitConfig from './formkit.config'
import '@/styles/main.scss'

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(formKitPlugin, defaultConfig(formKitConfig))
})
