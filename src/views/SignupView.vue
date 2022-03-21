<template>
  <div class="pages">
    <header>
      <NavBarComponent />
    </header>
    <section>
        <div class="banner">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="row col-5 d-flex justify-content-center align-items-center my-5">
            <h3 class="mb-5">註冊</h3>
            <div class="col-5 form-floating px-1 mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="Frist name">
              <label for="floatingInput">Frist name</label>
            </div>
            <div class="col-5 form-floating px-1 mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="Last name">
              <label for="floatingInput">Last name</label>
            </div>
            <div class="col-10 form-floating px-1 mb-3">
              <input type="tel" class="form-control" id="floatingInput" placeholder="Phone">
              <label for="floatingInput">Phone</label>
            </div>
            <div class="col-10 form-floating px-1 mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="Email">
              <label for="floatingInput">Email</label>
            </div>
            <div class="col-10 form-floating px-1 mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
            <button class="btn btn-">SIGN UP</button>
          </div>
          <div class="col-5 d-flex justify-content-center align-items-center flex-column flex-nowrap my-5">
            <h3 class="mb-5">登入</h3>
            <div class="col-10 form-floating px-1 mb-3">
              <input type="email" class="form-control" id="floatingPassword" placeholder="email">
              <label for="floatingPassword">Email</label>
            </div>
            <div class="col-10 form-floating px-1 mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
            <button class="btn btn-">SIGN IN</button>
            <hr class="border border-dark w-75 mt-4">
            <ul class="d-flex justify-content-around align-items-center" style="list-style-type: none;">
              <li><i class="fa-brands fa-google"></i></li>
              <li><i class="fab fa-facebook-square ms-1"></i></li>
              <li><i class="fab fa-twitter-square ms-1"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent.vue";

export default {
  name: "SignupView",
  components: {
    NavBarComponent,
  },
};
</script>

<style scoped>

</style>
