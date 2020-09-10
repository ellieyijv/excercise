<template>
  <div class="card p-4 mx-auto">
    <img class="card-img-top" :src="card.image" alt="Card image" />
    <div class="card-body">
      <p class="card-text">{{card.description}}</p>
      <a href="#" class="btn btn-default card-bottom">{{card.btnText}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  text-align: center;
  width: 22rem;
  height: 35rem;
  position: relative;
}

.card-bottom {
  position: absolute;
  left: 35%;
  bottom: 20px;
}
</style>
