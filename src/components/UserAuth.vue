<template>
  <div>
    <button v-if="!userIsAuthenticated" @click="login">Login</button>
    <button v-if="userIsAuthenticated" @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["login", "logout"]),
  },
  computed: {
    ...mapGetters(["userIsAuthenticated"]),
  },
};
</script>

<style lang="scss" scoped></style>
