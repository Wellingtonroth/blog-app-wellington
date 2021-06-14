<template>
  <div class="container">
    <section class="section">
      <Hello />

      <div class="buttons">
        <ButtonHome msg="Desenvolvedor Frontend" />
        
        <router-link to="/contato">
          <ButtonHome msg="Estou com Sorte" />
        </router-link>
      </div>
    </section>
  </div>
</template>
.
<script>
import Hello from '@/components/Hello.vue'
import ButtonHome from '@/components/ButtonHome.vue'

export default {
  name: 'Home',
  components: {
    Hello,
    ButtonHome,
  }
}
</script>

<style scoped>
.container {
  display: flex;
}

.section {
  margin: 0 auto;
  min-width: 514px;
}

.buttons {
  display: flex;
  padding-top: 28px;
  justify-content: center;
}
</style>