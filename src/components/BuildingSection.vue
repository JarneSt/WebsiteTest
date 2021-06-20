<template>
  <div>
    <h2>{{building.name}}</h2>
    <label>Balance: <b>{{building.bankbalance}}</b></label><br>
    <label>Spending: <b>{{building.spending}}</b><br>
      Date: <b>{{building.date}}</b></label><br>
    <input type="button" value="X" @click="clickeroni">
  </div>
</template>

<script>
export default {
  name: "BuildingSection",
  props :{
    building : Object
  },
  methods : {
    clickeroni(){
      this.$emit('add', this.building);
    }
  },
}
</script>

<style scoped>
input {
  width: 32%;
  font-size: 20px;
  margin: 12px auto;
  background: #e95555;
  border-radius: 5px 5px 5px 5px;
  border: 1px solid black;
  outline: none;
  box-shadow: 1px 1px 4px 1px #a80000;
}

div {
  border-radius: 10px;
  box-shadow: 0px 0px 5px -1px;
  width: 50%;
  margin: auto auto 1em;
}
</style>