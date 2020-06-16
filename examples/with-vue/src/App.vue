<template>
  <div id="app">
    <img width="80px" src="./assets/logo.png">
    <HelloWorld msg="Vue"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
}
</script>

<style>
  body {
    background-color: #D6FCF7;
  }
  #app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
  }
</style>
