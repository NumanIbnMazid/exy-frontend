<template>
  <nav class="mt-5" aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item" v-for="i in dataNumPages" :key="i" :class="i == 1 ? 'active':''">
        <a href="#">{{ i }}</a>
      </li>
      <li class="page-item"><a href="#"><i class="fa fa-angle-right"></i></a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      numPages: Number
    },
    data() {
      return {
        dataNumPages: this.numPages != null ? this.numPages : 5
      }
    },
  }
</script>

<style scoped lang="scss">
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