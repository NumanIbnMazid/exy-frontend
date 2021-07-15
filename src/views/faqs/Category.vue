<template>
  <div>
    <h3 class="text-2xl bg-light border py-2 px-3 m-0 rounded-top --color-e6006e">
      <img src="../../assets/images/svg/title-left.svg" alt="EXY">
      会員登録・変更について
    </h3>

    <div class="content">
      <ul class="list-unstyled m-0">
        <li class="text-base" v-for="n in 10" :key="n">
          <router-link :to="{name:'Faqs.Detail'}">
            ▶︎よくある質問ほにゃらららんらんらーん
          </router-link>
        </li>
      </ul>
    </div>

    <pagination />
  </div>
</template>

<script>
import Pagination from "../../components/Pagination";
export default {
  name: "Category",
  components: { Pagination }
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