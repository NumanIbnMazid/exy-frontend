<template>
  <div class="garden-basic-info">
    <!-- breadcrumb -->
        <Breadcrumb :pageName="dataPageName"></Breadcrumb>
    <!-- /breadcrumb -->
    <div class="row w-100 px-4 ps-5">
        <div class="details-tab">
            <div class="px-0 tabs">
                <a @click="activeTab=1" :class="[ activeTab === 1 ? 'active' : '' ]"> 園の基本情報</a>
                <a @click="activeTab=2" :class="[ activeTab === 2 ? 'active' : '' ]"> 園の保育内容</a>
                <a @click="activeTab=3" :class="[ activeTab === 3 ? 'active' : '' ]"> 保護者様への確認事項</a>
                <a > </a>
                <a> </a>
            </div>
        </div>
        <div v-if="activeTab===1" class="tab-1 w-100 pb-5">
            <div class="row w-100 row-1 mt-4 ms-0">
                <div class="col-md-2 left-col">
                    <p class="m-0 p-left text-center">掲載写真</p>
                </div>
                <div class="col-md-10 right-col">
                    <div class="row ps-2">
                        <div class="col-md-4 px-4 py-4">
                            <div class="row crossed cross-box border border-1 border-secondary"></div>
                            <div class="row inner-1 py-1">
                                <p class="m-0 text-lg text-center">外観</p>
                            </div>
                        </div>
                        <div class="col-md-4 px-4 py-4">
                            <div class="row crossed cross-box border border-1 border-secondary"></div>
                            <div class="row inner-1 py-1">
                                <p class="m-0 text-lg text-center">外観 1</p>
                            </div>
                        </div>
                        <div class="col-md-4 px-4 py-4">
                            <div class="row crossed cross-box border border-1 border-secondary"></div>
                            <div class="row inner-1 py-1">
                                <p class="m-0 text-lg text-center">外観 2</p>
                            </div>
                        </div>
                    </div>
                    <div class="row ps-2">
                        <div class="col-md-4 px-4 pb-4">
                            <div class="row crossed cross-box border border-1 border-secondary"></div>
                            <div class="row inner-1 py-1">
                                <p class="m-0 text-lg text-center">外観 3</p>
                            </div>
                        </div>
                        <div class="col-md-8"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../../components/adminPartials/Breadcrumb"
export default {
    name: "GardenBasicInformation",
    components: {
        Breadcrumb
    },
    data() {
        return {
            dataPageName: "園基本情報設定",
            activeTab: 1
        }
    }
}
</script>

<style scoped>

</style>