<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <div id="_ia">
          <span>企業主導型専門予約サイト</span>
        </div>
        <img src="../../assets/images/logo.png" alt="Logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTop" aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTop">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'UsageFlow'}">
              <img src="../../assets/images/svg/hand.svg" alt="EXY">
              <div class="br"></div>
              ご利用の流れ
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'KigaruniHoiku'}">
              <img src="../../assets/images/svg/smile-emoji.svg" alt="EXY">
              <div class="br"></div>
              キガルニホイクとは？
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'FindNurserySchool'}">
              <img src="../../assets/images/svg/search.svg" alt="EXY">
              <div class="br"></div>
              保育園をさがす
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'Faqs'}">
              <img src="../../assets/images/svg/question.svg" alt="EXY">
              <div class="br"></div>
              よくあるご質問
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="my-page" :to="{name:'Login'}">ログイン</router-link>
<!--            <router-link class="my-page" :to="{name:'MyPage'}">マイページ</router-link>-->
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