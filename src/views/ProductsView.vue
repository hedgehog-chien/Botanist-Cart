<template>
  <div class="pages">
    <header>
      <NavBarComponent />
      <PromoComponent />
    </header>
    <section>
      <div class="container">
        <div class="row my-5">
          <template v-for="product in products" :key="product">
            <div class="card mx-1 col-3" v-bind="product">
              <div class="card-top">
                <img :src="product.photo" class="card-img-top" />
              </div>
              <div class="card-body">
                <div class="card-mid">
                  <h5 class="card-title">{{ product.item }}</h5>
                  <p class="card-text">{{ product.category }}</p>
                  <p class="card-text">價格：{{ product.price }}</p>
                </div>
                <div
                  class="
                    card-btm
                    d-flex
                    justify-content-evenly
                    align-items-center
                    mt-2
                  "
                >
                  <div class="qty-select">
                    數量：<select name="qty">
                      <option v-for="index in 5" :key="index">
                        {{ index }}
                      </option>
                    </select>
                  </div>
                  <a href="#" class="btn btn-primary">選購</a>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent.vue";
import PromoComponent from "../components/PromoComponent.vue";
import axios from "axios";

export default {
  name: "ProductView",
  data() {
    return {
      products: [],
    };
  },
  components: {
    NavBarComponent,
    PromoComponent,
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
  },
};
</script>

<style scoped>
</style>