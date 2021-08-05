<template>
  <div class="py-5">
    <div class="container">
      <h3 class="border-bottom text-xl"><span class="--color-e6006e">沿線</span>からさがす</h3>
      <div class="row my-5 justify-content-center">
        <router-view></router-view>
      </div>
      <div class="solid-border"></div>
      <h3 class="border-bottom border-2 pb-2 mt-5 text-xl">その他の条件を指定する</h3>
      <search-from-the-area />
    </div>
  </div>
</template>

<script>
import SearchFromTheArea from "../../SearchFromTheArea";

export default {
  name: "Main",
  components: { SearchFromTheArea }
}
</script>

<style scoped>

</style>