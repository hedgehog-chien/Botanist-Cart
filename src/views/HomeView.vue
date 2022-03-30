<template>
  <div class="home">
    <header>
      <NavBarComponent />
      <BannerComponent />
    </header>

    <section>
      <div class="container mt-5 best-seller">
        <h2>Best Sellers 熱銷植栽</h2>

        <div class="row row-cols-sm-4 d-flex justify-content-center gy-5">
          <template v-for="product in products" :key="product">
            <div
              class="
                col col-3
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
            >
              <img :src="product.photo" @click="redirectProduct(product.sku)" />
              <div class="mt-5">
                <h5 class="">{{ product.item }}</h5>
                <p class="">{{ product.category }}</p>
                <p>價格：{{ product.price }} NTD</p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div
        class="
          container-fluid
          sub-banner
          mt-5
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <p>「離離原上草，一歲一枯榮。」——— 唐・白居易</p>
      </div>
      <div class="container category mt-5">
        <h2>運勢提升</h2>
        <div class="row row1 row-cols-2 d-flex justify-content-center g-0">
          <div class="col col-6 love d-flex align-items-center">
            <a href="#" class="mt-5">桃花</a>
          </div>
          <div class="row row2 g-0 row-cols-2 d-flex justify-content-center">
            <div class="col col-6"><a href="#" class="mt-5">招財</a></div>
            <div class="col col-6"><a href="#" class="mt-5">納福</a></div>
            <div class="col col-6"><a href="#" class="mt-5">避邪</a></div>
            <div class="col col-6"><a href="#" class="mt-5">健康</a></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent.vue";
import BannerComponent from "../components/BannerComponent.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavBarComponent,
    BannerComponent,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchMessages();
  },
  methods: {
    fetchMessages() {
      axios
        .get(`https://cart-project-db.herokuapp.com/items`)
        .then((response) => (this.products = response.data));
    },
    redirectProduct: function (sku) {
      this.$router.push(`/products/${sku}`);
    },
  },
};
</script>


