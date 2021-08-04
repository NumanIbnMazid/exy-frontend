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
                        <a> </a>
                        <!-- * link * -->
                        <a @click="activeTab=1, handleRoute(61)" :class="[ activeTab === 1 ? 'active' : '' ]"> 基本情報</a>
                        <a @click="activeTab=2, handleRoute(62)" :class="[ activeTab === 2 ? 'active' : '' ]"> 身体測定</a>
                        <a @click="activeTab=3, handleRoute(74)" :class="[ activeTab === 3 ? 'active' : '' ]"> 利用履歴</a>
                        <a @click="activeTab=4, handleRoute('Admin.RatePlanDetails')" :class="[ activeTab === 4 ? 'active' : '' ]"> 利用履歴</a>
                        <a> </a>
                    </div>
                </div>
                <!-- /tabs -->

                <!-- tab content -->
                <div v-if="activeTab===4" class="rate-plan mt-5 pb-5">
                    <!-- header -->
                    <p>下記のプランを削除します。一度削除したプランは戻せません。</p>
                    <!-- /header -->

                    <!-- details table -->
                    <div class="table-responsive mt-5 rate-paln-table">
                        <table class="table table-bordered border-dark">
                            <tbody class="">
                                <tr>
                                    <td style="width:15%" class="text-center background-pinkish">
                                        メインカテゴリ
                                    </td>
                                    <td style="width:35%">月極保育</td>
                                    <td style="width:15%" class="background-pinkish text-center">
                                        サプカテゴリ
                                    </td>
                                    <td style="width:35%">プラン</td>
                                </tr>
                                <tr>
                                    <td style="width:15%" class="text-center background-pinkish">
                                        料金プラン名
                                    </td>
                                    <td colspan="3">通常プラン | 0 歳児</td>
                                </tr>
                                <tr>
                                    <td style="width:15%" class="text-center background-pinkish">
                                        料金プラン名
                                    </td>
                                    <td colspan="4">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div>
                                                    <span class="fa fa-check text-xs"></span>
                                                    <span class="ms-3">0歳児 (6ヶ月未満)</span>
                                                </div>
                                                <div class="ms-4 mt-2">
                                                    <span class="text-muted">3 歳児</span>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div>
                                                    <span class="fa fa-check text-xs"></span>
                                                    <span class="ms-3">0歳児 (6ヶ月以上)</span>
                                                </div>
                                                <div class="ms-4 mt-2">
                                                    <span class="text-muted">4 歳児</span>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="ms-4 mt-2">
                                                    <span class="text-muted">1 歳児</span>
                                                </div>
                                                <div class="ms-4 mt-2">
                                                    <span class="text-muted">5 歳児</span>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="ms-4 mt-2">
                                                    <span class="text-muted">2 歳児</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width:15%" class="text-center background-pinkish">
                                        料金
                                    </td>
                                    <td colspan="3">
                                        <span class="me-5">￥</span>
                                        <span class="me-5">35,900</span>
                                        <span class="ms-5 me-4">/</span>
                                        <span>1ヶ月</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width:15%" class="text-center background-pinkish">
                                        コメント
                                    </td>
                                    <td colspan="3">
                                        <span>月16日以上のご利用が必要となります。</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /details table -->

                    <div class="text-end mt-2">
                        <!-- * link * -->
                        <router-link :to="{name: 'todo', params: {page: 61} }" class="button bg-dark px-5 py-2 text-white"
                            type="button">
                            削除する
                        </router-link>
                    </div>

                    <div class="mt-3 ms-3">
                        <p class="fw-bold">料金プラン一覧</p>
                    </div>

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