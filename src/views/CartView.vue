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
          <tr>
            <th>Item</th>
            <th></th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Sub total</th>
          </tr>
          <tr class="items">
            <td>盆栽一</td>
            <td><img src="../assets/2.jpeg" alt="" /></td>
            <td class="qty">2</td>
            <td class="price">30</td>
            <td class="price">60</td>
          </tr>
          <tr class="items">
            <td>盆栽二</td>
            <td><img src="../assets/3.jpeg" alt="" /></td>
            <td class="qty">2</td>
            <td class="price">30</td>
            <td class="price">60</td>
          </tr>
          <tr>
            <th>Total</th>
            <td></td>
            <td></td>
            <td></td>
            <td class="price">120</td>
          </tr>
        </table>

        <div class="row d-flex justify-content-center align-items-center">
          <button class="mt-5">Continue to shop</button>
          <button class="mt-5" onclick="location.href='/product'">
            Add to cart
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent.vue";
import PromoComponent from "../components/PromoComponent.vue";

export default {
  name: "CartView",
  components: {
    NavBarComponent,
    PromoComponent
  },
};
</script>
