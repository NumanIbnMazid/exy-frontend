<template>
  <div class="mypage-notice">
    <div class="mypage-nav">
      <div class="row w-100">
        <div class="col-md-6 col-left">
          <div class="row">
            <div class="col-md-2">
              <img src="../../assets/images/mypage/daiga-ellaby--0KARP5Jh_8-unspl.png" alt="EXY">
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
                <p class="m-0 ps-1 text-sm">home</p>
              </router-link>
            </div>
            <div class="col-md-2 ">
              <router-link :to="{name:'Talk'}">
                <p class="m-0 fw-bold">トーク</p>
                <p class="m-0 ps-2 text-sm">talk</p>
              </router-link>
            </div>
            <div class="col-md-2">
              <router-link :to="{name:'Canceled'}">
                <p class="m-0 fw-bold">予約一覧</p>
                <p class="m-0 ps-2 text-sm">reserve</p>
              </router-link>
            </div>
            <div class="col-md-2">
              <a href="#">
                <p class="m-0 fw-bold">お気に入り</p>
                <p class="m-0 ps-2 text-sm">favorite</p>
              </a>
            </div>
            <div class="col-md-2 active">
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

    <section class="notice-body">
        <div class="row row-1">
            <p class="m-0 text-2xl fw-bold pb-2 ps-1"> <span class="fw-normal span-color">#</span> お知らせ</p>
        </div>
        <a href="#">
            <div class="row row-2 mt-4 ms-2">
                <div class="left-col p-0 m-0">
                    <img src="../../assets/images/mypage/Mask_Group_38.png" alt="EXY" class="w-100">
                </div>
                <div class="right-col py-3 ps-5 pe-3">
                    <p class="m-0 pt-1 pb-3"><span class="span-4">お知らせ</span></p>
                    <p class="text-lg text-decoration-underline">2月16日来園予定で確定している予定がございます。予定日1日前になりましたのでお知らせいた…</p>
                    <p class="p-bottom text-sm m-0">
                        <span class="pull-left">COCOROHOIKUEN 弁天町園</span> <span class="pull-right">11：00</span> <span class="pull-right pe-4">2021年2月12日(金)</span>
                    </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="row row-2 mt-4 ms-2">
                <div class="left-col p-0 m-0">
                    <img src="../../assets/images/mypage/Mask_Group_59.png" alt="EXY" class="w-100">
                </div>
                <div class="right-col py-3 ps-5 pe-3">
                    <p class="m-0 pt-1 pb-3"><span class="span-2">予約確定</span></p>
                    <p class="text-lg text-decoration-underline">【月極保育】ご予約が確定いたしました。田中様 この度は当園にご予約いただき誠にありがと…</p>
                    <p class="p-bottom text-sm m-0">
                        <span class="pull-left">COCOROHOIKUEN 弁天町園</span> <span class="pull-right">11：00</span> <span class="pull-right pe-4">2021年2月12日(金)</span>
                    </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="row row-2 mt-4 ms-2">
                <div class="left-col p-0 m-0">
                    <img src="../../assets/images/mypage/Mask_Group_60.png" alt="EXY" class="w-100">
                </div>
                <div class="right-col py-3 ps-5 pe-3">
                    <p class="m-0 pt-1 pb-3"><span class="span-3">予約リクエスト中</span></p>
                    <p class="text-lg text-decoration-underline">【月極保育】ご予約のリクエストを受付ました。現時点では、ご予約は【まだ確定しておりま…</p>
                    <p class="p-bottom text-sm m-0">
                        <span class="pull-left">COCOROHOIKUEN 弁天町園</span> <span class="pull-right">11：00</span> <span class="pull-right pe-4">2021年2月12日(金)</span>
                    </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="row row-2 mt-4 ms-2">
                <div class="left-col p-0 m-0">
                    <img src="../../assets/images/mypage/Mask_Group_60.png" alt="EXY" class="w-100">
                </div>
                <div class="right-col py-3 ps-5 pe-3">
                    <p class="m-0 pt-1 pb-3"><span class="span-1">お知らせ</span></p>
                    <p class="text-lg text-decoration-underline">【体験保育】ご予約のリクエストが確定しました。「予約確定」を承認してください。</p>
                    <p class="p-bottom text-sm m-0">
                        <span class="pull-left">COCOROHOIKUEN 弁天町園</span> <span class="pull-right">11：00</span> <span class="pull-right pe-4">2021年2月12日(金)</span>
                    </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="row row-2 mt-4 ms-2">
                <div class="left-col p-0 m-0">
                    <img src="../../assets/images/mypage/Mask_Group_60.png" alt="EXY" class="w-100">
                </div>
                <div class="right-col py-3 ps-5 pe-3">
                    <p class="m-0 pt-1 pb-3"><span class="span-1">承認待ち</span></p>
                    <p class="text-lg text-decoration-underline">【体験保育】ご予約日変更のお願いがきています。「予約日の変更」を行ってください。</p>
                    <p class="p-bottom text-sm m-0">
                        <span class="pull-left">COCOROHOIKUEN 弁天町園</span> <span class="pull-right">11：00</span> <span class="pull-right pe-4">2021年2月12日(金)</span>
                    </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="row row-2 mt-4 ms-2">
                <div class="left-col p-0 m-0">
                    <img src="../../assets/images/mypage/Mask_Group_60.png" alt="EXY" class="w-100">
                </div>
                <div class="right-col py-3 ps-5 pe-3">
                    <p class="m-0 pt-1 pb-3"><span class="span-4">お知らせ</span></p>
                    <p class="text-lg text-decoration-underline">【体験保育】予約不可のお詫びに関するメッセージがきています。ご確認をお願いいたします。</p>
                    <p class="p-bottom text-sm m-0">
                        <span class="pull-left">COCOROHOIKUEN 弁天町園</span> <span class="pull-right">11：00</span> <span class="pull-right pe-4">2021年2月12日(金)</span>
                    </p>
                </div>
            </div>
        </a>
        <a href="#">
            <div class="row row-2 mt-4 ms-2">
                <div class="left-col p-0 m-0">
                    <img src="../../assets/images/mypage/Mask_Group_60.png" alt="EXY" class="w-100">
                </div>
                <div class="right-col py-3 ps-5 pe-3">
                    <p class="m-0 pt-1 pb-3"><span class="span-1">承認待ち</span></p>
                    <p class="text-lg text-decoration-underline">【体験保育】保育園から完了報告が届いています。報告の承認を行いお支払いをお願いいたしま…</p>
                    <p class="p-bottom text-sm m-0">
                        <span class="pull-left">COCOROHOIKUEN 弁天町園</span> <span class="pull-right">11：00</span> <span class="pull-right pe-4">2021年2月12日(金)</span>
                    </p>
                </div>
            </div>
        </a>
        <div class="row row-3">
            <p class="text-center">
                <span class="pag px-3 py-2 me-2">1</span>
                <span class="pag px-3 py-2 me-2">2</span>
                <span class="pag px-3 py-2 me-2">3</span>
                <span class="pag px-3 py-2 me-2">4</span>
                <span class="pag px-3 py-2 me-1">5</span>
                <span class="px-3 py-2 me-1">. . .</span>
                <span class="pag px-3 py-2">></span>
            </p>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Notice"
}
</script>

<style scoped>

</style>