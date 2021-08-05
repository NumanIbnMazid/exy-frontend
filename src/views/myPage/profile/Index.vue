<template>
  <div class="mypage-profile">
    <div class="mypage-profile-header">
      <h4>プロフィール設定</h4>
    </div>
    <div class="mypage-profile-profileinof">
      <div class="row">
        <div class="col-md-2">
          <div class="mypage-profile-prfileimage text-center">
            <img src="../../../assets/images/mypage/daiga-ellaby--0KARP5Jh_8-unspl.png"/>
            <p class="text-base">
              <u>プロフィール写真を変更</u>
            </p>
          </div>
        </div>
        <div class="col-md-10">
          <div class="form-group-container">
            <div class="row">
              <div class="col-md-3">
                <div class="bg-light input-label">
                  <span>名前（ふりがな）</span>
                </div>
              </div>
              <div class="col-md-8">
                <div class="input-group-container-right">
                  <p class="m-0 p-0">田中 愛（たかな あい）</p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group-container">
            <div class="row">
              <div class="col-md-3">
                <div class="bg-light input-label">
                  <span>ユーザーネーム</span>
                </div>
              </div>
              <div class="col-md-9">
                <div class="input-group-container-right">
                  <div class="info" v-if="username == true">
                    <div class="row">
                      <div class="col-md-9">
                        <span>そらくんママ</span>
                      </div>
                      <div class="col-md-3 text-right">
                        <button
                          type="button"
                          @click="activeUsername"
                          class="btn btn-link m-0 p-0"
                        >
                          そらくんママ
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="row" v-if="username == false">
                    <div class="col-md-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="そらくんママ"
                      />
                    </div>
                    <div class="col-md-3">
                      <button
                        type="button"
                        class="btn btn-outline-light border text-dark"
                        @click="activeUsername"
                      >
                        変更する
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mypage-profile-main bg-light p-3">
      <div
        class="
          mypage-profile-singlebox
          shadow shadow-sm
          bg-white
          p-3
          rounded-2
          mb-2
        "
      >
        <div class="mypage-profile-singlebox-label">メールアドレス</div>
        <div class="mypage-profile-singlebox-border"></div>
        <div class="mypage-profile-singlebox-main">
          <div class="d-flex justify-content-between" v-if="email == true">
            <div class="">
              <p class="m-0 p-0">sora@teamexy.com</p>
            </div>
            <div class="">
              <button
                type="button"
                @click="changeEmail"
                class="btn btn-link m-0 p-0"
              >
                変更する
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-between" v-if="email == false">
            <div>
              <input
                type="text"
                class="form-control"
                placeholder="sora@teamexy.com"
                value="sora@teamexy.com"
              />
            </div>
            <div>
              <button
                type="button"
                class="btn btn-outline-light border text-dark"
                @click="changeEmail"
              >
                変更する
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          mypage-profile-singlebox
          shadow shadow-sm
          bg-white
          p-3
          rounded-2
          mb-2
        "
      >
        <div class="mypage-profile-singlebox-label">電話番号</div>
        <div class="mypage-profile-singlebox-border"></div>
        <div class="mypage-profile-singlebox-main">
          <div class="d-flex justify-content-between" v-if="phone == true">
            <div>
              <p class="m-0 p-0">090-0000-0000</p>
            </div>
            <div>
              <button
                type="button"
                @click="changePhone"
                class="btn btn-link m-0 p-0"
              >
                変更する
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-between" v-if="phone == false">
            <div>
              <input
                type="text"
                class="form-control"
                placeholder="090-0000-0000"
                value="090-0000-0000"
              />
            </div>
            <div class="">
              <button
                type="button"
                class="btn btn-outline-light border text-dark"
                @click="changePhone"
              >
                変更する
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          mypage-profile-singlebox
          shadow shadow-sm
          bg-white
          p-3
          rounded-2
          mb-2
        "
      >
        <div class="mypage-profile-singlebox-label">住所</div>
        <div class="mypage-profile-singlebox-border"></div>
        <div class="mypage-profile-singlebox-main">
          <div
            class="d-flex justify-content-between align-items-center"
            v-if="address == true"
          >
            <div>
              <p class="m-0 p-0">0000-0000</p>
              <p class="m-0 p-0">選択してください</p>
              <p class="m-0 p-0">例）大阪市西区北堀江1-2-27</p>
            </div>
            <div>
              <button
                type="button"
                @click="changeAddress"
                class="btn btn-link m-0 p-0"
              >
                変更する
              </button>
            </div>
          </div>
          <div class="" v-if="address == false">
            <div>
              <div class="row">
                <div class="col-md-9">
                  <div class="input-group rounded-0">
                    <span class="input-group-text rounded-0">郵便番号</span
                    >
                    <input
                      type="text"
                      class="form-control rounded-0"
                      placeholder="郵便番号"
                    />
                  </div>
                </div>
                <div class="col-md-3 text-right">
                  <button
                    type="button"
                    class="btn btn-outline-light border text-dark pull-right"
                    @click="changePhone"
                  >
                    住所自動入力
                  </button>
                </div>
                <div class="col-md-9">
                  <div class="input-group rounded-0">
                    <span class="input-group-text rounded-0">所在地（都道府県）</span
                    >
                    <select class="form-control rounded-0">
                      <option value="1">選択してください</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="input-group rounded-0">
                    <span class="input-group-text rounded-0">所在地（市区町村/番地）</span
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="例）大阪市西区北堀江1-2-27"
                      value="例）大阪市西区北堀江1-2-27"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="input-group rounded-0">
                    <span class="input-group-text rounded-0">所在地（建物名）</span
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="例）◯◯マンション 100号室"
                      value="例）◯◯マンション 100号室"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <button
                    type="button"
                    class="
                      btn btn-outline-light
                      border
                      text-dark
                      pull-right
                      mt-2
                    "
                    @click="changeAddress"
                  >
                    住所自動入力
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          mypage-profile-singlebox
          shadow shadow-sm
          bg-white
          p-3
          rounded-2
          mb-2
        "
      >
        <div class="mypage-profile-singlebox-label">電話番号</div>
        <div class="mypage-profile-singlebox-border"></div>
        <div class="mypage-profile-singlebox-main">
          <div class="d-flex justify-content-between">
            <div>
              <p class="m-0 p-0">平成元年(1989年) 05月 01日</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          mypage-profile-singlebox
          shadow shadow-sm
          bg-white
          p-3
          rounded-2
          mb-2
        "
      >
        <div class="mypage-profile-singlebox-label">性別</div>
        <div class="mypage-profile-singlebox-border"></div>
        <div class="mypage-profile-singlebox-main">
          <div>
            <div>
              <p class="m-0 p-0">女性</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          mypage-profile-singlebox
          shadow shadow-sm
          bg-white
          p-3
          rounded-2
          mb-2
        "
      >
        <div class="mypage-profile-singlebox-label">書類登録</div>
        <div class="mypage-profile-singlebox-border"></div>
        <div class="mypage-profile-singlebox-main">
          <div class="d-flex justify-content-between">
            <div>
              <p class="m-0 p-0">本人確認</p>
            </div>
            <div>
              <button type="button" class="btn btn-link m-0 p-0">
                そらくんママ >
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          shadow shadow-sm
          bg-white
          p-3
          rounded-2
          mb-2
          d-flex
          justify-content-between
        "
      >
        <div>顔写真（送迎者登録）</div>
        <div class="mypage-profile-singlebox-main">
          <div>
            <div>
              <button type="button" class="btn btn-link m-0 p-0">
                登録完了 >
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          shadow shadow-sm
          bg-white
          p-3
          rounded-2
          mb-2
          d-flex
          justify-content-between
        "
      >
        <div>勤務証明書</div>
        <div class="mypage-profile-singlebox-main">
          <div class="d-flex justify-content-between">
            <div>
              <button
                type="button"
                class="btn btn-outline-light border text-dark pull-right mt-2"
              >
                登録完了 >
              </button>
            </div>
            <div>
              <button type="button" class="btn btn-link mt-2">
                登録完了 >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      username: true,
      email: true,
      phone: true,
      address: true,
    };
  },
  methods: {
    activeUsername() {
      this.username = !this.username;
    },
    changeEmail() {
      this.email = !this.email;
    },
    changePhone() {
      this.phone = !this.phone;
    },
    changeAddress() {
      this.address = !this.address;
    },
  },
};
</script>

<style lang="scss">
.mypage-profile-header h4 {
  color: #333333;
  position: relative;
  margin-bottom: 25px;
  &::after {
    content: "";
    display: block;
    clear: both;
    background: #333333;
    width: 78%;
    height: 1px;
    position: absolute;
    right: 7px;
    top: 14px;
  }
}
.mypage-profile-prfileimage {
  p {
    font-size: 13px;
  }
}
.form-group-container {
  margin: 0 !important;
}
.mypage-profile-singlebox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .mypage-profile-singlebox-label {
    margin-right: 10px;
    width: 15%;
  }
  .mypage-profile-singlebox-border {
    margin-right: 10px;
    width: 2%;
    &::after {
      content: "";
      display: block;
      clear: both;
      height: 20px;
      width: 1px;
      background: #666;
    }
  }
  .mypage-profile-singlebox-main {
    width: 80%;
  }
}
.btn-link {
  color: #333333 !important;
}
</style>