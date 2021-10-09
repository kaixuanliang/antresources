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

<style>
#app {
  height: 100%;
  overflow-x: hidden;
  -webkit-text-size-adjust: none;
  overflow-y: auto;

}
body{
  margin: 0;
}
</style>
