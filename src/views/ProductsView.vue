<template>
  <div class="pages">
    <header>
      <NavBarComponent />
      <PromoComponent />
    </header>
  </div>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent.vue";
import PromoComponent from "../components/PromoComponent.vue";

export default {
  name: "ProductView",
  components: {
    NavBarComponent,
    PromoComponent,
  },
};
</script>