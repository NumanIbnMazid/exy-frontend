<template>
  <div class="usage-flow">
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">検索</li>
            <li class="breadcrumb-item active" aria-current="page">検索結果</li>
          </ol>
        </nav>
      </div>
    </div>

    <section class="position-relative charecteristics">
      <div class="container">
        <p class="pt-2">キャンペーン中！</p>
      </div>
      <img src="../../assets/images/guardian/WEB07.png" alt="EXY" class="img-fluid w-100">
      <div class="row w-100 m-0">
        <div class="col-md-6 box-border">
          <div class="footer-icon">
            <ul class="d-flex align-items-center justify-content-center mb-0 mt-0">
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 text-center box-border pt-1">
          <a href="#" class="text-sm">この園へ問い合わせる</a>
        </div>
      </div>
    </section>

    <!-- details-section start -->
    <section class="charecteristics-details">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <h3><img src="../../assets/images/svg/heart-red.svg" alt="EXY"> COCORO HOIKUEN 弁天町園</h3>
            <p class="small">こころほいくえんべんてんちょうえん</p>
            <p style="margin-top:20px">「えいごとにほんごであそぼう」をテーマに、楽しく自然に英語を身につけることを目標にした保育園</p>
          </div>
          <div class="col-md-2">
            <img src="../../assets/images/guardian/Image_53.png" alt="EXY" class="img-fluid  pull-right w-50">
          </div>
        </div>
      </div>

      <div class="details-tab">
        <div class="container tabs">
          <a @click="activeTab=1, subTab=1" :class="[ activeTab === 1 ? 'active' : '' ]"> 園の特色</a>
          <a @click="activeTab=2" :class="[ activeTab === 2 ? 'active' : '' ]"> 保育内容</a>
          <a @click="activeTab=3, subTab=1" :class="[ activeTab === 3 ? 'active' : '' ]"> 料金プラン</a>
          <a @click="activeTab=4, subTab=1" :class="[ activeTab === 4 ? 'active' : '' ]"> 口コミ</a>
          <a @click="activeTab=5, subTab=1" :class="[ activeTab === 5 ? 'active' : '' ]"> 概要</a>
        </div>
      </div>
      <div v-if="activeTab===1" class="features">
        <div class="button-div">
          <div class="container">
            <div class="row">
              <div class="row-button">
                <p class="btn-white text-center">#アレルギー対応</p>
              </div>
              <div class="row-button">
                <p class="btn-white text-center">#習い事</p>
              </div>
              <div class="row-button">
                <p class="btn-white text-center">#手ぶら登園</p>
              </div>
              <div class="row-button">
                <p class="btn-white text-center">#こだわり給食</p>
              </div>
              <div class="row-button">
                <p class="btn-white text-center">#送迎サービス</p>
              </div>
            </div>
            <div class="row">
              <div class="row-button">
                <p class="btn-white text-center">#英語教育</p>
              </div>
              <div class="row-button">
                <p class="btn-white text-center">#幼児教育</p>
              </div>
              <div class="row-button">
                <p class="btn-white text-center">#就学前教育</p>
              </div>
              <div class="row-button">
                <p class="btn-white text-center">#運動教育</p>
              </div>
              <div class="row-button">
                <p class="btn-white text-center">#体験保育</p>
              </div>
            </div>
          </div>
        </div>
        <div class="allergy-support">
          <div class="row w-100 m-0">
            <div class="col-md-10 allergy-left">
              <div class="row">
                <div class="col-md-6">
                  <img src="../../assets/images/guardian/Image_16.png" alt="EXY" class="img-fluid w-100">
                </div>
                <div class="col-md-6 allergy-desc">
                  <div class="row">
                    <p class="btn-allergy text-center">#アレルギー対応</p>
                  </div>
                  <div class="row mt-3">
                    <h3 class="ps-0">各お子さまのアレルギーに対応した給食を提供します</h3>
                    <p class="ps-0 pt-2">【園側自由記入部分】。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2 pe-0">
              <router-link :to="{name:'ProceedToReservation'}" class="allergy-right pull-right text-center">予約へ進む</router-link>
            </div>
          </div>
        </div>
        <div class="child-care">
          <div class="container">
            <div class="row">
              <div class="col-md-6 child-left">
                <h4 class="child-head">保育理念</h4>
                <p>「心に愛を <br> 人からたくさんの愛情を注がれた子は、将来また必ず人へ <br> あまりある愛情を注ぐ”愛”溢れる人を目指し</p>
                <br><br>
                <h4 class="child-head">保育方針</h4>
                <p>小規模保育の良さを生かし、家庭的であたたかな雰囲気を大切にし、<br> ひとりひとりにたっぷりの愛情を注ぐことで、また周りの人々へ <br>愛情を注ぐ連鎖を築く</p>
                <br><br>
                <h4 class="child-head"> 保育目標</h4>
                <p>1．自分が一番に愛されていることを伝える <br> 2．認めること、褒めることで子どもたちの自信を伸ばす <br>3．友達の輪の中で感情のコントロールの基礎を学ぶ</p>
              </div>
              <div class="col-md-6 child-right">
                <div class="row child-row" style="border-top: 1px solid #cb3a82;">
                  <div class="col-md-2 row-left"><p>住所</p></div>
                  <div class="col-md-10">
                    <p> 大阪府大阪市西区北堀江1-19-3</p>
                    <p> サンライズビル１階・２階 <span class="btn-map">map</span></p>
                  </div>
                </div>
                <div class="row child-row">
                  <div class="col-md-2 row-left"><p>開園時間</p></div>
                  <div class="col-md-10">
                    <p>7：30〜18：30（内、18：00〜18：30延長保育）</p>
                  </div>
                </div>
                <div class="row child-row">
                  <div class="col-md-2 row-left"><p>開園日</p></div>
                  <div class="col-md-10">
                    <p>月曜日〜土曜日（日曜・祝日 休み）</p>
                  </div>
                </div>
                <div class="row child-row">
                  <div class="col-md-2 row-left"><p>定員</p></div>
                  <div class="col-md-10">
                    <p>12名</p>
                  </div>
                </div>
                <div class="row child-row">
                  <div class="col-md-2 row-left"><p>預かり年齢</p></div>
                  <div class="col-md-10">
                    <p>生後2ヶ月〜5歳児</p>
                  </div>
                </div>
                <div class="row child-row">
                  <div class="col-md-2 row-left">
                    <p>慣らし保育</p>
                    <p style="font-weight:normal"><u> 慣らし保育 </u><br> <u> とは？＞</u></p>
                  </div>
                  <div class="col-md-10">
                    <p>目安期間 ：１週間〜１ヶ月程度</p>
                    <p>初日の保育時間：8：30〜10：30（2、3時間）</p>
                    <p class="small ps-0">※あくまで目安ですので、お子さまの体調や保護者さまのご都合を考慮し 調整いたします。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container nursery-school">
          <div class="row text-center">
            <p><img src="../../assets/images/svg/title-left-black.svg" alt="EXY" style="padding-right:10px; vertical-align: unset;"> 保育園のココが知りたい <img src="../../assets/images/svg/title-right-black.svg" alt="EXY" style="padding-left:10px; vertical-align: unset;"> <br><span style="color:#cb3a82">#</span> <b> 5 POINT </b></p>
          </div>
          <div class="row school-step mt-4">
            <div class="col-md-2 step-item">
              <p>リフレッシュ利用</p>
            </div>
            <div class="col-md-10">
              <div class="pull-left step-left">
                <p style="font-weight: bold;">OK</p>
              </div>
              <ul class="progressbar">
                <li class="active"><img src="../../assets/images/guardian/Group_1736.png" alt="EXY"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div class="pull-right step-right">
                <p style="font-weight: bold;">NG</p>
              </div>
            </div>
          </div>
          <div class="row school-step mt-5">
            <div class="col-md-2 step-item">
              <p>保護者参加行事</p>
            </div>
            <div class="col-md-10">
              <div class="pull-left step-left">
                <p>あり</p>
              </div>
              <ul class="progressbar">
                <li></li>
                <li></li>
                <li></li>
                <li><img src="../../assets/images/guardian/Group_1736.png" alt="EXY"></li>
                <li></li>
              </ul>
              <div class="pull-right step-right">
                <p>なし</p>
              </div>
            </div>
          </div>
          <div class="row school-step mt-5">
            <div class="col-md-2 step-item">
              <p>園外遊び</p>
            </div>
            <div class="col-md-10">
              <div class="pull-left step-left">
                <p>あり</p>
              </div>
              <ul class="progressbar">
                <li></li>
                <li><img src="../../assets/images/guardian/Group_1736.png" alt="EXY"></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div class="pull-right step-right">
                <p>なし</p>
              </div>
            </div>
          </div>
          <div class="row school-step mt-5">
            <div class="col-md-2 step-item">
              <p>日々の持ち物</p>
            </div>
            <div class="col-md-10">
              <div class="pull-left step-left">
                <p>あり</p>
              </div>
              <ul class="progressbar">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li><img src="../../assets/images/guardian/Group_1736.png" alt="EXY"></li>
              </ul>
              <div class="pull-right step-right">
                <p>なし</p>
              </div>
            </div>
          </div>
          <div class="row school-step mt-5">
            <div class="col-md-2 step-item">
              <p>保護者会</p>
            </div>
            <div class="col-md-10">
              <div class="pull-left step-left">
                <p>あり</p>
              </div>
              <ul class="progressbar">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li><img src="../../assets/images/guardian/Group_1736.png" alt="EXY"></li>
              </ul>
              <div class="pull-right step-right">
                <p>なし</p>
              </div>
            </div>
          </div>
        </div>
        <div class="nursery-availability">
          <div class="container">
            <div class="row">
              <p class="text-center fw-bold"><span style="color:#cb3a82">#</span> 保育園の空き状況</p>
            </div>
            <div class="row mt-3">
              <p class="text-center fw-bold fs-3">
                Draft Calender Here
              </p>
            </div>
          </div>
        </div>
        <div class="review">
          <div class="container">
            <div class="row">
              <p class="text-center"><img src="../../assets/images/svg/title-left-black.svg" alt="EXY" style="padding-right:10px; vertical-align: unset;"> ほんとのとこどうなの？ <img src="../../assets/images/svg/title-right-black.svg" alt="EXY" style="padding-left:10px; vertical-align: unset;"> <br><span class="fs-4" style="color:#cb3a82">#</span> <span class="fs-4 fw-bold"> みんなの口コミ </span></p>
            </div>
            <div class="row mt-2 top-bar">
              <div class="col-md-6">
                <p class="m-0">
                  <span class="fs-4 fw-bold">総合</span>
                  <span class="fs-4 fw-bold rv-point">4.0</span>
                  <span class="fs-2 fa fa-star checked"></span>
                  <span class="fs-2 fa fa-star checked"></span>
                  <span class="fs-2 fa fa-star checked"></span>
                  <span class="fs-2 fa fa-star checked"></span>
                  <span class="fs-2 fa fa-star"></span>
                </p>
              </div>
              <div class="col-md-6 pt-2">
                <div class="row bar-left">
                  <div class="col-md-4">
                    <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4.0</span></p>
                  </div>
                  <div class="col-md-4 left-border">
                    <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4.0</span></p>
                  </div>
                  <div class="col-md-4 left-border">
                    <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4.0</span></p>
                  </div>
                </div>
              </div>
            </div>
            <a  @click="activeTab=4" href="#">
              <div class="row mt-3 row-1">
                <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_26.png" alt="EXY"></div>
                <div class="col-md-10">
                  <div class="row me-1 row-11">
                    <p class="fw-bold pt-2 m-0">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-6">
                      <p class="m-0">
                        <span class="">総合</span>
                        <span class="fw-bold rv-point">4</span>
                        <span class=" fa fa-star checked"></span>
                        <span class=" fa fa-star checked"></span>
                        <span class=" fa fa-star checked"></span>
                        <span class=" fa fa-star checked"></span>
                        <span class=" fa fa-star"></span>
                      </p>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-4">
                          <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                        </div>
                        <div class="col-md-4 left-border">
                          <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                        </div>
                        <div class="col-md-4 left-border">
                          <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row row-2">
                <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れていますこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
              </div>
              <div class="row mt-3 row-1">
                <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_33.png" alt="EXY"></div>
                <div class="col-md-10">
                  <div class="row me-1 row-11">
                    <p class="fw-bold pt-2 m-0">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-6">
                      <p>
                        <span class="">総合</span>
                        <span class="fw-bold rv-point">4</span>
                        <span class=" fa fa-star checked"></span>
                        <span class=" fa fa-star checked"></span>
                        <span class=" fa fa-star checked"></span>
                        <span class=" fa fa-star checked"></span>
                        <span class=" fa fa-star"></span>
                      </p>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-4">
                          <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                        </div>
                        <div class="col-md-4 left-border">
                          <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                        </div>
                        <div class="col-md-4 left-border">
                          <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row row-2">
                <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れていますこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
              </div>
              <div class="row mt-3 row-1">
                <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_34.png" alt="EXY"></div>
                <div class="col-md-10">
                  <div class="row me-1 row-11">
                    <p class="fw-bold pt-2 m-0">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-6">
                      <p>
                        <span class="">総合</span>
                        <span class="fw-bold rv-point">4</span>
                        <span class=" fa fa-star checked"></span>
                        <span class=" fa fa-star checked"></span>
                        <span class=" fa fa-star checked"></span>
                        <span class=" fa fa-star checked"></span>
                        <span class=" fa fa-star"></span>
                      </p>
                    </div>
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-4">
                          <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                        </div>
                        <div class="col-md-4 left-border">
                          <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                        </div>
                        <div class="col-md-4 left-border">
                          <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="row mt-4 row-3">
              <div class="col-md-2">
                <p class="fw-bold">検索条件</p>
              </div>
              <div class="col-md-10">
                <p>アレルギー対応<span class="divider">/</span>習い事<span class="divider">/</span>手ぶら登園<span class="divider">/</span>こだわり給食<span class="divider">/</span>送迎サービス<span class="divider">/</span>英語教育<span class="divider">/</span>幼児教<span class="divider">/</span>就学前教育<span class="divider">/</span>運動教育</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeTab===2" class="childcare">
        <div v-if="subTab===1">
          <div class="philosophy">
            <div class="row w-100 m-0">
              <div class="col-md-10 mt-5">
                <div class="row">
                  <div class="col-md-4 text-center">
                    <img src="../../assets/images/guardian/Mask_Group_50.png" alt="EXY" class="img-fluid w-100">
                  </div>
                  <div class="col-md-8 ps-5 pt-4">
                    <h4 style="color:#CB3A82">保育理念</h4>
                    <p>「心に愛を」<br> 人からたくさんの愛情を注がれた子は、将来また必ず人へ <br> あまりある愛情を注ぐ”愛”溢れる人を目指し</p>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-md-4 text-center">
                    <img src="../../assets/images/guardian/Mask_Group_51.png" alt="EXY" class="img-fluid w-100">
                  </div>
                  <div class="col-md-8 ps-5 pt-4">
                    <h4 style="color:#CB3A82">保育方針</h4>
                    <p>小規模保育の良さを生かし、家庭的であたたかな雰囲気を大切にし、<br> ひとりひとりにたっぷりの愛情を注ぐことで、また周りの人々へ <br> 愛情を注ぐ連鎖を築く</p>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-md-4 text-center">
                    <img src="../../assets/images/guardian/Mask_Group_52.png" alt="EXY" class="img-fluid w-100">
                  </div>
                  <div class="col-md-8 ps-5 pt-4">
                    <h4 style="color:#CB3A82">保育目標</h4>
                    <p>1．自分が一番に愛されていることを伝える<br> 2．認めること、褒めることで子どもたちの自信を伸ばす<br>3．友達の輪の中で感情のコントロールの基礎を学ぶ</p>
                  </div>
                </div>
              </div>
              <div class="col-md-2 pe-0">
                <router-link :to="{name:'ProceedToReservation'}" class="philosophy-right pull-right text-center">予約へ進む</router-link>
              </div>
            </div>
          </div>
          <div class="lesson">
            <div class="row">
              <div class="col md-3">
                <a  @click="subTab=2" href="#">
                  <img src="../../assets/images/guardian/Mask_Group_53.png" alt="EXY" class="img-fluid " style="width: 100%">
                  <p class="text-center mt-2"><span style="color:#CB3A82">#</span> ヨガレッスンの様子</p>
                </a>
              </div>
              <div class="col md-3">
                <a  @click="subTab=2" href="#">
                  <img src="../../assets/images/guardian/Mask_Group_54.png" alt="EXY" class="img-fluid " style="width: 100%">
                  <p class="text-center mt-2"><span style="color:#CB3A82">#</span> 英語レッスンの様子</p>
                </a>
              </div>
              <div class="col md-3">
                <a  @click="subTab=2" href="#">
                  <img src="../../assets/images/guardian/Mask_Group_55.png" alt="EXY" class="img-fluid " style="width: 100%">
                  <p class="text-center mt-2"><span style="color:#CB3A82">#</span> 季節の行事</p>
                </a>
              </div>
              <div class="col md-3">
                <a  @click="subTab=2" href="#">
                  <img src="../../assets/images/guardian/Mask_Group_56.png" alt="EXY" class="img-fluid " style="width: 100%">
                  <p class="text-center mt-2"><span style="color:#CB3A82">#</span> 心に愛を</p>
                </a>
              </div>
            </div>
          </div>
          <div class="annual-events">
            <div class="container">
              <div class="row">
                <h4 class="text-center"><span style="color:#CB3A82">#</span> 年間行事</h4>
              </div>
              <div class="row mt-3">
                <div class="col-md-3 text-center">
                  <img src="../../assets/images/svg/annual_event1.svg" alt="EXY" style="vertical-align: unset;">
                  <img src="../../assets/images/svg/annual_event2.svg" alt="EXY" style="vertical-align: unset;">
                </div>
                <div class="col-md-3 text-center">
                  <img src="../../assets/images/svg/annual_event3.svg" alt="EXY" style="vertical-align: unset;">
                </div>
                <div class="col-md-3 text-center">
                  <img src="../../assets/images/svg/annual_event4.svg" alt="EXY" style="vertical-align: unset;">
                  <img src="../../assets/images/svg/annual_event5.svg" alt="EXY" style="vertical-align: unset;">
                </div>
                <div class="col-md-3 text-center">
                  <img src="../../assets/images/svg/annual_event6.svg" alt="EXY" style="vertical-align: unset;">
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <div class="row event-col divider">
                    <div class="col-md-2 text-center">
                      <p class="fs-1 mb-0 fw-bold col-color-1">4</p>
                      <span>Apr</span>
                    </div>
                    <div class="col-md-10">
                      <p>・入園式 <br>・保護者面談</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row event-col divider">
                    <div class="col-md-2 text-center">
                      <p class="fs-1 mb-0 fw-bold col-color-2">7</p>
                      <span>Jul</span>
                    </div>
                    <div class="col-md-10">
                      <p>・七夕まつり</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row event-col divider">
                    <div class="col-md-4 text-center">
                      <p class="fs-1 mb-0 fw-bold col-color-3">10</p>
                      <span>Oct</span>
                    </div>
                    <div class="col-md-8">
                      <p>・ハロウィン</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row event-col divider">
                    <div class="col-md-2 text-center">
                      <p class="fs-1 mb-0 fw-bold col-color-4">1</p>
                      <span>Jan</span>
                    </div>
                    <div class="col-md-10">
                      <p>・お正月遊び</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <div class="row event-col divider">
                    <div class="col-md-2 text-center">
                      <p class="fs-1 mb-0 fw-bold col-color-1">5</p>
                      <span>May</span>
                    </div>
                    <div class="col-md-10">
                      <p>・子どもの日会 <br>・保護者面談 </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row event-col divider">
                    <div class="col-md-2 text-center">
                      <p class="fs-1 mb-0 fw-bold col-color-2">8</p>
                      <span>Aug</span>
                    </div>
                    <div class="col-md-10">
                      <p>・夏まつりごっこ</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row event-col divider">
                    <div class="col-md-4 text-center">
                      <p class="fs-1 mb-0 fw-bold col-color-3">11</p>
                      <span>Nov</span>
                    </div>
                    <div class="col-md-8">
                      <p>・秋の遠足</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row event-col divider">
                    <div class="col-md-2 text-center">
                      <p class="fs-1 fw-bold col-color-4 mb-0">2</p>
                      <span>Feb</span>
                    </div>
                    <div class="col-md-10">
                      <p>・英語発表会 <br>・豆まき</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <div class="row event-col">
                    <div class="col-md-2 text-center">
                      <p class="fs-1 mb-0 fw-bold col-color-1">6</p>
                      <span>Jun</span>
                    </div>
                    <div class="col-md-10">
                      <p>・虫歯予防月間 </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row event-col">
                    <div class="col-md-2 text-center">
                      <p class="fs-1 mb-0 fw-bold col-color-2">9</p>
                      <span>Sep</span>
                    </div>
                    <div class="col-md-10">
                      <p>・お月見会</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row event-col">
                    <div class="col-md-4 text-center">
                      <p class="fs-1 mb-0 fw-bold col-color-3">12</p>
                      <span>Dec</span>
                    </div>
                    <div class="col-md-8">
                      <p>・クリスマス会</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row event-col">
                    <div class="col-md-2 text-center">
                      <p class="fs-1 fw-bold col-color-4 mb-0">3</p>
                      <span>Mar</span>
                    </div>
                    <div class="col-md-10">
                      <p>・ひなまつり <br>・卒園式</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="annual-curriculum">
            <div class="container">
              <div class="row text-center">
                <h4><span style="color:#CB3A82">#</span>年間カリキュラム</h4>
              </div>
              <div class="row mt-4">
                <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  保育の内容に関する全体的な計画 を見る
                </button>
              </div>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show collapse-body-1" aria-labelledby="panelsStayOpen-headingOne">
                <div class="row mt-2 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">保育所保育に関する <br> 基本原則/役割目標</p>
                  </div>
                  <div class="col-md-10 pt-2">
                    <p>
                      ・児童福祉法に基づき、保育を必要とする。子どもの保育を行い、健全な心身の発達を図る。<br>
                      ・保育に関する専門性を有する職員が、養護及び教育を一体的に行う。<br>
                      ・保護者支援及び地域の子育て支援等を行う。
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">保育の方法/環境</p>
                  </div>
                  <div class="col-md-10 pt-2">
                    <p>
                      ・健康、安全で情緒の安定した生活ができる。<br>
                      ・環境を整え、一人一人の発達過程に応じ、乳幼児期にふさわしい体験が得られるように、生活や遊びを通して総合的に保育する。<br>
                      ・保護者を理解し適切に援助する。
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">保育所の社会的責任</p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・人権に配慮する。<br>
                      ・子どもの人格を尊重し、保育を行う。<br>
                      ・地域社会との交流や連携を図り、保育の内容を適切に説明する。<br>
                      ・個人情報を適切に取り扱う。<br>
                      ・保護者の苦情解決を図るよう努める。
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">養護に関する基本的事項</p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・養護とは、子どもの生命の保持及び情緒の安定を図るために保育士が行う援助や関わりである。<br>
                      ・保育所における保育は、養護及び教育を一体的に行う。<br>
                      ・養護に関するねらい及び内容を踏まえた保育を展開する。
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">保育の計画と評価</p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・保育の目標を達成するため、方針や目標に基づき、子どもの発達過程を踏まえた保育の内容が組織的・計画的に構成され総合的に展開されるよう、全体的な計画を作成する。<br>
                      ・これに基づき指導計画、保健計画、食育計画等を作成する。<br>
                      ・保育士等の自己評価、保育所の自己評価を行い、公表し、保育内容の改善を図る。
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">幼児教育を行う施設として共有すべき事項</p>
                  </div>
                  <div class="col-md-10 pt-2">
                    <p class="">
                      ・生涯にわたる生きる力の基礎を培うため、保育の目標を踏まえ、資質・能力の3本の柱を一体的に育むよう努める。<br>
                      ・「幼児期の終わりまでに育ってほしい姿」は、ねらい及び内容に基づく保育活動全体を通して資質・能力が育まれている子どもの小学校就学時の具体的な姿であり、保育士が指導を行う際に考慮する。<br>
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">小学校との連携 <br> <span class="text-center">(接続)</span></p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・災害時の広域避難場所として、避難訓練時に訪問をし実際に災害が起こった場合の待機場所等の確認を行う。<br>
                      ・行事へ積極的に参加する。<br>
                    </p>
                  </div>
                </div>
                <div class="row mt-5">
                  <button type="button" class="btn-menu dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> ０歳児</button>
                  <button type="button" class="btn-menu dropdown-toggle active p-0" data-bs-toggle="dropdown" aria-expanded="false"> １歳児 <br> <span class="ps-5">（満１歳児より）</span></button>
                  <button type="button" class="btn-menu dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> ２歳児</button>
                  <button type="button" class="btn-menu dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> ３歳児</button>
                  <button type="button" class="btn-menu dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> ４歳児</button>
                  <button type="button" class="btn-menu dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> ５歳児</button>
                </div>
                <div class="row row-2">
                  <p class="m-0">子どもの保育目標</p>
                </div>
                <div class="row row-3">
                  <p class="m-0">
                    ・保育者との信頼関係の中で自我や自尊心を養う。<br>
                    ・模索活動を通して十分に聞く、見る、触れるなどの経験をし、人や物に関心を広げる。<br>
                    ・英語の歌や手遊びで言葉への好奇心を伸ばしていく
                  </p>
                </div>
                <div class="row mt-1 row-2">
                  <p class="m-0">養護（保育士が行う事項）</p>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left ps-4 pt-2">
                    <p class="m-0">生命の保持 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・生活リズムを大切にしながら食事、排泄など自分でしようとする気持ちを育てる。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left ps-4 pt-2">
                    <p class="m-0">情緒の安定 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・スキンシップにより、保育者との関わりの心地よさや安心感を得るように接する。
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-2">
                  <p class="m-0">教育（園児が環境に関わって経験する事項）</p>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">人間関係 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・身の回りの簡単なことを自分でしようとする気持ちが芽生える。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">健康 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・保育者や友達に関心を持ち一緒に遊ぶ。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">環境 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・好きな玩具や道具に興味を持って関わり、様々な遊びを楽しむ。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">言葉 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・話す楽しさを知る。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">表現 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・模倣遊びを楽しむ。<br>
                      ・色々な素材の感触を知る。
                    </p>
                  </div>
                </div>
                <div class="row mt-5 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">健康支援 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・健康及び発育発達状態の定期的、継続的な把握。<br>
                      ・年2回の嘱託医による健康診断。（内科検診、歯科健診）<br>
                      ・登園時及び保育中の状態観察、また異常が認められた時の適切な対応。<br>
                      ・年間保健指導計画。（年齢別）<br>
                      ・年1回の職員健康診断及び毎月の検便。（調理員、授乳担当者）
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">食育の推進 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ５領域との相関性を構築する。<br>
                      <i class="fa fa-circle"></i>栄養バランスを考えた自園給食の提供。<br>
                      <i class="fa fa-circle"></i>食育活動の実施。<br>
                      <i class="fa fa-circle"></i>全園児へ炊き立て米飯の提供。<br>
                      <i class="fa fa-circle"></i>行事食の提供。<br>
                      <i class="fa fa-circle"></i>給食試食会の実施。
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">環境及び衛生管理並びに安全管理 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・子ども、及び職員の清潔保持。<br>
                      ・感染症予防マニュアルの作成と実施及び保護者との情報共有。<br>
                      ・インフルエンザ対策。<br>
                      ・施設内の設備、用具等の清掃及び消毒等、安全管理及び自主点検。<br>
                      ・業者による布団の丸洗い。
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">災害への備え </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      <i class="fa fa-circle"></i>避難訓練（火災、地震、不審者対応）の実施。（毎月）<br>
                      <i class="fa fa-circle"></i>消防署視察。<br>
                      <i class="fa fa-circle"></i>消火訓練の実施。<br>
                      <i class="fa fa-circle"></i>被災時における対応と備蓄。
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">子育て </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・教育及び児童福祉としての保育並びに子育て支援の有機的な連携が図られ、子どもの成長に気付き、子育ての喜びが感じられるよう子育て支援に努める。
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">職員の資質向上 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・園内研修による各種マニュアルの共通理解を図る。<br>
                      ・保育所保育指針対応の園外研修へ参加する。<br>
                      ・質の高い保育を展開するため、一人ひとりの職員についての資質向上及び職員全体の専門性を図るように努める。<br>
                      ・保育者に求められる専門性を理解し、保育の質の向上に向けた組織的な取り組みを行う。
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">情報公開等 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ●人権尊重 ●虐待確認保護 ●個人情報保護 ●苦情処理解決対応及び第三者委員、運営協議会設置<br>
                      ●適正な園運営のための会計事務所による外部監査 ●ホームページの開設 ●給食試食会
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">特色ある教育と保育 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ●法人主体の研修 ●英語レッスン（週2回。月1回は外国人講師による ●ヨガレッスン（週1回専門講師による）<br>
                      ●絵本、音楽、身体を通した表現活動
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">地域交流 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・人的物的面の確保、保育者の確保により、3歳児未満の乳児保育の受け入れを推進し、対応する。<br>
                      ・町内会などの行事にできるだけ参加する。（地域貢献）
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">研修計画 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ●法人研修の継続 ●保育指針対応の園外・園内研修の継続
                    </p>
                  </div>
                </div>
                <div class="row mt-1 row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">研修計画 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ●法人施設による適切な施設運営管理の評価 ●保育所の評価（全体の反省による全体計画等の反映）<br>
                      ●保育士等の評価（自己評価と子どもの評価の確立 ●自己チェックリストの実施と危機管理マニュアルの作成、習得
                    </p>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                  年齢ごとの年間指導 を見る
                </button>
              </div>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show collapse-body-1" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="row mt-3">
                  <button type="button" class="btn-menu dropdown-toggle active1" data-bs-toggle="dropdown" aria-expanded="false"> ０歳児</button>
                  <button type="button" class="btn-menu dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> １歳児</button>
                  <button type="button" class="btn-menu dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> ２歳児</button>
                  <button type="button" class="btn-menu dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> ３歳児</button>
                  <button type="button" class="btn-menu dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> ４歳児</button>
                  <button type="button" class="btn-menu dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> ５歳児</button>
                </div>
                <div class="row row-2">
                  <p class="m-0">年間目標</p>
                </div>
                <div class="row row-3">
                  <p class="m-0">
                    ・落ち着いた雰囲気の中で、子どもの生活リズムや生理的欲求、甘えなどの依存欲求を満たし、情緒の安定を図りながら、保護者との信頼関係、愛着関係を育てる。<br>
                    ・安全な環境の中で伸び伸びと遊び、様々な体験をしながら、手や指の発達を促し、身の回りの物事へ興味や関心が持てるようにする<br>
                    ・一人ひとりの発達に合わせ、離乳の完了やハイハイや歩行などの発達への意欲を育む。<br>
                    ・いろいろな食品に慣れ、楽しい雰囲気の中で喜んで食事ができるようにし、無理なく離乳ができるようにする。<br>
                    ・子どもの感情や喃語に適切に応えたり反応をし、語りかけたりすることで発語の意欲を育む。
                  </p>
                </div>
                <div class="row mt-1 row-2">
                  <p class="m-0">家族との連携</p>
                </div>
                <div class="row row-3">
                  <p class="m-0">
                    ・家族との連携を取りながら、一人ひとりの子どもの心身の状態を把握し、食欲、睡眠、排泄など子どもの発達等を共有する。<br>
                    ・連絡帳や登園時に子どもの様子を伝え合い、子どもと保護者が安心して園生活を送れるようにする。<br>
                    ・家での様子や保育園での様子を共有しながら、離乳食を無理なく進めるとともに、味つけや形状、献立などのアドバイスをする。<br>
                    ・自分でしようとする気持ちが自立への一歩であることを伝え、家庭でもゆったりと関わってもらえるようにする。
                  </p>
                </div>
                <div class="row mt-2 row-2">
                  <p class="m-0">１期（４〜６月）</p>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">子どもの姿 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・「あー」「うー」などの喃語を発する。<br>
                      ・手に触れた物を口に運ぼうとする。<br>
                      ・離乳食に慣れ、もぐもぐ、ごっくんができるようになる。<br>
                      ・保育者の真似をして手をたたいたり、体を揺らしたりしながら、手遊びを楽しむ。<br>
                      ・体調不良により、咳や鼻水、熱が出る。<br>
                      ・伝い歩きが安定し、一人立ち、歩行をしようとする。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">ねらい </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・保育者と十分に関わりながら欲求を満たされ、安心して過ごす。<br>
                      ・好きな遊びや興味を持つ玩具を使って十分に楽しむ。<br>
                      ・午前睡や午睡の時間など個々にあった生活リズムで過ごす。<br>
                      ・保育者の優しい声掛けにより、発語への意欲が育つ。<br>
                      ・抱っこだなどで落ち着き、バウンサーや布団で安心して眠る。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">養護 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・保育者との丁寧な関わりの中で、保育園での生活に慣れ、情緒が安定する。<br>
                      ・信頼できる保育者の抱っこで安心して眠ることができる。<br>
                      ・オムツを替えてもらい、心地よさを味わう。<br>
                      ・ゆったりできる環境の下で、優しい声かけにより楽しく食事をする。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">教育 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・大人の語りかけや、あやしに対し、じっと見つめたり微笑んだりする。<br>
                      ・泣くことで自分の気持ちを表現しようとする。<br>
                      ・ハイハイやつかまり立ち、伝い歩きで移動することや、様々な体位により見える視界の違いを楽しむ。<br>
                      ・好きな遊具をみつけ、音を鳴らしたり動かしたり、打ち合わせたりして遊ぶ。<br>
                      ・歌や音楽に合わせて、リズムに乗ったり体を動かして遊ぶことを楽しむ。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">環境構成 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・玩具は消毒して常に清潔にしておく。<br>
                      ・個々の発達や、発達状況、身体能力に応じて、子どもが自ら興味をもって遊びたくなるような環境を設定する。<br>
                      ・子どもの目線になって、見やすい位置や触りやすい位置に玩具を配置するよう心がける。<br>
                      ・誤飲を防ぐため、小さな玩具は置かないようにする。また、定期的に玩具が壊れていないか点検をし、なめたり口に入れたりしても危険のないようにする。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">保育者の援助 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・楽しい笑顔や声かけで子どもたちの欲求にこたえ、抱っこやスキンシップをとることで安心して過ごせるような雰囲気をつくる。<br>
                      ・おむつ交換は、話しかけやスキンシップを大切にしながら子どもが退屈に感じないように行う。<br>
                      ・「いないいないばあ」など、保育者と向かい合う遊びや、触れ合い遊びを楽しめるようにする。
                    </p>
                  </div>
                </div>
                <div class="row mt-2 row-2">
                  <p class="m-0">２期（７〜９月）</p>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">子どもの姿 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・手に触れた物を口に運ぶ。<br>
                      ・離乳食に興味を持ち、もぐもぐ、ごっくんができるようになり進んで食べたいと思うようになる。<br>
                      ・体調不良により、咳や鼻水、熱が出る。<br>
                      ・簡単な手遊びをしたり、絵本を見たりすることを楽しむ。<br>
                      ・徐々に歩行が安定し、興味を持つ物や場所に進んで行こうとする。<br>
                      ・保育者の顔や声のトーンで怒られていることが分かる。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">ねらい </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・保育者の愛情豊かな関わりの中で、触れ合い遊びを十分に楽しむ。<br>
                      ・気候の変化に合わせ、衣服の調整をしてもらい、健康に過ごす。<br>
                      ・梅雨期、夏季の健康状態を把握し、安全面・衛生面に留意し、気持ちよく過ごせるようにする。<br>
                      ・気温や湿度、体調などに気を配り、沐浴や水遊びなどを楽しみ、清潔で気持ちよく過ごせるようにする。<br>
                      ・歩行での探索活動を十分に楽しむ。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">養護 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・授乳や食事、排泄、睡眠などについて留意され、生活リズムが整う。<br>
                      ・手づかみでつかみやすい食べ物は、自分の口に持っていき食べようとする。<br>
                      ・室温、湿度に応じて、汗を拭いてもらったり、着替えをさせてもらったりして、気持ちよく生活する
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">教育 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・泣いたり、笑ったり、大きな声を発したりすることで自分の欲求を表現する。<br>
                      ・喃語を発し、保育者に応答してもらうことで喜ぶ。<br>
                      ・ハイハイや伝い歩き、歩行などで探索活動を十分に楽しむ。<br>
                      ・水に触れることを楽しむ。<br>
                      ・保育者とのスキンシップを喜び、触れ合い遊びを楽しんだり、保育者の模倣をしたりする。<br>
                      ・保育者と一緒に歌ったり、簡単な手遊びをしたり、音楽に合わせて体を動かしたりして遊ぶ。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">環境構成 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・誤飲を防ぐため、小さな玩具は置かないようにする。また、定期的に玩具が壊れていないか点検をし、なめたり口に入れたりしても危険のないようにする。<br>
                      ・音の出る玩具、動かして遊べる玩具など、子どもたちの発達状況に応じて、発達を促すような手づくりの玩具を準備する。<br>
                      ・他児とぶつかったりして怪我をしないようクラスごとに活動を変えたりしながら、安心して腹ばい、ハイハイ、歩行などの身体運動が十分行えるように環境を整える。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">保育者の援助 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・すべての職員が、一人一人の子どもの体調や発達、食事形態などを把握、共有して保育を進める。<br>
                      ・小さな発語や喃語にもしっかりと耳を傾け、その場に応じた正しい言葉で対応したり、反応することでさらなる発語を促すようにする。<br>
                      ・離乳食は、一人ひとりの状態に応じて無理なく進めたり声掛けをすることで楽しく過ごし、食べたいと思えるようにする。
                    </p>
                  </div>
                </div>

                <div class="row mt-2 row-2">
                  <p class="m-0">３期（１０〜１２月）</p>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">子どもの姿 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・喃語を発したり保育者の言葉をオウム返ししたり言葉を発することを学ぶ。<br>
                      ・完了期や幼児食に慣れ、保育者の援助を受けながら自分で食べたいと思い手を伸ばす。<br>
                      ・体調不良により、咳や鼻水、熱が出る。<br>
                      ・簡単な手遊びを模倣したり、絵本を見たりすることを楽しむ。<br>
                      ・簡単な言葉を理解し、指差しをしたり、「ワンワン」「ブーブー」など、言葉を発したりする。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">ねらい </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・体調や気温に留意され、心地よく生活できるように保育の環境が整えられている。<br>
                      ・ハイハイ、つかまり立ち、伝い歩きなど、活発に体を動かして遊ぶ。<br>
                      ・保育者と一緒に戸外に出たり散歩したりすることで遊び、季節の自然に触れることを楽しむ。<br>
                      ・気候の変化に合わせ、衣服の調整をしてもらい、健康に過ごす。<br>
                      ・自分の身の回りの物に興味を持ち、活発に探索活動をする。<br>
                      ・指さしや片言など、自分の思いを自己表現する喜びや満足感を味わい、言葉への関心を育てる。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">養護 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・安心できる保育者の下で、安全に生活する。<br>
                      ・信頼できる保育者との関係の中で、甘えたり喜んだり怒ったりと、様々な感情を安心して表現できる。<br>
                      ・排便をした際に不快なことを感じ、保育者に泣いて伝えることができる。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">教育 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・安心できる保育者の見守りの中で、一人遊びを十分に楽しむ。<br>
                      ・つまむ、たたく、引っ張るなど指先や手を使って遊ぶ。<br>
                      ・保育者と一緒に絵本を見たり声掛けを聞き、簡単な言葉のオウム返しをしたり模倣をすることを楽しむ。<br>
                      ・戸外へ出ることを喜び、身体を動かして遊ぶことを楽しむ。<br>
                      ・友達に興味を持ち、顔を近づけたり、触れたりする。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">環境構成 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・定期的に玩具が壊れていないか点検をし、なめたり口に入れたりしても危険のないようにする。<br>
                      ・たたいたり、つまんだりと存分に遊べるような、発達に合った玩具を用意する。<br>
                      ・つかまり立ちや一人歩きができるようになると、少し上のものまで届くようになるので、意識して見守りながら棚などの上には重たいものや危険なものはおかないようにする。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">保育者の援助 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・ハイハイや伝い歩き、歩行などができるようになり、思いきり体を動かして遊べるように安全で活動しやすいスペースを確保し、見守る<br>
                      ・指さしにや発語に、友達や物の名前ほ保育者が言葉で返すことで、人や物への興味・関心が広められるようにする。<br>
                      ・「モグモグしようね」など、口の動きを見せたり、楽しい雰囲気の中でゆったりと食事ができるようにする。<br>
                      ・自分で食べようとする気持ちを育てながら離乳食の完了期、乳児食へと個々のペースで無理なく移行できるようにする。
                    </p>
                  </div>
                </div>

                <div class="row mt-2 row-2">
                  <p class="m-0">４期（１〜３月）</p>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">子どもの姿 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・簡単な言葉を理解し、指差しをしたり、「ワンワン」「ブーブー」など、言葉を発したりする。<br>
                      ・体調不良により、咳や鼻水、熱が出る。<br>
                      ・保育者が誘うとトイレへ行き、便器に座る。便器に座るのを泣いて嫌がる子もいる。<br>
                      ・意欲的に手づかみ食べをする。またスプーンやフォークですくって渡すとこぼしながらも口に運び、自分で食べようとする。<br>
                      ・簡単な言葉や、意味のある言葉が増え、保育者の声掛けに対し返事をするときがある。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">ねらい </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・気温の変化等により体調が崩れやすい季節は、個々にあった生活リズムで過ごす。<br>
                      ・保育者と一緒に戸外に出たり散歩したりすることで遊び、季節の自然に触れることを楽しむ。<br>
                      ・保育者の仲立ちにより、友達との関わりを楽しむ。<br>
                      ・自分の身の回りの物に興味を持ち、活発に探索活動をする。<br>
                      ・一人ひとりの健康状態に応じて、適切に関わり、寒い時期を元気に過ごせるようにする。<br>
                      ・生活の中でいろいろな場面での喃語や発語を大切にしながら、人や物への関心の芽生えを促す。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">養護 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・授乳や食事、排泄、睡眠などについての生活リズムに慣れ、次の流れを予測できるようになる。<br>
                      ・自分でスプーンに口を近づけて口に入れようとしたり、自分でスプーンですくって食べたいと思うようになる。<br>
                      ・自分の欲求を簡単な言葉で伝えようとする。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">教育 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・大人の語りかけや、あやしに対し、じっと見つめたり微笑んだりする。<br>
                      ・泣くことで自分の気持ちを表現しようとする。<br>
                      ・ハイハイやつかまり立ち、伝い歩きで移動することや、様々な体位により見える視界の違いを楽しむ。<br>
                      ・好きな遊具をみつけ、音を鳴らしたり動かしたり、打ち合わせたりして遊ぶ。<br>
                      ・歌や音楽に合わせて、リズムに乗ったり体を動かして遊ぶことを楽しむ。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">環境構成 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・玩具は消毒して常に清潔にしておく。<br>
                      ・玩具の取り合いなどの際は、保育者が声をかけながらケガ無く解決できるようにする。また、未然に防ぐためにも複数用意するなど工夫をする。<br>
                      ・子どもが片付けをする際にどこに片付ければいいのかすぐにみて分かるよう、日頃から玩具棚を整理する。<br>
                      ・散らかっている玩具につまづき、転んだりしないよう子どもがよくいる場所や動いている場所は保育者が片付け整理をしながらスペースを取れるようにする。
                    </p>
                  </div>
                </div>
                <div class="row row-1">
                  <div class="col-md-2 col-left d-flex flex-column justify-content-center">
                    <p class="m-0 text-center">保育者の援助 </p>
                  </div>
                  <div class="col-md-10 pt-2 pb-2">
                    <p class="m-0">
                      ・レッスンの歌や手遊びに興味を示し模倣したくなるように、保育者は優しく明るい声で歌ったり、大きな身振り・手振りで示したりする。<br>
                      ・個々のペースに合わせ、短い午前睡を取れるようにしたり、月齢が高くなり午前睡を取らずに過ごせるようになってくれば徐々に時間を短くしたり、個々に応じて対応するようにする。<br>
                      ・午前睡がなくなっていくが、個々に応じて必要なときは睡眠がとれるようにする。<br>
                      ・甘えたい気持ちを受け止め、保育者と一対一で触れ合う関係を大切にする。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="subTab===2">
          <div class="yoga-lesson">
            <div class="row w-100 m-0">
              <div class="col-md-11">
                <div class="row row-1 pb-1">
                  <div class="col-md-6 ps-0">
                    <p class="m-0 text-2xl top-left">ヨガレッスンの様子</p>
                  </div>
                  <div class="col-md-6 pe-0">
                    <p class="m-0 pull-right text-sm pt-2">更新日：<span class="ps-2">2021/02/15</span></p>
                  </div>
                </div>
                <div class="row row-2">
                  <img src="../../assets/images/guardian/Mask_Group_53.png" alt="EXY" class="img-fluid w-100">
                </div>
                <div class="row row-3">
                  <p>
                    COCOROHOIKUEN 弁天町園では、<br>
                     週に一度外部講師を招いてヨガレッスンを行っています♪
                  </p>
                  <p class="m-0">
                    レッスンは、小さいお友達と大きいお友達の２クラスに分けて行い、<br>
                     個々の発達状況に合わせた内容で楽しみながら進めます🌼🌼
                  </p>
                </div>
                <div class="row row-2 mt-2">
                  <img src="../../assets/images/guardian/Mask_Group_53.png" alt="EXY" class="img-fluid w-100">
                </div>
                <div class="row row-3 mt-2">
                  <p>
                   大きいお友達は、動物になりきりながら体幹を鍛えたり <br>
                    少し難しいポーズで足の筋力を高めたりします🔥
                  </p>
                </div>
                <div class="row row-2 mt-2">
                  <img src="../../assets/images/guardian/Mask_Group_53.png" alt="EXY" class="img-fluid w-100">
                </div>
                <div class="row row-4 mt-2">
                  <p>
                  小さいお友達は、講師の先生や保育者の援助も受けながら <br>
                   いろんなポーズを取ったり体を動かしたりして、<br>
                    実際に自分の体に触れることでボディーイメージを養います🌱✨ 
                  </p>
                  <p class="mt-5">
                    ご興味のある方はぜひ一度体験保育に来てみてくださいね☺️
                  </p>
                </div>
              </div>
              <div class="col-md-1 pe-0">
                <router-link :to="{name:'ProceedToReservation'}" class="philosophy-right pull-right text-center">予約へ進む</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Rate Plan Tab Start -->
      <div v-if="activeTab == 3" class="rate-plan">
        <div class="row experince w-100  ms-0">
          <div class="col-md-11 left-col ps-0">
            <div class="row row-top mt-5 w-50">
              <p class="m-0 fw-bold">体験保育</p>
            </div>
            <div class="row mt-4 row-1">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">体験保育 <span class="ps-3 pe-3 span-divider">｜</span>０歳児</p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right">￥15 ／ 1分</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <div class="col-md-10">
                    <p class="m-0">9:00~18:00（延長保育あり）別途、施設利用料500円が必要です。</p>
                  </div>
                  <div class="col-md-2">
                    <span class="pull-right badge-bottom">おすすめ</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-1">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">体験保育 <span class="ps-3 pe-3 span-divider">｜</span>１歳児以上</p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right">￥10 ／ 1分</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <div class="col-md-10">
                    <p class="m-0">9:00~18:00（延長保育あり）別途、施設利用料500円が必要です。</p>
                  </div>
                  <div class="col-md-2">
                    <span class="pull-right badge-bottom">おすすめ</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-2">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">その他費用 <span class="ps-3 pe-3 span-divider fw-normal">｜</span>お給食 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right">￥500 ／ 1食</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-2">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">その他費用 <span class="ps-3 pe-3 span-divider fw-normal">｜</span>おやつ </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right">￥100 ／ 1食</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-2">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">その他費用 <span class="ps-3 pe-3 span-divider fw-normal">｜</span>ミルク </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right">￥100 ／ 1食</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-2">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">その他費用 <span class="ps-3 pe-3 span-divider fw-normal">｜</span>手ぶらプラン </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right">￥500 ／ 1日</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-1 right-col pe-0">
            <router-link :to="{name:'ProceedToReservation'}" class="philosophy-right pull-right text-center">予約へ進む</router-link>
          </div>
        </div>
        <div class="row monthly-childcare w-100  ms-0 mt-1 mb-5">
          <div class="col-md-12">
            <div class="row row-top mt-5 w-40">
              <p class="m-0 fw-bold">月極保育</p>
            </div>
            <div class="row mt-4 row-3">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">通常プラン <span class="ps-3 pe-3 span-divider fw-normal">｜</span>０歳児 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right">￥35,900 ／ 1ヶ月</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <p class="m-0">月16日以上のご利用が必要となります。</p>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-3">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">通常プラン <span class="ps-3 pe-3 span-divider fw-normal">｜</span>１歳児・２歳児 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right">￥35,700 ／ 1ヶ月</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <p class="m-0">月16日以上のご利用が必要となります。</p>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-3">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">通常プラン <span class="ps-3 pe-3">｜</span>３歳児以上 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right">無償化対象 ／ 1ヶ月</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <p class="m-0">月16日以上のご利用が必要となります。</p>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-3">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">時短プラン <span class="ps-3 pe-3">｜</span>０歳児 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right">¥20,000 ／ 1ヶ月</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <p class="m-0">9:00〜16:00までのお預かり/月16日のご利用に限ります。</p>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-3">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">時短プラン <span class="ps-3 pe-3">｜</span>１歳児・２歳児 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right">¥15,000 ／ 1ヶ月</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <p class="m-0">9:00〜16:00までのお預かり/月16日のご利用に限ります。</p>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-3">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">時短プラン <span class="ps-3 pe-3">｜</span>３歳児以上 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right"> 無償化対象 ／ 1ヶ月</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <p class="m-0">9:00〜16:00までのお預かり/月16日のご利用に限ります。</p>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-3">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">保育補助費（通常プラン）<span class="ps-3 pe-3">｜</span>全年齢対応 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right"> ¥20,000 ／ 1ヶ月</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <p class="m-0">※備考欄：月16日以上のご利用が必要となります。</p>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-3">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">保育補助費（時短プラン）<span class="ps-3 pe-3">｜</span>全年齢対応 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right"> ¥20,000 ／ 1ヶ月</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <p class="m-0">9:00〜16:00までのお預かり/月16日のご利用に限ります。</p>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-3">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">手ぶらプラン<span class="ps-3 pe-3">｜</span>０・１歳児 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right"> ¥4,000 ／ 1ヶ月</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <p class="m-0">ご希望の方のみ</p>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-3">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">手ぶらプラン <span class="ps-3 pe-3">｜</span>２歳児 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right"> ¥3,500 ／ 1ヶ月</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <p class="m-0">※備考欄：ご希望の方のみ</p>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-3">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">手ぶらプラン <span class="ps-3 pe-3">｜</span>３歳児以上 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right"> ¥3,000 ／ 1ヶ月</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <p class="m-0">※備考欄：ご希望の方のみ</p>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-4">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">入園必要経費 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right"> ¥25,000</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-top last-top w-40">
              <p class="m-0 fw-bold">園見学</p>
            </div>
            <div class="row mt-4 row-3">
              <div class="col-md-12">
                <div class="row text-xl fw-bold">
                  <div class="col-md-10">
                    <p class="m-0">全年齢 </p>
                  </div>
                  <div class="col-md-2 me-0 pe-2">
                    <p class="m-0 pull-right"> ￥0</p>
                  </div>
                </div>
                <div class="row mt-2 text-sm">
                  <p class="m-0">※お持ち物：ペン（メモ用）・スリッパ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Rate Plan Tab End -->

      <!-- Word Of Mouth Tab Satrt -->
      <div v-if="activeTab == 4" class="word-of-mouth">
        <div class="row comprehensive w-100 ms-0">
          <div class="col-md-11 left-col">
            <div class="row mt-2 top-bar pb-2">
              <div class="col-md-6">
                <p class="m-0">
                  <span class="fs-4 fw-bold">総合</span>
                  <span class="fs-4 fw-bold rv-point">4.0</span>
                  <span class="fs-2 fa fa-star checked"></span>
                  <span class="fs-2 fa fa-star checked"></span>
                  <span class="fs-2 fa fa-star checked"></span>
                  <span class="fs-2 fa fa-star checked"></span>
                  <span class="fs-2 fa fa-star"></span>
                </p>
              </div>
              <div class="col-md-6 pt-2">
                <div class="row bar-left">
                  <div class="col-md-4">
                    <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4.0</span></p>
                  </div>
                  <div class="col-md-4 left-border">
                    <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4.0</span></p>
                  </div>
                  <div class="col-md-4 left-border">
                    <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4.0</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-4 row-1">
              <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_26.png" alt="EXY"></div>
              <div class="col-md-10">
                <div class="row me-1 row-11">
                  <p class="fw-bold pt-2 m-0">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <p class="m-0">
                      <span class="">総合</span>
                      <span class="fw-bold rv-point">4</span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star"></span>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-4">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="row row-2">
              <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れていますこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
            </div>
            <div class="row mt-5 row-1">
              <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_33.png" alt="EXY"></div>
              <div class="col-md-10">
                <div class="row me-1 row-11">
                  <p class="fw-bold pt-2 m-0">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <p>
                      <span class="">総合</span>
                      <span class="fw-bold rv-point">4</span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star"></span>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-4">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-2">
              <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れていますこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
            </div>
            <div class="row mt-5 row-1">
              <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_34.png" alt="EXY"></div>
              <div class="col-md-10">
                <div class="row me-1 row-11">
                  <p class="fw-bold pt-2 m-0">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <p>
                      <span class="">総合</span>
                      <span class="fw-bold rv-point">4</span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star"></span>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-4">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5 row-1">
              <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_34.png" alt="EXY"></div>
              <div class="col-md-10">
                <div class="row me-1 row-11">
                  <p class="fw-bold pt-2 m-0">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <p>
                      <span class="">総合</span>
                      <span class="fw-bold rv-point">4</span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star"></span>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-4">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5 row-1">
              <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_34.png" alt="EXY"></div>
              <div class="col-md-10">
                <div class="row me-1 row-11">
                  <p class="fw-bold pt-2 m-0">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <p>
                      <span class="">総合</span>
                      <span class="fw-bold rv-point">4</span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star"></span>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-4">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5 row-1">
              <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_34.png" alt="EXY"></div>
              <div class="col-md-10">
                <div class="row me-1 row-11">
                  <p class="fw-bold pt-2 m-0">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <p>
                      <span class="">総合</span>
                      <span class="fw-bold rv-point">4</span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star"></span>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-4">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5 row-1">
              <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_34.png" alt="EXY"></div>
              <div class="col-md-10">
                <div class="row me-1 row-11">
                  <p class="fw-bold pt-2 m-0">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <p>
                      <span class="">総合</span>
                      <span class="fw-bold rv-point">4</span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star"></span>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-4">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5 row-1">
              <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_34.png" alt="EXY"></div>
              <div class="col-md-10">
                <div class="row me-1 row-11">
                  <p class="fw-bold pt-2 m-0">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <p>
                      <span class="">総合</span>
                      <span class="fw-bold rv-point">4</span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star checked"></span>
                      <span class=" fa fa-star"></span>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-4">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 left-border">
                        <p class="text-center m-0">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-3">
              <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/WEB06.png" alt="EXY"></div>
              <div class="col-md-10 pt-2">
                <p class="m-0">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。</p>
              </div>
            </div>
          </div>
          <div class="col-md-1 right-col pe-0">
            <router-link :to="{name:'ProceedToReservation'}" class="philosophy-right pull-right text-center h-25">予約へ進む</router-link>
          </div>
        </div>
      </div>
      <!-- Word Of Mouth Tab End -->

      <!-- Overview Tab Start -->
      <div v-if="activeTab == 5" class="overview">
        <div class="row w-100 ms-0 pt-2">
          <div class="col-md-11 left-col mt-5">
            <div class="row row-1">
              <div class="col-md-2 left">
                <p class="text-center">会社概要</p>
              </div>
              <div class="col-md-10 right">
                <p>株式会社EXY <span class="span-padding">代表取締役 野村瑛莉</span></p>
                <p>
                  〒550-0014 大阪府大阪市西区北堀江1-2-27 AXIS SOUTH 四ツ橋ビル407号室 <br>
                  TEL：06-6539-8484 <span class="ps-5">FAX：06-6539-8485</span>
                </p>
                <p class="m-0">営業時間：平日 9：00〜18：00</p>
              </div>
            </div>
            <div class="row row-2">
              <div class="col-md-2 left">
                <p class="text-center">キャンセルについて</p>
              </div>
              <div class="col-md-10 right">
                <p>当園では以下の条件の通りです。詳細は、各リンク先をご確認ください。</p>
                <p class="text-decoration-underline">
                  ・お客様都合によるキャンセル<br>
                  ・当園都合によるキャンセル
                </p>
                <p>
                  ▼対応条件 <br>
                  対応期間内に電話もしくはメールにてご連絡いただいたもののみ原則対応いたします。
                </p>
                <p>▼対応可能期間ご予約日より○日前まで</p>
                <p>▼返金額</p>
                <p class="m-0">▼備考</p>
              </div>
            </div>
          </div>
          <div class="col-md-1 right-col pe-0">
            <router-link :to="{name:'ProceedToReservation'}" class="philosophy-right pull-right text-center h-60">予約へ進む</router-link>
          </div>
        </div>
      </div>
      <!-- Overview Tab End -->
    </section>
    <!-- details-section end -->
  </div>
</template>

<script>
export default {
  name: "CharacteristicsDetail",
  data() {
    return {
      date: '',
      activeTab: 1,
      subTab: 1,
      options: [
        'お子様の年齢',
        '０歳 ０ヶ月',
        '０歳 １ヶ月〜２ヶ月',
        '０歳 ３ヶ月〜５ヶ月',
        '０歳 ６ヶ月〜１１ヶ月',
        '１歳',
        '２歳',
        '３歳',
        '４歳',
        '５歳',
      ],
    }
  },
}
</script>

<style scoped>

</style>