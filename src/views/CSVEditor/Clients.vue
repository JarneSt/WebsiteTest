<template>
<div>
  <!--Import CSV-->
  <h3>Import CSV here <small><br>(max 5 header values)</small></h3>
  <form id="formFile">
    <div class="mb-3 chooseFileSection">
      <label for="selectedFile" class="form-label"></label>
      <input class="form-control" @change="csvToObject" id="selectedFile" accept=".csv" type="file" >
    </div>
  </form>

  <!--All Clients Title-->
  <AllClientsHeader :users="users"  />

  <!--All Clients Table-->
  <table class="table" v-if="users.length > 0">
    <thead>
    <tr>
      <th v-if="headers.length > 0" v-for="header in headers">
        {{header}}
      </th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="usr in users" :key="usr.name">
      <AllClientsPage :usr="usr"/>
    </tr>
    </tbody>
  </table>

  <!--Loading GIF-->
  <LoadingGIFComponent v-if="showLoading"/>

  <!--Adding and clearing clients-->
  <div class="mb-5">
    <ClientsAdd/>
    <ClearClients v-if="users.length > 0"/>
  </div>
</div>
</template>

<script>
import AllClientsPage from "../../components/CSVEditor/Clients/AllClientsPage";
import ClientsAdd from "../../components/CSVEditor/Clients/ClientsAdd";
import AllClientsHeader from "../../components/CSVEditor/Clients/AllClientsHeader";
import ClearClients from "../../components/CSVEditor/Clients/ClearClients";
import ClientsExport from "../../components/CSVEditor/Clients/ClientsExport";
import LoadingGIFComponent from "../../components/CSVEditor/Clients/LoadingGIFComponent";
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
      this.$store.state.recordscount = 0;

      let usersArr = this.$store.state.usersArr;

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
          else if (lines[0].includes('||')){
            splitValue = '||'
          }
          else if (lines[0].includes('|')){
            splitValue = '|'
          }
          else if (lines[0].includes('\\0x9')){
            splitValue = '\\0x9'
          }


          /**
           * Headers that are on the first line
           */
          this.$store.state.headersArr = lines[0].replace('\r','').split(splitValue);

          if(this.$store.state.headersArr.length > 5){
            alert('We currently only support up to 5 headers');
          }
          else {
            /**
             * Foreach line it reads, it creates an object and pushes this into an array
             * which is passed in a different component
             */

            console.log('lines length', lines.length);

            if (lines.length <= 1002){
              for (let i = 1; i < lines.length; i++)
              {
                this.$store.state.recordscount++;
                let currentline = lines[i].split(splitValue);

                if(currentline.length === 2){
                  let obj = {
                    first: currentline[0],
                    second: currentline[1],
                  };
                  this.$store.state.usersArr.push(obj);
                }
                else if (currentline.length === 3){
                  let obj = {
                    first: currentline[0],
                    second: currentline[1],
                    third: currentline[2],
                  };
                  this.$store.state.usersArr.push(obj);
                }
                else if (currentline.length === 4){
                  let obj = {
                    first: currentline[0],
                    second: currentline[1],
                    third: currentline[2],
                    fourth: currentline[3],
                  };
                  this.$store.state.usersArr.push(obj);
                }
                else if (currentline.length === 5){
                  let obj = {
                    first: currentline[0],
                    second: currentline[1],
                    third: currentline[2],
                    fourth: currentline[3],
                    fifth: currentline[4]
                  };
                  this.$store.state.usersArr.push(obj);
                }
              }
            }
            else if (lines.length > 1002){
              alert('Because of many records, loading will be slower and longer.' +
                  '\nPlease do NOT change tabs or anything else while records load in');
              for (let i = 1; i < lines.length; i++)
              {
                this.$store.state.recordscount++;
                let millisecondsToWait = 0;
                setTimeout(function() {
                  let currentline = lines[i].split(splitValue);
                  //console.log('currentline length',currentline.length);
                  if(currentline.length === 2){
                    let obj = {
                      first: currentline[0],
                      second: currentline[1],
                    };
                    usersArr.push(obj);
                  }
                  else if (currentline.length === 3){
                    let obj = {
                      first: currentline[0],
                      second: currentline[1],
                      third: currentline[2],
                    };
                    usersArr.push(obj);
                  }
                  else if (currentline.length === 4){
                    let obj = {
                      first: currentline[0],
                      second: currentline[1],
                      third: currentline[2],
                      fourth: currentline[3],
                    };
                    usersArr.push(obj);
                  }
                  else if (currentline.length === 5){
                    let obj = {
                      first: currentline[0],
                      second: currentline[1],
                      third: currentline[2],
                      fourth: currentline[3],
                      fifth: currentline[4]
                    };
                    usersArr.push(obj);
                  }
                }, millisecondsToWait);
              }
            }

            this.$store.state.loadingGifShow = false;
          }
        }
      }catch (e) {
        alert('Error parsing, please remove any comments and make sure the CSV uses either comma/semicolumn/piping/double piping to split')
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
  }
}
</script>

<style scoped>

.chooseFileSection {
  width: 500px;
  margin: auto;
}
table {
  margin: auto;
  width: 100%;
}

.container {
  margin-bottom: 2em;
}

h3 {
  padding-bottom: 20px;
  padding-top: 25px;
}

.table {
  vertical-align: inherit;
}


@media only screen and (max-width: 600px){
  .chooseFileSection {
    width: 85%;
  }
}

@media only screen and (max-width: 475px){
  td {
    padding: 0 !important;
  }
  .table > :not(caption) > * > * {
    padding: 0 !important;

  }



}

</style>