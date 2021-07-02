<template>
<div>
  <img src="https://media2.giphy.com/media/3oEjHYeaeXitEPYqNG/giphy.gif?cid=ecf05e473tywp4vxuxhi49m49ww5v7sd0w9oihqy136gbsqc&rid=giphy.gif&ct=g">
  <div>
    <input type="button" @click="guestContinue" value="Continue as guest">
  </div>
</div>
</template>

<script>
export default {
  name: "GuestComponent",
  methods : {
    guestContinue(){
      this.$store.loggedin = true;
      this.$router.push('/clients');
    }
  }
}
</script>

<style scoped>

input {
  border-radius: 3px 1px 1px 1px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 4px -1px black;
  padding: 20px;
  margin-top: 5em;
}

input:hover {
  border: 1px solid black;
}


@media only screen and (max-width: 725px){
  img {
    width: 80%;
    padding-top: 19%;
  }


}

</style>