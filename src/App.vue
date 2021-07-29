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
import NavbarTop from "./components/adminPartials/NavbarTop";
import Footer from "./components/adminPartials/Footer";

export default {
  components: { Footer, NavbarTop }
}
</script>