<template>
  <div>
    <div v-if="$isMobile()">
      <SecondMobile :jsonData="jsonData" />
    </div>
    <div v-else>
      <Second :jsonData="jsonData" />
    </div>
  </div>
</template>

<script>
import data from "@/assets/json/data.json";
import Second from "@/components/Second";
import SecondMobile from "@/components/Mobile/SecondMobile";

export default {
  name: "second",
  components: {
    SecondMobile,
    Second,
  },
  data() {
    return {
      jsonData: data,
    };
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>