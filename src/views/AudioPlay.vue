<template>

  <dialog>

  <h1>Je suis cool</h1>
  </dialog>

  <div>
    <input type="text" placeholder="Name" v-model="name" />
    <input type="text" v-model="command" placeholder="Command" />
    <button @click="addCommand">Ajouter</button>
  </div>
  <div>
    <div class="screen">
      <div class="my_buttons">
        <div v-for="i in buttons ">
          <button @click="playSound(i)">{{i}}</button>
        </div>
      </div>
      <div class="commands">
        <div v-for="c in listComands" :key="c">
          <button @click="playElement(c)">{{ c.name}}</button>
        </div>
      </div>

      <div class="terminal">
      <p>
      Ahaha niho twandika ama code 
      </p>
      <p v-for="c in playComands" :key="c">
       >>>{{c.name}} # {{c.command}}
      </p>
      </div>
    </div>

  </div>
  
</template>

<script>
export default {
  data() {
    return{
      buttons : ['0','1','2','3','4','5','6','7','8','9','*','#'],
      lines : "",
      command : "",
      name:"",
      listComands : [],
      playComands : [],
    } 
  },
  methods: {
    playElement(e){
      this.playButton(e.command)

      this.playComands.push(e)
    },
    addCommand(){
      let command = {
        name : this.name,
        command : this.command
      }
      
      this.listComands.push(command)
      this.name = "";
      this.command = "";
    },
    playSound(i){
      let element = i;
      if(i === "*") element = "star";
      if(i === "#") element = "hash";
      
      var audio = new Audio("/dtmf/dtmf-" + element +".mp3");
      audio.play();
      
    },
    async playButton(x){
      let command = x.split("")
      for (let i = 0; i < command.length; i++) {
        await this.sleep(1000)
        this.playSound(command[i])
      }
    },
    sleep(ms){
      return new Promise(r => setTimeout(r,ms))
    }
  }
  
}
</script>

<style>
.my_buttons{
  display: grid;
  grid-template-columns: repeat(3, 2fr);
}

button{
  cursor: pointer;
}

.my_buttons div button{
  display: inline-block;
  width: 100px;
  padding: 5px;
  margin-bottom: 5px;
  
}
.screen{
  display: flex;
  align-items: start;
}

.commands{
  margin-left: 5px;
}
.commands  button{
  width: 100px;
  margin-top: 2px;

}
.terminal{
  background-color: #000;
  width: 600px;
  width: 600px;
  color: rgb(11, 228, 76);

}
</style>