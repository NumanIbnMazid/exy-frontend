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
          <button class="btn btn-link text-decoration-none text-dark float-end">
            年間指導計画
          </button>
          <button class="btn btn-link color-cb3a82 float-end">
            <i class="fa fa-pencil"></i> 全体的な計画
          </button>
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
            <table class="table-bordered table">
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

            <table class="table table-bordered">
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
.prefill-td{
  width: 40px;
}
</style>