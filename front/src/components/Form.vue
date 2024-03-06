<script>
import axios from 'axios'
const HOST = 'http://localhost:3001/'
export default {
  data() {
    return {
      formData: {
        receiver: '',
        company: '',
        skills: '',
        style: '',
        project: '',
        lang: ''
      }
    }
  },
  methods: {
    
    async submitForm () {
      try {
      const request = await axios.post(HOST,this.formData);
      console.log(request.data);
      } catch (error) {
        console.log(error);
      }
      
    }
  }
}
</script>

<template>
    <form @submit.prevent="submitForm">
    <div>
      <label for="name">Nombre del destinatario:</label>
      <input type="text" id="name" v-model="formData.receiver" required>
    </div>
    <div>
      <label for="name">Empresa del destinatario:</label>
      <input type="text" id="name" v-model="formData.company" required>
    </div>
    <div>
      <label for="name">Habilidades:</label>
      <input type="text" id="name" v-model="formData.skills" required>
    </div>
    <div>
      <label for="name">Proyecto:</label>
      <input type="text" id="name" v-model="formData.project" required>
    </div>

    <div>
      <label for="name">Idioma:</label>
      
      <select name="" id="" v-model="formData.lang">
        <option value="español">Español</option>
        <option value="ingles">Inglés</option>
      </select>
    </div>

    <div>
        <label for="rango">Estilo (10 es muy formal):</label>
        <input type="range" id="rango" name="rango" min="0" max="10" step="1" v-model="formData.style">
    </div>
 

   
    
    <button type="submit">Enviar</button>
  </form>
</template>