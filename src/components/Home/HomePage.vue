<template>
<div>
  <h1>The powerful tool to easily edit CSV files</h1>
  <i class="fas fa-file-csv csvstyling"></i>
</div>
  <div>
    <router-link to="/clients">Get Started</router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

a {
  font-size: 3rem;
  color: crimson;
}
a:hover {
  color: black;
}

div {
  margin: 4em;
}

div h1 {
  font-family: 'ABeeZee', sans-serif;
  padding: 1em;
}
.csvstyling {
  font-size: 15vw;
}

@media only screen and (max-width: 700px){
  div {
    margin: 3em;
  }
}
</style>