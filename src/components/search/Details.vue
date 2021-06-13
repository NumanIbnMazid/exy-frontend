<template>
  <div>
    <div class="breadcrumb-border">
      <div class="container">
        <nav class="py-2" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Top</router-link>
            </li>
            <li class="breadcrumb-item">検索</li>
            <li class="breadcrumb-item active" aria-current="page">検索結果</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="container">
      <div class="row py-3">
        test
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details"
}
</script>

<style scoped>

</style>