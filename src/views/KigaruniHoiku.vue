<template>
  <div class="kigaruni-hoiku">
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item active">キガルニホイクとは</li>
          </ol>
        </nav>
      </div>
    </div>

    <section class="position-relative">
      <img src="../assets/images/mask-group_9.png" alt="" class="img-fluid" style="width: 100%">
      <div class="banner-content">
        <h2>WEBで予約・WEBで決済</h2>
        <h2 class="mb-5">保育園探しはキガルニホイク</h2>
        <a href="#" class="exy-default-btn border-radius-25">新規登録</a>
      </div>
    </section>

    <section class="py-5 regain-full-love">
      <div class="container">
        <h2 class="mb-5"><span class="--color-e6006e">＃</span> 愛情いっぱいのあなたを取り戻す</h2>

        <hooper :settings="hooperSettings">
          <slide>
            <p>今日も子どもにキツくあたってしまった</p>
            <p>子育て限界、疲れた</p>
            <p>もうお母さんを辞めてしまいたい</p>
            <p class="mt-5">でも、”保育園に預けるのはかわいそう”</p>
          </slide>

          <slide>
            <p>”保育園に預けるのは悪”</p>
            <a href="#">その考え、もう古くない？</a>
            <p>ほんの少し、お互いの時間をつくるだけで</p>
            <p class="m-0">昨日より”もっと”我が子を好きになれる</p>
          </slide>

        </hooper>

      </div>
    </section>

    <section class="py-5 kigaruni-hoiku-info">
      <div class="container">
        <h2 class="text-center mb-5">
          <img src="../assets/images/svg/title-left.svg" alt="" class="mb-2">
          キガルニホイクとは？
          <img src="../assets/images/svg/title-right.svg" alt="" class="mb-2">
        </h2>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div class="single-item">
              <img src="../assets/images/Mask_Group_14@2x.png" alt="" class="img-fluid">
              <h4>全ての手続きをWEBで完結</h4>
              <p>一度の登録で予約から決済、大量の入園書類の記入まで、全てをWEBで完結させます。</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div class="single-item">
              <img src="../assets/images/Mask_Group_15@2x.png" alt="" class="img-fluid">
              <h4>リアルな保育内容で比較</h4>
              <p>明確な運営⽅針・運営内容・⼝コミから、
                ⼦育て⽅針や⽣活リズムにあった保育園
                選びができます。</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div class="single-item">
              <img src="../assets/images/Mask_Group_16@2x.png" alt="" class="img-fluid">
              <h4>息抜き・手抜き子育て情報満載</h4>
              <p>”今最もアツい”子育て情報の口コミを募集しどんどん配信します。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="text-center">
              <img src="../assets/images/svg/group-2758.svg" alt="">
              <h3 class="mb-3 mt-2">＃登録無料</h3>
              <p class="mb-4">実際に利用した保育料のみお支払いいただくことで、簡単便利にご利用いただけます！</p>
            </div>
            <a href="#">
              <img src="../assets/images/sinkitouroku.png" alt="" class="img-fluid rounded">
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import {Hooper, Slide} from "hooper";
import 'hooper/dist/hooper.css';

export default {
  name: "KigaruniHoiku",
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        autoPlay: false,
        playSpeed: "2000",
        infiniteScroll: true
      }
    };
  },
  components: {
    Hooper,
    Slide
  }
}
</script>

<style scoped>

</style>