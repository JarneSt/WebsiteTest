<template>
<div class="addInputs">
  <div v-if="usersArray.length > 0" v-for="header in headersArray" :key="header">
    <label>{{header}}</label>
    <input :id="header">
  </div>
</div>
  <div v-if="usersArray.length > 0" id="addBtn">
    <button @click="addObject">Add</button>
  </div>
</template>

<script>
export default {
  name: "ClientsAdd",
  methods : {
    addObject(){
      let first1 = document.getElementById(this.headersArray[0]).value;
      let second2 = document.getElementById(this.headersArray[1]).value;
      let third3 = document.getElementById(this.headersArray[2]).value;
      let fourth4 = document.getElementById(this.headersArray[3]).value;
      let fifth5 = document.getElementById(this.headersArray[4]).value;

      if (first1 && second2 && third3 && fourth4 && fifth5){
        let obj = {
          first : first1,
          second : second2,
          third : third3,
          fourth : fourth4,
          fifth : fifth5,
        };

        this.$store.state.usersArr.push(obj);
        document.getElementById(this.headersArray[0]).value = '';
        document.getElementById(this.headersArray[1]).value = '';
        document.getElementById(this.headersArray[2]).value = '';
        document.getElementById(this.headersArray[3]).value = '';
        document.getElementById(this.headersArray[4]).value = '';
      }
      else {
        alert('Please fill in all fields');
      }
    }
  },
  computed : {
    headersArray(){
      return this.$store.state.headersArr
    },
    usersArray(){
      return this.$store.state.usersArr
    },
  }
}
</script>

<style scoped>
.addInputs {
  margin: 4em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

 label {
   padding: 1em;
 }

 #addBtn button {
   width: 80%;
 }
</style>