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
      <h3 class="m-0 --color-e6006e text-2xl"><img src="../../assets/images/svg/title-left.svg" alt="EXY" class="mb-2"> お問い合わせが完了しました</h3>
      <hr class="my-1">
      <div class="my-5 text-center">
        <div>
          お問い合わせいただき、誠にありがとうございます。<br /> 担当者からご登録のメールアドレスへご連絡させていただきますので、<br /> 今しばらくお待ちくださいますよう、お願い申し上げます。
        </div>
        <div class="my-4">
          ※ご返信日数の目安：1〜10営業日以内
        </div>
        <router-link :to="{name:'Home'}" class="border py-2 px-5 d-inline-block border-dark">戻る</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InquiryComplete"
}
</script>

<style scoped>

</style>