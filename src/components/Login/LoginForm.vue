<template>
<div>
  <h1>Login</h1>
  <div id="lform">
    <input placeholder="Username" v-model="usern" @keypress="kpHandler" type="text">
    <input placeholder="Password" v-model="psw" @keypress="kpHandler" type="password">
    <p v-if="loginClicked === true">{{ error }}</p>
    <button id="loginclick" v-if="usern && psw"  @click="loginUser">Login</button>
    <router-link id="linkforgotpsw" to="/forgotpsw">Forgot your password?</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "LoginForm",
  props : {
    usern : '',
    psw : '',
  },
  methods : {
    kpHandler(e){
      if (e.key === 'Enter')
          this.loginUser();
    },
    loginUser(){
      let userinfo = JSON.parse(localStorage.getItem('UserInfo'));
      if (userinfo === null){
        this.$router.push('/register');
      }
      else if (this.usern === userinfo.username && this.psw === userinfo.password){
        this.$router.push('/clients');
        this.$store.state.loggedin = true;
      }
      else {
        this.$store.state.error = 'Email or password is incorrect';
        this.$store.state.loginBtnClicked = true;
      }
    }
  },
  mounted() {
    this.$store.state.loginBtnClicked = false;
    if (this.$store.state.issignedup === false){
      this.$router.push('/register');
    }
  },
  computed : {
    error(){
      return this.$store.state.error
    },
    loginClicked(){
      return this.$store.state.loginBtnClicked
    }
  }
}
</script>

<style scoped>

* {
  transition: 2s color ;
}

h1 {
  padding-top: 19%;
}


#lform {
  display: grid;
  margin: auto;
  padding-top: 1em;
}

input, button {
  margin: 8px;
  padding: 10px;
  border-radius: 3px 1px 1px 1px;
  outline: none;
  border: none;
  box-shadow: 0px 0px 4px -1px black;
}

button:hover {
  border: 1px solid black;
}

#linkforgotpsw {
  text-decoration: none;
  font-size: 20px;
  padding: 20px;
  color: darkblue;
}

@media only screen and (max-width: 780px){
  #lform {
    width: 60%;
  }
}

@media only screen and (min-width: 800px){
  #lform {
    width: 30%;
  }
}

</style>