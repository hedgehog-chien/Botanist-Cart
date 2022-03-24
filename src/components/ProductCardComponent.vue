<template>
  <div class="card col-12 col-sm-3 my-2 mx-1">
    <div class="card-top">
      <img :src="photo" class="card-img-top m-1" />
    </div>
    <div class="card-body">
      <div class="card-mid">
        <h5 class="card-title">{{ item }}</h5>
        <p class="card-text">{{ category }}</p>
        <p class="card-text">價格：{{ price }} 元</p>
        <p class="card-text">存貨：{{ stock }}</p>
      </div>
      <div class="card-btm mt-2">
        <div>
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
            class="btn btn-outline-success mt-1 w-100"
            @click="addCart(product)"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        sku: this.$props.sku,
        category: this.$props.category,
        item: this.$props.item,
        price: this.$props.price,
        stock: this.$props.stock,
        photo: this.$props.photo,
      },

      number: 0,
    };
  },
  computed: {},
  props: {
    sku: String,
    category: String,
    item: String,
    price: Number,
    stock: Number,
    photo: String,
  },
  methods: {
    addCart: function (product) {
      if (this.$props.stock - this.number < 0) {
        alert("存貨不足");
        return;
      } else if (this.$props.stock - this.number >= 0 && this.number > 0) {
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

<style scoped>
</style>