<template>
  <div>
    <div class="breadcrumb-border">
      <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Top</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">子育て情報掲示板</li>
        </ol>
      </nav>
    </div>

    <div class="container pt-4">
      <div class="row">
        <div class="col-md-9">

          <div class="border rounded-3" style="background: #FEFDFC">
            <div class="border-bottom p-2">
              <span class="--color-e6006e">#</span> 一時保育
            </div>

            <div class="p-3">
              <div class="bg-white p-2 rounded" style="box-shadow: 0 2px 4px #615f5f">

                <single-item v-for="n in 10" :key="n"/>

              </div>
            </div>

            <div class="p-3 text-center">
              <div class="d-inline-block border border-color-e6006e --color-e6006e text-sm py-2 px-5 cursor-pointer">もっとみる</div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <right-sidebar/>
        </div>
      </div>
    </div>

    <div class="space-100"></div>

  </div>
</template>

<script>
import SingleItem from "./SingleItem";
import RightSidebar from "./RightSidebar";
export default {
  name: "TemporaryChildcare",
  components: { RightSidebar, SingleItem }
}
</script>

<style scoped>

</style>