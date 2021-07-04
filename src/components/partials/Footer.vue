<template>
  <footer class="footer-area bg-light">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-3">
          <div class="footer-item">
            <h4>SERVICE</h4>
            <ul>
              <li><a href="#"><strong>TOP</strong></a></li>
              <li><a href="#">キガルニホイクとは</a></li>
              <li><a href="#">料金・割引・助成</a></li>
              <li><a href="#">予約ポイント</a></li>
              <li><a href="#">法人利用について</a></li>
              <li><a href="#">キガルニホイクギフト</a></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="footer-item">
            <h4>CONTENTS</h4>
            <ul>
              <li><a href="#">保活情報</a></li>
              <li><a href="#">子育て支援情報</a></li>
              <li><a href="#">園特集</a></li>
              <li><a href="#">ユーザーインタビュー</a></li>
              <li><a href="#">園口コミ情報</a></li>
              <li><a href="#">コラム一覧</a></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-5 offset-md-1">
          <div class="footer-item">
            <div class="fb-page">
              <img src="../../assets/images/facebook.png" alt="Facebook" class="d-block w-100">
              <div class="footer-icon">
                <ul>
                  <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="footer-item">
            <h4>GUIDE</h4>
            <ul>
              <li><a href="#">キガルニホイクの使い方</a></li>
              <li><a href="#">ご利用の流れ</a></li>
              <li><a href="#">月極保育</a></li>
              <li><a href="#">体験保育予約</a></li>
              <li><a href="#">園見学</a></li>
              <li><a href="#">預かり先募集</a></li>
              <li><a href="#">ご利用いただく皆さまへ (ガイドライン)</a></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="footer-item">
            <h4>INFORMATION</h4>
            <ul>
              <li>
                <router-link :to="{name:'Faqs'}">よくある質問</router-link>
              </li>
              <li><router-link :to="{name:'ContactUs'}">お問い合わせ</router-link></li>
              <li><a href="#">サービス利用規約</a></li>
              <li><a href="#">ポイント利用規約</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
              <li><a href="#">特定商取引法に基づく表示</a></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="footer-item">
            <h4>運営会社</h4>
            <ul>
              <li><a href="#">企業情報</a></li>
              <li><a href="#">採⽤情報</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <p class="m-0">Copyright ©2021
              <router-link to="/">株式会社EXY</router-link>
              | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>