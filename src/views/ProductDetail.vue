<template>
  <div class="pages">
    <header>
      <NavBarComponent />
      <PromoComponent />
    </header>
    <body>
      <div class="container" v-bind="product">
        <div class="row my-5">
          <div class="col-sm-6 col-12">
            <img :src="product.photo" class="card-img-top m-1" />
          </div>
          <div
            class="col-sm-6 col-12 d-flex flex-column justify-content-between"
          >
            <div class="p-top">
              <h2 class="mt-5">{{ product.item }}</h2>
              <h3>{{ product.category }}</h3>
              <hr />
              <h4>價格：{{ product.price }} 元</h4>
              <h5>存貨：{{ product.stock }} PCs</h5>
            </div>
            <div class="p-bottom">
              <h6>宅配時間：約需5個工作天（不含假日）</h6>
              <div class="qty-button">
                <div class="input-group qty">
                  <button class="btn btn-outline-secondary" @click="number--">
                    -
                  </button>
                  <input
                    type="text"
                    class="form-control text-center"
                    v-model="number"
                    disabled
                  />
                  <button class="btn btn-outline-secondary" @click="number++">
                    +
                  </button>
                </div>
                <button
                  class="btn btn-outline-success mt-2 w-100"
                  @click="addCart(product)"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-12"></div>
        </div>
        <hr class="my-5"/>
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-sm-10">
            <div class="description">
              <h5>商品介紹</h5>
              <p class="text-start">{{ product.description }}</p>
            </div>
            <div class="caring mt-5">
              <h5>照顧指引</h5>
              <p class="text-start">{{ product.care }}</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import axios from "axios";
import NavBarComponent from "../components/NavBarComponent.vue";
import PromoComponent from "../components/PromoComponent.vue";
export default {
  name: "product-detail",
  components: {
    NavBarComponent,
    PromoComponent,
  },
  data() {
    return {
      product: {},
      number: 0,
    };
  },
  mounted() {
    axios
      .get(
        `https://cart-project-db.herokuapp.com/item/${this.$route.params.productSku}`
      )
      .then((response) => {
        this.product = response.data[0];
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    addCart: function (product) {
      if (this.product.stock - this.number < 0) {
        alert("存貨不足");
        return;
      } else if (this.product.stock - this.number >= 0 && this.number > 0) {
        this.$store.commit("addCart", {
          product: product,
          number: this.number,
        });
        alert("加入購物車");
      }
    },
  },
};
</script>