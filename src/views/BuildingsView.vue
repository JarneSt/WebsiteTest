<template>
<div>
  <BuildingItem :buildingobj="buildingobj" />
  <BuildingSubmitForm @add="addBuilding"/>
</div>
</template>

<script>
import BuildingItem from "@/components/BuildingItem";
import BuildingSection from "@/components/BuildingSection";
import BuildingSubmitForm from "@/components/BuildingSubmitForm";
export default {
  name: "BuildingsView",
  components: {BuildingSubmitForm, BuildingSection, BuildingItem},
  data(){
    return {
      buildingobj :[
      ]
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
