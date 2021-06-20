<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CurrentBalance :balance="balance" />
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
  data(){
    return {
      balance : this.$store.state.balance
    }
  }
}
</script>
