<template>
    <div>
    <h3>Title : {{ item.name }}</h3>
    <h4>Qté : {{ item.quantity }}</h4>
    <h4>QtéChoisit : {{ item.choisit }}</h4>
    <h4>Montant : {{ item.montant }} #Fbu</h4>
    <div class="flex">
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    </div>

    </div>
</template>

<script>
    export default {
        props: ['item'],
        data(){
            return {
                total: 0,
            }
        },
        methods: {
            increment() {
               this.$emit('increment',  this.item.id);
            },
            decrement() {
                this.$emit('decrement', this.item.id);
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>