<template>
  <div id="accordion">
    <div class="card" v-for="(data, index) in jsonData" :key="data.title">
      <a class="card-header bg-primary" :id="data.title" @click="selectedTab = data.title">
        <h5 class="mb-0">
          <button
            class="btn btn-primary"
            data-toggle="collapse"
            :data-target="`#collapse${index}`"
            :aria-expanded="selectedTab ==data.title"
            :aria-controls="`collapse${index}`"
          >{{data.title}}</button>
        </h5>
      </a>

      <div
        :id="`collapse${index}`"
        class="collapse"
        :class="{'show': selectedTab===data.title}"
        :aria-labelledby="data.title"
        data-parent="#accordion"
      >
        <div class="card-body">
          <span v-html="data.content"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Second",
  props: {
    jsonData: Array,
  },
  data() {
    return {
      selectedTab: null,
    };
  },
  mounted() {
    this.selectedTab = Object.values(this.jsonData)[0].title;
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>