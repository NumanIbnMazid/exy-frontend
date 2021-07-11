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
        <p style="padding-top:10px">キャンペーン中！</p>
      </div>
      <img src="../../assets/images/guardian/WEB07.png" alt="EXY" class="img-fluid" style="width: 100%">
      <div class="row" style="width:100%; margin:0px">
        <div class="col-md-6 box-border">
          <div class="footer-icon">
                <ul class="d-flex align-items-center justify-content-center">
                  <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-6 text-center box-border">
          <p class="right-footer">この園へ問い合わせる</p>
        </div>
      </div>
    </section>

    <!-- details-tab start -->
    <section class="charecteristics-details">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <h3><img src="../../assets/images/svg/heart-red.svg" alt="EXY"> COCORO HOIKUEN 弁天町園</h3>
            <p class="small">こころほいくえんべんてんちょうえん</p>
            <p style="margin-top:20px">「えいごとにほんごであそぼう」をテーマに、楽しく自然に英語を身につけることを目標にした保育園</p>
          </div>
          <div class="col-md-2">
            <img src="../../assets/images/guardian/Image_53.png" alt="EXY" class="img-fluid  pull-right" style="width: 50%">
          </div>
        </div>
      </div>

      <div class="details-tab">
        <div class="container tabs">
          <a @click="activeTab='1'" :class="[ activeTab === '1' ? 'active' : '' ]"> 園の特色</a>
            <a @click="activeTab='2'" :class="[ activeTab === '2' ? 'active' : '' ]"> 保育内容</a>
            <a @click="activeTab='3'" :class="[ activeTab === '3' ? 'active' : '' ]"> 料金プラン</a>
            <a @click="activeTab='4'" :class="[ activeTab === '4' ? 'active' : '' ]"> 口コミ</a>
            <a @click="activeTab='5'" :class="[ activeTab === '5' ? 'active' : '' ]"> 概要</a>
        </div>
      </div>
      <div  v-if="activeTab=='1'" class="features">
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
          <div class="row" style="width:100%; margin:0px">
            <div class="col-md-10 allergy-left">
              <div class="row">
                <div class="col-md-6">
                  <img src="../../assets/images/guardian/Image_16.png" alt="EXY" class="img-fluid " style="width: 100%">
                </div>
                <div class="col-md-6 allergy-desc">
                  <div class="row">
                    <p class="btn-allergy text-center">#アレルギー対応</p>
                  </div>
                  <div class="row mt-3">
                    <h3 style="padding-left:0px">各お子さまのアレルギーに対応した給食を提供します</h3>
                    <p style="padding-left:0px; padding-top:10px">【園側自由記入部分】。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2" style="padding-right:0px">
              <!-- <div class="allergy-right">
                <p>予約へ進む</p>
              </div> -->
              <a href="#" class="allergy-right pull-right text-center">予約へ進む</a>
            </div>
          </div>
        </div>
        <div class="child-care">
          <div class="container">
            <div class="row">
              <div class="col-md-6 child-left">
                <h4 class="child-head">保育理念</h4>
                <p>「心に愛を <br> 人からたくさんの愛情を注がれた子は、将来また必ず人へ  <br> あまりある愛情を注ぐ”愛”溢れる人を目指し</p>
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
                    <p style="font-weight:normal"> <u> 慣らし保育 </u><br> <u> とは？＞</u></p>
                  </div>
                  <div class="col-md-10">
                    <p>目安期間 ：１週間〜１ヶ月程度</p>
                    <p>初日の保育時間：8：30〜10：30（2、3時間）</p>
                    <p class="small" style="padding-left:0px">※あくまで目安ですので、お子さまの体調や保護者さまのご都合を考慮し 調整いたします。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container nursery-school">
          <div class="row text-center">
            <p> <img src="../../assets/images/svg/title-left-black.svg" alt="EXY" style="padding-right:10px; vertical-align: unset;">  保育園のココが知りたい <img src="../../assets/images/svg/title-right-black.svg" alt="EXY" style="padding-left:10px; vertical-align: unset;"> <br><span style="color:#cb3a82">#</span> <b> 5 POINT </b></p>
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
              <p class="text-center fw-bold"> <span style="color:#cb3a82">#</span> 保育園の空き状況</p>
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
              <p class="text-center"> <img src="../../assets/images/svg/title-left-black.svg" alt="EXY" style="padding-right:10px; vertical-align: unset;">  ほんとのとこどうなの？ <img src="../../assets/images/svg/title-right-black.svg" alt="EXY" style="padding-left:10px; vertical-align: unset;"> <br><span class="fs-4" style="color:#cb3a82">#</span> <span class="fs-4 fw-bold"> みんなの口コミ </span></p>
            </div>
            <div class="row mt-2 top-bar">
              <div class="col-md-6">
                <p class="">
                  <span class="fs-4 fw-bold">総合</span> 
                  <span class="fs-4 fw-bold rv-point">4.0</span>
                  <span class="fs-2 fa fa-star checked"></span>
                  <span class="fs-2 fa fa-star checked"></span>
                  <span class="fs-2 fa fa-star checked"></span>
                  <span class="fs-2 fa fa-star checked"></span>
                  <span class="fs-2 fa fa-star"></span>
                </p>
              </div>
              <div class="col-md-6">
                <div class="row bar-left">
                  <div class="col-md-4">
                    <p class="text-center pt-2">雰囲気 <span class="rv-point fw-bold">4.0</span></p>
                  </div>
                  <div class="col-md-4 pt-2 left-border">
                    <p class="text-center">雰囲気 <span class="rv-point fw-bold">4.0</span></p>
                  </div>
                  <div class="col-md-4 pt-2 left-border">
                    <p class="text-center">雰囲気 <span class="rv-point fw-bold">4.0</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3 row-1">
              <div class="col-md-2 mt-2 text-center"><img src="../../assets/images/guardian/Mask_Group_26.png" alt="EXY"></div>
              <div class="col-md-10">
                <div class="row me-1 row-11">
                  <p class="fw-bold pt-2">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
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
                        <p class="text-center pt-2">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 pt-2 left-border">
                        <p class="text-center">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 pt-2 left-border">
                        <p class="text-center">雰囲気 <span class="rv-point fw-bold">4</span></p>
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
                  <p class="fw-bold pt-2">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
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
                        <p class="text-center pt-2">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 pt-2 left-border">
                        <p class="text-center">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 pt-2 left-border">
                        <p class="text-center">雰囲気 <span class="rv-point fw-bold">4</span></p>
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
                  <p class="fw-bold pt-2">2021年2月利用者<span style="padding-left:40px">一時保育ー1歳児プラン </span></p>
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
                        <p class="text-center pt-2">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 pt-2 left-border">
                        <p class="text-center">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                      <div class="col-md-4 pt-2 left-border">
                        <p class="text-center">雰囲気 <span class="rv-point fw-bold">4</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      <div  v-if="activeTab=='2'" class="childcare">
        <div class="philosophy">
          <div class="row" style="width:100%; margin:0px">
            <div class="col-md-10 mt-5">
              <div class="row">
                <div class="col-md-4 text-center">
                  <img src="../../assets/images/guardian/Mask_Group_50.png" alt="EXY" class="img-fluid " style="width: 100%">
                </div>
                <div class="col-md-8 ps-5 pt-4">
                  <h4 style="color:#CB3A82">保育理念</h4>
                  <p>「心に愛を」<br> 人からたくさんの愛情を注がれた子は、将来また必ず人へ <br> あまりある愛情を注ぐ”愛”溢れる人を目指し</p>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-md-4 text-center">
                  <img src="../../assets/images/guardian/Mask_Group_51.png" alt="EXY" class="img-fluid " style="width: 100%">
                </div>
                <div class="col-md-8 ps-5 pt-4">
                  <h4 style="color:#CB3A82">保育方針</h4>
                  <p>小規模保育の良さを生かし、家庭的であたたかな雰囲気を大切にし、<br> ひとりひとりにたっぷりの愛情を注ぐことで、また周りの人々へ <br> 愛情を注ぐ連鎖を築く</p>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-md-4 text-center">
                  <img src="../../assets/images/guardian/Mask_Group_52.png" alt="EXY" class="img-fluid " style="width: 100%">
                </div>
                <div class="col-md-8 ps-5 pt-4">
                  <h4 style="color:#CB3A82">保育目標</h4>
                  <p>1．自分が一番に愛されていることを伝える<br> 2．認めること、褒めることで子どもたちの自信を伸ばす<br>3．友達の輪の中で感情のコントロールの基礎を学ぶ</p>
                </div>
              </div>
            </div>
            <div class="col-md-2" style="padding-right:0px">
              <a href="#" class="philosophy-right pull-right text-center">予約へ進む</a>
            </div>
          </div>
        </div>
        <div class="lesson">
          <div class="row">
            <div class="col md-3">
              <a href="#">
                <img src="../../assets/images/guardian/Mask_Group_53.png" alt="EXY" class="img-fluid " style="width: 100%">
                <p class="text-center mt-2"> <span style="color:#CB3A82">#</span> ヨガレッスンの様子</p>
              </a>
            </div>
            <div class="col md-3">
              <a href="#">
                <img src="../../assets/images/guardian/Mask_Group_54.png" alt="EXY" class="img-fluid " style="width: 100%">
                <p class="text-center mt-2"> <span style="color:#CB3A82">#</span> 英語レッスンの様子</p>
              </a>
            </div>
            <div class="col md-3">
              <a href="#">
                <img src="../../assets/images/guardian/Mask_Group_55.png" alt="EXY" class="img-fluid " style="width: 100%">
                <p class="text-center mt-2"> <span style="color:#CB3A82">#</span> 季節の行事</p>
              </a>
            </div>
             <div class="col md-3">
              <a href="#">
                <img src="../../assets/images/guardian/Mask_Group_56.png" alt="EXY" class="img-fluid " style="width: 100%">
                <p class="text-center mt-2"> <span style="color:#CB3A82">#</span> 心に愛を</p>
              </a>
            </div>
          </div>
        </div>
        <div class="annual-events">
          <div class="container">
            <div class="row">
              <h4 class="text-center"> <span style="color:#CB3A82">#</span> 年間行事</h4>
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
      </div>
    </section>
    <!-- details-tab end -->
  </div>
</template>

<script>
export default {
  name: "CharacteristicsDetail",
   data() {
    return {
      date: '',
      activeTab: '2',
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