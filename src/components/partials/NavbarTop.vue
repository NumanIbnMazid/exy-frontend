<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <p>企業主導型専門予約サイト</p>
        <img src="https://dummyimage.com/160x54/adabad/ffffff&text=EXY" alt="Logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTop" aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTop">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-hand-rock-o" aria-hidden="true"></i>
              <div class="br"></div>
              ご利用の流れ
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-smile-o" aria-hidden="true"></i>
              <div class="br"></div>
              キガルニホイクとは？
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-search" aria-hidden="true"></i>
              <div class="br"></div>
              保育園をさがす
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <div class="br"></div>
              よくあるご質問
            </a>
          </li>
          <li class="nav-item">
            <a class="my-page" href="#">マイページ</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarTop"
}
</script>

<style scoped>

</style>