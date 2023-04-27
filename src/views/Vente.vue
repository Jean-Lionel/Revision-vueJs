<template>
    <div>
    <div v-for="item in listProducts" :key="item.id">
    <Item :item="item" @increment="increment" @decrement="decrement"/>
    <hr>
    </div>
    
    </div>
</template>

<script>
import axios from "axios"
import Item from '../components/Item.vue';

    export default {
    components: { Item },
    data(){
        return {
            listProducts: [],
        }
    },
    mounted(){
        axios.get("").then(res => {
            this.listProducts = res
            }
        )

    },
    methods: {
        decrement(id) {
            this.listProducts[id].choisit -= 1;
        },
        increment(id) {
            this.listProducts[id].choisit += 1;
        }
    },
    computed:{
       
    }
}
</script>

<style  scoped>

</style>