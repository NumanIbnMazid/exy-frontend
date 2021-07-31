<template>
  <div class="mypage-notice">
      <div class="blue-border">
        <MyPageNav />
      </div>
    
    
    <div>
      <div class="py-5 overflow-hidden">
        <left-sidebar />

        <div class="float-start right-column">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyPageNav from "../../../components/partials/MyPageNav.vue";
import LeftSidebar from "./LeftSidebar";
export default {
  name: "Main",
  components: {
    MyPageNav,
    LeftSidebar,
  },
};
</script>

<style scoped>
.left-column {
  width: 230px;
}

.right-column {
  width: calc(100% - 230px);
  padding: 0 15px;
}
.blue-border {
    border:1px solid #CB3A82 ;
}
</style>