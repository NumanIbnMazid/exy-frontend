<template>
  <div class="admin-nav">
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
    <div class="row p-0 nav-collapse w-100">
      <div class="col-md-6 p-0">
        <a class="btn btn-collapse w-100 py-2 fw-bold"  @click="activeClass==0 ? activeClass=1 : activeClass=0" :class="[ activeClass === 1 ? 'active' : '', activeClass === 2 ? 'btn-collapse-3' : '' ]" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          キガルニホイク
        </a>
      </div>
      <div class="col-md-6 p-0">
        <a class="btn btn-collapse-1 w-100 py-2" @click="activeClass==0 ? activeClass=2 : activeClass=0" :class="[ activeClass === 2 ? 'active1' : '', activeClass === 1 ? 'btn-collapse-2' : '']" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          キガルニホイクシ
        </a>
      </div>
    </div>
    <div class="row position-absolute collapse bg-white w-100 nav-collapse-body pt-4 mx-5" id="collapseExample">
     <div class="col-1 text-center ps-4 position-relative">
       <div class="inner-2 w-100 h-100"></div>
       <router-link :to="{name:'todo', params:{page:65}}">
        <div class="pt-2 inner-1 shadow  position-absolute">
          <img src="../../assets/images/svg/clock.svg" alt="EXY" class="w-50">
            <p class="text-xs pt-3">保育開始・完了報告</p>
        </div>
       </router-link>
     </div>
     <div class="col-1 text-center position-relative">
       <div class="inner-2 w-100 h-100"></div>
       <div class="pt-2 inner-1 shadow  position-absolute">
        <img src="../../assets/images/svg/note.svg" alt="EXY" class="w-50">
        <p class="text-xs pt-3">予約リスト</p>
       </div>
     </div>
     <div class="col-1 text-center position-relative">
       <div class="inner-2 w-100 h-100"></div>
       <div class="pt-2 inner-1 shadow  position-absolute">
        <img src="../../assets/images/svg/baby-emoji.svg" alt="EXY" class="w-75">
        <p class="text-xs pt-3">園児情報</p>
       </div>
     </div>
     <div class="col-1 text-center position-relative">
       <div class="inner-2 w-100 h-100"></div>
       <div class="pt-2 inner-1 shadow  position-absolute">
         <img src="../../assets/images/svg/calculator.svg" alt="EXY" class="w-75">
       <p class="text-xs pt-3">売上管理</p>
       </div>
     </div>
     <div class="col-1 text-center position-relative">
       <div class="inner-2 w-100 h-100"></div>
       <div class="pt-2 inner-1 shadow  position-absolute">
        <img src="../../assets/images/svg/note-fill.svg" alt="EXY" class="w-50">
        <p class="text-xs pt-3">記録と計画</p>
       </div>
     </div> 
     <div class="col-1 text-center position-relative">
       <div class="inner-2 w-100 h-100"></div>
       <div class="pt-2 inner-1 shadow  position-absolute">
        <img src="../../assets/images/svg/calendar.svg" alt="EXY" class="w-50">
        <p class="text-xs pt-3">空き状況設定</p>
       </div>
     </div>
     <div class="col-1 text-center position-relative">
       <div class="inner-2 w-100 h-100"></div>
       <div class="pt-2 inner-1 shadow  position-absolute">
        <img src="../../assets/images/svg/man-calendar.svg" alt="EXY" class="w-75">
        <p class="text-xs pt-4">口コミ一覧</p>
       </div>
     </div>
     <div class="col-1 text-center position-relative">
       <div class="inner-2 w-100 h-100"></div>
       <div class="pt-2 inner-1 shadow  position-absolute">
        <img src="../../assets/images/svg/currency.svg" alt="EXY" class="w-75">
        <p class="text-xs pt-4">料金プラン</p>
       </div>
     </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "NavbarTop",
  data() {
    return {
      activeClass: 0,
    }
  }
}
</script>

<style scoped>

</style>