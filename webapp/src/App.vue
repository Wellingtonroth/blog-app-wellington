<template>
  <div class="main">
    <Navigation />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/shared/Navigation.vue";
import Footer from "./components/shared/Footer.vue";

export default {
  name: 'Home',
  components: {
    Navigation,
    Footer,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
}

html, body {
  font: 400 14px Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

input, button, textarea {
  font: 400 18px "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>
