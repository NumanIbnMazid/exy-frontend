<template>
  <div>
    <!-- Slider Start -->
    <div id="homeSlider" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#homeSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#homeSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>

      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active">
          <img src="../assets/images/slider.png" class="d-block w-100" alt="EXY">
          <div class="carousel-caption">
            <img src="../assets/images/_pc.png" alt="Logo">
            <h3>WEBで予約、WEBで決済 <br/>保育園探しは <br/>キガルニホイク</h3>
          </div>
        </div>
        <!-- Slide 2 -->
        <div class="carousel-item">
          <img src="../assets/images/slider.png" class="d-block w-100" alt="EXY">
          <div class="carousel-caption">
            <img src="../assets/images/_pc.png" alt="Logo">
            <h3>WEBで予約、WEBで決済 <br/>保育園探しは <br/>キガルニホイク</h3>
          </div>
        </div>
      </div>
    </div>
    <!-- Slider End -->

    <!-- Search Section Start -->
    <div class="search-section">
      <div class="container">
        <div class="row">
          <div class="col-md-5 mb-4 mb-md-0">
            <date-picker
                v-model="date"
                valueType="format"
                :disabled-date="disabledBeforeToday"
                placeholder="日付からさがす"
            ></date-picker>
          </div>
          <div class="col-md-5 mb-4 mb-md-0">
            <v-select :options="options" placeholder="おこさまの年齢"></v-select>
          </div>
          <div class="col-md-2 mb-4 mb-md-0">
            <router-link :to="{name:'Search'}" tag="button" type="button" class="search-btn">検索する</router-link>
          </div>
        </div>

        <!-- Search Nav -->
        <div class="d-flex align-items-center justify-content-between mt-4 search-nav">
          <a href="#">
            <i class="fa fa-caret-right"></i>
            <span class="ms-3">＃</span> 明日預ける
          </a>
          <a href="#"><span>＃</span> 体験保育</a>
          <a href="#"><span>＃</span> 月極保育</a>
          <router-link :to="{name:'FindNurserySchool'}"><span>＃</span> 条件からさがす</router-link>
          <router-link :to="{name:'SearchFromArea'}"><span>＃</span> エリアからさがす</router-link>
          <router-link :to="{name:'SearchFromArea'}"><span>＃</span> 沿線からさがす</router-link>
        </div>
      </div>
    </div>
    <!-- Search Section End -->

    <!-- Garden Section Start -->
    <div class="garden-feature">
      <div class="container">

        <!-- Tabs Start -->
        <div class="tabs">
          <a @click="activeTab='1'" :class="[ activeTab === '1' ? 'active' : '' ]"><img src="../assets/images/svg/smile-emoji.svg" alt="EXY"> 明日預けられる園</a>
          <a @click="activeTab='2'" :class="[ activeTab === '2' ? 'active' : '' ]"><img src="../assets/images/svg/leaves.svg" alt="EXY"> 特色がある園</a>
          <a @click="activeTab='3'" :class="[ activeTab === '3' ? 'active' : '' ]"><img src="../assets/images/svg/heart.svg" alt="EXY"> 病児が預けられる園</a>
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

        <div class="text-center">
          <router-link :to="{name:'Search'}" class="read-more">保育園一覧をみる</router-link>
        </div>

      </div>
    </div>
    <!-- Garden Section End -->

    <!-- About Section Start -->
    <div class="about-area">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div class="single-item mb-4 mb-lg-0">
              <router-link :to="{name:'KigaruniHoiku'}">
                <img src="../assets/images/group-2761.png" class="img-fluid" alt="EXY">
                <p>キガルニホイクとは</p>
                <span>What is KIGATUNIHOIKU</span>
              </router-link>
              <p>メリットやご利用方法など サービス概要について</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="single-item mb-4 mb-lg-0">
              <router-link :to="{name:'HowToUseKigarniHoik'}">
                <img src="../assets/images/group-2762.png" class="img-fluid" alt="EXY">
                <p>キガルニホイク使い方</p>
                <span>Hoｗ to use</span>
              </router-link>
              <p>保育園の探し方から 子育て相談コーナーなどの 活用方法まで</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="single-item mb-4 mb-lg-0">
              <router-link :to="{name:'AboutPaymentMethod'}">
                <img src="../assets/images/group-2763.png" class="img-fluid" alt="EXY">
                <p>お支払い方法について</p>
                <span>Amount of money</span>
              </router-link>
              <p>お支払いの流れや お支払い方法のご案内</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="single-item">
              <a href="#">
                <img src="../assets/images/group-2764.png" class="img-fluid" alt="EXY">
                <p>ご利用いただく皆さまへ</p>
                <span>To all of you</span>
              </a>
              <p>全ての人が安心して ご利用いただくための ガイドライン</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About Section End -->

    <div class="space-100"></div>

    <!-- Garden Reviews Start -->
    <div class="garden-reviews">
      <div class="container">
        <h3 class="mb-4">園口コミ</h3>

        <garden-reviews></garden-reviews>

        <div class="text-center">
          <a href="#" class="read-more">保育園一覧をみる</a>
        </div>
      </div>
    </div>
    <!-- Garden Reviews End -->

    <!-- Kigarni Hoik Start -->
    <div class="Kigarni-hoik">
      <div class="container">

        <!-- Tabs Start -->
        <div class="tabs">
          <a class="active">＃キガルニホイク</a>
        </div>
        <!-- Tabs End -->

        <!-- Tabs Content -->
        <div class="content">
          <!-- Tabs Content 1 -->
          <div class="tab-content">
            <hooper :settings="hooperSettings">
              <slide v-for="n in 5" :key="n">
                <div class="single-item">
                  <img src="../assets/images/gallery-1.png" alt="Kigarni Hoik" class="d-block w-100">
                </div>
              </slide>

              <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
          </div>
        </div>
      </div>
    </div>
    <!-- Kigarni Hoik End -->

    <!-- ADS Start -->
    <section class="p-5 ads">
      <div class="container">
        <hr style="height: 2px;color: #3D3442" class="mb-4">
        <div class="row justify-content-center">
          <div class="col-md-5 mb-3 mb-md-0">
            <div class="banner">
              <a href="#">
                <img src="../assets/images/_2021-04-01_165332@2x.png" alt="EXY" class="d-block w-100">
              </a>
            </div>
          </div>
          <div class="col-md-1 text-center visibility-hidden">
            <span class="horizontal-line"></span>
          </div>
          <div class="col-md-5 mb-3 mb-md-0">
            <div class="banner">
              <a href="#">
                <img src="../assets/images/_2021-04-01_165910@2x.png" alt="EXY" class="d-block w-100">
              </a>
            </div>
          </div>
        </div>
        <hr style="height: 2px;color: #3D3442" class="mt-4">
      </div>
    </section>
    <!-- ADS End -->

    <!-- First Kindergarten Hunt Start -->
    <section class="kindergarten-hunt">
      <div class="container">
        <div class="row">
          <div class="col-md-6 pe-md-0">
            <div class="content">
              <h2>初めての保活</h2>
              <p>初めての保育園探し。<br/>そもそも保育園って何するの？ <br/>まずは保育サービスの基本を知り、パパママと<br/>お子さんにあった保育園を選びましょう</p>
              <router-link :to="{name:'AboutKindergartenHunting'}">保活についてくわしくみる ＞</router-link>
            </div>
          </div>
          <div class="col-md-6 px-md-0">
            <img src="../assets/images/kindergarten-hunt.png" alt="EXY">
          </div>
        </div>
      </div>
    </section>
    <!-- First Kindergarten Hunt End -->

    <!-- ADS Start -->
    <section class="p-5 ads">
      <div class="container">
        <hr style="height: 2px;color: #3D3442" class="mb-4">
        <div class="row justify-content-center">
          <div class="col-md-3 mb-3 mb-md-0">
            <div class="banner">
              <a href="#">
                <img src="../assets/images/_2021-04-01_170432@2x.png" alt="EXY" class="d-block w-100">
              </a>
            </div>
          </div>
          <div class="col-md-1 text-center visibility-hidden">
            <span class="horizontal-line"></span>
          </div>
          <div class="col-md-3 mb-3 mb-md-0">
            <div class="banner">
              <a href="#">
                <img src="../assets/images/_2021-04-01_170619@2x.png" alt="EXY" class="d-block w-100">
              </a>
            </div>
          </div>
          <div class="col-md-1 text-center visibility-hidden">
            <span class="horizontal-line"></span>
          </div>
          <div class="col-md-3 mb-3 mb-md-0">
            <div class="banner">
              <a href="#">
                <img src="../assets/images/_2021-04-01_170834@2x.png" alt="EXY" class="d-block w-100">
              </a>
            </div>
          </div>
        </div>
        <hr style="height: 2px;color: #3D3442" class="mt-4">
      </div>
    </section>
    <!-- ADS End -->

    <!-- Child-rearing information bulletin board Start -->
    <div class="bulletin-board">
      <div class="container">
        <div class="bulletin-board-inner">
          <div class="top-title">
            <h4>子育て情報掲示板</h4>
          </div>
          <div class="content">
            <div class="row">
              <div class="col-md-7">
                <div class="bulletin-items">
                  <div class="bulletin-item">
                    <div class="date-title">
                      <div>4/10</div>
                      <div>大阪市西区に新しい保育園ができたらしい</div>
                    </div>
                    <p>大阪市西区北堀江の〇〇ビルに新しい保育園がオープン予…</p>
                  </div>
                  <div class="bulletin-item">
                    <div class="date-title">
                      <div>4/10</div>
                      <div>大阪市西区に新しい保育園ができたらしい</div>
                    </div>
                    <p>大阪市西区北堀江の〇〇ビルに新しい保育園がオープン予…</p>
                  </div>
                  <div class="bulletin-item">
                    <div class="date-title">
                      <div>4/10</div>
                      <div>大阪市西区に新しい保育園ができたらしい</div>
                    </div>
                    <p>大阪市西区北堀江の〇〇ビルに新しい保育園がオープン予…</p>
                  </div>
                </div>

                <a href="#" class="read-more">保育園一覧をみる</a>
              </div>
              <div class="col-md-4 offset-md-1">
                <img src="../assets/images/group-2765.png" class="d-block w-100" alt="EXY">
                <a href="#" class="bulletin-btn">皆さまの口コミを募集しております！</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Child-rearing information bulletin board End -->

    <!-- Child-rearing consultation corner Start -->
    <div class="child-consultation">
      <div class="container">
        <div class="child-consultation-inner">
          <h4>子育て相談コーナー</h4>

          <div class="consultation-item">
            <img src="../assets/images/group-2770.png" alt="EXY">
            <div class="consultation-content bg-left">
              <h5><a href="#">▶︎現在５歳、春から小学生になる息子がいる母です。体が小さめで心も幼く、小学…</a></h5>
              <div>
                <span>＃お悩み聞いて！</span>
                <span>＃旦那・家族</span>
                <span>＃働くママ</span>
                <span>＃5歳児</span>
                <span>2021/04/01 17:28 ｜ コメント２</span>
              </div>
            </div>
          </div>

          <div class="consultation-item">
            <div class="consultation-content bg-right">
              <h5><a href="#">▶︎現在５歳、春から小学生になる息子がいる母です。体が小さめで心も幼く、小学…</a></h5>
              <div>
                <span>＃お悩み聞いて！</span>
                <span>＃旦那・家族</span>
                <span>＃働くママ</span>
                <span>＃5歳児</span>
                <span>2021/04/01 17:28 ｜ コメント２</span>
              </div>
            </div>
            <img src="../assets/images/group-2770.png" alt="EXY">
          </div>

          <div class="consultation-item">
            <img src="../assets/images/group-2770.png" alt="EXY">
            <div class="consultation-content bg-left">
              <h5><a href="#">▶︎現在５歳、春から小学生になる息子がいる母です。体が小さめで心も幼く、小学…</a></h5>
              <div>
                <span>＃お悩み聞いて！</span>
                <span>＃旦那・家族</span>
                <span>＃働くママ</span>
                <span>＃5歳児</span>
                <span>2021/04/01 17:28 ｜ コメント２</span>
              </div>
            </div>
          </div>

          <div class="text-center">
            <a href="#" class="read-more">保育園一覧をみる</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Child-rearing consultation corner End -->

    <section class="notice">
      <div class="container">
        <h3>お知らせ</h3>
        <div class="notice-content">
          <div class="notice-item">
            <a href="#">
              <span>▶︎2021年04月01日</span>
              <span>新型コロナウィルス感染拡大に伴う影響について</span>
            </a>
          </div>
          <div class="notice-item">
            <a href="#">
              <span>▶︎2021年04月01日</span>
              <span>新型コロナウィルス感染拡大に伴う影響について</span>
            </a>
          </div>
          <div class="notice-item">
            <a href="#">
              <span>▶︎2021年04月01日</span>
              <span>新型コロナウィルス感染拡大に伴う影響について</span>
            </a>
          </div>
          <div class="notice-item">
            <a href="#">
              <span>▶︎2021年04月01日</span>
              <span>新型コロナウィルス感染拡大に伴う影響について</span>
            </a>
          </div>
        </div>
      </div>
    </section>


    <!-- ADS 02 Start -->
    <section class="p-5 ads-02">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-4 mb-3 mb-md-0">
            <div class="banner">
              <a href="#">
                <img src="../assets/images/_2021-04-01_171335@2x.png" alt="EXY" class="d-block w-100">
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 mb-3 mb-md-0">
            <div class="banner">
              <a href="#">
                <img src="../assets/images/_2021-04-01_171803@2x.png" alt="EXY" class="d-block w-100">
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="banner">
              <a href="#">
                <img src="../assets/images/_2021-04-01_171957@2x.png" alt="EXY" class="d-block w-100">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ADS End -->

    <div class="pb-4">
      <div class="container">
        <a href="#">
          <img src="../assets/images/_1-100@2x.png" alt="EXY" class="d-block w-100">
        </a>
      </div>
    </div>

    <div class="pb-4">
      <div class="container">
        <a href="#" class="banner-btn">サポーター園をご検討の方はこちら ＞</a>
      </div>
    </div>

    <div class="container">
      <a href="#">
        <img src="../assets/images/_1_5-100@2x.png" alt="EXY" class="d-block w-100">
      </a>
    </div>

    <div class="space-100"></div>

  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ja';
import vSelect from 'vue-select'
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';
import GardenFeatureItem from "../components/GardenFeatureItem";
import GardenReviews from "../components/GardenReviews";

export default {
  name: 'Home',
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
  components: { GardenReviews, GardenFeatureItem, DatePicker, vSelect, Slide, Hooper, HooperNavigation },
  methods: {
    disabledBeforeToday(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return date < today;
    }
  },
}
</script>

<style scoped>

</style>
