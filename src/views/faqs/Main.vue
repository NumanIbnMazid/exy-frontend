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
      <div class="container">
        <nav class="py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">よくある質問</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="py-5 overflow-hidden">
      <div class="container">
        <left-sidebar/>
        <div class="float-start right-column">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSidebar from "./LeftSidebar";

export default {
  name: "Index",
  components: { LeftSidebar }
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