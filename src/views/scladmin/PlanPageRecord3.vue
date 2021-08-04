<template>
  <div class="w-100 bg-light">
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-12">
          <select
            name=""
            id=""
            class="form-control float-end ml-2"
            style="width: 200px"
          >
            <option v-for="i in 6" :key="i" :value="`${i} 歳児全体`">
              {{ `${i} 歳児全体` }}
            </option>
          </select>

          <span class="font-bolder float-end mt-2 mr-2 pr-2"
            >◀︎ 2021年度 ▶︎</span
          >
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
          <span class="font-bolder float-start mt-2 mr-2 pr-2"
            >◀︎ 2021年度 ▶︎</span
          >
        </div>

        <div class="col-md-6">
          <router-link
            to="/admin/plan-page-record-3"
            class="btn btn-link color-cb3a82 float-end"
          >
            <i class="fa fa-pencil"></i> 年間指導計画
          </router-link>
          <router-link
            to="/admin/plan-page-record-2"
            class="btn btn-link text-decoration-none text-dark float-end"
          >
            全体的な計画
          </router-link>
        </div>
      </div>

      <div class="row bg-white my-5 p-3 border">
        <div class="col-md-12 p-0 m-0">
          <div class="row">
            <div class="col-md-6">
              <span>年間指導計画 <small>（2021年度）</small></span>
            </div>
            <div class="col-md-6">
              <button class="exy-default-btn float-end">ダウンロード</button>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6 m-0">
                  <h5>COCOROHOIKUEN 弁天町園</h5>
                </div>
                <div class="col-md-6 m-0">
                  <h6>１歳児全体</h6>
                  <h3 class="mt-5">年間指導計画</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6 p-3">
              <table
                class="table table-bordered"
                data-bs-toggle="modal"
                data-bs-target="#thisPageModal2"
              >
                <tbody>
                  <tr>
                    <td class="text-center">担当</td>
                    <td class="text-center">主任</td>
                    <td class="text-center">園長</td>
                  </tr>
                  <tr>
                    <td class="blank-td"></td>
                    <td class="blank-td"></td>
                    <td class="blank-td"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="row p-3">
            <table
              class="table-bordered table"
              data-bs-toggle="modal"
              data-bs-target="#thisPageModal1"
            >
              <thead>
                <tr class="bg-light">
                  <td class="text-center">年間目標</td>
                  <td class="text-center">家族との連携</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
              </tbody>
            </table>

            <table
              class="table table-bordered"
              data-bs-toggle="modal"
              data-bs-target="#thisPageModal1"
            >
              <thead>
                <tr>
                  <td></td>
                  <td>１期（４〜６月）</td>
                  <td>２期（７〜９月）</td>
                  <td>３期（10〜12月）</td>
                  <td>４期（１〜３月）</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="prefill-td">子どもの姿</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
                <tr>
                  <td class="prefill-td">ねらい</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
                <tr>
                  <td class="prefill-td">養護</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
                <tr>
                  <td class="prefill-td">教育</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
                <tr>
                  <td class="prefill-td">環境構成</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
                <tr>
                  <td class="prefill-td">保育者の援助</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="thisPageModal1" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="thisPageModal">内容入力</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <label for="" class="border-bottom mb-2">タイトル</label>

                  <h6>社会的責任</h6>
                </div>
                <div class="form-group mt-2">
                  <label for="" class="border-bottom mb-2">本文</label>
                  <textarea
                    name=""
                    id=""
                    rows="6"
                    class="form-control rounded-0 bg-light"
                  >
                  </textarea>
                </div>
              </div>
              <div class="col-md-7">
                <ul class="list-group rounded-0">
                  <li
                    class="
                      list-group-item
                      border-top-0 border-start-0 border-end-0
                    "
                  >
                    <h6 class="d-inline-block">
                      一人ひとりのリズムで生活し、安心して過ごす。
                    </h6>
                    <button
                      class="
                        btn btn-secodery
                        text-white
                        rounded-0
                        border-0
                        bg-cb3a82
                        btn-sm
                        float-end
                      "
                    >
                      挿入
                    </button>
                  </li>
                  <li
                    class="
                      list-group-item
                      border-top-0 border-start-0 border-end-0
                    "
                  >
                    <h6 class="d-inline-block">保育者との信頼関係を深める。</h6>
                    <button
                      class="
                        btn btn-secodery
                        text-white
                        rounded-0
                        border-0
                        bg-cb3a82
                        btn-sm
                        float-end
                      "
                    >
                      挿入
                    </button>
                  </li>
                  <li
                    class="
                      list-group-item
                      border-top-0 border-start-0 border-end-0
                    "
                  >
                    <h6 class="d-inline-block">
                      衛生的で安全な環境の中で身体活動や探索活動を十分行い運動機能や探索意欲を高める。
                    </h6>
                    <button
                      class="
                        btn btn-secodery
                        text-white
                        rounded-0
                        border-0
                        bg-cb3a82
                        btn-sm
                        float-end
                      "
                    >
                      挿入
                    </button>
                  </li>
                </ul>
                <button class="btn btn-secondary float-end mt-3">
                  <i class="fa fa-plus border rounded-circle p-1"></i>
                  定型文を追加する
                </button>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secodery border rounded-0"
              data-bs-dismiss="modal"
            >
              キャンセル
            </button>
            <button
              type="button"
              class="
                btn btn btn-secodery
                text-white
                rounded-0
                border-0
                bg-cb3a82
              "
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="thisPageModal2" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="thisPageModal">内容入力</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row ms-5 ps-4">
              <div class="col-md-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    出雲由規
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    酒井美央
                  </label>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    安井紗羽
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    高崎寧音
                  </label>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    杉本恵美莉
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    藤川光子
                  </label>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    及川伊織
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    古沢郁代
                  </label>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    北山一葉
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    山中琴葉
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secodery border rounded-0"
              data-bs-dismiss="modal"
            >
              キャンセル
            </button>
            <button
              type="button"
              class="
                btn btn btn-secodery
                text-white
                rounded-0
                border-0
                bg-cb3a82
              "
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-nav {
  display: none !important;
}

.blank-td {
  height: 5rem;
}
.prefill-td {
  width: 40px;
}
</style>