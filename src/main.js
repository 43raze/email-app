import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createBootstrap } from 'bootstrap-vue-next/plugins/createBootstrap'

const app = createApp(App)
app.use(createBootstrap())
app.mount('#app')
