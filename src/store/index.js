import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state: {
    cart: []
  },
  getters: {
    currentQuantity(state){
      let total = 0;
      for(var i = 0; i < state.cart.length; i++){
        total += state.cart[i].number
      }
      return total
    },
    cartTotal (state){
      let total = 0
      state.cart.forEach(product => {
        total += product.price * product.number
      })
      return total
    }
  },
  mutations: {
    addCart(state, data){
      let isNewProduct = true
      // console.log(data)
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
    },
    removeFromCart(state, product){
      let index = state.cart.findIndex(sku => sku.sku === product.sku);
      state.cart.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
