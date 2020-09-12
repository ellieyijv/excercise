<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.btn-default {
  color: #181818;
  background-color: transparent;
  background-image: none;
  border-color: #333333;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5em;
  padding: 0.5em 1em;
  border-width: 0.2em;
}
body {
  margin: 0;
  padding: 0;
}
</style>
