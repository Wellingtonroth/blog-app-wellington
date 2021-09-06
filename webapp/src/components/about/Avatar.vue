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
  align-items: center;
  justify-content: flex-end;
  width: 40%;
  margin-right: 50px;

  .avatar {
    width: 290px;
    height: 300px;
  }
}
</style>
