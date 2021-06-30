<template>
<div>
  <!--Import CSV-->
  <div class="mt-5 mb-5">
    <h3>Import CSV here <small><br>(max 5 header values)</small></h3>
    <input @change="csvToObject" id="selectedFile" type="file"
           accept=".csv">
  </div>

  <!--All Clients Title-->
  <AllClientsHeader :users="users" />

  <!--All Clients Table-->
  <table border="1" v-if="users.length > 0">
    <tbody>
    <th v-if="headers.length > 0" v-for="header in headers">
      {{header}}
    </th>
    <tr v-for="usr in users" :key="usr.name">
      <AllClientsPage :usr="usr"/>
    </tr>
    </tbody>
  </table>
  <LoadingGIFComponent v-if="showLoading"/>
  <ClientsAdd/>
  <ClearClients/>

</div>
</template>

<script>
import AllClientsPage from "../components/Clients/AllClientsPage";
import ClientsAdd from "../components/Clients/ClientsAdd";
import AllClientsHeader from "../components/Clients/AllClientsHeader";
import ClearClients from "../components/Clients/ClearClients";
import ClientsExport from "../components/Clients/ClientsExport";
import LoadingGIFComponent from "../components/Clients/LoadingGIFComponent";
export default {
  name: "Clients",
  components: {LoadingGIFComponent, ClientsExport, ClearClients, AllClientsHeader, ClientsAdd, AllClientsPage},
  methods : {
    csvToObject(){
      this.$store.state.loadingGifShow = true;
      console.clear();
      /**
       * Clears table so values don't add
       */
      this.$store.state.usersArr = [];
      this.$store.state.headersArr = [];

      let file = document.getElementById('selectedFile').files[0];
      const reader = new FileReader();
      
      try {
        reader.onload = (file) => {
          /**
           * Retrieving text from file
           */
          let csv = file.target.result;

          /**
           * The amount of lines in CSV
           */
          let lines = csv.split('\n');

          /**
           * Check if comma or semicolumn is used and use the proper splitting value
           */
          let splitValue = ';';
          if (lines[0].includes(',')){
            splitValue = ',';
          }

          /**
           * Headers that are on the first line
           */
          this.$store.state.headersArr = lines[0].split(splitValue);




          /**
           * Foreach line it reads, it creates an object and pushes this into an array
           * which is passed in a different component
           */

          let countOfValues = 0;
          console.log('lines length', lines.length);
          for (let i = 1; i < lines.length; i++)
          {
            let currentline = lines[i].split(splitValue);
            console.log('currentline length',currentline.length);

            let obj = {
              first: currentline[0],
              second: currentline[1],
              third: currentline[2],
              fourth: currentline[3],
              fifth: currentline[4]
            };
            this.$store.state.usersArr.push(obj);
          }
          this.$store.state.loadingGifShow = false;
          console.log("usersArray",this.$store.state.usersArr);
        }
      }catch (e) {
        alert('Error parsing, please remove any comments and make sure the CSV uses either comma or semicolumn to split')
      }
      reader.readAsText(file);
    },
  },
  computed : {
    users(){
      return this.$store.state.usersArr
    },
    headers(){
      return this.$store.state.headersArr
    },
    showLoading(){
      return this.$store.state.loadingGifShow
    }
  },
  mounted() {
    if (this.$store.state.loggedin === false){
      this.$router.push('/login?req=login');
    }
  }
}
</script>

<style scoped>
table {
  margin: auto;
  width: 100%;
}

.container {
  margin-bottom: 2em;
}

h3 {
  padding-bottom: 20px;
}
</style>