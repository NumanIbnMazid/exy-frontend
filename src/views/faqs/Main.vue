<template>
  <div>
    <div class="position-relative">
      <img src="../../assets/images/4212041_m.png" class="w-100" style="height: 150px" alt="">
      <div class="position-absolute top-0 w-100 h-100" style="background-color: rgba(203, 58, 130,.2)">
        <div class="container">
          <div class="d-flex align-items-center" style="height: 150px">
            <div class="form-group has-search flex-grow-1">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control text-base py-10" placeholder="キーワードで検索する（例：「確定後 キャンセル」「ポイント利用」）">
            </div>
            <router-link :to="{name:'Faqs.Category'}" tag="button" type="submit" class="ms-2 btn btn-dark border-light text-base py-10">検索する</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="breadcrumb-border">
      <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Top</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">よくある質問</li>
        </ol>
      </nav>
    </div>

    <div class="py-5 overflow-hidden">
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
          <router-link :to="{name:'todo', params:{page:135}}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
            <i class="fa fa-angle-right me-1"></i>
            規約
          </router-link>
          <router-link :to="{name:'ContactUs'}" tag="li" class="bg-light text-base px-3 py-2 mb-1 cursor-pointer">
            <i class="fa fa-angle-right me-1"></i>
            お問い合わせ
          </router-link>
        </ul>
      </div>

      <div class="float-start right-column">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped lang="scss">
.left-column {
  width: 230px;
}

.right-column {
  width: calc(100% - 230px);
  padding: 0 15px;
}

.has-search {
  .form-control {
    padding-left: 2.375rem;
  }

  .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.5rem;
    height: 2.9rem;
    line-height: 2.9rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
  }
}
</style>