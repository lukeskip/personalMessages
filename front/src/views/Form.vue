<script>
import axios from 'axios'
const HOST = import.meta.env.VITE_APP_HOST

export default {
  data() {
    return {
      formData: {
        receiver: '',
        company: '',
        skills: '',
        style: 'informal',
        project: '',
        lang: 'español'
      },
      errorMessages: {
        receiver: '',
        company: '',
        skills: '',
        style: '',
        project: '',
        lang: ''
      },
      messages:"",
      loader:false,
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      for (let key in this.formData) {
        if (!this.formData[key] &&  (key !== 'project' && key!=='style')) {
          this.errorMessages[key] = 'Este campo es obligatorio';
          isValid = false;
        } else {
          this.errorMessages[key] = '';
        }
      }
      return isValid;
    },
    async submitForm () {
      if(this.validateForm()){
        this.loader=true;
        try {
        const request = await axios.post(HOST,this.formData);
        this.messages = request.data.messages;
        
        } catch (error) {
          console.log(error);
        }
        this.loader=false;
      }
      
    },
    resetForm(){
      this.formData = {
        receiver: '',
        company: '',
        skills: '',
        style: 'informal',
        project: '',
        lang: 'español'
      }
      this.messages="";
    },
    editForm(){
      console.log("regresa")
      this.messages = "";
    }
  },
}
</script>

<template>
    <h1>Mensajes espotáneos</h1>
   <div v-if="loader">
      <div class="loaderWrap">
        <div class="loader"></div>
      </div>
   </div>
    <div v-if="!loader && !messages">
      <form @submit.prevent="submitForm">
    <div class="fieldGroup">
      <div>
        <label for="name">Nombre del destinatario:</label>
        <input type="text" id="name" v-model="formData.receiver">
        <span class="errorMessage">{{ errorMessages.receiver }}</span>
      </div>
      <div>
        <label for="name">Empresa del destinatario:</label>
        <input type="text" id="name" v-model="formData.company">
        <span class="errorMessage">{{ errorMessages.company }}</span>
      </div>
    </div>
    <div class="fieldGroup">
      <div>
        <label for="name">Habilidades:</label>
        <input type="text" id="name" v-model="formData.skills">
        <span class="errorMessage">{{ errorMessages.skills }}</span>
      </div>
    </div>
    <div class="fieldGroup">
      <div>
        <label for="name">Proyecto:</label>
        <input type="text" id="name" v-model="formData.project">
        <span class="errorMessage">{{ errorMessages.project }}</span>
      </div>
    </div>

    <div class="fieldGroup">
      <div>
        <label for="name">Idioma:</label>
        <select name="" id="" v-model="formData.lang">
          <option value="español">Español</option>
          <option value="ingles">Inglés</option>
        </select>
        <span class="errorMessage">{{ errorMessages.lang }}</span>
      </div>
    </div>

    <div class="fieldGroup">
      <div>
        <label for="">Tono</label>
        <select name="" id="" v-model="formData.style">
            <option value="formal">Formal</option>
            <option value="informal">Informal</option>
          </select>
      </div>
    </div>
    <button class="button" type="submit">Enviar</button>
  </form>
    </div>
  
    <div v-if="messages && !loader" class="messages">
      <div class="message" v-for="(item,index) in messages" :key="index">
        {{item}}
      </div>
      <div class="controls">
        <button class="button"  @click="submitForm">Más propuestas</button>
        <button class="button"  @click="resetForm">Reset</button>
        <button class="button"  @click="editForm">Editar Información</button>
      </div>
    </div>
</template>
<style>
@import url('../css/loader.css');
  .controls{
    display: flex;
    flex-wrap: wrap;
    gap:20px;
  }
  .fieldGroup{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    
    >div{
      padding: 5px 10px;
      flex-grow: 1;
    }
    input,select{
      width: 100%;
      height: 30px;
    }
    label{
      font-family: "Roboto", sans-serif;
    }
  }
  .messages{
    display: flex;
    flex-wrap: wrap;
    gap:20px;
  }
  .message{
    width:30%;
    background-color: rgb(231, 250, 251);
    padding: 20px;
    flex-grow: 1;
  }

  .errorMessage{
    color:rgb(144, 0, 0)
  }


</style>