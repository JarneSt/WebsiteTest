<template>
<div class="header">
  <h1>Account Information</h1>
  <hr>
</div>
<AccountPicEdit/>
<div class="container">
  <div class="row row-cols-2">
    <div class="col">
      <div class="p-3 border bg-light"><h2>Email: <b>{{LoginInfo.email}}</b></h2>
        <input type="button" @click="changeEmail" value="Change Email"></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light"><h2>Username: <b>{{LoginInfo.username}}</b></h2>
        <input type="button" @click="changeUsername" value="Change Username"></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light"><h2>Password: <b>{{LoginInfo.password}}</b></h2>
        <input type="button" @click="changePassword" value="Change Password"></div>
    </div>
  </div>
</div>
</template>

<script>
import AccountPicEdit from "./AccountPicEdit";
export default {
  name: "AccountSettings",
  components: { AccountPicEdit},
  methods : {
    changeEmail(){
      let newEmail = prompt('Insert new email');

      let user = {
        email : newEmail,
        username : this.retrieveLoginInfo.username,
        password : this.retrieveLoginInfo.password
      }
      localStorage.setItem('UserInfo', JSON.stringify(user))
      this.retrieveLoginInfo.email = newEmail;
      this.$forceUpdate();
    },
    changeUsername(){
      let newUsername = prompt('Insert new username');

      let user = {
        email : this.retrieveLoginInfo.email,
        username : newUsername,
        password : this.retrieveLoginInfo.password
      }
      localStorage.setItem('UserInfo', JSON.stringify(user))
      this.retrieveLoginInfo.username = newUsername;
      this.$forceUpdate();
    },
    changePassword(){
      let newPassword = prompt('Insert new email');

      let user = {
        email : this.retrieveLoginInfo.email,
        username : this.retrieveLoginInfo.username,
        password : newPassword
      }
      localStorage.setItem('UserInfo', JSON.stringify(user))
      this.retrieveLoginInfo.password = newPassword
      this.$forceUpdate();
    }
  },
  computed : {
    LoginInfo(){
      return JSON.parse(localStorage.getItem('UserInfo'));
    }
  },
  mounted() {
    if (this.$store.state.loggedin === false){
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.header h1 {
  font-weight: bold;
}

.container {
  padding: 25px;
  justify-content: center;
  display: flex;
}

.row-cols-2>*{
  width: 100%;
}



.header {
  padding: 20px;
}

.info-section h1 {
  padding: 20px;
  margin: auto;
  display: flex;
}

input {
  padding: 10px;
  margin: 20px;
  width: 50%;
}


h2 {
  margin: 10px;
}

</style>