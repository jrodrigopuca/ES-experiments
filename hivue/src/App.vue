<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <C01 msg="Hola"/>
    <C02 />
  </div>
</template>

<script>
import C01 from './components/C01.vue';
import C02 from './components/C02.vue';

export default {
  name: 'app',
  components: {
    C01,C02
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
