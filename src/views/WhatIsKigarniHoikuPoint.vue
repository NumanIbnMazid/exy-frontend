<template>
  <div>
    <div class="breadcrumb-border">
      <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Top</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">キガルニホイクポイントとは？</li>
        </ol>
      </nav>
    </div>
    
    <div class="text-center my-4 position-relative">
      <div class="position-absolute top-0 w-100 h-100"></div>
      <img src="../assets/images/50000.png" alt="EXY" class="img-fluid w-100">
    </div>

    <div class="bg-light">
      <div class="container py-5">
        <div class="text-center mb-4">
          <div class="text-base fw-bold mb-2">
            <img src="../assets/images/group-3999.png" alt="EXY" class="mb-2">
            <span class="mx-3">たまるサービス</span>
            <img src="../assets/images/group-4000.png" alt="EXY" class="mb-2">
          </div>
        </div>

        <div class="row mt-4 mb-5">
          <div class="col-md-4">
            <div class="text-center">
              <img src="../assets/images/Image_102.png" alt="EXY" class="img-fluid">
              <div class="fw-bold text-base mt-3 mb-2">
                <span style="border-bottom: 2px solid #F2C228">保育園利用でためる</span>
              </div>
              <p class="text-sm text-start">体験保育（一時保育）、月極保育の利用でポイントがたまります！</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center">
              <img src="../assets/images/Image_103.png" alt="EXY" class="img-fluid">
              <div class="fw-bold text-base mt-3 mb-2">
                <span style="border-bottom: 2px solid #F2C228">情報提供（口コミ）でためる</span>
              </div>
              <p class="text-sm text-start">子育て情報掲示板に口コミをすると、毎月抽選でポイントをプレゼント♪</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center">
              <img src="../assets/images/Mask_Group_71.png" alt="EXY" class="img-fluid">
              <div class="fw-bold text-base mt-3 mb-2">
                <span style="border-bottom: 2px solid #F2C228">保育園の口コミを書いてためる</span>
              </div>
              <p class="text-sm text-start">体験保育（一時保育）、月極保育の利用でポイントがたまります！</p>
            </div>
          </div>
        </div>

        <div class="text-center mb-4">
          <div class="text-base fw-bold mb-2">
            <img src="../assets/images/group-3999.png" alt="EXY" class="mb-2">
            <span class="mx-3">つかえるサービス</span>
            <img src="../assets/images/group-4000.png" alt="EXY" class="mb-2">
          </div>
          <div class="text-sm">キガルニホイクポイントは下記のサービスでご利用いただけます。</div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="bg-white px-5 py-3 rounded-25">
              <div class="text-center">
                <img src="../assets/images/ID7184Nh3OpGL_AC_SX679_.png" alt="EXY" class="img-fluid">
              </div>
              <div class="text-center my-4">
                <button type="button" class="exy-default-btn rounded-pill">amazonギフト券</button>
              </div>
              <div class="d-flex align-items-center text-sm mb-2" style="color: #F2C228">
                <div class="flex-fill text-start">100ポイント</div>
                <div class="flex-fill text-center">→</div>
                <div class="flex-fill text-end">100円ギフト券</div>
              </div>
              <p class="text-sm m-0">Amazonギフト券には、100ポイント分から引き換え 可能です。引き換えはこちらからお願いします。</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="bg-white px-5 py-3 rounded-25">
              <div class="text-center">
                <img src="../assets/images/Image_105.png" alt="EXY" class="img-fluid">
              </div>
              <div class="text-center my-4">
                <button type="button" class="exy-default-btn rounded-pill">保育料金の支払い</button>
              </div>
              <div class="d-flex align-items-center text-sm mb-2" style="color: #F2C228">
                <div class="flex-fill text-start">100ポイント</div>
                <div class="flex-fill text-center">→</div>
                <div class="flex-fill text-end">100円ギフト券</div>
              </div>
              <p class="text-sm m-0">ポイントは１ポイントから使用可能です。保育料の お支払い時にご利用ください。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="border p-5 text-center">
            <h5>ポイントを確認する</h5>
            <p class="m-0">ポイントの利用可能残高は、ログイン後マイページで</p>
            <p>獲得ポイント・利用ポイント、ポイント残高をご確認いただけます。</p>
            <a href="https://kigarunihoiku/points" class="--color-e6006e">https://kigarunihoiku/points</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <registration-link/>
    </div>
    <div class="space-100"></div>
  </div>
</template>

<script>
import RegistrationLink from "../components/RegistrationLink";

export default {
  name: "WhatIsKigarniHoikuPoint",
  components: { RegistrationLink }
}
</script>

<style scoped lang="scss">
.exy-default-btn {
  padding: 5px 45px;
  background-color: #F2C228;
}
</style>