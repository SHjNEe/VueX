<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //   this.$store.commit("increment");
      //   this.$store.commit("increase", { value: 2 });
      this.$store.commit({ type: "increase", value: 2 });
    },
  },
};
</script>
