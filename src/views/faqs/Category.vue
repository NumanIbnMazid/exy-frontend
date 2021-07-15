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


    <nav class="mt-5" aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item active"><a href="#">1</a></li>
        <li class="page-item"><a href="#">2</a></li>
        <li class="page-item"><a href="#">3</a></li>
        <li class="page-item"><a href="#">4</a></li>
        <li class="page-item"><a href="#">5</a></li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: "Category"
}
</script>

<style scoped lang="scss">
.content {
  li {
    padding: 10px;
    border-bottom: 1px dashed #707070;
  }
}

.pagination {
  li {
    padding: 0 5px;

    a {
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 50%;
      display: inline-block;
    }
  }

  .active {
    a {
      color: #FFFFFF;
      background: #84C942;
    }
  }
}
</style>