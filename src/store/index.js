import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  getters: {
  },
  mutations: {
    addCart(state, data){
      let isNewProduct = true
      console.log(data)
      state.cart.map(function(product){
        if (product.sku === data.product.sku){
          product.number += data.number
          isNewProduct = false
        }
        return product
      })
      if (isNewProduct) {
        let newProduct = data.product
        newProduct.number = data.number
        state.cart.push(newProduct)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
