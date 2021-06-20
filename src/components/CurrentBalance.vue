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
  props : {
    balance : Intl
  }
}
</script>

<style scoped>

</style>