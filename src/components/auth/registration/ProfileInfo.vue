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
    <section class="profile-info-one-area mt-5 mb-5">
      <div class="container">
        <div class="auth-page-header mb-5">
          <div class="text-lg fw-bold border-bottom mb-2">
            <img src="../../../assets/images/svg/title-left.svg" alt="EXY"/>
            会員情報の登録
          </div>
          <p class="m-0 p-0">
            会員情報の登録を行うにあたって、必要事項を入力してください。
          </p>
        </div>
        <div class="profile-info-one-body">
          <form novalidate>
            <div class="card">
              <div class="card-header">
                <h5>会員情報入力</h5>
              </div>
              <div class="card-body">
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">お名前（ふりがな）</div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <p>保育 花子（ほいく はなこ）</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
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
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span
                        >パスワード
                          <span class="badge badge-exy">必 須</span>
                        </span>
                        <small>半角／英数</small>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <input type="text" class="form-control"/>
                        <p class="m-0 p-0">
                          ※パスワードに使用可能な文字数は6文字以上36文字以内です。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span
                        >パスワード再入力
                          <span class="badge badge-exy">必 須</span>
                        </span>
                        <small>半角／英数</small>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <input type="text" class="form-control"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span
                        >性別 <span class="badge badge-exy">必 須</span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <label><input type="radio"/> 男性</label>
                        <label class="profile-info-radio"
                        ><input type="radio"/> 女性</label
                        >
                        <label class="profile-info-radio"
                        ><input type="radio"/> 未回答</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span
                        >生年月日 <span class="badge badge-exy">必 須</span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <div class="row">
                          <div class="col-md-3">
                            <div class="form-group row mt-3">
                              <div class="col-sm-10 m-auto">
                                <select class="form-control bg-light" name="year">
                                  <option v-for="year in years" :key="year">{{ year }}</option>
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
                        <p class="m-0 p-0">※登録後は変更することはできません。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span
                        >ニックネーム <span class="badge badge-exy">必 須</span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <input type="text" class="form-control" placeholder="例）花子まま">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span
                        >電話番号 <span class="badge badge-exy">必 須</span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <input type="text" class="form-control w-50" placeholder="例）09012345678">
                        <p class="m-0 p-0">※ハイフンは付けずに入力してください</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h5 class="text-center">下記をご登録いただくと、保育ご予約時に入力の手間が省けます。</h5>
              </div>
              <div class="card-body">
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span> 郵便番号</span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <div class="row">
                          <div class="col-md-3">
                            <input type="text" class="form-control">
                          </div>
                          <div class="col-md-2">
                            <input type="text" class="form-control" placeholder="住所自動入力">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span> 所在地（都道府県）</span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <div class="row">
                          <div class="col-md-5">
                            <select class="form-control">
                              <option>選択してください</option>
                              <option>選択してください</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span>所在地（市区町村/番地）</span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <input type="text" class="form-control" placeholder="例）大阪市西区北堀江1-2-27">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group-container">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="bg-light input-label">
                        <span>所在地（建物名）</span>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="input-group-container-right">
                        <input type="text" class="form-control" placeholder="例）◯◯マンション 100号室">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group text-center">
              <router-link :to="{name:'ProfileInfoTwo'}">
                <button type="submit" class="btn text-xl exy-default-btn rounded-0 mt-4">次へ</button>
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
  name: "ProfileInfo",
  data() {
    return {
      years: []
    }
  },
  mounted() {
    this.initYear()
  },
  methods: {
    initYear() {
      const years = []
      for (let i = new Date().getFullYear(); i >= 1980; i--) {
        years.push(i);
      }
      this.years = years
    }
  }
}
</script>

<style scoped>
.profile-info-radio {
  margin-left: 25px;
}
</style>