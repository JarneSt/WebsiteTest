<template>
<div>
  <CurrentBalance :balance="balance"/>
  <BuildingItem  :buildingobj="buildingobj" />
  <BuildingSubmitForm @add="addBuilding"/>
</div>
</template>

<script>
import BuildingItem from "@/components/BuildingItem";
import BuildingSection from "@/components/BuildingSection";
import BuildingSubmitForm from "@/components/BuildingSubmitForm";
import CurrentBalance from "@/components/CurrentBalance";
export default {
  name: "BuildingsView",
  components: {CurrentBalance, BuildingSubmitForm, BuildingSection, BuildingItem},
  data(){
    return {
      buildingobj :[
      ],
      balance : this.$store.state.balance
    }
  },
  mounted() {
    let transactionArrayLocal = JSON.parse(localStorage.getItem('Transaction'));
    if (transactionArrayLocal){
      for (let i = 0; i < transactionArrayLocal.length; i++)
      {
        this.buildingobj.push(transactionArrayLocal[i]);
      }
    }
  },
  methods : {
    addBuilding(building){
      console.log(building);
      this.buildingobj.push(building);
      localStorage.setItem('Transaction', JSON.stringify(this.buildingobj));
      this.$store.commit('nextTurn');
    }
  }
}
</script>

<style scoped>

</style>
