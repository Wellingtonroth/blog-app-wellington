<template>
  <footer class="main-footer">
    <router-link 
      class="main-footer-contact" 
      to="/contato">
      Contato
    </router-link>
    <p class="main-footer-copyright">© 2021 Wellington Roth</p>
  </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .main-footer {
    display: flex;
    background: #f2f2f2;
    border-top: 1px solid #e4e4e4;
    padding: 16px;
  }

  .main-footer-contact {
    color: #666;
    font-family: arial,sans-serif;
    font-size: small;
    text-decoration: none;
    margin-right: 20px;
  }

  .main-footer-copyright {
    color: #666;
  }
</style>