<template>
    <td>{{usr.first}}</td>
    <td>{{usr.second}}</td>
    <td>{{usr.third}}</td>
    <td>{{usr.fourth}}</td>
    <td>{{usr.fifth}}</td>
    <td><input value="Remove" @click="removeLine" type="button"></td>
</template>

<script>
export default {
  name: "AllClientsPage",
  props : {
    usr : Object,
  },
  methods : {
    removeLine(){
      let index = this.$store.state.usersArr.indexOf(this.usr);
      this.$store.state.usersArr.splice(index,1);
    }
  }
}
</script>

<style scoped>
table {
  width: 75%;
  border-collapse: collapse;
}

td {
  border-bottom: 0.01px solid black;
}

div h1 {
  padding-top: 50px;
}

input {
  outline: none;
  margin: 5px;
}
</style>