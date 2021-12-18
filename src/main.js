import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from '@/components'
import './index.css'

import Router from './router'

createApp(App)
  .use(Router)
  .use(GlobalComponent)
  .mount('#app')
