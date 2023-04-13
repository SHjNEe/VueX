<template>
  <div>
    <h1>{{ finalCounter }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    //   //   return this.$store.state.counter * 2;
    // },
    ...mapGetters(["finalCounter"]),
  },
};
</script>

<style lang="scss" scoped></style>
