<template>
  <div class="main">
    <Header />

    <router-view/>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


export default {
  components: {
    Header,
    Footer
  }
}

</script>


<style scoped>
.main {
  display: flex;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
}

</style>