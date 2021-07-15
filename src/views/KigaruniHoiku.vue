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
      <img src="../assets/images/mask-group_9.png" alt="EXY" class="img-fluid" style="width: 100%">
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
          <img src="../assets/images/svg/title-left.svg" alt="EXY" class="mb-2">
          キガルニホイクとは？
          <img src="../assets/images/svg/title-right.svg" alt="EXY" class="mb-2">
        </h2>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div class="single-item">
              <img src="../assets/images/Mask_Group_14@2x.png" alt="EXY" class="img-fluid">
              <h4>全ての手続きをWEBで完結</h4>
              <p>一度の登録で予約から決済、大量の入園書類の記入まで、全てをWEBで完結させます。</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div class="single-item">
              <img src="../assets/images/Mask_Group_15@2x.png" alt="EXY" class="img-fluid">
              <h4>リアルな保育内容で比較</h4>
              <p>明確な運営⽅針・運営内容・⼝コミから、
                ⼦育て⽅針や⽣活リズムにあった保育園
                選びができます。</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div class="single-item">
              <img src="../assets/images/Mask_Group_16@2x.png" alt="EXY" class="img-fluid">
              <h4>息抜き・手抜き子育て情報満載</h4>
              <p>”今最もアツい”子育て情報の口コミを募集しどんどん配信します。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="kigarni-hoik">
      <div class="container">
        <div class="text-center">
          <div class="fw-bold">
            <img src="../assets/images/svg/left-2751.svg" alt="EXY" class="mb-2">
            キガルニホイクの
            <img src="../assets/images/svg/right-2751.svg" alt="EXY" class="mb-2">
          </div>
          <h3 class="mb-5 mt-2"><span class="--color-e6006e">＃</span>使い方</h3>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="single-item">
              <div class="row">
                <div class="col-md-6">
                  <div class="text-center p-4">
                    <img src="../assets/images/Mask_Group_35@2x.png" alt="EXY" class="img-fluid">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="content">
                    <div class="inner">
                      <h3>入園申込のその前に まずは体験保育を</h3>
                      <p>今、話題の”体験保育”を利用することで、
                        子育て方針や生活リズムにあっているかを
                        しっかりと見極めることができます。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="single-item">
              <div class="row">
                <div class="col-md-6">
                  <div class="text-center p-4">
                    <img src="../assets/images/Mask_Group_36@2x.png" alt="EXY" class="img-fluid">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="content">
                    <div class="inner">
                      <h3>入園申込のその前に まずは体験保育を</h3>
                      <p>今、話題の”体験保育”を利用することで、
                        子育て方針や生活リズムにあっているかを
                        しっかりと見極めることができます。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="single-item">
              <div class="row">
                <div class="col-md-6">
                  <div class="text-center p-4">
                    <img src="../assets/images/Mask_Group_37@2x.png" alt="EXY" class="img-fluid">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="content p-4">
                    <div class="inner">
                      <h3>入園申込のその前に まずは体験保育を</h3>
                      <p>今、話題の”体験保育”を利用することで、
                        子育て方針や生活リズムにあっているかを
                        しっかりと見極めることができます。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="other-uses">
      <div class="container">
        <h3 class="mb-4 mt-2 text-center"><span class="--color-e6006e">＃</span>その他の使い方</h3>

        <div class="row">
          <div class="col-md-6">
            <div class="single-item">
              <h5>急な用事や体調不良にも対応</h5>
              <p>ご家族の急な病気の際や、どうしてもはずせない用事の</p>
              <p>際など、必要な時に必要なだけ一時保育が利用できます。</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="single-item">
              <h5>産前・産後のサポートに</h5>
              <p>子育てを一人で抱え込まず、子育ての休息や、上の子・</p>
              <p>下の子のための親子時間がつくれます。</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="single-item">
              <h5>最新の子育て情報で子育てをもっと気軽に</h5>
              <p>お父さん・お母さんから寄せられたリアルな情報を徹底調査し、</p>
              <p>子育てを頑張るあたなに役立つ情報を発信します！</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="single-item">
              <h5>子育ての悩みを相談し合う</h5>
              <p>ママ・パパユーザー同士で相談し合うのはもちろんのこと、</p>
              <p>保育士さんからのアドバイスも得られるかも。</p>
            </div>
          </div>
        </div>

        <div class="text-end">
          <a href="#" class="text-decoration-underline">もっとキガルニホイクの使い方をみる ＞</a>
        </div>
      </div>
    </section>

    <section class="rules">
      <div class="container">
        <div class="text-center">
          <h3>ご利用いただく際のルールとマナーについて</h3>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-9">
            <p>キガルニホイクでは、ご利用者様同士でやり取りができるコンテンツもご用意しています。</p>
            <p>お互いを思いやり、楽しく気持ちの良いコミュニケーションが取れるようご協力お願い致します。</p>
            <p>（※ご利用の前には、ガイドラインをご一読ください。）</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Voice of the user -->
    <section class="voice-user">
      <div class="container">
        <h3 class="mb-5 mt-2 text-center"><span class="--color-e6006e">＃</span>ご利用者様の声</h3>

        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="single-item">
              <div class="row">
                <div class="col-md-5">
                  <div class="text-center py-3 px-4">
                    <img src="../assets/images/Mask_Group_20@2x.png" alt="EXY" class="img-fluid">
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="content">
                    <div class="inner">
                      <h4>WEBで完結できる楽さを改めて感じました</h4>
                      <p>利用時の書類が全部WEBで登録できるの本当に助かります。
                        ペーパーレス社会になってきているし、何よりも、仕事の休憩中や通勤
                        時間に内容を確認できたりするので、家にいないときの隙間時間を利用
                        できるのが有り難いです。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="single-item">
              <div class="row">
                <div class="col-md-7">
                  <div class="content">
                    <div class="inner">
                      <h4>希望通りの保育園を見つけることができました</h4>
                      <p>世の中に出回っている保育園のまとめサイトって、ちゃんとした情報載
                        ってなかったり、情報が更新されてなくて結局自分で情報収集しないと
                        いけないのが大変。でもこのサイトを見てみたら、気になっていた保育
                        園のコラムや実際の口コミ見れたりして、情報収集する手間なく保育園
                        に応募できました！</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="text-center py-3 px-4">
                    <img src="../assets/images/Mask_Group_21@2x.png" alt="EXY" class="img-fluid">
                  </div>
                </div>
              </div>
            </div>
            <div class="single-item">
              <div class="row">
                <div class="col-md-5">
                  <div class="text-center py-3 px-4">
                    <img src="../assets/images/Mask_Group_22@2x.png" alt="EXY" class="img-fluid">
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="content">
                    <div class="inner">
                      <h4>現地で財布を取り出す面倒がない！</h4>
                      <p>以前、一時保育を利用した際、お釣りの受け渡しでトラブルがあって、
                        PayPayでの支払いもあったみたいだけど、そもそもPayPay登録して
                        なくて…。現金払い面倒だな～って思っていたので、サイト内でクレ
                        ジット引き落とししてもらえるのは、 現金持ち歩かない私としては
                        とても助かりました！</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="text-center">
          <div class="fw-bold">
            <img src="../assets/images/svg/left-2751.svg" alt="EXY" class="mb-2">
            キガルニホイクは
            <img src="../assets/images/svg/right-2751.svg" alt="EXY" class="mb-2">
          </div>
          <h3 class="mb-3 mt-2"><span class="--color-e6006e">＃</span>登録無料</h3>
          <p class="mb-4">実際に利用した保育料のみお支払いいただくことで、簡単便利にご利用いただけます！</p>
        </div>

        <registration-link/>

      </div>
    </section>

  </div>
</template>

<script>
import {Hooper, Slide} from "hooper";
import 'hooper/dist/hooper.css';
import RegistrationLink from "../components/RegistrationLink";

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
    RegistrationLink,
    Hooper,
    Slide
  }
}
</script>

<style scoped>

</style>