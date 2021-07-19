<template>
  <div class="password-reset-success-page">
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
            <li class="breadcrumb-item">会員登録 ｜ ログイン</li>
            <li class="breadcrumb-item active">パスワードの再設定</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="container password-reset-success-area mt-4">
      <div class="registration-header">
        <div class="text-lg fw-bold border-bottom">
          <img src="../../assets/images/svg/title-left.svg" alt="EXY" />
          パスワードの再設定完了
        </div>
      </div>
      <div class="password-reset-success-body mt-5 mb-5 text-center">
        <p class="fw-bold">パスワードの再設定が完了しました。「ログイン」でお進みください。</p>
         <router-link :to="{ name: 'Login' }">
                <button
                  type="submit"
                  class="btn text-xl exy-default-btn rounded-0"
                >
                  ログイン
                </button>
              </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordResetSuccess",
};
</script>

<style scoped>
</style>