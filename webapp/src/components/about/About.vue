<template>
  <div class="box">
    <p class="description">
      Olá <br />
      Sou o Wellington! <br />
      simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped lang="scss">
.box {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  margin-left: 50px;

  .description {
    width: 60%;
    color: #023859;
    font-size: 1.375rem;
  }
}
</style>
