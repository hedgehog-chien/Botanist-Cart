<template>
  <div class="card col-12 col-sm-3 my-2 mx-1">
    <div class="card-top">
      <img :src="photo" class="card-img-top" />
    </div>
    <div class="card-body">
      <div class="card-mid">
        <h5 class="card-title">{{ item }}</h5>
        <p class="card-text">{{ category }}</p>
        <p class="card-text">價格：{{ price }}</p>
      </div>
      <div
        class="card-btm d-flex justify-content-evenly align-items-center mt-2"
      >
        <div class="qty-select">
          數量：<select ref="qty" class="qty" name="qty" >
            <option v-for="index in 5" :key="index">
              {{ index }}
            </option>
          </select>
        </div>
        <button href="#" class="btn btn-primary" @click="btn(sku)">選購</button>
      </div>
    </div>
  </div>
</template>

<script>
const $ = require("jquery");
window.$ = $;

export default {
  data(){
    return{
      product:[],
      // qty: 0
    }
  },
  props:{
    sku: String,
    category: String,
    item: String,
    price: Number,
    stock: Number,
    photo: String,
  },
  methods: {
    btn(sku){
      let qty = this.$refs.qty.value;
      console.log(sku, qty);
    }
  }
}
</script>