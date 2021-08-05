<template>
  <div id="app">
    <navbar-top v-if="currentRouteName == 0"></navbar-top>
    <navbar-top-open v-else></navbar-top-open>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>
<script>
import NavbarTop from "./components/adminPartials/NavbarTop";
import NavbarTopOpen from "./components/adminPartials/NavbarTopOpen";
import Footer from "./components/adminPartials/Footer";

export default {
  components: { Footer, NavbarTop, NavbarTopOpen },
  computed: {
    currentRouteName() {
      if(this.$route.name == 'Admin.MyPage'){
        return 1;
      }
      return 0;
    }
}
}
</script>