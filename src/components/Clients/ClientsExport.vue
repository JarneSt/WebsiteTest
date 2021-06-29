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
      textblock += (`${testHeadersArr[0]},${testHeadersArr[1]},${testHeadersArr[2]},${testHeadersArr[3]},${testHeadersArr[4]}\n`);
      for (let i = 0; i < testArr.length; i++)
      {
        textblock += (`${testArr[i].first},${testArr[i].second},${testArr[i].third},${testArr[i].fourth},${testArr[i].fifth}\n`);
      }
      console.log(textblock);

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