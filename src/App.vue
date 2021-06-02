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
import NavbarTop from "./components/partials/NavbarTop";
import Footer from "./components/partials/Footer";

export default {
  components: { Footer, NavbarTop }
}
</script>