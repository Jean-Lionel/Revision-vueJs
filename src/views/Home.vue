<template>
    <div>
        <div v-if="usersList.length == 0">
            <h1>Le tableau est VIde</h1>
        </div>

        <div v-else>

            <ul v-for="el in usersList" :key="el.id">
                <ol>{{el.name}}</ol>
                <ol>{{el.prenom}}</ol>
            </ul>
        </div>
        
    </div>
</template>

<script>
import axios from "axios"
import InputMessage from "../components/InputMessage.vue"
export default {
    components:{InputMessage},
    data(){
        return{
           usersList : [{
            id : "45", 
            name : "Munyeshaka",
            prenom : "Le Hacker"
           }]
        }
    },methods:{
        fetchedData(){
            axios.get(url)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(error => {
                this.erroMessage = error.reponse.body
               
            })
        }
    }
    
}
</script>