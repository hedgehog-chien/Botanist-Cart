<template>
  <div class="cart">
    <header>
      <NavBarComponent />
      <div class="row promo d-flex align-items-center">
        <div class="col d-flex align-items-center justify-content-center">
          滿千免運活動實施中
        </div>
        <div class="col d-flex align-items-center justify-content-center">
          三十天內保證退款
        </div>
        <div class="col d-flex align-items-center justify-content-center">
          累積 12.000+ 五星好評
        </div>
      </div>
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

export default {
  name: "CartView",
  components: {
    NavBarComponent,
  },
};
</script>
