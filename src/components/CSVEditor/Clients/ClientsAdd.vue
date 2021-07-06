<template>

<div class="addInputs">
  <div class="mb-3"  v-if="usersArray.length > 0" v-for="header in headersArray" :key="header">
    <label class="form-label">{{ header }}</label>
    <input class="form-control" :id="header" @keypress="kpHandler">
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
    kpHandler(e){
      if (e.key === 'Enter')
        this.addObject();
    },
    addObject(){
      let first1;
      let second2;
      let third3;
      let fourth4;
      let fifth5;

      let count = 0;

      if (document.getElementById(this.headersArray[0])){
         first1 = document.getElementById(this.headersArray[0]).value;
         count++;
      }
      if (document.getElementById(this.headersArray[1])){
        second2 = document.getElementById(this.headersArray[1]).value;
        count++;
      }
      if (document.getElementById(this.headersArray[2])){
        third3 = document.getElementById(this.headersArray[2]).value;
        count++;
      }
      if (document.getElementById(this.headersArray[3])){
        fourth4 = document.getElementById(this.headersArray[3]).value;
        count++;
      }
      if (document.getElementById(this.headersArray[4])){
        fifth5 = document.getElementById(this.headersArray[4]).value;
        count++;
      }

        if(count === 2){
          let obj = {
            first: first1,
            second: second2,
          };
          this.$store.state.usersArr.push(obj);
        }
        else if (count === 3){
          let obj = {
            first: first1,
            second: second2,
            third: third3,
          };
          this.$store.state.usersArr.push(obj);
        }
        else if (count === 4){
          let obj = {
            first: first1,
            second: second2,
            third: third3,
            fourth: fourth4,
          };
          this.$store.state.usersArr.push(obj);
        }
        else if (count === 5){
          let obj = {
            first: first1,
            second: second2,
            third: third3,
            fourth: fourth4,
            fifth: fifth5
          };

          //TODO: Retrieve last prop in object and add /r to value

          this.$store.state.usersArr.push(obj);

        }

        this.$store.state.countColumns = count;
        for (let i = 0; i < count; i++) {
          document.getElementById(this.headersArray[i]).value = '';
        }

        console.log(this.$store.state.usersArr);


      document.getElementById(this.headersArray[0]).focus();
      window.scrollTo(0,document.body.scrollHeight);
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

button {
  padding: 20px;
  margin: 10px;
}

.addInputs .mb-3 {
  margin-right: 1em;
}

 label {
   padding: 1em;
 }

 #addBtn button {
   width: 80%;
 }
</style>