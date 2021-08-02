<template>
  <div class="mypage-profile">
    <div class="mypage-profile-header">
      <h4>プロフィール設定</h4>
    </div>
    <hr />
    <div class="mypage-profile-profileinof">
      <button class="exy-default-btn" @click="modalSHow = true">
        91 no page
      </button>
      <button class="exy-default-btn">85 to 90 no page</button>
    </div>

    <div class="modal show" aria-hidden="true" v-if="modalSHow">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="close" @click="modalSHow = false">
            <i class="fa fa-times-circle text-2xl"></i>
          </div>
          <div class="p-4 mt-4">
            <h4 class="m-0 p-0 color-cb3a82">希望カテゴリ登録</h4>
            <p class="m-0 p-0">
              保育園をさがす上で希望しているカテゴリを５つお選びください
            </p>
          </div>
          <div class="v-step-one-main p-4 pt-2">
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <h6>保育サービス</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 体験保育（一時保育）
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 体験保育（一時保育）
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 体験保育（一時保育）
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <h6 class="bg-707070">子どもの年齢</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> ０歳児（6ヶ月未満）
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> ０歳児（6ヶ月以上）
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> １歳児
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> ２歳児
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> ３歳児
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> ４歳児
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> ５歳児
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <h6>キャンペーン</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> あり
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <h6 class="bg-707070">キャンペーン</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 延長保育（早朝）
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 延長保育（夕方）
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 夜間保育
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> お泊まり保育
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <h6>休日保育</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 土曜日
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 日曜日
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 祝日
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <h6 class="bg-707070">サービス</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 連絡アプリ導入済み
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 保護者会等あり
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 保護者参加行事あり
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 制服・指定服あり
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> アレルギー対応あり
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> ベビーカー置き場あり
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 駐車場・駐輪場あり
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> リフレッシュ利用可能
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> リフレッシュ利用可能
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <h6>園規模</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 小規模（19名以下）
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 中規模（59名以下）
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 大規模（60名以上）
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <h6 class="bg-707070">広さ</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 80平米以下
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 81〜200平米以下
                        </label>
                      </div>
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> 200平米以上
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <h6>園庭</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> あり
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <h6 class="bg-707070">慣らし保育</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-3">
                        <label class="text-base">
                          <input type="checkbox" /> なし
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-select-single-area">
              <div class="category-select-single-area-header">
                <h6>園庭</h6>
              </div>
              <div class="category-select-single-area-body">
                <div class="row">
                  <div class="col-md-11 mx-auto">
                    <div class="row">
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 習い事
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 手ぶら登園
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> こだわり給食
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 送迎サービス
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 夕食・補食
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 運動教育
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 英語教育
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 幼児教育
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="text-base">
                          <input type="checkbox" /> 就学前教育
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group text-center mt-5">
              <button class="exy-default-btn">希望カテゴリ登録</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoModal",
  data() {
    return {
      modalSHow: false,
    };
  },
  methods: {
    modalToggle: function () {
      this.modalSHow = !this.modalSHow;
    },
  },
};
</script>

<style lang="scss">
.exy-default-btn {
  margin-left: 10px;
}

.modal {
  display: block;
  background: rgba(0, 0, 0, 0.7);

  .modal-content {
    background: #fff;
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
.text-base {
  font-size: 0.8rem !important;
}
.category-select-single-area-header {
  position: relative;
  h6 {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 3px 5px 0 0;
    border-radius: 6px;
    width: 109px;
    text-align: center;
    margin: 15px 0;
    font-size: 13px;
    height: 27px;
    line-height: 21px;
    &::after {
      content: "";
      display: block;
      clear: both;
      height: 1px;
      width: 86%;
      background: #ccc;
      position: absolute;
      top: 27px;
      left: 112px;
    }
  }
}
.bg-707070 {
    background: #707070;
    color: #fff;
}
</style>