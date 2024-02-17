<script >

import AppLogo from './AppLogo.vue';
import AppNavbar from './AppNavbar.vue';
import AppJumbotron from './AppJumbotron.vue';

export default {
  name: "AppHeader",
  components: {
    AppLogo,
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
  <header :class="{ 'home': $route.name === 'home' || $route.name === '' }">
    <AppNavbar />

    <AppLogo />

    <AppJumbotron />
  </header>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;

header {
  &:not(.home) {
    background-color: #C4C4C4;
  }
}
</style>
