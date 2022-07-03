import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/global.css'
// import Alert from 'vue3-use-alert'
// const Alert = require('vue3-use-alert')
import "vue3-use-alert/dist/style.css"

const app = createApp(App)
// app.use(Alert)
app.mount('#app')
