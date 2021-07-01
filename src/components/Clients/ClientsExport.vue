<template>
<div id="download-container">
  <a id="exportBtn" href="#" @click="saveDynamicDataToFile">Export as CSV</a>
</div>
</template>

<script>
export default {
  name: "ClientsExport",
  methods : {
    saveDynamicDataToFile() {
      let testArr = this.$store.state.usersArr;
      let testHeadersArr = this.$store.state.headersArr;


      let textblock = "";


      console.log(testHeadersArr);
      console.log(testHeadersArr.length);
      console.log(testHeadersArr.length-1);
      for (let i = 0; i < testHeadersArr.length-1; i++) {
        textblock += `${testHeadersArr[i]},`
      }
      textblock += `${testHeadersArr[testHeadersArr.length-1]}\n`;

      console.log(textblock);

      //TODO: Fix comma's
      console.log(testArr);
      for (let i = 0; i < testArr.length-1; i++)
      {
        if (testArr[i].first){
          textblock += `${testArr[i].first},`;
        }
        if (testArr[i].second){
          textblock += `${testArr[i].second},`;
        }
        if (testArr[i].third){
          textblock += `${testArr[i].third},`;
        }
        if (testArr[i].fourth){
          textblock += `${testArr[i].fourth},`;
        }
        if (testArr[i].fifth){
          textblock += `${testArr[i].fifth}`;
        }

        //textblock += `${testArr[i].first},${testArr[i].second},${testArr[i].third},${testArr[i].fourth},`;
      }
      //textblock += `${testArr[i].fifth}\n`


      let data = document.getElementById('download-container');
      let c = document.createElement("a");


      let nameGiven;

      let name = prompt('Submit a name for saved file');
      if (name !== null){
        if (name !== ''){
          c.download = `${name}.csv`;
          nameGiven = true;
        }
        else{
          c.download = `DataExport.csv`;
          nameGiven = false;
        }

        if (nameGiven === true){

        }

        data.appendChild(c);
        alert('Data succesfully exported as "'+name+'.csv"')

        let t = new Blob([textblock], {
          type: "text/plain"
        });
        c.href = URL.createObjectURL(t);
        c.click();
      }


    }
  }
}
</script>

<style scoped>
#exportBtn {
  text-decoration: underline;
  color: blue;
}
</style>