import './assets/index.css'
import App from './App.vue'

import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next/plugins/createBootstrap'

import { register, login, sendEmail } from './model/cl.js'

const app = createApp(App)
app.use(createBootstrap())
app.mount('#app')

window.register = register
window.login = login
window.sendEmail = sendEmail
