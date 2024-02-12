<script >

import AppNavbar from './AppNavbar.vue';
import AppJumbotron from './AppJumbotron.vue';

export default {
  name: "AppHeader",
  components: {
    AppNavbar,
    AppJumbotron
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

    <div class="container top">
      <div class="logo">
        <img src="/img/logo.png" alt="Logo Operazione Africa" class="logo-img" width="31" height="31">
        <span class="logo-text">
          Operazione Africa
        </span>
      </div>

      <a href="/" class="button donate">
        Donate <i class="fa-solid fa-arrow-right-long"></i>
      </a>
    </div>

    <AppJumbotron />
  </header>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;


header {

  .container {

    &.top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      top: -47px;

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;

        .logo-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #3A3A3A;
          padding-left: 50px;
        }
      }

      .donate {
        width: 199px;
        height: 59px;
        line-height: 59px;
        font-size: 1.25rem;
        font-family: 'Poppins', sans-serif;
        position: relative;
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
