import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store  from "./store/index"

const app = createApp(App)

app.config.errorHandler = (err) => {
  /* handle error */
  
}
app.config.globalProperties.PRORIETE = {
    name : "Jean Lionel le hacker", 
    tel : 79614036
}

app.use(store)
app.use(router)

app.mount('#app')
