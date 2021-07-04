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
      <h3 class="m-0 --color-e6006e"><img src="../../assets/images/svg/title-left.svg" alt="EXY" class="mb-2"> お問い合わせが完了しました</h3>
      <hr class="my-1">
      <div class="row justify-content-center">
        <div class="col-md-3">
          お問い合わせいただき、誠にありがとうございます。
          担当者から折り返しご連絡させていただきますので、
          今しばらくお待ちくださいますよう、お願い申し上げます。

          <a href="#" class="border py-2 px-4">戻る</a>
        </div>
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