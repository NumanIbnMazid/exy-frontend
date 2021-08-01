<template>
  <div>
    <div class="bg-fefdfc border rounded-top p-3 mb-4">
      <div class="fw-bold">
        <img src="../../../assets/images/svg/title-left.svg" alt="EXY" class="me-1" style="height: 18px">
        とりあえず聞いて
      </div>
    </div>

    <div class="d-flex align-items-center text-center tab">
      <router-link class="p-10 flex-fill cursor-pointer text-base fw-bold color-707070 border" tag="div" :to="{name:'ConsultationCorner.SearchResults', params:{active:'1'}}" :class="[ activeTab === 1 ? 'active' : '' ]">すべて</router-link>
      <router-link class="p-10 flex-fill cursor-pointer text-base fw-bold color-707070 border mx-1" tag="div" :to="{name:'ConsultationCorner.SearchResults', params:{active:'2'}}" :class="[ activeTab === 2 ? 'active' : '' ]">解決済み</router-link>
      <router-link class="p-10 flex-fill cursor-pointer text-base fw-bold color-707070 border" tag="div" :to="{name:'ConsultationCorner.SearchResults', params:{active:'3'}}" :class="[ activeTab === 3 ? 'active' : '' ]">回答受付中</router-link>
    </div>

    <div class="border rounded-bottom">
      <div class="d-flex align-items-center justify-content-end bg-fefdfc border-bottom py-3 px-2">
        <label>並べ替え：</label>
        <select class="mx-2 border rounded py-1 px-2">
          <option>新着順</option>
          <option>投稿順</option>
        </select>
      </div>

      <div class="tab-content p-2">
        <div v-if="activeTab === 1">
          <tab-one/>
        </div>
        <div v-if="activeTab === 2">
          <tab-one/>
        </div>
        <div v-if="activeTab === 3">
          <tab-three/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TabOne from "../search-results/TabOne";
import TabThree from "../search-results/TabThree";

export default {
  name: "Main",
  components: { TabThree, TabOne },
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
      if (this.$route.params.active === '1')
        this.activeTab = 1
      else if (this.$route.params.active === '2')
        this.activeTab = 2
      else if (this.$route.params.active === '3')
        this.activeTab = 3
      else
        this.activeTab = 1
    }
  }
}
</script>


<style scoped lang="scss">
.tab {
  div {
    border-radius: 10px 10px 0 0;
  }

  .active {
    color: #FFFFFF;
    background: #CB3A82;
    border-color: #CB3A82 !important;
  }
}
</style>