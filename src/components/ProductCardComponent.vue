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

<script>
export default {
  data(){
    return{
      product:[]
    }
  },
  props:{
    category: String,
    item: String,
    price: Number,
    stock: Number,
    photo: String,
  }
}
</script>