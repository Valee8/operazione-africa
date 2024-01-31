<script >
export default {
  name: "AppHeader",
  data() {
    return {
      message: "Header"
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="/img/logo.jpg" alt="Logo Operazione Africa" class="logo-img" width="23" height="23">
        <span class="logo-text">
          Operazione Africa
        </span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding-top: 28px;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-text {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
}
</style>
