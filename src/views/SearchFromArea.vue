<template>
  <div class="py-5">
    <div class="container">
      <h3 class="border-bottom text-xl"><span class="color-cb3a82">エリア</span>からさがす</h3>
      <div class="row my-5 justify-content-center">
        <div class="col-11 col-sm-9 col-md-7">
          <div class="desiire-station-select-btn-area">
            <div class="row">
              <div class="col-3">
                <a href="#">
                  <img src="../assets/images/desire-station-icon/hyogo.png" alt="EXY" class="img-fluid"/>
                </a>
              </div>
              <div class="col-6">
                <a href="#">
                  <img src="../assets/images/desire-station-icon/kyoto.png" alt="EXY" class="img-fluid"/>
                </a>
                <div class="row mt-2">
                  <div class="col-6">
                    <a href="#">
                      <img src="../assets/images/desire-station-icon/osaka.png" alt="EXY" class="img-fluid"/>
                    </a>
                  </div>
                  <div class="col-6">
                    <a href="#">
                      <img src="../assets/images/desire-station-icon/nara.png" alt="EXY" class="img-fluid"/>
                    </a>
                  </div>
                  <div class="col-12">
                    <a href="#">
                      <img src="../assets/images/desire-station-icon/wakayama.png" alt="EXY" class="img-fluid"/>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <a href="#">
                  <img src="../assets/images/desire-station-icon/shiga.png" alt="EXY" class="img-fluid"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="solid-border"></div>
      <h3 class="border-bottom border-2 pb-2 mt-5 text-xl">その他の条件を指定する</h3>
      <search-from-the-area/>
    </div>
  </div>
</template>

<script>
import SearchFromTheArea from "../components/search/SearchFromTheArea";

export default {
  name: "SearchFromArea",
  components: { SearchFromTheArea },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.exy-default-btn {
  margin-left: 10px;
}

.desiire-station-select-btn-area {
  .col-3 {
    margin: 0;
    padding: 5px;
  }

  .col-6 {
    margin: 0;
    padding: 5px;
  }

  .col-12 {
    margin: -35px 0 0 0;
  }
}
</style>