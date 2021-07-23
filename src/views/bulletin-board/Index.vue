<template>
  <div>
    <div class="breadcrumb-border">
      <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Top</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">子育て情報掲示板</li>
        </ol>
      </nav>
    </div>

    <div class="container pt-4">
      <div class="row">
        <div class="col-md-9">
          <div class="position-relative">
            <router-link :to="{name:'Bulletin.Details'}">
              <img src="../../assets/images/bulletin-board/ID3b52a332-s.png" alt="EXY" class="img-fluid w-100">
              <div class="overlay">
                <div class="content d-flex align-items-center">
                  <span class="text-white text-sm">施設</span>
                  <a class="text-white text-sm">枚方市に新しい保育園ができるらしい</a>
                </div>
              </div>
            </router-link>
          </div>

          <div class="border rounded-3 mt-4" style="background: #FEFDFC">
            <div class="border-bottom p-2">
              <img src="../../assets/images/svg/title-left.svg" alt="EXY" class="me-1">
              記事一覧
            </div>

            <div class="p-3">
              <div class="bg-white p-2 rounded" style="box-shadow: 0 2px 4px #615f5f">

                <single-item v-for="n in 10" :key="n"/>

              </div>
            </div>

            <div class="p-3 text-center">
              <div class="d-inline-block border border-color-e6006e --color-e6006e text-sm py-2 px-5 cursor-pointer">もっとみる</div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <right-sidebar/>
        </div>
      </div>
    </div>

    <div class="space-100"></div>

  </div>
</template>

<script>
import RightSidebar from "./RightSidebar";
import SingleItem from "./SingleItem";

export default {
  name: "Index",
  components: { SingleItem, RightSidebar }
}
</script>

<style scoped lang="scss">
.overlay {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);

  .content {
    padding: 12px;

    span {
      border: 1px solid #FFFFFF;
      display: inline-block;
      padding: 2px 10px;
      margin-right: 15px;
    }

    a {
      text-decoration: underline;
    }
  }
}

.top-left--8 {
  top: -8px;
  left: -8px;
}
</style>