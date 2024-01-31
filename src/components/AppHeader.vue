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
  <h1>
    {{ message }}
  </h1>
</template>

<style lang="scss" scoped>
h1 {
  color: red;
  text-align: center;
}
</style>
