<template>
  <div>
    <!-- <h1 class="home-title">Wellington</h1> -->
    <img src="../assets/img/Wellington.png" alt="Wellington Roth">
    <div class="home-text">
      <p class="home-text-paragraph typing-animation">Olá, meu nome é Wellington e sou programador Frontend. =)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
}
</script>

<style scoped>

.home-title {
  font-size: 4.5rem;
  margin-bottom: 20px;
  text-align: center;
}

.home-text {
  border: 1px solid #4d90fe;
  border-radius: 20px;
  padding: 8px;
  font-size: 1.2rem;
}

.home-text-paragraph {
  margin: 0 auto;
  border-right: 1px solid rgba(25, 25, 25, .75);
  width: fit-content; 
  white-space: nowrap;
  overflow: hidden;
}

.typing-animation {
  animation: blinkCursor 500ms steps(40) infinite normal, 
  typing 4s steps(40) 1s normal both;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 27em;
  }
}

@keyframes blinkCursor {
  from {
    border-right-color: rgba(25, 25, 25, .75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
