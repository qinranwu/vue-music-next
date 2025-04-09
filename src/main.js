import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局样式
import './assets/scss/index.scss'
// 引入路由

createApp(App).use(router).mount('#app')
