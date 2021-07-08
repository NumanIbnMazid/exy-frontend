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
        <div class="container">
          <!-- Tabs Start -->
          <div class="tabs">
            <a @click="activeTab='1'" :class="[ activeTab === '1' ? 'active' : '' ]"> 園の特色</a>
            <a @click="activeTab='2'" :class="[ activeTab === '2' ? 'active' : '' ]"> 保育内容</a>
            <a @click="activeTab='3'" :class="[ activeTab === '3' ? 'active' : '' ]"> 料金プラン</a>
            <a @click="activeTab='4'" :class="[ activeTab === '4' ? 'active' : '' ]"> 口コミ</a>
            <a @click="activeTab='5'" :class="[ activeTab === '5' ? 'active' : '' ]"> 概要</a>
          </div>
          <!-- Tabs End -->
          <!-- Tabs Content -->
          <div class="content">
            <!-- Tabs Content 1 -->
            <div v-if="activeTab ==='1'" class="tab-content">
              <hooper :settings="hooperSettings">
                <slide v-for="n in 5" :key="n">
                  <garden-feature-item></garden-feature-item>
                </slide>

                <hooper-navigation slot="hooper-addons"></hooper-navigation>
              </hooper>
            </div>

            <!-- Tabs Content 2 -->
            <div v-if="activeTab ==='2'" class="tab-content">
              <hooper :settings="hooperSettings">
                <slide v-for="n in 5" :key="n">
                  <garden-feature-item></garden-feature-item>
                </slide>

                <hooper-navigation slot="hooper-addons"></hooper-navigation>
              </hooper>
            </div>

            <!-- Tabs Content 3 -->
            <div v-if="activeTab ==='3'" class="tab-content">
              <hooper :settings="hooperSettings">
                <slide v-for="n in 5" :key="n">
                  <garden-feature-item></garden-feature-item>
                </slide>

                <hooper-navigation slot="hooper-addons"></hooper-navigation>
              </hooper>
            </div>
          </div>
          
        </div>
      </div>
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
                  <button class="btn btn-allergy">#アレルギー対応</button>
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
            <button class="btn allergy-right ">予約へ進む</button>
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
                  <p> サンライズビル１階・２階 <button class="btn btn-map">map</button></p>
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
      activeTab: '1',
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
      hooperSettings: {
        itemsToShow: 1,
        playSpeed: 3000,
        centerMode: false,
        infiniteScroll: true,
        breakpoints: {
          800: {
            itemsToShow: 2
          },
          1000: {
            itemsToShow: 4,
            pagination: 'fraction'
          }
        }
      }
    }
  },
}
</script>

<style scoped>

</style>