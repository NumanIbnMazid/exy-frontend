<template>
  <div class="find-nursery-school">

    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">保育園をさがす</li>
          </ol>
        </nav>
      </div>
    </div>

    <section class="position-relative">
      <img src="../assets/images/ID2266338_m@2x.png" class="img-fluid" alt="EXY">
      <div class="position-absolute top-0 w-100 h-100">
        <div class="container h-100">
          <div class="d-flex justify-content-between align-items-center h-100">
            <div>
              <h3>保育園検索</h3>
            </div>
            <div>2</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "FindNurserySchool"
}
</script>

<style scoped>

</style>