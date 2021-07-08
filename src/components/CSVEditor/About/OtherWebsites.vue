<template>
<div class="fulldiv">
  <div class="container">
    <div class="row bg-light" >
      <div class="col">
        <h1>Checkout my  websites</h1>
      </div>
    </div>
    <div class="row bg-light" >
      <div class="col" v-for="(link, index) in links" :key="index">
        <a :href="`//${link.url}`" target="_blank">{{ link.websitename }}</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "OtherWebsites",
  methods : {
  },
  data () {
    return {
      links: [
        {
          websitename : "CSVEditor",
          url : "bit.ly/36pfXbv",
        },
        {
          websitename : "Dogs",
          url : "bit.ly/3jPtCRf",
        },
      ]
    }
  }
}
</script>

<style scoped>
html {
  height: 100%;
}

.fulldiv {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-top: 15%;
}

.websitediv {
  padding: 8px;
}
</style>