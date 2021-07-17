<template>
  <div>
    <div class="container">

      <div class="text-center my-5">
        <h4 class="text-xl d-inline-block border-2 border-bottom border-color-707070 m-0">規約</h4>
      </div>

      <div class="d-flex align-items-center text-center tab">
        <router-link tag="div" :to="{name:'terms', params:{active:1}}" class="p-10 flex-fill cursor-pointer text-base border mx-2" :class="[ activeTab === 1 ? 'active' : '' ]">サービス利用規約</router-link>
        <router-link tag="div" :to="{name:'terms', params:{active:2}}" class="p-10 flex-fill cursor-pointer text-base border mx-2" :class="[ activeTab === 2 ? 'active' : '' ]">ポイント利用規約</router-link>
        <router-link tag="div" :to="{name:'terms', params:{active:3}}" class="p-10 flex-fill cursor-pointer text-base border mx-2" :class="[ activeTab === 3 ? 'active' : '' ]">プライバシーポリシー</router-link>
        <router-link tag="div" :to="{name:'terms', params:{active:4}}" class="p-10 flex-fill cursor-pointer text-base border mx-2" :class="[ activeTab === 4 ? 'active' : '' ]">特定商取引法に基づく表示</router-link>
      </div>
    </div>
    <div class="border-bottom border-3"></div>

    <div class="pb-5">
      <div class="tab-content">
        <div v-if="activeTab === 1">
          <tab-one/>
        </div>
        <div v-if="activeTab === 2">
          <tab-two/>
        </div>
        <div v-if="activeTab === 3">
          <tab-three/>
        </div>
        <div v-if="activeTab === 4">
          <tab-four/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
import TabFour from "./TabFour";

export default {
  name: "Index",
  components: { TabFour, TabThree, TabTwo, TabOne },
  data() {
    return {
      activeTab: 1,
    }
  },
  mounted() {
    this.tabControle();
  },
  watch: {
    $route() {
      this.tabControle();
    }
  },
  methods: {
    tabControle: function () {
      if ((parseInt(this.$route.params.active)) && (parseInt(this.$route.params.active) <= 4))
        this.activeTab = parseInt(this.$route.params.active)
      else
        this.activeTab = 1
    }
  }
}
</script>

<style scoped lang="scss">
.tab {
  .active {
    background: #f8f7f7;
  }
}
</style>