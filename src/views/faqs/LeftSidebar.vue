<template>
  <div class="float-start left-column">
    <ul class="list-unstyled m-0">
      <router-link :to="{name:'Faqs.Category'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        会員登録・変更
      </router-link>
      <router-link :to="{name:'Faqs.Category'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        ログイン
      </router-link>
      <router-link :to="{name:'Faqs.Category'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        予約
      </router-link>
      <router-link :to="{name:'Faqs.Category'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        お支払い
      </router-link>
      <router-link :to="{name:'Faqs.Category'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        ポイント
      </router-link>
      <router-link :to="{name:'Faqs.Category'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        園口コミ
      </router-link>
      <router-link :to="{name:'Faqs.Category'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        子育て相談コーナー
      </router-link>
      <router-link :to="{name:'Faqs.Category'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        子育て情報掲示板
      </router-link>
      <router-link :to="{name:'Faqs.Category'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        トラブル
      </router-link>
      <router-link :to="{name:'terms'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        規約
      </router-link>
      <router-link :to="{name:'ContactUs'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
        <i class="fa fa-angle-right me-1"></i>
        お問い合わせ
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

</style>