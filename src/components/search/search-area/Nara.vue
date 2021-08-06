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
                  <img src="../../../assets/images/desire-station-icon/nara_selected.png" alt="EXY" class="img-fluid"/>
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
              <img src="../../../assets/images/desire-station-icon/shiga.png" alt="EXY" class="img-fluid"/>
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
              奈良エリア
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExy">
            <div class="accordion-body row">
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">奈良市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">天理市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">五條市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">香芝市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">山添村
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">安堵町
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">田原本町
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">高取町
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">広陵町
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">吉野郡
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">大和高田市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">橿原市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">御所市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">葛城市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">斑鳩町
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">三郷町
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">川西町
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">明日香村
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">上牧町
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">大和郡山市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">桜井市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">生駒市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">宇陀市
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">平群町
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">三宅町
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">宇陀郡
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">河合町
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">王寺町
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
  name: "Nara"
}
</script>

<style scoped>

</style>