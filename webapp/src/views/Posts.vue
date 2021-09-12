<template>
  <section class="section">
    <Avatar />
    <Posts />
  </section>
</template>

<script>
import Avatar from '@/components/blog/Avatar.vue'
import Posts from '@/components/blog/Posts.vue'

export default {
  name: 'HomePage',
  components: {
    Avatar,
    Posts,
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