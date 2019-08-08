<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  body{
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    font-family: Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif;
    background: #fff;
  }
  ul{
    margin: 0px;
    padding: 0px;
    list-style-type:none
  }
  select,a,button,input {
    outline: none;
  }

</style>
