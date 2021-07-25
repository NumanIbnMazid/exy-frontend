<template>
  <div class="password-reset-page">
    <div class="breadcrumb-border">
      <div class="container">
        <nav
          class="py-2"
          style="--bs-breadcrumb-divider: '>'"
          aria-label="breadcrumb"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">新規会員登録</li>
          </ol>
        </nav>
      </div>
    </div>
    <section class="password-reset-area mt-5 mb-5">
      <div class="container">
        <div class="auth-page-header mb-5">
          <div class="text-lg fw-bold border-bottom mb-2">
            <img src="../../assets/images/svg/title-left.svg" alt="EXY" />
            新規会員登録（認証キー入力）
          </div>
          <p class="m-0 p-0">
            以下のメールアドレス宛に認証キーを記載したメールを送信しました。
            <br />
            メール本文内の認証キーを入力し、「次へ」でお進みください。
          </p>
        </div>
        <div class="password-reset-body">
          <form>
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-3">
                  <div class="bg-light input-label">メールアドレス</div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <p>abc@xxx.co.jp</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-3">
                  <div class="bg-light input-label">
                    <span>認証キー</span>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                            <input
                              type="text"
                              class="form-control bg-light"
                              name="otp"
                              placeholder="6桁の半角数字"
                            />
                        </div>
                      </div>
                    
                    </div>
                     <p class="m-0 p-0">
                      ※認証キーは取得後30分で無効になります
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group text-center mt-5">
              <router-link :to="{ name: 'Login' }">
                <button
                  type="buttno"
                  class="btn text-xl exy-default-btn-outline rounded-0"
                >
                  戻る
                </button>
              </router-link>
              <router-link :to="{ name: 'ProfileInfo' }">
                <button
                  type="buttno"
                  class="btn text-xl exy-default-btn rounded-0"
                >
                  次へ
                </button>
              </router-link>
            </div>
          </form>
        </div>
          <div class="setPassword-footer mt-5">
            <p>※メールアドレス送信後、認証コードメールが届かない場合下記の原因が考えられます。</p>
            <table class="table">
              <tr>
                  <td style="width: 30px;">(1)</td>
                  <td>メールが「迷惑メールフォルダ」に入っている <br> メールフォルダを再度ご連絡ください。 </td>
              </tr>
              <tr>
                  <td>(2)</td>
                  <td>「新規会員登録」時に入力したメールアドレスが間違っている <br> お手数ですが、再度「お客様登録」手続きを行ってください。</td>
              </tr>
            </table>
            <p>30分経っても確認メールが届かない場合は、お手数ですが再度「新規会員登録」手続きを行ってください。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "RegistrationOtp",
};
</script>

<style scoped>
</style>