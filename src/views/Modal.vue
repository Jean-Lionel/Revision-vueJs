<template>
    <div class="home">
        <div>
            <modal-component @close="toggleModal" :modalActive="modalActive">
                <div class="modal-content">
                    <h1>This a Modal header</h1>
                    <p>This sis a simple paragraph</p>
                    <div>
                        <input type="text" v-model="firstNumber">
                        <input type="text" v-model="secondNumber">
                    </div>
                    <div> 
                    <button @click="saveInformation">Enregistrer</button>
                    </div>
                </div>
            </modal-component>
            <button v-show="!modalActive" @click="toggleModal">Open Modal</button>
        </div>
    </div>
</template>

<script>
import ModalComponent from '../components/ModalComponent.vue'
import {ref} from "vue"
export default {
    components: { ModalComponent },
    setup() {
        const modalActive = ref(false);
        const firstNumber = ref(null);
        const secondNumber = ref(null);
        const toggleModal = ()=>{
            modalActive.value = !modalActive.value;
        }
        const saveInformation = () => {
            console.log(firstNumber.value, secondNumber.value)
        }
        return{
            modalActive, 
            firstNumber,
            secondNumber,
            toggleModal,
            saveInformation
        }
    },
}
</script>

<style  scoped>
.home{
    background-color: rgba(0,176,234,0.5);
  
    display: flex;
    justify-content: center;
    align-items:center;
}
.modal-content{
    display: flex;
    flex-direction: column;
}
h1, p{
    margin-bottom: 16px;
}
h1{
    font-size: 32px;
}
p{
    font-size: 18px;
}
</style>