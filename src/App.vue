<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

//import { store } from './store';

Weglot.initialize({
  api_key: 'wg_4e85190efbdc305ae35267e66fd4b2db8',
  switchers: [
    {
      button_style: {
        full_name: true,
        with_name: false,
        is_dropdown: false,
        with_flags: true,
        flag_type: "rectangle_mat"
      },
      location: {
        target: ".last",
        sibling: null
      }
    }
  ]
});


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      //store
    }
  },
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;

.button {
  background-color: $orange-color;
  border-radius: 29px;
  text-align: center;
}

.wg-list.country-selector {
  .wgcurrent {
    img {
      width: 49px;
      height: 35px;
      margin-right: 0;
      position: relative;
      z-index: 2;
    }
  }

}

.wg-list.country-selector {
  ul {
    align-self: flex-end;
    height: 33px;
    line-height: 33px;
    position: relative;
    left: -30px;
    z-index: 1;
  }

  img {
    width: 33px;
    height: 33px;
    margin-right: 0;
  }
}

// .wg-list.country-selector {
//   a {
//     padding: 0;
//   }
// }

.wg-list.country-selector {
  display: flex;
  justify-content: center;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.wg-list.country-selector {
  li {
    margin: 0;
  }
}

nav {
  &.home {
    .last {
      background-image: url('/img/rectangle3.png');
      background-size: cover;
      background-position: right;
      background-repeat: no-repeat;
    }
  }
}

.last {
  width: 158px;
  height: 87px;
}
</style>
