<template>
  <div class="row justify-content-center">
    <div class="col-11 col-sm-9 col-md-6">
      <div class="desiire-station-select-btn-area mb-5">
        <div class="row">
          <div class="col-3">
            <router-link :to="{name:'SearchFromAlongLine.Hyogo'}">
              <img src="../../../../assets/images/desire-station-icon/hyogo.png" alt="EXY" class="img-fluid"/>
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
    <div class="solid-border"></div>
  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>

</style>