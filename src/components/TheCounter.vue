<template>
  <div>
    <h1>{{ counter }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
      //   return this.$store.state.counter * 2;
    },
  },
};
</script>

<style lang="scss" scoped></style>
