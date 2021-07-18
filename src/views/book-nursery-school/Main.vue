<template>
  <div>
    <div class="breadcrumb-border">
      <nav class="p-2 py-1 text-sm" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Top</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">キガルニホイクの使い方</li>
          <li class="breadcrumb-item active" aria-current="page">保育園を探す</li>
        </ol>
      </nav>
    </div>

    <div class="position-relative">
      <img src="../../assets/images/guide/Mask_Group_64.png" class="w-100" alt="">
      <div class="position-absolute w-100 top-50" style="transform: translate(0, -50%)">
        <div class="container text-white text-2xl fw-bold text-center" style="text-shadow: 3px 3px 6px #000000C1;">
          保育園を予約する
        </div>
      </div>
      <div class="position-absolute w-100" style="bottom: -42px">
        <div class="container">
          <div class="border-2 border-top border-bottom border-color-707070 py-3 text-center bg-white">
            <div class="row justify-content-center">
              <div class="col-md-8">
                キガルニホイクは、保育園をさがすだけでなく、保育の予約から決済までを行うことができます。 家事の合間や、お子さまのお昼寝中に、携帯ひとつで空いた時間に予約をしましょう。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-100"></div>

    <div class="container">
      <div class="d-flex align-items-center text-center tab">
        <router-link class="p-10 flex-fill cursor-pointer text-base border rounded-3" tag="div" :to="{name:'guide', params:{active:'experience-childcare-reservation'}}" :class="[ activeTab === 1 ? 'active' : '' ]">体験保育を予約する</router-link>
        <router-link class="p-10 flex-fill cursor-pointer text-base border rounded-3" tag="div" :to="{name:'guide', params:{active:'monthly-childcare'}}" :class="[ activeTab === 2 ? 'active' : '' ]">月極保育を予約する</router-link>
        <router-link class="p-10 flex-fill cursor-pointer text-base border rounded-3" tag="div" :to="{name:'guide', params:{active:'garden-tour'}}" :class="[ activeTab === 3 ? 'active' : '' ]">園見学を予約する</router-link>
      </div>
    </div>

    <div class="border-bottom border-3"></div>

    <div class="py-3" style="background-color: #FFFFFA">
      <div class="container tab-content">

        <div class="border border-2 p-1 mt-4 mb-5 position-relative" style="border-color: #808080">
          <div class="border border-2 py-3 px-5 text-center text-base" style="border-color: #808080">
            園詳細ページの「月極保育予約」または「予約へすすむ」ページで予約をすることができます。<br/>
            月極保育の予約をするには、<span style="border-bottom: 1px solid #D9CA23">本人確認書等の登録が必須条件</span>となります。

            <div class="position-absolute" style="top: -65px;left: -65px;">
              <div class="position-relative">
                <img src="../../assets/images/guide/polygon-17.png" alt="EXY">
                <img src="../../assets/images/guide/group-3665.png" alt="EXY" class="position-absolute" style="top: 60px; left: 45px">
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 1">
          <experience-childcare-reservation/>
        </div>
        <div v-if="activeTab === 2">
          <monthly-childcare/>
        </div>
        <div v-if="activeTab === 3">
          <garden-tour/>
        </div>
      </div>
    </div>

    <div class="space-100"></div>
    <div class="container">
      <registration-link/>
    </div>
    <div class="space-100"></div>

  </div>
</template>

<script>
import RegistrationLink from "../../components/RegistrationLink";
import ExperienceChildcareReservation from "./ExperienceChildcareReservation";
import GardenTour from "./GardenTour";
import MonthlyChildcare from "./MonthlyChildcare";

export default {
  name: "Main",
  data() {
    return {
      activeTab: 1,
    }
  },
  components: { MonthlyChildcare, GardenTour, ExperienceChildcareReservation, RegistrationLink },
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
      if (this.$route.params.active === 'experience-childcare-reservation')
        this.activeTab = 1
      else if (this.$route.params.active === 'monthly-childcare')
        this.activeTab = 2
      else if (this.$route.params.active === 'garden-tour')
        this.activeTab = 3
      else
        this.activeTab = 1
    }
  }
}
</script>

<style scoped lang="scss">

.tab {
  .active {
    color: #FFFFFF;
    background: #CB3A82;
    border-color: #CB3A82;
  }
}
</style>