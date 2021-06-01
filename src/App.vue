<template>
  <div id="app">
    <navbar-top></navbar-top>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>
<script>
import NavbarTop from "./views/partials/NavbarTop";
import Footer from "./views/partials/Footer";

export default {
  components: { Footer, NavbarTop }
}
</script>