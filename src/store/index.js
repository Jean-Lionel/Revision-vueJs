import { createStore } from 'vuex'

const newLocal = [
    { id: 1, name: "Jean", registered: false },
    { id: 2, name: "Njenje", registered: false },
    { id: 3, name: "Ineza", registered: false },
]
export default   createStore({
    state:{
        baseUrl: 'http://172.20.10.8:8000/api/',
        registered:[],
        unRegistered:[],
        users : newLocal
    },
    getters:{

    },
    mutations:{

    },
    modules:{
        
    }
})