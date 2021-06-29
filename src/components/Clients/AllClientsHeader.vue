<template>
  <div class="container px-4">
    <div class="row gx-5">
      <div class="col">
        <div class="p-2 border bg-light">
          <h1>All Clients <ClientsExport v-if="users.length > 0"/></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientsExport from "./ClientsExport";
export default {
  name: "AllClientsHeader",
  components: {ClientsExport},
  props : {
    users : Object
  }
}
</script>

<style scoped>

</style>