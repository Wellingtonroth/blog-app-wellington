<template>
  <header>
    <nav>
        <img 
          to="/"
          src="../../images/logo-wroth.png" 
          alt="logo wroth" 
          style="width: 160px; height: 160px"
        >
      <router-link to="/">
        Home
      </router-link>

      <router-link to="/sobre">
        Sobre
      </router-link>

      <router-link to="/posts">
        Posts
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>
