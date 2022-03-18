<template>
  <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
    <div class="container-fluid">
      <router-link to="/"><h1>Botanist</h1></router-link>
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
          <router-link class="nav-link" to="/signup">會員註冊</router-link>
          <li />
          <li />
          <router-link class="nav-link" to="/about">關於我們</router-link>
          <li />
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              商品一覽
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">開運植物</a>
              <a class="dropdown-item" href="#">開運花卉</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart"><i class="fas fa-cart-plus"></i
            ></router-link>
            
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa-solid fa-heart"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>