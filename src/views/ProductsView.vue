<template>
  <div class="pages">
    <header>
      <NavBarComponent />
      <PromoComponent />
    </header>
    <section class="container">
      <div class="category-button mt-5">
        <button
          v-for="(category, index) in categories"
          :key="index"
          :value="category.value"
          @click="getCategory(index)"
          class="mx-2 btn"
        >
          {{ category.name }}
        </button>
      </div>
      <div class="row my-5 d-flex justify-content-center">
        <div class="no-item"             :class="{ 'd-none': products.length != 0 }"
>
          <h3>本類別目前尚無商品。</h3>
          <img src="./images/person-digging-solid.svg" />
        </div>
        <template v-for="product in products" :key="product">
          <ProductCardComponent v-bind="product" />
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent.vue";
import PromoComponent from "../components/PromoComponent.vue";
import ProductCardComponent from "../components/ProductCardComponent.vue";
import axios from "axios";

export default {
  name: "ProductView",
  components: {
    NavBarComponent,
    PromoComponent,
    ProductCardComponent,
  },
  data() {
    return {
      products: [],
      path: "items",
      categories: [
        { name: "所有商品", value: "items" },
        { name: "風水", value: "風水" },
        { name: "擋煞", value: "擋煞" },
        { name: "招財", value: "招財" },
        { name: "桃花", value: "桃花" },
        { name: "健康", value: "健康" },
      ],
    };
  },
  watch: {
    path(newPath, oldPath) {
      if (newPath !== oldPath) {
        this.fetchMessages(this.path);
      }
    },
  },
  mounted() {
    this.fetchMessages(this.path);
  },
  methods: {
    fetchMessages() {
      axios
        .get(`https://cart-project-db.herokuapp.com/${this.path}`)
        .then((response) => (this.products = response.data));
    },
    getCategory(index) {
      let category = this.categories[index].value;
      this.path = category;
    },
  },
};
</script>

<style scoped>
.category-button button {
  color: #fff;
  background-color: #4e6853;
}
.category-button button:hover {
  background-color: #3b4e3f;
}
img {
  width: 50px;
  height: 50px;
}
</style>