<template>
  <div class="fullContainer">
    <div>
      <p>Choose a splitting value for export</p>
    </div>
    <form>
      <input type="radio"  checked id="comma" name="fav_split" value="Comma">
      <label for="comma">Comma</label><br>
      <input type="radio" id="semicolumn" name="fav_split" value="Semicolumn">
      <label for="semicolumn">Semicolumn</label><br>

      <input type="radio" id="piping" name="fav_split" value="Piping">
      <label for="piping">Piping</label><br>

      <input type="radio" id="doublepiping" name="fav_split" value="Doublepiping">
      <label for="doublepiping">Double piping</label><br>
    </form>
    <div id="download-container">
      <a id="exportBtn" href="#" @click="saveDynamicDataToFile">Export as CSV</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientsExport",
  methods : {
    saveDynamicDataToFile() {
      let testArr = this.$store.state.usersArr;
      let testHeadersArr = this.$store.state.headersArr;
      let selectedSplittingValue = ',';

      if (document.getElementById('semicolumn').checked === true){
        selectedSplittingValue = ';';
      }
      else if (document.getElementById('piping').checked === true)
      {
        selectedSplittingValue = '|';
      }
      else if(document.getElementById('doublepiping').checked === true){
        selectedSplittingValue = '||';
      }


      let textblock = "";

      for (let i = 0; i < testHeadersArr.length-1; i++) {
        textblock += `${testHeadersArr[i]}${selectedSplittingValue}`
      }
      textblock += `${testHeadersArr[testHeadersArr.length-1]}\n`;


      console.log(testArr);
      for (let i = 0; i < testArr.length; i++)
      {
        if (testArr[i].first){
          textblock += `${testArr[i].first}${selectedSplittingValue}`;
        }
        if (testArr[i].second){
          textblock += `${testArr[i].second}${selectedSplittingValue}`;
        }
        if (testArr[i].third){
          textblock += `${testArr[i].third}${selectedSplittingValue}`;
        }
        if (testArr[i].fourth){
          textblock += `${testArr[i].fourth}${selectedSplittingValue}`;
        }
        if (testArr[i].fifth){
          textblock += `${testArr[i].fifth}`;
        }
        textblock += '\n';
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

form {
  font-size: 18px;
  margin: 10px;
}

input {
  margin: 10px;
}

p {
  font-size: 23px;
  margin: 20px;
}
</style>