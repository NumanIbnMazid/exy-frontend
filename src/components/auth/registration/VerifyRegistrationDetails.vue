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
                      <p class="m-0 p-0">保育 太郎（ほいく たろう</p>
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
                      <p class="m-0 p-0">
                        2021年（令和3年）01月 01日 <span>生まれ</span>
                      </p>
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
                <p>
                  下記のサービス利用規約、個人情報の取り扱いについて確認、同意のうえボタンをクリックしてください。
                </p>
              </div>
              <div class="col-md-6 mx-auto">
                <div class="row">
                  <div class="col-md-6">
                    <p>
                      <img
                        src="../../../assets/images/icon/Rectangle 1094.png"
                        alt="EXY"
                      />
                      <u>サービス利用規約</u>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p>
                      <img
                        src="../../../assets/images/icon/Rectangle 1094.png"
                        alt="EXY"
                      />
                      <u>個人情報の取り扱い</u>
                    </p>
                  </div>
                  <div class="col-md-12 mt-3">
                    <label>
                      <input type="checkbox" />
                      利用規約およびプライバシーポリシーに同意する</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group text-center verification-info-action-btn">
            <router-link :to="{ name: 'ProfileInfo' }">
              <button
                type="submit"
                class="btn exy-default-btn-outline rounded-0"
              >
                次へ
              </button>
            </router-link>
            <!-- <router-link @click="vstep1 = true" :to="">
              <button
                type="submit"
                class="btn text-xl exy-default-btn rounded-0 mt-4"
              >
                次へ
              </button>
            </router-link> -->
            <button
              type="button"
              @click="vstep1 = true"
              class="exy-default-btn"
            >
              次へ
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="space-100"></div>

    <div class="modal show" aria-hidden="true" v-if="vstep1">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="close" @click="vstep1 = false">
            <i class="fa fa-times-circle text-2xl"></i>
          </div>
          <div class="p-4 mt-4 text-center">
            <h4 class="border-bottom text-base fw-bold">
              会員登録完了しました！
              <br />
              保育ご予約の方は、引き続き登録をお願いいたします。
            </h4>
          </div>
          <div class="v-step-one-main">
            <h4 class="--color-e6006e text-base fw-bold">
              今すぐ保育予約するなら…
            </h4>
            <div class="form-group text-center">
              <router-link :to="{ name: 'Home' }">
                <button class="exy-default-btn">書類登録へ</button>
              </router-link>
            </div>
            <h4 class="--color-e6006e text-base fw-bold mt-5">
              今すぐ保育予約するなら…
            </h4>
            <div class="form-group text-center point-get-btn">
              <button class="btn btn-warning" @click="toggle">
                書類登録へ
              </button>
              <div class="point-get-btn-ribbon">10point get!</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal show" aria-hidden="true" v-if="vstep2">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="close" @click="vstep2 = false">
            <i class="fa fa-times-circle text-2xl"></i>
          </div>
          <div class="p-4 mt-2">
            <div class="modal-heading-text">
              <p class="fw-bold text-center">
                アンケートにご回答いただいたご利用者さまに10POINTをプレゼント中！
              </p>
            </div>

            <p class="m-0 p-0 text-base text-center">
              この度はキガルニホイクをご登録いただき誠にありがとうございます。
            </p>
            <p class="m-0 p-0 text-base text-center">
              サービス発展のためのユーザーアンケートにご協力をお願いいたします。
            </p>

            <div class="card mt-3">
              <div class="card-header">
                <h4 class="text-base">当サイトのご利用目的</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> 保育園さがし
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" />
                      体験保育(一時保育)予約
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> 月極保育予約
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> 園見学予約
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> 子育て情報掲示板
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" />
                      子育て相談コーナー
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> 園口コミ
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> 保活情報
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> その他
                    </label>
                  </div>
                  <div class="col-md-9">
                    <input
                      type="text"
                      name="text"
                      class="form-control"
                      placeholder="簡単に内容をご記載ください"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-header">
                <h4 class="text-base">当サイトをお知りになったきっかけ</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> WEB広告をみて
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> SNSをみて
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> お友達からの紹介
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> 保育園からの紹介
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> その他
                    </label>
                  </div>
                  <div class="col-md-9">
                    <input
                      type="text"
                      name="text"
                      class="form-control"
                      placeholder="簡単に内容をご記載ください"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h4 class="text-base">
                  今後もサービス改善のアンケートをお送りしてもよろしいでしょうか？
                </h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> はい
                    </label>
                  </div>
                  <div class="col-md-3">
                    <label>
                      <input type="checkbox" name="checkbox" /> いいえ
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center py-2">
              <router-link :to="{ name: 'Home' }">
                <button
                  type="button"
                  @click="step2 = false"
                  class="exy-default-btn mt-3"
                >
                  アンケートに回答する
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerifyRegistrationDetails",
  data() {
    return {
      vstep1: false,
      vstep2: false,
    };
  },
  methods: {
    toggle: function () {
      this.vstep1 = false;
      this.vstep2 = true;
    },
    back: function () {
      this.vstep1 = true;
      this.vstep2 = false;
    },
  },
};
</script>

<style scoped lang="scss">
.profile-info-radio {
  margin-left: 25px;
}
.header-bar-heading span {
  margin-left: 10px;
}

.modal {
  display: block;
  background: rgba(0, 0, 0, 0.7);

  .modal-content {
    background: #f9fafb;
    .close {
      position: absolute;
      top: 0;
      right: 7px;
      cursor: pointer;
      z-index: 9999;
    }
    .card-body {
      .col-md-3 {
        margin-bottom: 10px !important;
        label {
          font-size: 12px;
        }
      }
    }
  }
}
.v-step-one-main {
  padding: 0 20px;
  .exy-default-btn {
    width: 90%;
  }
  .point-get-btn {
    position: relative;
    .btn-warning {
      width: 90%;
      border-radius: 0 !important;
      margin-bottom: 50px;
    }

    .point-get-btn-ribbon {
      width: 60px;
      height: 60px;
      border: 1px solid #ccc;
      text-align: center;
      border-radius: 50%;
      font-size: 11px;
      padding-top: 13px;
      position: absolute;
      top: -8px;
      background: #fff;
    }
  }
}
.modal-heading-text {
  text-align: center;
  p {
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 15px;
    padding: 4px 10px;
  }
}
.verification-info-action-btn {
  .exy-default-btn {
    margin-left: 10px;
  }
}
</style>