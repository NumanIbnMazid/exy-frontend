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
            <li class="breadcrumb-item active" aria-current="page">お問い合わせ内容の入力</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container py-5">
      <h3 class="m-0 --color-e6006e text-2xl"><img src="../../assets/images/svg/title-left.svg" alt="EXY" class="mb-2"> お問い合せ</h3>
      <hr class="my-2">
      <label class="color-707070">
        <input type="radio">
        受付時間：24時間 (サポートデスクからの返答は平日10:00-18:00となります)
      </label>
      <div class="my-4">
        <p>皆さまのご意見・ご質問はこちらのフォームからお寄せください。<br/>またご不明点がすぐに解決できるよう多数のFAQをご用意しております。解決しなかった場合は、以下よりお問い合わせをお願いいたします。<br/>出来る限り迅速に対応いたします。</p>
      </div>

      <div class="row py-5">
        <div class="col-md-9">
          <form action="#" method="post">
            <div class="mb-3 row">
              <label for="input1" class="col-sm-4 col-form-label color-3d3442">お名前</label>
              <div class="col-sm-8">
                <input type="text" class="form-control border-2 bg-fafafa" id="input1">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="input2" class="col-sm-4 col-form-label color-3d3442">メールアドレス</label>
              <div class="col-sm-8">
                <input type="text" class="form-control border-2 bg-fafafa" id="input2">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="input3" class="col-sm-4 col-form-label color-3d3442">メールアドレス（確認用）</label>
              <div class="col-sm-8">
                <input type="text" class="form-control border-2 bg-fafafa" id="input3">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="input4" class="col-sm-4 col-form-label color-3d3442">お名前</label>
              <div class="col-sm-8">
                <select class="form-control border-2 bg-fafafa w-auto" id="input4">
                  <option value="">カテゴリを選択してください</option>
                  <option value="">カテゴリを選択してください</option>
                  <option value="">ご利用の前に</option>
                  <option value="">アカウント登録</option>
                  <option value="">予約全般</option>
                  <option value="">予約キャンセルについて</option>
                  <option value="">お支払い</option>
                  <option value="">保育完了報告</option>
                  <option value="">園口コミ</option>
                  <option value="">子育て情報掲示板</option>
                  <option value="">子育て相談コーナー</option>
                  <option value="">トラブル</option>
                  <option value="">サポーター園募集</option>
                  <option value="">法人利用について</option>
                  <option value="">ご意見</option>
                </select>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="input5" class="col-sm-4 col-form-label color-3d3442">お問合せ詳細</label>
              <div class="col-sm-8">
                <textarea class="form-control border-2 bg-fafafa" rows="8" id="input5"></textarea>
              </div>
            </div>

            <div class="row justify-content-end mt-5 mb-3">
              <div class="col-md-8 text-center">
                <router-link :to="{name:'terms'}">
                  <span class="text-decoration-underline">利用規約、プライバシーポリシー</span>に同意の上 <br/> ご送信ください
                </router-link>

                <div class="mt-5 mb-4">
                  <label class="color-3d3442">
                    <input type="checkbox" checked>
                    利用規約およびプライバシーポリシーに同意する
                  </label>
                </div>

                <router-link :to="{name:'ConfirmationOfInputContents'}" type="submit" class="exy-default-btn">入力内容の確認へ</router-link>
              </div>
            </div>

          </form>
        </div>
      </div>

      <div class="border-top border-bottom py-4">
        ◆キガルニホイク利用をご検討の法人様<br/> 恐れ入りますが、お電話ではお問い合わせを承っておりません。詳細については、【サポーター園になる】よりご確認くださいませ。<br/> ご不明点がある場合は、上記メールフォームよりご連絡をお願いいたします。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InquiryForm"
}
</script>

<style scoped>

</style>