<template>
<div class="fullForm">
  <div id="lform">
    <input placeholder="Email" v-model="eml" @keypress="kpHandler" type="text">
    <input placeholder="Username" v-model="usern" @keypress="kpHandler" type="text">
    <input placeholder="Password" v-model="psw" @keypress="kpHandler" type="password">
    <button id="loginclick"  @click="setNewPassword">Set new password</button>
  </div>
</div>
</template>

<script>
export default {
  name: "ForgotPassword",
  props : {
    eml : '',
    usern : '',
    psw : '',
  },
  methods : {
    kpHandler(e){
      if (e.key === 'Enter')
        this.setNewPassword();
    },
    setNewPassword(){
      let JSONLoginInfo = JSON.parse(localStorage.getItem('UserInfo'));

      if (JSONLoginInfo.email !== this.eml){
        alert('Email not registered');
        console.log(JSONLoginInfo.email);
        console.log(this.eml);

      }

      if (JSONLoginInfo.username !== this.usern){
        alert('Username is not linked to an email')
      }

      if (JSONLoginInfo.email !== this.eml &&
          JSONLoginInfo.username !== this.usern){
        alert('Email and username do not belong to an account')
      }

      if (JSONLoginInfo.email === this.eml
          && JSONLoginInfo.username === this.usern){
        //TODO: Change psw in localStorage with the one from new user input

        let user = {
          email : this.eml,
          username : this.usern,
          password : this.psw
        };
        localStorage.setItem('UserInfo', JSON.stringify(user));

        alert('Succesfully updated password. Please login now');
        this.$router.push('/login');
      }
    }
  }
}
</script>

<style scoped>
.fullForm {
  padding-top: 19%;
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