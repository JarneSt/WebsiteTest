<template>
  <input class="VisibleBtn" type="button" value="Hide" @click="MaakVisible">
<div class="input" >
  <div class="mg3">
    <h1>Naam</h1>
    <input id="namevalue" type="text">
    <h1>Bankbalance</h1>
    <input id="bankbalancevalue" value="gold" type="number">
    <h1>Spending</h1>
    <input id="Spendingvalue" value="steel" type="number">
    <!--
    <h1>Date</h1>
    <input id="datevalue" type="text">-->
    <input type="button" value="Submit" @click="SendIt">

  </div>
</div>
</template>

<script>
//EventHandler
import ClockComponent from "@/components/ClockComponent";
let bool = true;

const d = new Date();
export default {
  name: "BuildingSubmitForm",
  components: {ClockComponent},
  methods : {
    MaakVisible(){
      if (bool === false){
        document.querySelector('.input').style.visibility = `visible`;
        document.querySelector('.VisibleBtn').value = 'Hide';
        bool = true;
        console.log(bool, 'Should be visible ');
      }
      else if (bool === true)
      {
        document.querySelector('.input').style.visibility = `hidden`;
        document.querySelector('.VisibleBtn').value = 'Show';
        bool = false;
        console.log(bool, 'Should be hidden ');
      }
    },

    SendIt(){
      //maakt de array aan met document get element en dan de variabele te gebruiken in de array
      let nameval = document.getElementById('namevalue').value;
      let bankval = parseInt(document.getElementById('bankbalancevalue').value);
      let spendingval = parseInt(document.getElementById('Spendingvalue').value);

      let day = ('0'+d.getDate()).slice(-2);
      let month = ('0'+(d.getMonth()+1)).slice(-2);
      let fullYear = ('0'+d.getFullYear()).slice(-4);

      let dateval = day+'/'+(month)+'/'+fullYear;

      let ArrayThatsMadeInHere =
        {
          name : nameval,
          bankbalance: bankval ,
          spending : spendingval ,
          date: dateval
        };

      //Object wordt gemaakt met die informatie
      console.log(ArrayThatsMadeInHere);

      if (nameval && bankval && bankval && dateval){
        this.$emit('add', ArrayThatsMadeInHere);
      }
    }
  }
}
</script>

<style scoped>
div.input {
  visibility: visible;
  margin: 73px auto;
  padding: 20px;
  width: 50%;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 5px -1px;
}

.mg3 {
  margin: 3%;
}

.VisibleBtn {
  width: 20%;
  margin: 12px auto;
  font-size: 27px;
  border-radius: 5px 5px 5px 5px;
  outline: none;
  border: none;
  box-shadow: 1px 1px 1px 1px black;
}


</style>