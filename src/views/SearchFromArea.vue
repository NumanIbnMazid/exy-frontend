<template>
  <div class="py-5">
    <div class="container">
      <h3 class="border-bottom text-xl">エリアからさがす</h3>
      <div style="height: 400px"></div>
      <div class="solid-border"></div>
      <h3 class="border-bottom border-2 pb-2 mt-5 text-xl">その他の条件を指定する</h3>
      <search-from-the-area/>
    </div>
  </div>
</template>

<script>
import SearchFromTheArea from "../components/search/SearchFromTheArea";

export default {
  name: "SearchFromArea",
  components: { SearchFromTheArea }
}
</script>

<style scoped>

</style>