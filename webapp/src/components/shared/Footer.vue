<template>
  <div class="footer">
    <div class="border" />

    <div class="box">
      <div class="box-logo">
        <router-link to="/">
          <img 
            src="../../images/logo-wroth.png" 
            alt="logo wroth" 
            style="width: 160px; height: 160px"
          >
        </router-link>
        <div class="copyright">
          © 2021 Wellington Roth. <br />
          Todos os direitos reservados.
        </div>
      </div>

      <div class="social-links">
        <a
          class="link"
          href="https://www.instagram.com/wellrothh/"
          target="_blank" 
          rel="noopener noreferrer">
          <img src="../../images/instagram.png" alt="instagram" >
        </a>

        <a
          class="link"
          href="https://github.com/Wellingtonroth"
          target="_blank" 
          rel="noopener noreferrer">
          <img src="../../images/github.png" alt="instagram">
        </a>

        <a
          class="link"
          href="https://www.linkedin.com/in/wellingtonroth/"
          target="_blank" 
          rel="noopener noreferrer">
          <img src="../../images/linkedin.png" alt="instagram" >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style scoped>
.footer {
  display: flex;
  padding: 0 38px;
  flex-direction: column;
}

.border {
  border-top: 1px solid #023859;
  width: 86%;
  height: 0px;
  margin: auto;
}

.box {
  display: flex;
  justify-content: space-between;
}

.box-logo {
  display: flex;
  align-items: center;
}

.copyright {
  font-size: 1rem;
  padding-left: 18px;
}

.social-links {
  display: flex;
  align-items: center;
  padding-right: 20px;
}

.link:not(:last-child) {
  margin-right: 32px;
}
</style>