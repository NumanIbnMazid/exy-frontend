<template>
  <div class="garden-reviews-parent">

    <!-- breadcrumb -->
    <Breadcrumb :pageName="pageName"></Breadcrumb>
    <!-- /breadcrumb -->

    <div class="container mb-5 mt-5">
      <!-- page header -->
      <div class="text-center">
        <div class="text-2xl fw-bold">園への新着口コミ</div>
        <div class="mt-4">利用者のみなさまから保育園に寄せられた感想などのレビューをご紹介</div>
      </div>
      <!-- /page header -->

      <!-- page content -->
      <div class="mt-5">
        <span class="color-kigaruni-pink fw-bold text-xl">#</span>
        <span class="ms-2 fw-bold text-xl">新着口コミ一覧</span>
      </div>

      <div class="hr-kigaruni mb-5">
        <hr>
      </div>

      <!-- items -->
      <div class="border border-2 p-4 mt-4" v-for="x in 6" :key="x">
        <div class="row">
          <div class="col-md-3">
            <img src="../assets/images/garden-reviews/WEB06_lt@2x.png" alt="EXY" class="img-fluid">
          </div>
          <div class="col-md-9">
            <div class="bg-light p-2 color-kigaruni-pink">
              <router-link :to="{name:'CharacteristicsDetail'}">COCORO HOIKUEN 弁天町園</router-link>
            </div>
            <div class="row mt-4">
              <div class="col-md-1">
                <img src="../assets/images/garden-reviews/Mask_Group_48_lz@2x.png" alt="EXY"
                     class="img-fluid mt-3">
              </div>
              <div class="col-md-11">
                <div class="fw-bold">
                  <span>2021年2月利用者</span>
                  <span class="ms-4">一時保育ー1歳児プラン</span>
                </div>
                <hr>
                <div>
                  <span class="text-sm fw-bold">総合</span>
                  <small class="ms-4 color-kigaruni-cccc3b">4</small>
                  <span class="fa fa-star color-kigaruni-cccc3b" v-for="i in 4" :key="i"
                        :class="i === 1 ? 'ms-3':'ms-2'"></span>
                </div>
                <div>
                  <span class="text-xs">雰囲気</span>
                  <span class="text-xs ms-4 color-kigaruni-cccc3b me-4">4</span>
                  <span class="me-4 text-xs">|</span>
                  <span class="me-3 text-xs">保育内容</span>
                  <span class="text-xs color-kigaruni-cccc3b me-4">4</span>
                  <span class="me-4 text-xs">|</span>
                  <span class="me-3 text-xs">環境・施設</span>
                  <span class="text-xs color-kigaruni-cccc3b">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4" v-if="x % 2 === 0">
          この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れていますこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
        </div>
      </div>
      <!-- /items -->

      <!-- page banner -->
      <div class="my-5">
        <registration-link />
      </div>
      <!-- /page banner -->
    </div>
  </div>
</template>

<script>
// imports
import Breadcrumb from "../components/partials/Breadcrumb"
import RegistrationLink from "../components/RegistrationLink";

export default {
  name: "GardenReviews",
  data() {
    return {
      pageName: "園への新着口コミ"
    }
  },
  components: {
    RegistrationLink,
    Breadcrumb
  },
  methods: {}
};
</script>