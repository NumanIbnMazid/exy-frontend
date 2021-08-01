<template>
  <nav class="mt-4" aria-label="Page navigation">
    <ul class="pagination d-flex align-items-center justify-content-center">
      <li class="page-item active"><a href="#">1</a></li>
      <li class="page-item"><a href="#">2</a></li>
      <li class="page-item"><a href="#">3</a></li>
      <li class="page-item"><a href="#">4</a></li>
      <li class="page-item"><a href="#">5</a></li>
      <li class="page-item"><a href="#">...</a></li>
      <li class="page-item"><a href="#"><i class="fa fa-angle-right"></i></a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination"
}
</script>

<style scoped lang="scss">
.pagination {
  li {
    padding: 0 5px;

    a {
      width: 40px;
      height: 40px;
      line-height: 40px;
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