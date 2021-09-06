<template>
  <div class="box">
    <img
      class="avatar"
      src="../../images/avatar.png" 
      alt="Avatar Wellington Roth" 
    >
    <p class="title">Desenvolvedor Front-end</p>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
}
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50%;
}

.avatar {
  width: 242px;
  height: 250px;
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
