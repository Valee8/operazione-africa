<script >

import AppNavbar from './AppNavbar.vue';


export default {
  name: "AppHeader",
  components: {
    AppNavbar
  },
  data() {
    return {
      message: "Header"
    }
  }
}
</script>

<template>
  <header>
    <AppNavbar />

    <!-- <div class="bg-green"></div> -->
    <div class="container">
      <div class="logo">
        <img src="/img/logo.jpg" alt="Logo Operazione Africa" class="logo-img" width="23" height="23">
        <span class="logo-text">
          Operazione Africa
        </span>
      </div>

      <div class="button donate">
        <a href="/">
          Donate <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  //padding-top: 48px;
  min-height: 800px;

  // .prova {
  //   position: relative;
  //   z-index: 20;
  // }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 28px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;

      .logo-text {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
        color: #3A3A3A;
      }
    }

    .donate {
      width: 199px;
      height: 59px;
      line-height: 59px;
      font-size: 1.25rem;
      font-family: 'Poppins', sans-serif;
      position: relative;

      a {
        color: #fff;
        font-weight: 700;

        svg {
          font-weight: normal;
          font-size: 0.9rem;
          padding-left: 10px;
          vertical-align: middle;
        }

      }
    }
  }
}
</style>
