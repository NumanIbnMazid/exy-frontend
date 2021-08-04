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
            class="btn btn-link text-decoration-none text-dark float-end"
          >
            年間指導計画
          </router-link>
          <router-link
            to="/admin/plan-page-record-2"
            class="btn btn-link color-cb3a82 float-end"
          >
            <i class="fa fa-pencil"></i> 全体的な計画
          </router-link>
        </div>
      </div>

      <div class="row bg-white my-5 p-3 border">
        <div class="col-md-12 p-0 m-0">
          <div class="row">
            <div class="col-md-6">
              <span>全体的な計画 <small>（2021年度）</small></span>
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
                  <h3 class="mt-5">保育課程</h3>
                </div>
              </div>
            </div>
            <div class="col-md-6 p-3">
              <table class="table table-bordered">
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
            <table class="table table-bordered mb-0">
              <thead>
                <tr>
                  <th class="bg-light">保育理念</th>
                  <td>
                    <span class="invisible">Blank Blank Blank Blank Blank</span>
                  </td>
                  <th class="bg-light">保育方針</th>
                  <td>
                    <span class="invisible">Blank Blank Blank Blank Blank</span>
                  </td>
                  <th class="bg-light">保育目標</th>
                  <td>
                    <span class="invisible">Blank Blank Blank Blank Blank</span>
                  </td>
                </tr>
              </thead>
            </table>

            <table
              v-for="tbl in firstTable"
              :key="tbl"
              class="table-bordered table mb-0"
              data-bs-toggle="modal"
              data-bs-target="#thisPageModal"
            >
              <thead>
                <tr class="bg-light">
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                  <th class="text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
              </tbody>
            </table>
            <div class="text-end my-2">
              <button
                class="
                  btn
                  rounded-circle
                  border border-3 border-secondary
                  text-secondary
                "
                @click="firstTable < 2 ? firstTable++ : ''"
              >
                <i class="fa fa-plus"></i>
              </button>
            </div>

            <table
              class="table table-bordered mb-0"
              data-bs-toggle="modal"
              data-bs-target="#thisPageModalExp"
            >
              <tbody>
                <tr>
                  <td rowspan="5" class="special-td bg-secondary">
                    年齢別保育目標
                  </td>
                  <td class="bg-light text-center">０歳児</td>
                  <td>
                    <span class="invisible">Blank Blank Blank Blank Blank</span>
                  </td>
                  <td class="bg-light text-center">3歳児</td>
                  <td>
                    <span class="invisible">Blank Blank Blank Blank Blank</span>
                  </td>
                </tr>
                <tr>
                  <td class="bg-light text-center">1歳児</td>
                  <td>
                    <span class="invisible">Blank Blank Blank Blank Blank</span>
                  </td>
                  <td class="bg-light text-center">4歳児</td>
                  <td>
                    <span class="invisible">Blank Blank Blank Blank Blank</span>
                  </td>
                </tr>
                <tr>
                  <td class="bg-light text-center">2歳児</td>
                  <td>
                    <span class="invisible">Blank Blank Blank Blank Blank</span>
                  </td>
                  <td class="bg-light text-center">5歳児</td>
                  <td>
                    <span class="invisible">Blank Blank Blank Blank Blank</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              class="table table-bordered"
              data-bs-toggle="modal"
              data-bs-target="#thisPageModalExp"
            >
              <thead>
                <tr>
                  <td colspan="8" class="bg-secondary text-center">
                    保育の内容
                  </td>
                </tr>
                <tr class="text-center bg-light">
                  <td colspan="2" class="another-table">年齢</td>
                  <td>０歳児</td>
                  <td>１歳児</td>
                  <td>２歳児</td>
                  <td>３歳児</td>
                  <td>４歳児</td>
                  <td>５歳児</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="special2-td bg-secondary text-center" rowspan="4">
                    養護
                  </td>
                  <td class="special3-td bg-light text-center">生命の保持</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
                <tr>
                  <td class="special3-td bg-light text-center">情緒の安定</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
                <tr>
                  <td class="special3-td bg-light text-center">人間関係</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
                <tr>
                  <td class="special3-td bg-light text-center">健康</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
                <tr>
                  <td class="special2-td bg-secondary text-center" rowspan="3">
                    養護
                  </td>
                  <td class="special3-td bg-light text-center">環境</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
                <tr>
                  <td class="special3-td bg-light text-center">言葉</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
                <tr>
                  <td class="special3-td bg-light text-center">表現</td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                  <td class="blank-td"></td>
                </tr>
                <tr v-for="ri in rowInc" :key="ri" class="text-center">
                  <td class="blank-td bg-light" colspan="2"></td>
                  <td class="blank-td" colspan="6"></td>
                </tr>
              </tbody>
            </table>
            <div class="text-end my-2">
              <button
                class="
                  btn
                  rounded-circle
                  border border-3 border-secondary
                  text-secondary
                "
                @click="rowInc++"
              >
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="thisPageModal" tabindex="-1">
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
                  <input
                    type="text"
                    placeholder="社会的責任"
                    class="form-control rounded-0 bg-light"
                  />
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
    <div class="modal fade" id="thisPageModalExp" tabindex="-1">
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
                  <input
                    type="text"
                    placeholder="社会的責任"
                    class="form-control rounded-0 bg-light"
                  />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstTable: 1,
      rowInc: 12,
    };
  },
};
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
.special-td {
  width: 40px;
}
.special2-td {
  width: 30px;
}
.special3-td {
  width: 140px;
}
.another-table {
  width: 100px;
}
</style>