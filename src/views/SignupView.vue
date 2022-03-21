<template>
  <div class="pages">
    <header>
      <NavBarComponent />
    </header>
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