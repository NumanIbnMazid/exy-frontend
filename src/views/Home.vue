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
          <img src="../assets/images/slider.png" class="d-block w-100" alt="">
          <div class="carousel-caption d-none">
            <img src="https://dummyimage.com/346x125/f9fafb/CB3A82&text=EXY" alt="Logo">
            <h3>WEBで予約、WEBで決済 <br/>保育園探しは <br/>キガルニホイク</h3>
          </div>
        </div>
        <!-- Slide 2 -->
        <div class="carousel-item">
          <img src="../assets/images/slider.png" class="d-block w-100" alt="">
          <div class="carousel-caption d-none">
            <img src="https://dummyimage.com/346x125/f9fafb/CB3A82&text=EXY" alt="Logo">
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
            <button type="button" class="search-btn">検索する</button>
          </div>
        </div>

        <!-- Search Nav -->
        <div class="search-nav">
          <ul>
            <li>
              <a href="" class="me-3"><i class="fa fa-caret-right" aria-hidden="true"></i></a>
              <a href="#"><span>＃</span> 明日預ける</a>
            </li>
            <li>
              <a href="#"><span>＃</span> 体験保育</a>
            </li>
            <li>
              <a href="#"><span>＃</span> 月極保育</a>
            </li>
            <li>
              <a href="#"><span>＃</span> 月極保育</a>
            </li>
            <li>
              <a href="#"><span>＃</span> エリア・沿線からさがす</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Search Section End -->

    <!-- Garden Section Start -->
    <div class="garden-feature">
      <div class="container">

        <!-- Tabs Start -->
        <div class="tabs">
          <a @click="activeTab='1'" :class="[ activeTab === '1' ? 'active' : '' ]"><i class="fa fa-smile-o"></i> 明日預けられる園</a>
          <a @click="activeTab='2'" :class="[ activeTab === '2' ? 'active' : '' ]"><i class="fa fa-lemon-o"></i> 特色がある園</a>
          <a @click="activeTab='3'" :class="[ activeTab === '3' ? 'active' : '' ]"><i class="fa fa-heart"></i> 病児が預けられる園</a>
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
          <a href="#" class="read-more">保育園一覧をみる</a>
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
              <a href="#">
                <i class="fa fa-smile-o"></i>
                <p>キガルニホイクとは</p>
                <span>What is KIGATUNIHOIKU</span>
              </a>
              <p>メリットやご利用方法など サービス概要について</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="single-item mb-4 mb-lg-0">
              <a href="#">
                <i class="fa fa-smile-o"></i>
                <p>キガルニホイク使い方</p>
                <span>Hoｗ to use</span>
              </a>
              <p>保育園の探し方から 子育て相談コーナーなどの 活用方法まで</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="single-item mb-4 mb-lg-0">
              <a href="#">
                <i class="fa fa-smile-o"></i>
                <p>お支払い方法について</p>
                <span>Amount of money</span>
              </a>
              <p>お支払いの流れや お支払い方法のご案内</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="single-item">
              <a href="#">
                <i class="fa fa-smile-o"></i>
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

    <!-- ADS Hoik Start -->
    <section class="p-5 ads">
      <div class="container">
        <hr style="height: 2px;color: #3D3442" class="mb-4">
        <div class="row justify-content-center">
          <div class="col-md-5 mb-3 mb-md-0">
            <div class="banner">
              <img src="https://dummyimage.com/400x150/F8F7F7/F8F7F7&text=EXY" alt="EXY" class="d-block w-100">
            </div>
          </div>
          <div class="col-md-1 text-center visibility-hidden">
            <span class="horizontal-line"></span>
          </div>
          <div class="col-md-5 mb-3 mb-md-0">
            <div class="banner">
              <img src="https://dummyimage.com/400x150/F8F7F7/F8F7F7&text=EXY" alt="EXY" class="d-block w-100">
            </div>
          </div>
        </div>
        <hr style="height: 2px;color: #3D3442" class="mt-4">
      </div>
    </section>
    <!-- ADS Hoik End -->

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
