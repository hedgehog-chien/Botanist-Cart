<template>
  <div class="vh-100">
  <router-view/>
  <FooterComponent/>
  </div>


</template>

<script>
import FooterComponent from "./components/FooterComponent.vue"


export default {
  components:{
    FooterComponent
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
