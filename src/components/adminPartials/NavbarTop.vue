<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../../assets/images/svg/user.svg" alt="EXY">
          <span class="ps-3 text-lg fw-bold">COCOROHOIKUEN 弁天町園</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTop" aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTop">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link " :to="{name: 'UsageFlow'}">
                <div class="position-relative">
                  <img src="../../assets/images/svg/notification.svg" alt="EXY">
                  <span class="position-absolute top-0 start-70 translate-middle badge border border-light rounded-circle bg-danger "><span class="">3</span></span>
                </div>
                <div class="br"></div>
                <span class="text-xs">お知らせ</span> 
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'KigaruniHoiku'}">
                <div class="position-relative">
                  <img src="../../assets/images/svg/message.svg" alt="EXY">
                  <span class="position-absolute top-0 start-75 translate-middle badge border border-light rounded-circle bg-danger "><span class="">2</span></span>
                </div>
                <div class="br"></div>
                <span class="text-xs">トーク</span>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../../assets/images/svg/setting.svg" alt="EXY">
                <div class="br"></div>
                <span class="text-xs">園情報設定</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark opacity-1" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item text-center" href="#">園基本情報設定</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-center" href="#">定型文設定</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-center" href="#">ユーザー情報</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-center" href="#">通知設定</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-center" href="#"><i class="fa fa-lock"></i> ログアウト</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
    <div class="row p-0">
      <div class="col-md-6 p-0">
        <a class="btn  w-100" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Link with href
        </a>
      </div>
      <div class="col-md-6 p-0">
        <a class="btn  w-100" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Link with href
        </a>
      </div>
    </div>
    <div class="row position-absolute collapse bg-light w-100" id="collapseExample">
      <!-- <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </div> -->
      <p class="p-5 "> Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "NavbarTop"
}
</script>

<style scoped>

</style>