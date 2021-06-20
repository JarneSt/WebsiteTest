<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CurrentBalance />
    <router-link to="/transactions">Add spendings</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

import CurrentBalance from "@/components/CurrentBalance";
export default {
  name: 'Home',
  components: {
    CurrentBalance,
  },
  mounted() {
    this.$store.commit('updateBalance');
  }
}
</script>
