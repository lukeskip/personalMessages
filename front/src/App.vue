<script>

</script>

<template>
  <main class="container">
      <router-view></router-view>
  </main>
  <div class="container">

    <footer>
      Desarrollado por <a href="https://github.com/lukeskip" target="_blank">Cheko García</a> | Powered by OpenAI
    </footer>
  </div>
</template>
<style> 
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  *{
    box-sizing: border-box;
  }

  html,body{
    font-family: "Roboto", sans-serif;
  }

  .container{
    max-width: 1200px;
    margin: auto;
  }

  footer{
    max-width: 1200px;
    margin: auto;
    text-align: center;
    margin-top: 50px;
  }

  .button{
    height:50px;
    background-color: rgb(23, 101, 153);
    color:white;
    font-family: "Roboto", sans-serif;
    border:0;
    border-radius: 5px;
    font-size: 1.5em;
    padding: 10px;
  }
</style>
