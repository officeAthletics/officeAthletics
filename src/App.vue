<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  #app{
    width: 100%;
    background-color: rgb(60,173,114);
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
