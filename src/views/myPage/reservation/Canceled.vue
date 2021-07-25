<template>
  <div class="mypage-reservation">
    <div class="mypage-nav">
      <div class="row w-100">
        <div class="col-md-6 col-left">
          <div class="row">
            <div class="col-md-2">
              <img src="../../../assets/images/mypage/daiga-ellaby--0KARP5Jh_8-unspl.png" alt="EXY">
            </div>
            <div class="col-md-10 mt-3">
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
        <div class="col-md-6 col-right mt-3">
          <div class="row text-base">
            <div class="col-md-2">
              <router-link to="/my-page/home">
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
              <router-link :to="{name:'Canceled'}">
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
    </div>
    <section class="reservation-canceled">
      <div class="row w-100 mt-5 me-0 ms-0">
        <div class="col-md-3 right-col">
          <div class="row row-1">
            <p class="text-lg ps-5"><span class="top-span">|</span> 予約一覧</p>
          </div>
          <router-link :to="{name:'todo', params:{page:59}}">
            <div class="row row-2">
              <div class="col-md-12">
                <div class="row inner-1">
                  <div class="col-md-4 left-1">
                    <p class="text-sm text-center m-0">仮予約中</p>
                  </div>
                  <div class="col-md-8 py-1">
                    <p class="text-xs m-0">登園日時：2021年2月16日</p>
                    <p class="text-xs m-0 pt-1">9:00〜16:00</p>
                  </div>
                </div>
                <div class="row inner-2 p-2">
                  <p class="m-0 text-base text-center fw-bold">COCOROHOIKUEN 弁天町園</p>
                  <p class="m-0 pt-2 text-xs text-center">予約プラン：月極保育 ー 時短プラン</p>
                </div>
              </div>
            </div>
          </router-link>
          <router-link :to="{name:'todo', params:{page:58}}">
            <div class="row row-2 mt-2">
              <div class="col-md-12 ">
                <div class="row inner-1">
                  <div class="col-md-4 left-2">
                    <p class="text-sm text-center m-0">予約確定</p>
                  </div>
                  <div class="col-md-8 py-1">
                    <p class="text-xs m-0">登園日時：2021年2月16日</p>
                    <p class="text-xs m-0 pt-1">9:00〜16:00</p>
                  </div>
                </div>
                <div class="row inner-2 p-2">
                  <p class="m-0 text-base text-center fw-bold">COCOROHOIKUEN 弁天町園</p>
                  <p class="m-0 pt-2 text-xs text-center">予約プラン：月極保育 ー 時短プラン</p>
                </div>
              </div>
            </div>
          </router-link>
          <router-link :to="{name:'todo', params:{page:57}}">
            <div class="row row-2 mt-2">
              <div class="col-md-12 ">
                <div class="row inner-1">
                  <div class="col-md-4 left-3">
                    <p class="text-sm text-center m-0">登園済み</p>
                  </div>
                  <div class="col-md-8 py-1">
                    <p class="text-xs m-0">登園日時：2021年2月16日</p>
                    <p class="text-xs m-0 pt-1">9:00〜16:00</p>
                  </div>
                </div>
                <div class="row inner-2 p-2">
                  <p class="m-0 text-base text-center fw-bold">COCOROHOIKUEN 弁天町園</p>
                  <p class="m-0 pt-2 text-xs text-center">予約プラン：月極保育 ー 時短プラン</p>
                </div>
              </div>
            </div>
          </router-link>
          <router-link :to="{name:'todo', params:{page:57}}">
            <div class="row row-2 mt-2">
              <div class="col-md-12 ">
                <div class="row inner-1">
                  <div class="col-md-4 left-4">
                    <p class="text-sm text-center m-0">キャンセル</p>
                  </div>
                  <div class="col-md-8 py-1">
                    <p class="text-xs m-0">登園日時：2021年2月16日</p>
                    <p class="text-xs m-0 pt-1">9:00〜16:00</p>
                  </div>
                </div>
                <div class="row inner-2 p-2">
                  <p class="m-0 text-base text-center fw-bold">COCOROHOIKUEN 弁天町園</p>
                  <p class="m-0 pt-2 text-xs text-center">予約プラン：月極保育 ー 時短プラン</p>
                </div>
              </div>
            </div>
          </router-link>
          <router-link :to="{name:'todo', params:{page:57}}">
            <div class="row row-2 mt-2">
              <div class="col-md-12 ">
                <div class="row inner-1">
                  <div class="col-md-4 left-5">
                    <p class="text-sm text-center m-0">予約不可</p>
                  </div>
                  <div class="col-md-8 py-1">
                    <p class="text-xs m-0">登園日時：2021年2月16日</p>
                    <p class="text-xs m-0 pt-1">9:00〜16:00</p>
                  </div>
                </div>
                <div class="row inner-2 p-2">
                  <p class="m-0 text-base text-center fw-bold">COCOROHOIKUEN 弁天町園</p>
                  <p class="m-0 pt-2 text-xs text-center">予約プラン：体験保育 ー １歳児以上</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-9"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Canceled"
}
</script>

<style scoped>

</style>