<template>
  <div>
    <input type="text" :value="msg" @input="setChangeMessage">
    {{message}}
  </div>
</template>

<script>
export default {
    props: ['msg'],
    data(){
        return {
            message : ''
        }
    }, 
    methods:{
        setChangeMessage(event){
            this.message = event.target.value

            this.$emit('changesMessage',  this.message)
        }
    }

}
</script>

<style>

</style>