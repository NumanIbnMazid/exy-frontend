<template>
  <div class="password-reset-page">
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">会員登録 ｜ ログイン</li>
            <li class="breadcrumb-item active">パスワードの再設定</li>
          </ol>
        </nav>
      </div>
    </div>
    <section class="password-reset-area mt-5">
      <div class="container">
        <div class="auth-page-header">
          <div class="text-lg fw-bold border-bottom mb-4"><img src="../../assets/images/svg/title-left.svg" alt="EXY"> パスワードの再設定</div>
          <p class="m-0 p-0">下記の項目を全て入力して、「次へ」でお進みください</p>
        </div>
        <div class="password-reset-body">
          <form>
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-3">
                  <div class="bg-light input-label">
                    メールアドレス
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="input-field">
                    <input type="email" class="form-control" name="email" placeholder="例）abc@xxx.co.jp">
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PasswordReset"
}
</script>

<style scoped>

</style>