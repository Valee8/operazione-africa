<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    HelloWorld
  }
}
</script>

<template>
  <HelloWorld />
</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;
</style>
