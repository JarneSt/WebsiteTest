<template>
<div>
  <h2>Current balance<br>
  {{balance}}
  </h2>
</div>
</template>

<script>
export default {
  name: "CurrentBalance",
  computed : {
    balance() {
      return this.$store.state.balance
    }
  }
}
</script>

<style scoped>

</style>