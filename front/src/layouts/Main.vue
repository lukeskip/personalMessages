<template>
    <div>
      <header>
        
      </header>
  
      <main>
        <div class="container">
          <slot></slot>
        </div>
      </main>
  
      <footer>
    
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainLayout'
  }
  </script>
  
  <style>
  .container {
    max-width: 1200px;
    margin: auto;
  }
  </style>
  