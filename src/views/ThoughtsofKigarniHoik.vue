<template>
  <div id="ThoughtsofKigarniHoik">
    <div class="breadcrumb-border">
      <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Top</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">キガルニホイクとは</li>
        </ol>
      </nav>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7 text-center">
          <div class="header mt-5 mb-3">
            <h4 class="position-relative text-base fw-bold d-inline-block">キガルニホイクの想い</h4>
          </div>
          <h4 class="--color-e6006e text-xl mb-5">もっと気軽に、もっと身近に保育を</h4>
          <div>
            <span>キガルニホイクは<br>あなたの幸せな子育てを取り戻します。<br><br>”こんな小さい子どもを預けるなんてかわいそう”<br>”数年間の子育て中くらい自分の時間は我慢すべき”<br>”母親父親なんだから、母親父親らしくすべき”<br><br>そんな”しんどい子育て”を我が子が母親父親になったときにもまだ続けますか？<br><br>キガルニホイクは、次世代へ向けて笑顔溢れる子育ての連鎖を創造します。</span>
          </div>
          <div class="header mt-5 mb-3">
            <h4 class="position-relative text-base fw-bold d-inline-block">PROVIDE</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="slider my-5">
      <hooper :settings="hooperSettings">
        <slide v-for="n in 5" :key="n">
          <div class="border py-4 px-5 mx-3 text-center">
            <img src="../assets/images/Image_92@2x.png" class="img-fluid" alt="EXY">
            <h4 class="d-inline-block border-bottom border-cb3a82 text-lg mb-3 mt-4">全ての手続きをWEBで完結</h4>
            <div>
              保育園探しはもちろんのこと、<br />予約から決済、大量の入園書類の記入まで、<br /> 全てをWEBで完結。 <br />お父さん・お母さんの時間と心に余裕をつくります。
            </div>
          </div>
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7 text-center">
          キガルニホイクでは、あなたのお子様に合った保育が いつでもどこでも気軽に利用できます。
        </div>
      </div>

      <div class="border-bottom border-color-707070 my-5"></div>
    </div>

    <div class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="pe-5">
              <img class="img-fluid w-100" src="../assets/images/ABOUT03@2x.png" alt="EXY">

              <div class="text-sm my-3 overflow-hidden">
                <span class="float-start d-inline-block" style="width: 125px">代表プロフィール</span>
                <span class="float-start d-inline-block" style="width: calc(100% - 125px)">
                  <span class="border-bottom border-color-707070 d-block mt-2"></span>
                </span>
              </div>

              <div class="row mb-4">
                <div class="col-6">
                  <div>株式会社EXY 代表取締役 <br> 野村 瑛莉</div>
                </div>
                <div class="col-6 text-end">
                  <a href="#" class="text-xl"><i class="fa fa-instagram"></i></a>
                  <a href="#" class="text-xl mx-4"><i class="fa fa-twitter"></i></a>
                  <a href="#" class="text-xl"><i class="fa fa-facebook"></i></a>
                </div>
              </div>
              <ul class="list-unstyled m-0">
                <li>
                  <span>2015年</span>
                  <span>株式会社EXY立ち上げ <br>保育コンサルティング事業を開始</span>
                </li>
                <li>
                  <span>2017年</span>
                  <span>企業主導型保育施設を運営開始</span>
                </li>
                <li>
                  <span>2021年</span>
                  <span>児童発達支援事業を開始</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-base">
              <div>
                <span>ミルクをあげてもおむつを変えても何をしても泣き止まない。<br>何度言っても言うことを聞かない。<br>転がり泣き叫ぶ声にイライラが止まらない。<br>カッとなって怒鳴ってばかりの自分が心の底から嫌になる。<br>夜になると後悔で押しつぶされそうになる。ひとりになりたい。<br>逃げ出したい。</span>
              </div>
              <div class="my-4">
                <span>四人の子育て真最中の私自身、そんな気持ちで過ごしてきました。</span>
              </div>
              <div>
                <span>ーほんの少し子どもと離れる時間を作ることで、世界が変わる<br>ーもっと気軽に、もっと身近に保育を利用できるようになれば<br>ただ苦しいだけの子育てから抜け出せるはず</span>
              </div>
              <div class="my-4">
                <span>キガルニホイクでは、<br>「辛くて苦しくてしんどい、そんな声すら出せない子育てを<br>”日本の保育の力”で変えたい」<br>そんな想いが詰まっています。</span>
              </div>
              <div class="overflow-hidden">
                <span class="float-end d-inline-block ms-5">野村 瑛莉</span>
                <span class="float-end d-inline-block">株式会社EXY 代表取締役</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-100"></div>
    <registration-link/>
    <div class="space-100"></div>

  </div>
</template>

<script>
import RegistrationLink from "../components/RegistrationLink";
import {Hooper, Navigation as HooperNavigation, Slide} from "hooper";
import 'hooper/dist/hooper.css';

export default {
  name: "ThoughtsofKigarniHoik",
  components: { RegistrationLink, Slide, Hooper, HooperNavigation },
  data() {
    return {
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
            itemsToShow: 3,
            pagination: 'fraction'
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
li {
  overflow: hidden;
  padding: 3px 0;
  font-size: 14px;

  span {
    float: left;

    &:first-child {
      width: 150px;
    }

    &:last-child {
      width: calc(100% - 150px);
    }
  }
}
</style>