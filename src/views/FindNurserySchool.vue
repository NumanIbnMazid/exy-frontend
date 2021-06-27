<template>
  <div class="find-nursery-school">

    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">保育園をさがす</li>
          </ol>
        </nav>
      </div>
    </div>

    <section class="position-relative">
      <img src="../assets/images/ID2266338_m@2x.png" class="img-fluid h-100" alt="EXY">
      <div class="position-absolute top-0 w-100 h-100">
        <div class="container h-100">
          <div class="d-flex justify-content-between align-items-center h-100">
            <div>
              <h3>保育園検索</h3>
            </div>
            <div class="bg-white px-3 py-4 rounded-3">
              <form action="">
                <div class="row g-3 align-items-center mb-3">
                  <div class="col-4">
                    <label for="purposeOfUse" class="col-form-label">ご利用目的</label>
                  </div>
                  <div class="col-8">
                    <input type="text" id="purposeOfUse" class="form-control">
                  </div>
                </div>
                <div class="row g-3 align-items-center mb-3">
                  <div class="col-4">
                    <label for="dateTime" class="col-form-label">日時</label>
                  </div>
                  <div class="col-8">
                    <input type="text" id="dateTime" class="form-control">
                  </div>
                </div>
                <div class="row g-3 align-items-center mb-3 justify-content-end">
                  <div class="col-4">
                    <input type="text" class="form-control" placeholder="開始時間">
                  </div>
                  <div class="col-4">
                    <input type="text" class="form-control" placeholder="終了時間">
                  </div>
                </div>
                <div class="row g-3 align-items-center mb-3">
                  <div class="col-4">
                    <label for="ageOfChild" class="col-form-label">お子様の年齢</label>
                  </div>
                  <div class="col-8">
                    <select id="ageOfChild" class="form-control">
                      <option value="">お子様の年齢</option>
                      <option value="">０歳 ０ヶ月</option>
                      <option value="">０歳 １ヶ月〜２ヶ月</option>
                      <option value="">０歳 ３ヶ月〜５ヶ月</option>
                      <option value="">０歳 ６ヶ月〜１１ヶ月</option>
                      <option value="">１歳</option>
                      <option value="">２歳</option>
                      <option value="">３歳</option>
                      <option value="">４歳</option>
                      <option value="">５歳</option>
                    </select>
                  </div>
                </div>
                <div class="row g-3 align-items-center justify-content-center mt-2">
                  <div class="col-9">
                    <button class="btn exy-default-btn w-100" type="button">検索する</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <button class="exy-default-btn w-100 py-3" type="button">この条件で検索する</button>

        <h4 class="heading my-4">その他の条件を追加する</h4>
        <button class="exy-default-btn w-100 py-3" type="button">この条件で検索する</button>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "FindNurserySchool"
}
</script>

<style scoped>

</style>