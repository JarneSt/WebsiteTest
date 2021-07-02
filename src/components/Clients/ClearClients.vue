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
      this.$store.state.headersArr = [];
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
  padding: 20px;
  margin: 10px;
}
</style>