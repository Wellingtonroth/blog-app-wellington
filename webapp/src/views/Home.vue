<template>
  <section class="section">
    <Avatar />
    <LastPosts />
  </section>
</template>

<script>
import Avatar from '@/components/home/Avatar.vue'
import LastPosts from '@/components/home/LastPosts.vue'

export default {
  name: 'HomePage',
  components: {
    Avatar,
    LastPosts
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