<template>
  <div>
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
  setup() {
  },
}
//#011526
//#023859
//#0339A6
//#034AA6
//#4480A6
// FAFAF8 cor do footer
// 848484 cor de bordas
</script>

<style>
body, #app {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
</style>
