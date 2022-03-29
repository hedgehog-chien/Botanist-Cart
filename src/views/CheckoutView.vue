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
    <hr class="my-5" />
    <section>
      <div class="container">
        <h3>訂單資訊</h3>
        <hr />
        <div class="row d-flex justify-content-between mt-5">
          <div class="col-sm-6 col-12">
            <div class="recipientInfo">
              <h5 class="mb-3">收件資訊</h5>
              <hr />
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="請輸入姓名"
                />
                <label for="floatingInput">收件人姓名</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="09xx-xxx-xxx"
                />
                <label for="floatingInput">手機</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="收件地址"
                />
                <label for="floatingInput">收件地址</label>
              </div>
            </div>
          </div>
          <div
            class="col-sm-5 col-12 d-flex flex-column"
          >
            <div class="payMethod">
              <h5 class="mb-3">付款方式</h5>
              <hr />
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  貨到付款
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                  disabled
                />
                <label class="form-check-label" for="exampleRadios2">
                  信用卡付款
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                  disabled
                />
                <label class="form-check-label" for="exampleRadios3">
                  匯款
                </label>
              </div>
            </div>
            <div class="memo mt-4">
              <h5>備註</h5>
              <hr />
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style="height: 120px"
                ></textarea>
                <label for="floatingTextarea2">Memo</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-12  col-sm-2">
            <button class="my-3">繼續購物</button>
          </div>
          <div class="col-12  col-sm-2">
            <button class="my-3">送出訂單</button>
          </div>
        </div>
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
.memo {
  height: calc();
}
button {
  background-color: #4e6853;
  border-radius: 0.5rem;
  border: none;
  color: #fff;
  display: inline;
  width: auto;
  margin: 0.5rem;
}
</style>