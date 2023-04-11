<template>
  <div>
    <base-container title="Vuex">
      <the-counter></the-counter>
      <change-counter></change-counter>
      <favorite-value></favorite-value>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
