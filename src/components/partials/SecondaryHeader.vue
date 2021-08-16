<template>
  <div class="second-header border border-2">
    <div class="row w-100">
      <div class="col-md-5 col-left">
        <div class="row">
          <div class="col-md-2">
            <img src="../../assets/images/mypage/daiga-ellaby--0KARP5Jh_8-unspl.png" alt="EXY">
          </div>
          <div class="col-md-10 mt-3">
            <div class="row">
              <p class="m-0 text-xl fw-bold">そらくんママ</p>
            </div>
            <div class="row mt-2 ps-1">
              <p class="m-0 text-base fw-bold"><span
                  class="rounded-circle me-3 px-2 pt-2 pb-1 nav-badge text-center">P</span>500</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7 col-right mt-3 ps-3">
        <div class="row text-base">
          <div class="col-md-2" :class="navActive == 'home' ? 'active':''">
            <router-link :to="{name:'Mypage.Home'}">
              <p class="m-0 fw-bold">ホーム</p>
              <p class="m-0 text-sm">home</p>
            </router-link>
          </div>
          <div class="col-md-2" :class="navActive == 'talk' ? 'active':''">
            <router-link :to="{name:'Talk'}">
              <p class="m-0 fw-bold">トーク</p>
              <p class="m-0 ps-2 text-sm">talk</p>
            </router-link>
          </div>
          <div class="col-md-2" :class="navActive == 'reserve' ? 'active':''">
            <router-link :to="{name:'Reservation'}">
              <p class="m-0 fw-bold">予約一覧</p>
              <p class="m-0 ps-2 text-sm">reserve</p>
            </router-link>
          </div>
          <div class="col-md-2" :class="navActive == 'favorite' ? 'active':''">
            <a href="#">
              <p class="m-0 text-center fw-bold">お気に入り</p>
              <p class="m-0 text-center text-sm">favorite</p>
            </a>
          </div>
          <div class="col-md-2" :class="navActive == 'information' ? 'active':''">
            <router-link :to="{name:'Notice'}">
              <p class="m-0 text-center fw-bold">お知らせ</p>
              <p class="m-0 text-center text-sm">information</p>
            </router-link>
          </div>
          <!-- <div class="col-md-2">
            <router-link :to="{name:'Notice'}">
              <p class="m-0 pull-right pe-2 fw-bold">お知らせ</p>
              <p class="m-0 pull-right text-sm">information</p>
            </router-link>
          </div> -->
          <div class="col-md-2" :class="navActive == 'setting' ? 'active':''">
            <a href="#">
              <p class="m-0 pull-right pe-2 fw-bold">設定</p><br>
              <p class="m-0 pull-right text-sm">setting</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SecondaryHeader",
        props: {
            navActive: String
        }
    };
</script>