<template>
  <tr>
    <td>{{ item }}</td>
    <td><img :src="photo" alt="" /></td>
    <td class="qty">{{ number }}</td>
    <td class="price">{{ price }}</td>
    <td class="price">{{ subTotal }}</td>
  </tr>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    subTotal() {
      return this.number * this.price;
    },
  },
  props: {
    sku: String,
    category: String,
    item: String,
    price: Number,
    stock: Number,
    photo: String,
    number: Number,
  },
};
</script>
<style scoped>
img {
  height: 25vh;
}
</style>