<template>
  <router-link :to="{name:'CharacteristicsDetail'}" class="search-result-item">
    <div class="col-12 col-lg-5">
      <div class="search-result-left">
        <div class="search-result-start">
          <div>
            <span>追加</span>
            <span class="text-xl">☆</span>
          </div>
        </div>
        <div class="search-result-left-content">
          <h4 class="fw-bold">
            <router-link to="/details" class="title">COCORO HOIKUEN 〇〇園</router-link>
          </h4>
          <div class="search-result-left-img">
            <div class="mb-2">
              <img src="../../assets/images/image-79.png" class="d-block w-100" alt="EXY">
            </div>

            <div class="d-flex">
              <div class="me-1">
                <img src="../../assets/images/image-81.png" class="d-block w-100" alt="EXY">
              </div>
              <div class="me-1">
                <img src="../../assets/images/image-80.png" class="d-block w-100" alt="EXY">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-7">
      <div class="search-result-right">
        <div class="dashed-border"></div>
        <div class="py-2">
          <div class="w-85">概 要</div>
          <router-link :to="{name:'search.result'}" class="title d-flex text-sm">【園のPR分・自由入力】ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。</router-link>
        </div>
        <div class="dashed-border"></div>
        <div class="py-2">
          <div class="w-85">口 コ ミ</div>
          <div class="d-flex">
            <strong>5.0</strong>
            <div class="search-heart-count ms-2 me-2">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <span>レビュー <strong>10</strong>件</span>
          </div>
        </div>
        <div class="dashed-border"></div>
        <div class="py-2">
          <div class="w-85">所 在 地</div>
          <div class="d-flex">〒550-0014 大阪府大阪市西区北堀江１丁目２−２７</div>
        </div>
        <div class="dashed-border"></div>
        <div class="py-2">
          <div class="w-85">最 寄 駅</div>
          <div class="d-flex">Osaka Metro「四ツ橋駅」 徒歩10分</div>
        </div>
        <div class="dashed-border"></div>
        <div class="py-2">
          <div class="w-85">開園時間</div>
          <div class="d-flex">
            <span></span>
            <span>平</span>
            <span>7:30-18:30</span>
            <span>休</span>
            <span>7:30-18:30</span>
            <span>休 園 日</span>
            <span>毎週日曜日</span>
          </div>
        </div>
        <div class="dashed-border"></div>
        <div class="py-2">
          <div class="w-85">定 員</div>
          <div class="d-flex">定員 １２名</div>
        </div>
        <div class="dashed-border"></div>
        <div class="py-2">
          <div class="w-85">特 色</div>
          <div class="Kindergarten-features">
            <span>英語保育</span>
            <span>英語保育</span>
            <span>英語保育</span>
            <span>英語保育</span>
            <span>英語保育</span>
          </div>
        </div>
        <div class="dashed-border"></div>
      </div>
    </div>
  </router-link>
</template>

<script>

export default {
  name: "SearchResultItem",
  components: {}
}
</script>

<style scoped>
.title {
  text-decoration: none;
  color: #212529;
}
</style>