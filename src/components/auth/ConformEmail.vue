<template>
  <div class="conform-email-page">
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
            <li class="breadcrumb-item">
              <router-link :to="{ name: Login }"
                >会員登録 ｜ ログイン</router-link
              >
            </li>
            <li class="breadcrumb-item active">メールアドレスの確認</li>
          </ol>
        </nav>
      </div>
    </div>
    <section class="conform-email-area mt-5 mb-5">
      <div class="container">
        <div class="auth-page-header mb-5">
          <div class="text-lg fw-bold border-bottom mb-2">
            <img src="../../assets/images/svg/title-left.svg" alt="EXY" />
            メールアドレスの確認
          </div>
          <p class="m-0 p-0 text-center">
            下記の項目を全て入力して、「次へ」でお進みください
          </p>
        </div>
        <div class="conform-email-body">
          <form>
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-3">
                  <div class="bg-light input-label">
                    <span>お名前</span>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <p class="m-0 p-0">
                      ※会員情報に登録している氏名を入力してください。
                    </p>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row mt-3">
                          <label class="col-sm-2 col-form-label">姓：</label>
                          <div class="col-sm-10 m-auto">
                            <input
                              type="text"
                              class="form-control bg-light"
                              name="name"
                              placeholder="例）保育"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row mt-3">
                          <label class="col-sm-2 col-form-label">名:</label>
                          <div class="col-sm-10 m-auto">
                            <input
                              type="text"
                              class="form-control bg-light"
                              name="flower"
                              placeholder="例）花子"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group-container">
              <div class="row">
                <div class="col-md-3">
                  <div class="bg-light input-label">
                    <span>生年月日</span>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <div class="row">
                      <div class="col-md-3">
                        <div class="form-group row mt-3">
                          <div class="col-sm-10 m-auto">
                            <select class="form-control bg-light" name="year">
                              <option value="1990">1990</option>
                              <option value="1991">1991</option>
                              <option value="1992">1992</option>
                            </select>
                          </div>
                          <label class="col-sm-2 col-form-label">年</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group row mt-3">
                          <div class="col-sm-10 m-auto">
                            <select class="form-control bg-light" name="month">
                              <option>--</option>
                              <option value="01">01</option>
                              <option value="02">02</option>
                              <option value="02">03</option>
                              <option value="02">04</option>
                              <option value="02">05</option>
                              <option value="02">06</option>
                              <option value="02">07</option>
                              <option value="02">08</option>
                              <option value="02">09</option>
                              <option value="02">10</option>
                              <option value="02">11</option>
                              <option value="02">12</option>
                            </select>
                          </div>
                          <label class="col-sm-2 col-form-label">月</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group row mt-3">
                          <div class="col-sm-10 m-auto">
                            <select class="form-control bg-light" name="month">
                              <option>--</option>
                              <option value="01">01</option>
                              <option value="02">02</option>
                              <option value="02">03</option>
                              <option value="02">04</option>
                              <option value="02">05</option>
                              <option value="02">06</option>
                              <option value="02">07</option>
                            </select>
                          </div>
                          <label class="col-sm-2 col-form-label">日</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-3">
                  <div class="bg-light input-label">
                    <span>電話番号</span>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <div class="row">
                      <div class="col-md-6">
                        <input
                          type="text"
                          name="phone"
                          class="form-control"
                          placeholder="例）09012345678"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group-container">
              <div class="row">
                <div class="col-md-3">
                  <div class="bg-light input-label">
                    <span>郵便番号</span>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="input-group-container-right">
                    <div class="row">
                      <div class="col-md-5">
                        <input
                          type="text"
                          name="postalCode"
                          class="form-control"
                          placeholder="例）1234567"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group text-center mt-5">
              <router-link :to="{name:'Login'}">
                <button
                type="submit"
                class="btn text-xl exy-default-btn-outline rounded-0"
              >
                戻る    
              </button>
              </router-link>
              
              <router-link :to="{name:'ResetPassword'}">
                 <button
                type="submit"
                class="btn text-xl exy-default-btn rounded-0"
              >
                次へ
              </button>
              </router-link>
             
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ConformEmail",
};
</script>

<style scoped>
</style>