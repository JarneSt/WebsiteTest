<template>
<div>
  <input value="Clear All" @click="ClearClientsTable" type="button">
</div>
</template>

<script>
export default {
  name: "ClearClients",
  methods : {
    ClearClientsTable(){
      this.$store.state.usersArr = [];
      this.$store.state.usersArr = [];
    }
  },
  computed : {
    headersArray(){
      return this.$store.state.headersArr;
    }
  }
}
</script>

<style scoped>
div input {
  width: 80%;
}
</style>