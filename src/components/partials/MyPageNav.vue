<template>
     <div class="mypage-nav">
      <div class="row w-100">
        <div class="col-md-5 col-left">
          <div class="row">
            <div class="col-md-2">
              <img src="../../assets/images/mypage/daiga-ellaby--0KARP5Jh_8-unspl.png" alt="EXY">
            </div>
            <div class="col-md-10 mt-3 ps-3">
              <div class="row">
                <p class="m-0 text-xl fw-bold">そらくんママ</p>
              </div>
              <div class="row mt-2 ps-1">
                <a href="#">
                  <p class="m-0 text-base fw-bold"><span class="rounded-circle me-3 px-2 pt-2 pb-1 nav-badge text-center">P</span>500</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-right mt-3">
          <div class="row text-base">
            <div class="col-md-2">
              <router-link :to="{name:'Mypage.Home'}">
                <p class="m-0 fw-bold">ホーム</p>
                <p class="m-0 text-sm">home</p>
              </router-link>
            </div>
            <div class="col-md-2 ">
              <router-link :to="{name:'Talk'}">
                <p class="m-0 fw-bold">トーク</p>
                <p class="m-0 ps-2 text-sm">talk</p>
              </router-link>
            </div>
            <div class="col-md-2 active">
              <router-link :to="{name:'Reservation'}">
                <p class="m-0 fw-bold">予約一覧</p>
                <p class="m-0 ps-2 text-sm">reserve</p>
              </router-link>
            </div>
            <div class="col-md-2">
              <a href="#">
                <p class="m-0  fw-bold">お気に入り</p>
                <p class="m-0 ps-2 text-sm">favorite</p>
              </a>
            </div>
            <div class="col-md-2">
              <router-link :to="{name:'Notice'}">
                <p class="m-0 pe-2 fw-bold">お知らせ</p>
                <p class="m-0 text-sm">information</p>
              </router-link>
            </div>
            <div class="col-md-2">
              <a href="#">
                <p class="m-0 ps-1 fw-bold">設定</p>
                <p class="m-0 text-sm">setting</p>
              </a>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "MyPageNav"
}
</script>

<style scoped>

</style>