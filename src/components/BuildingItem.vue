<template>
<div class="building-item" v-for="building in buildingobj" :key="building" >
  <BuildingSection :building="building" @add="removeBuilding"/>
</div>
</template>

<script>
import BuildingSection from "@/components/BuildingSection";
export default {
  name: "BuildingItem",
  components: {BuildingSection},
  props : {
    buildingobj : Object,
    balance : Intl
  },
  methods : {
    removeBuilding(building){
      let index = this.buildingobj.indexOf(building);
      this.buildingobj.splice(index, 1);
      localStorage.setItem('Transaction', JSON.stringify(this.buildingobj));

      localStorage.setItem('balance', this.$store.state.balance);
    }
  },
}
</script>

<style scoped>
.building-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>