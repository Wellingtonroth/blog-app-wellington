<template>
  <section class="section">
    <Avatar />
    <About />
  </section>
</template>

<script>
import Avatar from '@/components/about/Avatar.vue'
import About from '@/components/about/About.vue'

export default {
  name: 'HomePage',
  components: {
    Avatar,
    About,
  }
}
</script>

<style scoped>
.section {
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>