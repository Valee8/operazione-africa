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

    <div class="container top">
      <div class="logo">
        <img src="/img/logo.png" alt="Logo Operazione Africa" class="logo-img" width="23" height="23">
        <span class="logo-text">
          Operazione Africa
        </span>
      </div>

      <a href="/" class="button donate">
        Donate <i class="fa-solid fa-arrow-right-long"></i>
      </a>
    </div>

    <div class="container">
      <div class="header-content">

        <div class="content-left">
          <h6>
            Operazione Africa
          </h6>

          <h1>
            Being Part Of Aid Foundation Is A Way To Share
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur. Ultrices ultrices pulvinar maecenas neque. Sit tellus nunc enim cursus
            dolor ultrices sit ullamcorper aliqueorem aliquet.
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  min-height: 800px;

  .container {

    &:not(.top) {
      padding-top: 100px;

    }

    &.top {
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

    .header-content {
      .content-left {


        h6 {
          font-weight: 500;
          font-size: 1.25rem;
        }

        h1 {
          padding: 30px 0;
          font-weight: 700;
          font-size: 3.75rem;
          width: 505px;
        }

        p {
          font-weight: 400;
          font-size: 1.19rem;
          line-height: 33px;
          width: 611px;

        }
      }
    }
  }
}
</style>
