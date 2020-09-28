<template>
  <div class="card p-2 mx-auto">
    <img class="card-img-top" :src="card.image" alt="Card image" />
    <div class="card-body">
      <p class="card-text">{{card.description}}</p>
    </div>
    <div class="card-bottom">
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
<style lang="scss" scoped>
.card {
  text-align: center;
  width: 16rem;
  height: 28rem;
  font-size: 0.8rem;
}

.card-bottom {
  text-align: center;
  margin-bottom: 1rem;
}

@media (max-width: 640px) {
  .card {
    width: 20rem;
    height: 32rem;
    font-size: 1rem;
  }
}

@media (max-width: 415px) {
  .card {
    width: 22rem;
    height: 35rem;
  }
}
</style>
