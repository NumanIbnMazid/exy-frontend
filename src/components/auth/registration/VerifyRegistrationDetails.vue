<template>
  <div class="profile-info-page">
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
    <section class="verfy-registration-info-area mt-5 mb-5">
      <div class="container">
        <div class="auth-page-header mb-5">
          <div class="text-lg fw-bold border-bottom mb-2">
            <img src="../../../assets/images/svg/title-left.svg" alt="EXY" />
            登録内容の確認
          </div>
          <h6 class="m-0 p-0 header-bar-heading">
            <big>|</big>
            <span>会員情報</span>
          </h6>
        </div>
        <div class="verfy-registration-info-body">
          <div class="card">
            <div class="card-body">
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>お名前（ふりがな</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">保育 花子（ほいく はなこ）</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>メールアドレス</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">abc@xxx.co.jp</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>パスワード</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">●●●●●●●●</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>性別</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">女性</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>生年月日</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">1990年（平成2年） 01月 01日</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>ニックネーム</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">花子ママ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>電話番号</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">09012345678</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>郵便番号</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">〒550-0014</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>住所</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">
                        大阪府大阪市西区北堀江1-2-27 AXIS SOUTH
                        四ツ橋ビル407号室
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer bg-white">
              <router-link :to="{ name: 'ProfileInfo' }">
                <p class="pull-right"><u>会員情報を修正する ＞</u></p>
              </router-link>
            </div>
          </div>
          <div class="auth-page-header mb-3 mt-3">
            <h6 class="m-0 p-0 header-bar-heading">
              <big>|</big>
              <span>お子さまの情報</span>
            </h6>
          </div>

          <div class="card">
            <div class="card-header">
              <h5>第一子</h5>
            </div>
            <div class="card-body">
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>お名前（ふりがな）</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">保育 太郎（ほいく たろう </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>性別</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">男の子</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>生年月日</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">2021年（令和3年）01月 01日 <span>生まれ</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>アレルギーの有無</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">あり</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>備考（アレルギー）</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">卵アレルギーがあります</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group-container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="bg-light input-label">
                      <span>基礎疾患の有無</span>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group-container-right">
                      <p class="m-0 p-0">なし</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer bg-white">
                 <router-link :to="{ name: 'ProfileInfo' }">
                <p class="pull-right"><u>会員情報を修正する ＞ </u></p>
              </router-link>
            </div>
          </div>
          <div class="verfy-registration-info-footer mt-5 mb-5">
              <div class="row">
                  <div class="col-md-9 mx-auto">
                         <p>下記のサービス利用規約、個人情報の取り扱いについて確認、同意のうえボタンをクリックしてください。</p>
                  </div>
                  <div class="col-md-6 mx-auto">
                      <div class="row">
                          <div class="col-md-6">
                              <p> <img src="../../../assets/images/icon/Rectangle 1094.png" alt="EXY" /> <u>サービス利用規約</u></p>
                          </div>
                          <div class="col-md-6">
                              <p>  <img src="../../../assets/images/icon/Rectangle 1094.png" alt="EXY" /> <u>個人情報の取り扱い</u></p>
                          </div>
                          <div class="col-md-12 mt-3">
                              <label> <input type="checkbox"> 利用規約およびプライバシーポリシーに同意する</label>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="form-group text-center">
            <router-link :to="{ name: 'ProfileInfo' }">
              <button
                type="submit"
                class="btn text-xl exy-default-btn-outline rounded-0 mt-4"
              >
                次へ
              </button>
            </router-link>
            <router-link :to="{ name: 'VerifyRegistrationDetails' }">
              <button
                type="submit"
                class="btn text-xl exy-default-btn rounded-0 mt-4"
              >
                次へ
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script>
export default {
  name: "VerifyRegistrationDetails",
};
</script>

<style scoped>
.profile-info-radio {
  margin-left: 25px;
}
.header-bar-heading span {
  margin-left: 10px;
}
.exy-default-btn {
    margin-left: 10px;
}
</style>