<template>
  <div>
    <div class="position-relative">
      <img src="../../assets/images/consultation-corner/kosodatesoudan22x-100.png" class="w-100" alt="EXY">
      <div class="position-absolute top-0 w-100 h-100">
        <div class="container">
          <div class="position-absolute bottom-0 pb-2 pb-md-3 pb-lg-5">
            <router-link :to="{name:'TalkAboutChildRearing'}" class="link d-inline-block bg-white border border-color-e6006e fw-bold">子育て・保育の悩みを相談してみよう <i class="fa fa-angle-right ps-4"></i></router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="breadcrumb-border">
      <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Top</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">子育て相談コーナー</li>
        </ol>
      </nav>
    </div>

    <div class="container-fluid pt-4">
      <div class="row">
        <div class="col-md-8 col-lg-9 mb-4 mb-md-0">
          <router-view></router-view>
        </div>
        <div class="col-md-4 col-lg-3">
          <right-sidebar/>
        </div>
      </div>
    </div>

    <div class="space-100"></div>
  </div>
</template>

<script>
import RightSidebar from "../consultation-corner/RightSidebar";

export default {
  name: "Main",
  components: { RightSidebar }
}
</script>

<style scoped lang="scss">
.link {
  position: relative;
  padding: 10px 10px 10px 35px;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    height: 100%;
    width: 25px;
    background: #cb3a82;
    border-radius: 0 40px 40px 0;
  }
}
</style>