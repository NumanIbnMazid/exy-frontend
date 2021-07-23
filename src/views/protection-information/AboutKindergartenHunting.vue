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
            <router-link :to="{name:'Article.Details'}">
              <img src="../../assets/images/ID4329532_m.png" alt="EXY" class="img-fluid w-100">
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

                <div class="single-item" v-for="n in 10" :key="n">
                  <router-link :to="{name:'Article.Details'}" class="d-flex">
                    <img src="../../assets/images/ID4329532_m_lc.png" alt="EXY" class="img-fluid flex-shrink-1 me-3">
                    <div>
                      <div class="d-flex align-items-center mb-2">
                        <span class="text-sm border border-color-e6006e me-3 --color-e6006e px-2">施設</span>
                        <a class="text-sm fw-bold text-decoration-underline">枚方市に新しい保育園ができるらしい</a>
                      </div>
                      <p class="text-sm color-707070">府道144号線沿い中宮北町に「いろは保育園」ができるようです。↓こちら 以前は「じてんしゃ工房 PUMP it」があったところ。地図ではここ↓大阪府枚方市中宮北町2-18が住所です。大阪府枚方市中宮北町2-18が住所です。大阪府枚方市中宮北町2-18が住所です。大阪府…</p>
                    </div>
                  </router-link>
                  <div class="text-end text-muted text-sm">
                    <i class="fa fa-heart"></i>
                    <span class="ms-1">30</span>
                    <span class="ms-3">4月1日</span>
                  </div>
                </div>

              </div>
            </div>

            <div class="p-3 text-center">
              <div class="d-inline-block border border-color-e6006e --color-e6006e text-sm py-2 px-5 cursor-pointer">もっとみる</div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="border mb-3">
            <img src="../../assets/images/life-protection/_2021-05-25_122848.png" alt="EXY" class="img-fluid w-100">
          </div>
          <div class="border mb-3">
            <img src="../../assets/images/life-protection/_2021-05-25_122318.png" alt="EXY" class="img-fluid w-100">
          </div>
          <div class="border">
            <img src="../../assets/images/life-protection/_2021-04-01_170432.png" alt="EXY" class="img-fluid w-100">
          </div>
        </div>
      </div>
    </div>

    <div class="space-100"></div>

  </div>
</template>

<script>
export default {
  name: "AboutKindergartenHunting"
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

.single-item {
  padding: 10px 0 5px;
  border-bottom: 1px dashed #707070;

  &:last-child {
    border-bottom: inherit;
  }
}

.top-left--8 {
  top: -8px;
  left: -8px;
}
</style>