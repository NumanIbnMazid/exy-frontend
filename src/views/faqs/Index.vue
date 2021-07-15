<template>
  <div>
    <h3 class="text-2xl bg-light border border-color-707070 py-2 px-3 m-0 rounded-top">
      <img src="../../assets/images/svg/title-left.svg" alt="EXY">
      よくあるご質問
    </h3>

    <div class="content">
      <ul class="list-unstyled m-0">
        <li class="text-base" v-for="n in 5" :key="n">
          <router-link :to="{name:'Faqs.Detail'}">
            ▶︎よくある質問トップ１を表示する：ほにゃらららんらんらーん
          </router-link>
        </li>
      </ul>
    </div>

    <div class="position-relative mt-5">
      <img src="../../assets/images/guide@2x.png" class="img-fluid w-100" alt="EXY" style="height: 250px">
      <div class="position-absolute top-0 w-100 h-100">
        <div class="container p-3">
          <div class="row justify-content-end">
            <div class="col-md-6">
              <router-link :to="{name:'KigaruniHoiku'}" class="border border-2 py-2 px-4 d-inline-block bg-white text-base w-100 border-cb3a82 rounded text-start mt-4">キガルニホイクとは？</router-link>
              <router-link :to="{name:'todo', params:{page:179}}" class="border border-2 py-2 px-4 d-inline-block bg-white text-base w-100 border-cb3a82 rounded text-start my-3">キガルニホイクの使い方</router-link>
              <router-link :to="{name:'todo', params:{page:184}}" class="border border-2 py-2 px-4 d-inline-block bg-white text-base w-100 border-cb3a82 rounded text-start">お支払い方法について</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped lang="scss">
.content {
  li {
    padding: 10px;
    border-bottom: 1px dashed #707070;
  }
}
</style>