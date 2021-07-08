<template>
  <div id="nav">
    <router-link class="noHyper" to="/"><h1 id="logo">CSVEditor</h1></router-link>
    <div class="NavBtns">
      <router-link to='/about'>About</router-link>
      <router-link v-if="isregistered === true && issignedin === false" to="/login">Login</router-link>
      <router-link v-if="issignedin === false && isregistered === false"  to="/register">Register</router-link>
      <router-link v-if="issignedin === true" to="/clients">CSV</router-link>
      <router-link v-if="issignedin === false" to="/guest">Guest</router-link>
      <router-link v-if="issignedin === true" to="/accountsettings">Account</router-link>
      <router-link @click="signOff" to="/" v-if="issignedin === true" >Sign off</router-link>
    </div>
  </div>
  <div class="toast align-items-center text-white border-0" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex text">
      <div class="toast-body">
        Supports <br><b>Comma, Semicolumn, Piping, Double Piping</b>
      </div>
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


.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

* {
  margin: 0;
  padding: 0;
  transition: box-shadow 0.28s;
  font-family: 'Open Sans', sans-serif !important;
}

.noHyper {
  text-decoration: none;
  margin: auto;
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

.text {
  font-size: 23px;
}
.toast:not(.showing):not(.show) {
  opacity: inherit;
}

.toast {
  width: 100%;
  background: #e75870;
}

.toast-body {
  margin: auto;
}

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
  width: 140px;
  text-align: center;
  border-radius: 10px 10px 10px 10px;
  margin-left: 10px;
  text-decoration: none;
}

#nav div a:hover {
  box-shadow: 0 0 4px 0 crimson;
}


@media only screen and (max-width: 720px){
  .NavBtns {
    width: 31%;
    flex-wrap: wrap;
  }

  #nav div a {
    margin: 3px;
  }

  .text {
    font-size: 17px;
  }
}

</style>
