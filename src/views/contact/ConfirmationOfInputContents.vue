<template>
  <div class="contact-main">
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{name:'ContactUs'}">お問い合わせ</router-link>
            </li>
            <li class="breadcrumb-item" aria-current="page">お問い合わせ内容の入力</li>
            <li class="breadcrumb-item active" aria-current="page">お問い合わせ内容のご確認</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container py-5">
      <h3 class="m-0 --color-e6006e text-2xl"><img src="../../assets/images/svg/title-left.svg" alt="EXY" class="mb-2"> 入力内容のご確認</h3>
      <hr class="my-2">
      <p class="mb-4">以下の内容をご確認のうえ、『送信する』ボタンを押して送信してください。</p>

      <div class="text-lg border-bottom border-dark">
        お問合せ内容
      </div>

      <div class="py-3 border-bottom">
        <div class="row">
          <div class="col-3">お名前</div>
          <div class="col-9">田中花</div>
        </div>
      </div>
      <div class="py-3 border-bottom">
        <div class="row">
          <div class="col-3">メールアドレス</div>
          <div class="col-9">tanaka@ezweb.ne.jp</div>
        </div>
      </div>
      <div class="py-3 border-bottom">
        <div class="row">
          <div class="col-3">カテゴリ</div>
          <div class="col-9">予約全般</div>
        </div>
      </div>
      <div class="py-3 border-bottom">
        <div class="row">
          <div class="col-3">お問合せ詳細</div>
          <div class="col-9">今日の12時ごろに園見学の予約をいれたのですが、園から何も連絡が来ていません。<br/> 予約リクエストができているのか確認していただくことは可能でしょうか？</div>
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-center py-5">
        <router-link :to="{name:'InquiryForm'}" class="border py-2 px-5 d-inline-block border-dark me-5">内容を修正する</router-link>
        <router-link :to="{name:'InquiryComplete'}" class="exy-default-btn">送信する</router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmationOfInputContents"
}
</script>

<style scoped>

</style>