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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.btn-default {
  color: $btn_color;
  background-color: transparent;
  background-image: none;
  border-color: $btn_border_color;
  font-size: 1em;
  font-weight: bold;
  border-radius: 5em;
  padding: 0.5em 1em;
  border-width: 0.2em;
}

* {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 5rem;
  font-weight: bolder;
}

html {
  font-size: $fontSize;
}

li {
  list-style-type: none;
}

@media (max-width: 640px) {
  html {
    font-size: $tablet_fontSize;
  }
}

@media (max-width: 415px) {
  html {
    font-size: $mobile_fontSize;
  }
}
</style>

