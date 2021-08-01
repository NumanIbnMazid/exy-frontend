<template>
  <div>
    <NavbarTop></NavbarTop>
    <router-link name="scladmin"></router-link>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import NavbarTop from "./NavbarTop.vue";
export default {
  components: {
    NavbarTop,
    Footer,
  },
};
</script>

<style scoped>
.main-nav{
  display: none !important; 
}
</style>