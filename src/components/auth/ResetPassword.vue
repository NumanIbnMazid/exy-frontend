<template>
    <div class="login-page">
         <div class="breadcrumb-border">
            <div class="container">
                <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                    <router-link to="/">Top</router-link>
                    </li>
                    <li class="breadcrumb-item">会員登録 ｜ ログイン</li>
                    <li class="breadcrumb-item active">メールアドレスの確認</li>
                </ol>
                </nav>
            </div>
        </div>
        <section class="reset-password-area mt-4">
           <div class="container">
                <div class="registration-header">
                    <h3 class="m-0 p-0">確認メール送信完了</h3>
                    <hr>
                </div>
           </div>
           <div class="reset-password-body mt-5 mb-5">
               <div class="row">
                   <div class="col-md-6 offset-3">
                       <p class="text-center mb-4">以下のメールアドレス宛にメールを送信しました。</p>
                       <div class="reset-pass-email bg-light text-center p-4">
                           <p class="m-0 p-0">m**********y@g****.**m</p>
                       </div>
                       <p class="pull-right m-0 p-0" >※メールアドレスはプライバシー保護のため、一部のみ表示されます。</p>


                       <div class="form-group text-center mb-5">
                           <button type="submit" class="btn text-xl exy-default-btn mt-5">メールアドレスで登録</button>
                       </div>
                   </div>
               </div>
           </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "ResetPassword"
    }
</script>

<style scoped>

</style>