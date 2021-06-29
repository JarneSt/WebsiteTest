<template>
  <div id="nav">
    <router-link class="noHyper" to="/"><h1 id="logo">Usero</h1></router-link>
    <div class="NavBtns">
      <router-link v-if="isregistered === true && issignedin === false" to="/login">Login</router-link>

      <router-link v-if="issignedin === false && isregistered === false"  to="/register">Register</router-link>

      <router-link v-if="issignedin === true" to="/clients">Clients</router-link>

      <router-link @click="signOff" to="/" v-if="issignedin === true" >Sign off</router-link>
    </div>
  </div>
  <router-view/>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  computed : {
    issignedin(){
      return this.$store.state.loggedin
    },
    isregistered(){
      return this.$store.state.issignedup
    },
    checkuserinfo(){
      let info = localStorage.getItem('UserInfo');
      return info !== null;
    }
  },
  methods : {
    signOff(){
      this.$store.state.loggedin = false;
      this.$store.state.issignedup = true;
      this.issignedin = false;
      this.isregistered = true;
    }
  },
  mounted() {
     if (this.checkuserinfo === true){
       this.$store.state.issignedup = true;
     }
     else {
       this.$store.state.issignedup = false;
     }
  }
}
</script>


<style>

* {
  margin: 0;
  padding: 0;
  transition: box-shadow 0.28s;
  font-family: 'Open Sans', sans-serif !important;
}

.noHyper {
  text-decoration: none;
}

.dflex {
  display: flex;
}

.dblock {
  display: block;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav div a {
  color: black;
}

#nav div a:active {
  color: #ff0e3c;
}

#nav div a.router-link-exact-active {
  color: crimson;
}
</style>

<style scoped>

#logo {
  color: crimson;
  justify-content: flex-start;
  font-size: 51px;
  text-decoration: none;
}

.NavBtns {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

#nav {
  padding: 13px;
  background: #e6e6e6;
  display: flex;
  font-family: 'ABeeZee', sans-serif;
}

#nav div a {
  font-weight: bold;
  background: white;
  padding: 20px;
  width: 100px;
  text-align: center;
  border-radius: 10px 10px 10px 10px;
  margin-left: 10px;
  text-decoration: none;
}

#nav div a:hover {
  box-shadow: 0 0 4px 0 crimson;
}


</style>
