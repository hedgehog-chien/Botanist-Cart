<template>
  <div class="home">
      
    <header>
      <NavBarComponent />
      <BannerComponent />
    </header>

    <section>
     <div class="container mt-5 best-seller">
        <h2>Best Sellers 熱銷植栽</h2>

        <div class="row row-cols-sm-4 d-flex justify-content-center gy-5">
          <div
            class="
              col col-3
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
          >
            <img
              src="https://www.2ustyle.com/wp-content/uploads/2020/07/IMG_5697-final.jpg"
            />
            <div class="mt-5">
              <h5 class="">斑葉常春藤盆栽</h5>
              <p class="">趨吉避凶</p>
              <p>價格：500 NTD</p>
            </div>
          </div>
          <div
            class="
              col col-3
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
          >
            <img
              src="https://www.2ustyle.com/wp-content/uploads/2018/10/DSCF5094.jpg"
            />
            <div class="mt-5">
              <h5 class="">粉紅佳人合果芋盆栽</h5>
              <p class="">趨吉避凶</p>
              <p>價格：500 NTD</p>
            </div>
          </div>
          <div
            class="
              col col-3
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
          >
            <img
              src="https://www.2ustyle.com/wp-content/uploads/2018/10/DSCF5101.jpg"
            />
            <div class="mt-5">
              <h5 class="">奧利多蔓綠絨盆栽</h5>
              <p class="">趨吉避凶</p>
              <p>價格：500 NTD</p>
            </div>
          </div>
          <div
            class="
              col col-3
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
          >
            <img
              src="https://www.2ustyle.com/wp-content/uploads/2017/12/DSCF4152.jpg"
            />
            <div class="mt-5">
              <h5 class="">虎尾蘭盆栽</h5>
              <p class="">趨吉避凶</p>
              <p>價格：500 NTD</p>
            </div>
          </div>
          <div
            class="
              col col-3
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
          >
            <img
              src="https://www.2ustyle.com/wp-content/uploads/2018/05/DSCF4099.jpg"
            />
            <div class="mt-5">
              <h5 class="">白金葛盆栽</h5>
              <p class="">趨吉避凶</p>
              <p>價格：500 NTD</p>
            </div>
          </div>
          <div
            class="
              col col-3
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
          >
            <img
              src="https://www.2ustyle.com/wp-content/uploads/2019/09/IMG_4029-final.jpg"
            />
            <div class="mt-5">
              <h5 class="">富貴樹 / 芹葉福祿桐盆栽</h5>
              <p class="">趨吉避凶</p>
              <p>價格：500 NTD</p>
            </div>
          </div>
          <div
            class="
              col col-3
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
          >
            <img
              src="https://www.2ustyle.com/wp-content/uploads/2020/10/IMG_3293-final.jpg"
            />
            <div class="mt-5">
              <h5 class="">開運竹盆栽</h5>
              <p class="">趨吉避凶</p>
              <p>價格：500 NTD</p>
            </div>
          </div>
          <div
            class="
              col col-3
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
          >
            <img
              src="https://www.2ustyle.com/wp-content/uploads/2021/05/IMG_4753-final.jpg"
            />
            <div class="mt-5">
              <h5 class="">黃金葛</h5>
              <p class="">趨吉避凶</p>
              <p>價格：500 NTD</p>
            </div>
          </div>
        </div>
      </div> 

      <div
        class="
          container-fluid
          sub-banner
          mt-5
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <p>「離離原上草，一歲一枯榮。」——— 唐・白居易</p>
      </div>
      <div class="container category mt-5">
        <h2>運勢提升</h2>
        <div class="row row1 row-cols-2 d-flex justify-content-center g-0">
          <div class="col col-6 love d-flex align-items-center">
            <a href="#" class="mt-5">桃花</a>
          </div>
          <div class="row row2 g-0 row-cols-2 d-flex justify-content-center">
            <div class="col col-6"><a href="#" class="mt-5">招財</a></div>
            <div class="col col-6"><a href="#" class="mt-5">納福</a></div>
            <div class="col col-6"><a href="#" class="mt-5">避邪</a></div>
            <div class="col col-6"><a href="#" class="mt-5">健康</a></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent.vue";
import BannerComponent from "../components/BannerComponent.vue";


export default {
  name: "HomeView",
  components: {
    NavBarComponent,
    BannerComponent,
  },
};
</script>


