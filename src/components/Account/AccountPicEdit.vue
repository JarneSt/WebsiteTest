<template>
  <!--
  <div>
    <i id="iconUser" class="fas fa-user"></i>
  </div>
    -->
  <div>
    <img :src="profilePic">
  </div>


  <h3>Change profile picture</h3>
  <div>
    <h5>Image/GIF link</h5>
    <input type="text" id="profilePicBtn" placeholder="Image link">
    <input id="saveBtn" @click="setProfilePicture" type="button" value="Save">
  </div>

</template>

<script>
export default {
  name: "AccountPicEdit",
  computed : {
    profilePic(){
      return this.$store.state.profilePicture;
    }
  },
  methods : {
    setProfilePicture(){
      let imageLink = document.getElementById('profilePicBtn').value;

      try {
        this.imageExists(imageLink);
        this.$store.state.profilePicture = imageLink;
        localStorage.setItem('profileImage', imageLink);
      }catch (e) {
        alert('Please try different image/gif link')
      }
    },
    imageExists(image_url){
      var http = new XMLHttpRequest();
      http.open('HEAD', image_url, false);
      http.send();
      return http.status !== 404;
    }
  },
  mounted() {
    let localStgImage = localStorage.getItem('profileImage');
    if (localStgImage === null){
      this.$store.state.profilePicture = '';
    }
    else if(localStorage.getItem('profileImage') !== null){
      this.$store.state.profilePicture = localStorage.getItem('profileImage');
    }

    document.getElementById('profilePicBtn').value = localStgImage;
  }
}
</script>

<style scoped>
#profilePicBtn {
  padding: 10px;
  margin: 20px;
}
#iconUser {
  font-size: 10em;
}
h3 {
  padding: 20px;
}

#saveBtn {
  padding: 10px;
  margin: 20px;
}

img {
  width: 13%;
}
</style>