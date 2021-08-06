<template>
  <div class="row">
    <div class="col-md-6">
      <div class="desiire-station-select-btn-area">
        <div class="row">
          <div class="col-3">
            <router-link :to="{name:'SearchFromArea.Hyogo'}">
              <img src="../../../assets/images/desire-station-icon/hyogo.png" alt="EXY" class="img-fluid"/>
            </router-link>
          </div>
          <div class="col-6">
            <router-link :to="{name:'SearchFromArea.Kyoto'}">
              <img src="../../../assets/images/desire-station-icon/kyoto.png" alt="EXY" class="img-fluid"/>
            </router-link>
            <div class="row mt-2">
              <div class="col-6">
                <router-link :to="{name:'SearchFromArea.Osaka'}">
                  <img src="../../../assets/images/desire-station-icon/osaka.png" alt="EXY" class="img-fluid"/>
                </router-link>
              </div>
              <div class="col-6">
                <router-link :to="{name:'SearchFromArea.Nara'}">
                  <img src="../../../assets/images/desire-station-icon/nara.png" alt="EXY" class="img-fluid"/>
                </router-link>
              </div>
              <div class="col-12">
                <router-link :to="{name:'SearchFromArea.Wakayama'}">
                  <img src="../../../assets/images/desire-station-icon/wakayama.png" alt="EXY" class="img-fluid"/>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-3">
            <router-link :to="{name:'SearchFromArea.Shiga'}">
              <img src="../../../assets/images/desire-station-icon/shiga_selected.png" alt="EXY" class="img-fluid"/>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="accordion" id="accordionExy">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              滋賀エリア
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExy">
            <div class="accordion-body row">
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">大津市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">近江八幡市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">栗東市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">湖南市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">米原市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">犬上郡
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">彦根市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">草津市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">甲賀市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">高島市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">蒲生郡
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">長浜市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">守山市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">野洲市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">東近江市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">愛知郡
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 mt-5">
      <div class="bg-cb3a82 text-center py-3 text-white text-xl">この条件で検索する</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shiga"
}
</script>

<style scoped>

</style>