<template>
  <div class="row">
    <div class="col-md-6">
      <div class="desiire-station-select-btn-area">
        <div class="row">
          <div class="col-3">
            <router-link :to="{name:'SearchFromAlongLine.Hyogo'}">
              <img src="../../../../assets/images/desire-station-icon/hyogo_selected.png" alt="EXY" class="img-fluid"/>
            </router-link>
          </div>
          <div class="col-6">
            <router-link :to="{name:'SearchFromAlongLine.Kyoto'}">
              <img src="../../../../assets/images/desire-station-icon/kyoto.png" alt="EXY" class="img-fluid"/>
            </router-link>
            <div class="row mt-2">
              <div class="col-6">
                <router-link :to="{name:'SearchFromAlongLine.Osaka'}">
                  <img src="../../../../assets/images/desire-station-icon/osaka.png" alt="EXY" class="img-fluid"/>
                </router-link>
              </div>
              <div class="col-6">
                <router-link :to="{name:'SearchFromAlongLine.Nara'}">
                  <img src="../../../../assets/images/desire-station-icon/nara.png" alt="EXY" class="img-fluid"/>
                </router-link>
              </div>
              <div class="col-12">
                <router-link :to="{name:'SearchFromAlongLine.Wakayama'}">
                  <img src="../../../../assets/images/desire-station-icon/wakayama.png" alt="EXY" class="img-fluid"/>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-3">
            <router-link :to="{name:'SearchFromAlongLine.Shiga'}">
              <img src="../../../../assets/images/desire-station-icon/shiga.png" alt="EXY" class="img-fluid"/>
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
              Title
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExy">
            <div class="accordion-body row">
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Title
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExy">
            <div class="accordion-body row">
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Title
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExy">
            <div class="accordion-body row">
              <div class="col-md-6">
                <ul>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li>
                    <label class="container-checkbox">Text
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="container-checkbox">Text
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

      <railway-line/>

      <router-link :to="{name:'Search'}" class="d-block bg-cb3a82 text-center py-3 text-white text-xl mt-5">この条件で検索する</router-link>
    </div>
  </div>
</template>

<script>
import RailwayLine from "./RailwayLine";

export default {
  name: "Hyogo",
  components: { RailwayLine }
}
</script>

<style scoped>

</style>