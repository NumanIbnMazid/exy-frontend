<template>
    <div class="garden-basic-parent admin-parent">

        <!-- breadcrumb -->
        <Breadcrumb :pageName="dataPageName"></Breadcrumb>
        <!-- /breadcrumb -->

        <div class="container">
            <!-- tabs -->
            <div class="custom-tab-pill">
                <div class="px-0 tabs">
                    <!-- * link * -->
                    <a> </a>
                    <a @click="activeTab=1, handleRoute(55)" :class="[ activeTab === 1 ? 'active' : '' ]"> 園の基本情報</a>
                    <a @click="activeTab=2, handleRoute('Admin.GardenBasic')"
                        :class="[ activeTab === 2 ? 'active' : '' ]"> 園の保育内容</a>
                    <a @click="activeTab=3, handleRoute(57)" :class="[ activeTab === 3 ? 'active' : '' ]">
                        保護者様への確認事項</a>
                    <a> </a>
                </div>
            </div>
            <!-- /tabs -->

            <!-- tab content -->
            <div v-if="activeTab===2" class="garden-basic mt-5 pb-5">
                <!-- section 1 -->
                <div v-for="i in 3" :key="i">
                    <div class="border border-2 p-3 rounded">
                        <span>保育方針</span>
                    </div>
                    <div class="border border-2 px-3 pt-0 pb-4">
                        <div class="text-center py-2 mt-3 border border-2 fw-bold">
                            <span v-if="i == 2">保育方針</span>
                            <span v-else-if="i == 3">保育目標</span>
                            <span v-else>保育理念</span>
                        </div>
                        <div class="border border-2">
                            <div class="row custom-row">
                                <div class="col-md-5 border-end border-2">
                                    <div class="text-center py-2 background-pinkish">
                                        画像登録
                                    </div>
                                    <div class="p-2">
                                        <img src="../../assets/images/garden-basic/Image_16_ef@2x.png" alt="EXY"
                                            class="img-fluid">
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="text-center py-2 background-pinkish">
                                        コメント
                                    </div>
                                    <div class="bg-light p-3 m-2 rounded border" style="height:69%;">
                                        <p v-if="i == 2" class="fw-bold">
                                            小規模保育の良さを生かし、家庭的であたたかな雰囲気を大切にし、<br>
                                            ひとりひとりにたっぷりの愛情を注ぐことで、また周りの人々へ <br>
                                            愛情を注ぐ連鎖を築く
                                        </p>
                                        <p v-else-if="i == 3" class="fw-bold">
                                            1．自分が一番に愛されていることを伝える<br>
                                            2．認めること、褒めることで子どもたちの自信を伸ばす <br>
                                            3．友達の輪の中で感情のコントロールの基礎を学ぶ
                                        </p>
                                        <p v-else class="fw-bold">
                                            「心に愛を」<br>
                                            人からたくさんの愛情を注がれた子は、将来また必ず人へ <br>
                                            あまりある愛情を注ぐ”愛”溢れる人を目指し
                                        </p>
                                    </div>
                                    <div class="text-end m-3">
                                        <button class="exy-default-btn">
                                            修正する
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /section 1 -->
            </div>
        </div>
    </div>
</template>

<script>
    // imports
    import router from "../../router/index"
    import Breadcrumb from "../../components/adminPartials/Breadcrumb"

    export default {
        name: "GardenBasic",
        components: {
            Breadcrumb,
        },
        data() {
            return {
                dataPageName: "園基本情報設定",
                activeTab: 2,
            }
        },
        methods: {
            handleRoute(path) {
                if (typeof path === 'number') {
                    router.push({
                        name: 'todo',
                        params: {
                            page: path
                        }
                    })
                } else {
                    if (this.$route.name != path) {
                        router.push({
                            name: path
                        })
                    }
                }
                return
            }
        }
    }
</script>

<style scoped>

</style>