<template>
  <div class="box">
    <img
      class="avatar"
      src="../../images/avatar.png" 
      alt="Avatar Wellington Roth" 
    >
  </div>
</template>

<script>
export default {
  name: 'Avatar',
}
</script>

<style scoped lang="scss">
.box {
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  margin-top: 70px;

  .avatar {
    width: 270px;
    height: 280px;
  }
}
</style>
