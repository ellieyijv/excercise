<template>
  <div>
    <div
      class="container-fluid hero-banner text-white"
      :style="{ backgroundImage: 'url(' + bannerImage + ')'}"
    >
      <h1>Hello Developer!</h1>
      <h3>orem Ipsum Lorem Ipsum is simply dummy text of the printing</h3>
    </div>
    <div class="container mx-auto my-5">
      <div class="row">
        <div class="col-xl-4 col-sm-12 col-md-6 py-2" v-for="card in cards" :key="card.title">
          <Card :card="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import cardImg from "@/assets/images/cardImg.png";
import bannerImage from "@/assets/images/bannerImage.png";
import mobileBannerImage from "@/assets/images/mobileBanner.png";

export default {
  name: "first",
  components: {
    Card,
  },
  data() {
    return {
      bannerImage: this.$isMobile() ? mobileBannerImage : bannerImage,
      cards: [
        {
          image: cardImg,
          title: "hello",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          btnText: "READ MORE",
        },
        {
          image: cardImg,
          title: "test",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident",
          btnText: "READ MORE",
        },
        {
          image: cardImg,
          title: "ok",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          btnText: "READ MORE",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-banner {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.hero-banner::after {
  background-color: #8f8f8f;
  height: 600px;
  z-index: -1;
}

.hero-banner h1 {
  font-size: 5rem;
  font-weight: bolder;
}
</style>
