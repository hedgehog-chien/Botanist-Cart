<template>
  <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
    <div class="container-fluid">
      <router-link class="logo-text" to="/"><h1>Botanist</h1></router-link>
      <div class="nav-links">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >首頁</router-link
              >
            </li>
            <router-link class="nav-link" to="/signup">註冊 | 登入</router-link>
            <li />
            <li />
            <router-link class="nav-link" to="/about">關於我們</router-link>
            <li />
            <router-link class="nav-link" to="/products">商品一覽</router-link>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart"
                ><i class="fas fa-cart-plus"> （{{currentQuantity}}）</i
              ></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed:{
    currentQuantity(){
      return this.$store.getters.currentQuantity
    }
  }
};
</script>

<style scoped>
.logo-text {
  text-decoration: none;
  margin-left: 1rem;
}
</style>