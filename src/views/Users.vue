<template>
    <div>
    <h1>Users Views</h1>

    <p>The Team is {{ $route.params.teamId }}</p>

    <button @click="goHome">Go Home</button>
    </div>
</template>

<script>
export default {

    watch:{
        "$route"(to, from){
            console.log("Route changes from ", from.params.teamId, " To ", to.params.teamId)
        }
    }, 
    created(){
        console.log("The component has been created ")
    },
    methods:{
        goHome(){ 
            this.$router.push('/')
            
        }
    }
   
}
</script>