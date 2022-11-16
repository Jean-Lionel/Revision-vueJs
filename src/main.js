import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axiosInstance from './plugins/axios'
import store from './store'

const app = createApp(App)

// Configuration de axios 

app.config.globalProperties.axios =  { ...axiosInstance }

app
.use(store)
.use(router)
.mount('#app')
