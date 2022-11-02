<template>
    <div>
        <h1>{{ message }}</h1>
        <input-message :msg="message" @changesMessage="message = $event"></input-message>
        
    </div>
</template>

<script>
import InputMessage from "../components/InputMessage.vue"
export default {
    components:{InputMessage},
    data(){
        return{
            message : "This is a great Message"
        }
    }
    
}
</script>