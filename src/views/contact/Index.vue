<template>
  <div class="contact-main">
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">お問い合わせ</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container py-5">
      <h3 class="m-0 --color-e6006e"><img src="../../assets/images/svg/title-left.svg" alt="EXY" class="mb-2"> お問い合せ</h3>
      <hr class="my-1">
      <div class="mt-4 mb-5">
        <router-link :to="{name:'Faqs'}">よくあるご質問を準備しております。お問い合わせ前にご確認くださいませ。</router-link>
      </div>

      <div class="d-flex align-items-center justify-content-between p-3 bg-light mb-5">
        <div><span class="--color-e6006e">＃</span>現在ご利用中・ご利用をご検討中の親御さま</div>
        <div class="text-center shadow-sm bg-white rounded hw-100">
          <div class="--color-e6006e pt-1">
            <i class="fa fa-envelope-o fa-4x"></i>
          </div>
          <div class="">
            <a href="#" class="--color-e6006e text-decoration-underline">フォーム</a>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-between p-3 bg-light mb-5">
        <div><span class="--color-e6006e">＃</span>法人利用をご検討の方</div>
        <div class="text-center shadow-sm bg-white rounded hw-100">
          <div class="--color-e6006e pt-1">
            <i class="fa fa-envelope-o fa-4x"></i>
          </div>
          <div class="">
            <a href="#" class="--color-e6006e text-decoration-underline">フォーム</a>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-between p-3 bg-light mb-5">
        <div><span class="--color-e6006e">＃</span>サポーター園をご検討の方</div>
        <div class="text-center shadow-sm bg-white rounded hw-100">
          <div class="--color-e6006e pt-1">
            <i class="fa fa-envelope-o fa-4x"></i>
          </div>
          <div class="">
            <a href="#" class="--color-e6006e text-decoration-underline">フォーム</a>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-between p-3 bg-light mb-5">
        <div><span class="--color-e6006e">＃</span>キガルニホイクへ広告掲載をご検討の方</div>
        <div class="text-center shadow-sm bg-white rounded hw-100">
          <div class="--color-e6006e pt-1">
            <i class="fa fa-envelope-o fa-4x"></i>
          </div>
          <div class="">
            <a href="#" class="--color-e6006e text-decoration-underline">フォーム</a>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-between p-3 bg-light mb-5">
        <div>
          <span class="--color-e6006e">＃</span>本社へお問合せ
          <span class="d-block">取材依頼、プレスリリースや採用など本社へのお問い合わせはこちら</span>
        </div>
        <div class="text-center shadow-sm bg-white rounded hw-100">
          <div class="--color-e6006e pt-1">
            <i class="fa fa-envelope-o fa-4x"></i>
          </div>
          <div class="">
            <a href="#" class="--color-e6006e text-decoration-underline">フォーム</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>

</style>