<template>
    <div class="rate-plan-parent admin-parent">

        <!-- breadcrumb -->
        <Breadcrumb :pageName="dataPageName"></Breadcrumb>
        <!-- /breadcrumb -->

        <!-- content -->
        <div class="container">
            <div class="row w-100 experience-body">

                <!-- tabs -->
                <div class="custom-tab-pill">
                    <div class="px-0 tabs">
                        <!-- * link * -->
                        <a> </a>
                        <a @click="activeTab=1, handleRoute(61)" :class="[ activeTab === 1 ? 'active' : '' ]"> 基本情報</a>
                        <a @click="activeTab=2, handleRoute(62)" :class="[ activeTab === 2 ? 'active' : '' ]"> 身体測定</a>
                        <a @click="activeTab=3, handleRoute(74)" :class="[ activeTab === 3 ? 'active' : '' ]"> 利用履歴</a>
                        <a @click="activeTab=4, handleRoute('Admin.RatePlan')" :class="[ activeTab === 4 ? 'active' : '' ]"> 利用履歴</a>
                        <a> </a>
                    </div>
                </div>
                <!-- /tabs -->

                <!-- tab content -->
                <div v-if="activeTab===4" class="rate-plan mt-5 pb-5">
                    <!-- header -->
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                            <span class="fw-bold">修正したい項目をチェックボックスを選択し【削除する】をクリックしてください。</span>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 text-end">
                            <!-- * link * -->
                            <router-link :to="{name: 'Admin.RatePlanDetails' }"
                                class="button bg-dark px-5 py-2 text-white" type="button">
                                削除する
                            </router-link>
                        </div>
                    </div>
                    <!-- /header -->

                    <!-- table -->
                    <PlanTable></PlanTable>
                    <!-- /table -->
                </div>

            </div>
        </div>
        <!-- /content -->
    </div>
</template>

<script>
    // imports
    import router from "../../../router/index"
    import Breadcrumb from "../../../components/adminPartials/Breadcrumb"
    import PlanTable from "./PlanTable"

    export default {
        name: "RatePlan",
        components: {
            Breadcrumb,
            PlanTable
        },
        data() {
            return {
                dataPageName: "料金プラン",
                activeTab: 4
            }
        },
        methods: {
            handleRoute(path) {
                if (typeof path === 'number') {
                    router.push(
                        {
                            name: 'todo',
                            params: {
                                page: path
                            }
                        }
                    )
                } else {
                    if (this.$route.name != path) {
                        router.push({ name: path })
                    }
                }
                return
            }
        }
    }
</script>

<style scoped>

</style>