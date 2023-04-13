<template>
  <div>
    <button @click="inc">Add 1</button>
    <button @click="increase({ value: 10 })">Add 1</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    // addOne() {
    //   //   this.$store.commit("increment");
    //   //   this.$store.commit("increase", { value: 2 });
    //   // this.$store.commit({ type: "increase", value: 2 });
    //   this.$store.dispatch({ type: "increase", value: 2 });
    // },
    ...mapActions({
      inc: "increment",
      increase: "increase",
    }),
    // ...mapActions(["increment", "increase"]),
  },
};
</script>
