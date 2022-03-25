<template>
  <div class="pages">
    <header>
      <NavBarComponent />
      <PromoComponent />
    </header>

    <section class="mt-5">
      <div class="container mt-5">
        <h2>購物清單</h2>
      </div>
      <div
        class="container breakdown d-flex justify-content-center flex-column"
      >
        <table>
          <tr class="filledRow">
            <th>商品名稱</th>
            <th>數量</th>
            <th>單價</th>
            <th>小計</th>
          </tr>
          <template v-for="product in products" :key="product">
            <tr>
              <th>{{ product.item }}</th>
              <td>{{ product.number }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.number * product.price }}</td>
            </tr>
          </template>
          <tr class="filledRow">
            <td></td>
            <th>Total</th>
            <th class="qty">{{ currentQuantity }}</th>
            <th class="price">{{ total }}</th>
          </tr>
        </table>
      </div>
    </section>
    <section>
      <div class="container">
        
      </div>
    </section>
  </div>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent.vue";
import PromoComponent from "../components/PromoComponent.vue";

export default {
  name: "CheckoutView",
  components: {
    NavBarComponent,
    PromoComponent,
  },
  data() {
    return {
      products: this.$store.state.cart,
    };
  },
  computed: {
    total() {
      return this.$store.getters.cartTotal;
    },
    currentQuantity() {
      return this.$store.getters.currentQuantity;
    },
  },
};
</script>

<style scoped>
.filledRow {
  background-color: #fff7d3;
}
</style>