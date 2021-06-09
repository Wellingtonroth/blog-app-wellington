<template>
  <div class="main">
    <header class="main-header">

      <router-link 
        class="main-header-link"
        to="/curriculo">
        Experiências
      </router-link>

      <router-link 
        class="main-header-link"
        to="/blog">
        Blog
      </router-link>
      
      <i class="icon icon-2x icon-apps main-header-hamburguer"></i>

      <router-link 
        class="main-header-contact" 
        to="/contato">
        Contato
      </router-link>
    </header>

    <router-view/>

    <footer class="main-footer">
      <router-link 
        class="main-footer-contact" 
        to="/contato">
        Contato
      </router-link>
      <p class="main-footer-copyright">© 2021 Wellington Roth</p>
    </footer>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.main-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
}

.main-header-contact {
  color: #ffffff;
  border: 1px solid #4285f4;
  background: #4387fd;
  border-radius: 2px;
  line-height: 28px;
  font-weight: 500;
  padding: 0 12px;
}

.main-header-link {
  color: #000;
  margin-right: 20px;
}

.main-header-hamburguer {
  margin-right: 20px;
}

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