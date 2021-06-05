<template>
  <section class="container">
    <Hello />
    <div class="buttons">
      <ButtonHome msg="Desenvolvedor Frontend" />
      
      <router-link to="/contato">
        <ButtonHome msg="Estou com Sorte" />
      </router-link>
    </div>
  </section>
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
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  min-width: 514px;
}

.buttons {
  display: flex;
  padding-top: 28px;
  justify-content: center;
}
</style>