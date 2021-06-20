<template>
<div>
  <h1>{{time}}</h1></div>
</template>

<script>

export default {
  name: "ClockComponent",
  data(){
    return {
      time : ''
    }
  },
  mounted() {
    const b = new Date();
    let hours = ('0'+b.getHours()).slice(-2);
    let mins = ('0'+b.getMinutes()).slice(-2);
    let seconds = ('0'+b.getSeconds()).slice(-2);
    this.time = hours+':'+mins+':'+seconds;

    setInterval(() => {
      const d = new Date();

      let hours = ('0'+d.getHours()).slice(-2);
      let mins = ('0'+d.getMinutes()).slice(-2);
      let seconds = ('0'+d.getSeconds()).slice(-2);
      this.time = hours+':'+mins+':'+seconds;
    }, 1000)
  }
}
</script>

<style scoped>

</style>