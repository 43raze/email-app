import './assets/index.css'
import App from './App.vue'

import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next/plugins/createBootstrap'

const app = createApp(App)
app.use(createBootstrap())
app.mount('#app')
