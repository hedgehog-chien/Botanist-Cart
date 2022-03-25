<template>
  <tr>
    <td>{{ item }}</td>
    <td><img :src="photo" alt="" /></td>
    <td class="qty">{{ number }}</td>
    <td class="price">{{ price }}</td>
    <td class="price">{{ subTotal }}</td>
    <td>
      <img
        class="delete-button float-left"
        src="./images/trash-can-solid.svg"
        @click="removeFormCart(product)"
      />
    </td>
  </tr>
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
    };
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
  methods: {
    removeFormCart(product) {
      let text = `確定要將此商品移出購物車嗎？`;

      if (confirm(text) == true) {
        this.$store.commit("removeFromCart", product);
      }
    },
  },
};
</script>
<style scoped>
img {
  height: 25vh;
}
.delete-button {
  height: 24px;
  width: 24px;
  opacity: 15%;
}
.delete-button:hover {
  opacity: 100%;
}
</style>