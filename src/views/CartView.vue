<template>
  <div class="pages">
    <header>
      <NavBarComponent />
      <PromoComponent />
    </header>

    <section>
      <div class="container mt-5">
        <h2>您的購物車</h2>
      </div>

      <div
        class="container breakdown d-flex justify-content-center flex-column"
      >
        <table>
          <tr class="filledRow">
            <th>商品名稱</th>
            <th></th>
            <th>數量</th>
            <th>單價</th>
            <th>小計</th>
          </tr>
          <template v-for="product in products" :key="product">
            <CheckoutTableComponent v-bind="product" />
          </template>
          <tr :class="{ 'd-none': products.length != 0 }">
            <td colspan="5" class="py-5">購物車是空的，還不快去買。</td>
          </tr>
          <tr class="filledRow">
            <td></td>
            <th>Total</th>
            <th class="qty">{{currentQuantity}}</th>
            <td></td>
            <th class="price">{{ total }}</th>
          </tr>
        </table>

        <div class="row d-flex justify-content-center align-items-center">
          <button class="mt-5">繼續購物</button>
          <button class="mt-5">結帳</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent.vue";
import PromoComponent from "../components/PromoComponent.vue";
import CheckoutTableComponent from "../components/CheckoutTableComponent.vue";

export default {
  name: "CartView",
  components: {
    NavBarComponent,
    PromoComponent,
    CheckoutTableComponent,
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
.filledRow{
  background-color: #fff7d3;
}
</style>
