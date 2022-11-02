<template>
    <div>
        <h1>Calculatrice</h1>

        <div class="parent-calculatrice">
            <div class="calculatrice">
                <div>
                
                <div class="calc-header">
                <div class="ecran"><h1>{{ ecran }}</h1></div>
                    <div class="btn-right">
                        <button @click="removeLast">→</button>
                        <button @click="closeCalculator">OFF</button>
                    </div>
                    <div>
                        <button>GT</button>
                        <button>MU</button>
                        <button>MC</button>
                        <button>MR</button>
                        <button>M-</button>
                        <button>M+</button>
                    </div>
                </div>

                <div class="calcul-number">
                    <button @click="toogleMoinsPlus">+/-</button>
                    <button @click="getNumber(7)">7</button>
                    <button @click="getNumber(8)">8</button>
                    <button @click="getNumber(9)">9</button>
                    <button>%</button>
                    <button>✓</button>
                </div>
                <div class="calcul-number">
                    <button>AC</button>
                    <button @click="getNumber(4)">4</button>
                    <button @click="getNumber(5)">5</button>
                    <button @click="getNumber(6)">6</button>
                    <button @click="operation('*')">X</button>
                    <button @click="operation('/')">÷</button>
                </div>
                <div class="calcul-number">
                    <button @click="clearEcran">CE</button>
                    <button @click="getNumber(1)">1</button>
                    <button @click="getNumber(2)">2</button>
                    <button @click="getNumber(3)">3</button>
                    <button @click="operation('+')">+</button>
                    <button @click="operation('-')">-</button>
                </div>
                <div class="calcul-number">
                    <button @click="openCalculator">ON/c</button>
                    <button @click="getNumber(0)">0</button>
                    <button @click="getNumber('00')">00</button>
                    <button @click="getNumber('.')">.</button>
                    <button @click="calculate">=</button>
                   
                </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            ecran : "",
            isClosed : false
        }
    },
    methods : {
        getNumber(number){
            (Number(this.ecran) ==0) && (this.ecran = '');
            this.ecran = this.ecran + ''+  number
        },
        operation(op){
            this.ecran = this.ecran + ''+  op
        },
        clearEcran(){
            this.ecran = '0'
        },
        removeLast(){
            this.ecran = this.ecran.slice(0, -1);
        },
        toogleMoinsPlus(){
            this.ecran = eval(this.ecran)   * -1;
        },
        calculate(){
            this.ecran = eval(this.ecran)
        },
        closeCalculator(){
            this.isClosed = true
            this.ecran = '';
        },
        openCalculator(){
            (this.ecran.length > 0) && (this.ecran = '0'  ) &&  (this.isClosed = true);
        },

    }
    
}
</script>

<style scoped>

.parent-calculatrice{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 730px;
    border: 2px solid black;
}

.ecran{
    border: 2px solid hsl(210, 23%, 95%);
    width: 715px;
    height: 80px;
    text-align: right;
    font-weight: 800;
    font-family: calculator;
    overflow: auto;
    
}
.btn-right{
    display: flex;
    justify-content: right;
}
.calculatrice{
    border: 2px solid hsl(210, 23%, 95%);
    width: 800px;
    margin: auto;
    display: flex;
    justify-content: center;
}

button{
    display: inline-block;
    margin: 2px;
    width: 116px;
    padding: 5px;
    font-size: 36px;
}

</style>