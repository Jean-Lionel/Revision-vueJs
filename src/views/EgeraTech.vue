<template>
    <div>
        <h1>{{ companyName }}</h1>
        {{ getIbisomwa }}   

        <div>
        <h1>Data from newLocal</h1>

        {{$store.state.users}}
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            ibisomwa: []
        }
    },
    mounted(){
        axios.get(this.$store.state.baseUrl +"intangamarara-ibisomwa-unomusi/")
        .then(resp =>{
            console.log(resp)
            this.ibisomwa = resp
        }).catch(err =>{
            console.log(err)
        })
    },
    method:{
        
    },
    computed:{
        getIbisomwa(){
            const ibisomwaVyumunsi = this.ibisomwa?.data?.results ?? []

            const icuyumunsi = ibisomwaVyumunsi?.filter(igisomwa => igisomwa.ibisomwa.length > 0)

            if (icuyumunsi?.length > 0){

                return icuyumunsi
            }else{
                return ibisomwaVyumunsi[0]
            }
            
        }
    }
}
</script>

<style  scoped>
.heeeeee{
    display:flex;
    justify-content: space-between;
}
</style>