<template>
  <div class="search-result-item">
    <div class="col-12 col-lg-5">
      <div class="search-result-left">
        <div class="search-result-start">
          <span>気になる</span>
          <i class="fa fa-star"></i>
        </div>
        <div class="search-result-left-content">
          <h4 class="fw-bold">
            <router-link to="/details" class="title">COCORO HOIKUEN 〇〇園</router-link>
          </h4>
          <div class="search-result-left-img">
            <hooper group="group1">
              <slide>
                <div class="mb-2">
                  <img src="https://via.placeholder.com/300x250" class="d-block w-100 rounded" alt="">
                </div>
              </slide>
              <slide>
                <div class="mb-2">
                  <img src="https://via.placeholder.com/300x250" class="d-block w-100 rounded" alt="">
                </div>
              </slide>
            </hooper>

            <hooper group="group1" :itemsToShow="2">
              <slide>
                <div class="me-1">
                  <img src="https://via.placeholder.com/300x250" class="d-block w-100 rounded" alt="">
                </div>
              </slide>
              <slide>
                <div class="me-1">
                  <img src="https://via.placeholder.com/300x250" class="d-block w-100 rounded" alt="">
                </div>
              </slide>

              <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-7">
      <div class="search-result-right">
        <div class="book-items py-2">
          <a href="#" class="btn book-item">体験保育を予約する</a>
          <a href="#" class="btn book-item">体験保育を予約する</a>
          <a href="#" class="btn book-item">体験保育を予約する</a>
        </div>
        <div class="dashed-border"></div>
        <div class="py-2">
          <router-link to="/details" class="title">【園のPR分・⾃由⼊⼒】ダミーテキスト。ダミーテキス ト。ダミーテキスト。ダミーテキスト。ダミーテキス</router-link>
        </div>
        <div class="dashed-border"></div>
        <div class="py-2">〒550-0014 ⼤阪府⼤阪市⻄区北堀江１丁⽬２−２７</div>
        <div class="pb-1">最寄駅：「四ツ橋駅」徒歩10分</div>
        <div class="dashed-border"></div>
        <div class="py-2">営業時間 平 7:30-18:30</div>
        <div class="dashed-border"></div>
        <div class="py-2">定員 １２名</div>
        <div class="dashed-border"></div>
        <div class="py-2">園の特徴</div>
        <div class="pb-2">
          <div class="Kindergarten-features">
            <span>英語保育</span>
            <span>英語保育</span>
            <span>英語保育</span>
            <span>英語保育</span>
            <span>英語保育</span>
          </div>
        </div>
        <div class="dashed-border"></div>
        <div class="py-2 search-analytics">
          <div class="search-review-count">
            <span>口 コ ミ <strong>5.0</strong></span>
          </div>
          <div class="search-heart-count ms-2 me-2">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <span>いいね！ <strong>305</strong>件</span>
        </div>
        <div class="dashed-border"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {Hooper, Pagination as HooperPagination, Slide} from "hooper";

export default {
  name: "SearchResultItem",
  components: {
    Hooper,
    Slide,
    HooperPagination
  }
}
</script>

<style scoped>
.title {
  text-decoration: none;
  color: #212529;
}
</style>