import { createStore } from 'vuex'

export default   createStore({
    state:{
        registered:[],
        unRegistered:[],
        users : [
            {id :1 , name: "Jean", registered: false},
            {id :2 ,name: "Njenje", registered: false},
            {id :3 ,name: "Ineza", registered: false},
        ]
    },
    getters:{

    },
    mutations:{

    },
    modules:{
        
    }
})