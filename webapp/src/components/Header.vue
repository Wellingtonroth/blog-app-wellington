<template>
  <header class="main-header">
    <router-link 
      class="main-header-link"
      to="/experiencias">
      Experiências
    </router-link>

    <router-link 
      class="main-header-link"
      to="/blog">
      Blog
    </router-link>
    
    <div class="box">
      <i style="cursor: pointer" @click="openTooltip" class="icon icon-2x icon-apps main-header-hamburguer"></i>
      <div class="box-tooltip" v-if="showTooltip === true">
        <ul class="box-tooltip-icons">
          <li>
            <a href="https://github.com/Wellingtonroth" target="_blank">
              <img src="../assets/img/github.png" alt="github">
            </a>
          </li>
          <li>
            <img src="../assets/img/gmail.png" alt="gmail">
          </li>
          <li>
            <a href="https://www.instagram.com/wellrothh/" target="_blank">
              <img src="../assets/img/instagram.png" alt="instagram">
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/wellingtonroth/" target="_blank">
              <img src="../assets/img/linkedin.png" alt="linkedin">
            </a>
          </li>
        </ul>
      </div>
    </div>

    <router-link 
      class="main-header-contact"
      to="/contato">
      Contato
    </router-link>
  </header>
</template>

<script>

export default {
  data() {
    return {
      showTooltip: false,
    }
  },
  methods: {
    openTooltip() {
      this.showTooltip = !this.showTooltip
    }
  }
}
</script>

<style scoped>
  .main-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
  }

  .main-header-contact {
    color: #ffffff;
    border: 1px solid #4285f4;
    background: #4387fd;
    border-radius: 2px;
    line-height: 28px;
    font-weight: 500;
    padding: 0 12px;
  }

  .main-header-link {
    color: #000;
    margin-right: 20px;
  }

  .main-header-hamburguer {
    margin-right: 20px;
  }

  .box {
    position: relative;
  }

  .box-tooltip {
    position: absolute;
    background: #fff;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    width: 306px;
    right: -78px;
    top: 40px;
  }

  .box-tooltip ul {
    display: flex;
    flex-wrap: wrap;
  }

  .box-tooltip li {
    padding: 14px;
  }
  
  .box-tooltip-icons {
    padding: 14px;
  }
</style>