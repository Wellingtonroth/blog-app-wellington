<template>
  <header>
    <nav class="nav">
      <router-link to="/">
        <img 
          src="../../images/logo-wroth.png" 
          alt="logo wroth" 
          style="width: 160px; height: 160px"
        >
      </router-link>

      <div class="buttons">
        <router-link class="link" to="/">Início</router-link>
        <router-link class="link" to="/sobre">Sobre</router-link>
        <router-link class="link" to="/posts">Posts</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 0 38px;
}

.buttons {
  display: flex;
  align-items: center;
  padding-right: 20px;
}

.link:not(:last-child) {
  margin-right: 44px;
}

.link {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
}

.router-link-exact-active {
  color: #023859;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
</style>