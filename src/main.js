import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routers.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '@/assets/sass/main.css'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')
