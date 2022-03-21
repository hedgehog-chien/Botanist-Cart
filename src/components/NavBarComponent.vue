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
            <li class="nav-item dropdown">
              <router-link to="/products" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">商品一覽</router-link>

          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/products" class="dropdown-item">所有商品</router-link></li>
            <li><a class="dropdown-item" href="#">開運植物</a></li>
            <li><a class="dropdown-item" href="#">開運花卉</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart"
                ><i class="fas fa-cart-plus"></i
              ></router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa-solid fa-heart"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.logo-text {
  text-decoration: none;
  margin-left: 1rem;
}
</style>