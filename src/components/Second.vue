<template>
  <div>
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item" v-for="tab in tabs" :key="tab">
        <a
          @click="selectedTab = tab"
          class="nav-link"
          href="#"
          :class="{'active': selectedTab===tab}"
        >{{tab}}</a>
      </li>
    </ul>
    <div v-for="data in jsonData" :key="data.title">
      <div v-if="selectedTab === data.title">
        <span v-html="data.content"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "second",
  props: {
    jsonData: Array,
  },
  data() {
    return {
      selectedTab: null,
      tabs: [],
    };
  },

  mounted() {
    this.selectedTab = Object.values(this.jsonData)[0].title;
    this.tabs = this.jsonData.map((item) => item.title);
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>