<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
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
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  padding: 5px 20px;
  border-width: 3px;
}
</style>
