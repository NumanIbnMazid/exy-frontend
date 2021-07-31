<template>
  <div class="float-start left-column">
    <ul class="list-unstyled m-0">
      <router-link :to="{name:'Mypage.Profile'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer active">
        <i class="fa fa-angle-right me-1"></i>
        プロフィール
      </router-link>
      <router-link :to="{name:'Mypage.Profile'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        条件設定
      </router-link>
      <router-link :to="{name:'Mypage.Profile'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        お子さま情報
      </router-link>
      <router-link :to="{name:'Mypage.Profile'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        送迎者登録
      </router-link>
      <router-link :to="{name:'Mypage.Profile'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        セキュリティ
      </router-link>
      <router-link :to="{name:'Mypage.Profile'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        セキュリティ
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftSidebar"
}
</script>

<style scoped>
.active {
  background-color: #CB3A82 !important;
  color: #fff;
}
</style>