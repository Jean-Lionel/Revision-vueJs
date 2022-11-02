<template>
    <div class="home">
        <div>
            <modal-component @close="toggleModal" :modalActive="modalActive">
                <div class="modal-content">
                    <h1>This a Modal header</h1>
                    <p>This sis a simple paragraph</p>
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
        const toggleModal = ()=>{
            modalActive.value = !modalActive.value;
        }
        return{
            modalActive, 
            toggleModal
        }
    },
}
</script>

<style  scoped>
.home{
    background-color: rgba(0,176,234,0.5);
    height: 100vh;
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