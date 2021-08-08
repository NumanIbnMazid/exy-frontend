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
                    <a @click="activeTab=1, handleRoute('Admin.GardenBasicInformation')"
                        :class="[ activeTab === 1 ? 'active' : '' ]"> 園の基本情報</a>
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

                <!-- section 2 -->
                <div class="mt-5 ">
                    <div class="border border-2 p-3 rounded">
                        <span>保育コラム</span>
                    </div>
                    <div class="border-start border-end border-2">
                        <div class="table-responsive no-margin-table">
                            <table class="table">
                                <tbody>
                                    <tr class="custom-padding-row" v-for="i in 4" :key="i">
                                        <td width="2" class="background-pinkish">{{ i }}</td>
                                        <td class="ms-4">
                                            <span class="fw-bold" v-if="i == 1">ヨガレッスンの様子</span>
                                            <span class="fw-bold" v-else-if="i == 2">英語レッスンの様子</span>
                                            <span class="fw-bold" v-else-if="i == 3">英語レッスンの様子</span>
                                            <span v-else></span>
                                        </td>
                                        <td>
                                            <div v-if="i != 4">
                                                <div v-if="i == 2">下書き</div>
                                                <div v-else>公開済み</div>
                                                <div>2021/06/10</div>
                                            </div>
                                        </td>
                                        <td>
                                            <img src="../../assets/images/garden-basic/_12x@2x.png" alt="EXY"
                                                style="height:90px !important;" class="img-fluid" v-if="i == 1">
                                            <img src="../../assets/images/garden-basic/_22x@2x.png" alt="EXY"
                                                style="height:90px !important;" class="img-fluid" v-else-if="i == 2">
                                            <img src="../../assets/images/garden-basic/_32x@2x.png" alt="EXY"
                                                style="height:90px !important;" class="img-fluid" v-else-if="i == 3">
                                            <span v-else></span>
                                        </td>
                                        <td class="text-end">
                                            <button @click="handleRoute(59)" class="exy-default-btn" type="button"
                                                v-if="i == 1 || i == 3">
                                                修正する
                                            </button>
                                            <button @click="handleRoute(59)"
                                                class="exy-default-btn border-kigaruni-pink bg-white color-kigaruni-pink"
                                                type="button" v-else-if="i == 2">
                                                公開する
                                            </button>
                                            <button @click="handleRoute(58)" class="exy-default-btn bg-secondary"
                                                type="button" v-else>
                                                作成する
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- /section 2 -->

                <!-- section 3 -->
                <div class="mt-5 ">
                    <div class="border border-2 p-3 rounded">
                        <span>年間カレンダー</span>
                    </div>
                    <div class="border border-2 p-4">
                        <div class="row" v-for="i in 3" :key="i">
                            <div class="col-md-3">
                                <div v-if="i == 1">
                                    <div class="row ms-3">
                                        <div class="col-md-3">
                                            <div class="text-4xl fw-bold">4</div>
                                            <div class="text-small">Apr</div>
                                        </div>
                                        <div class="col-md-9 bg-light p-3 border border-2 calender-box">
                                            <div>・入園式</div>
                                            <div>・保護者面談</div>
                                        </div>
                                    </div>
                                    <div v-if="i != 3" class="hr-dotted px-4">
                                        <hr>
                                    </div>
                                </div>
                                <div v-else-if="i == 2">
                                    <div class="row ms-3">
                                        <div class="col-md-3">
                                            <div class="text-4xl fw-bold">5</div>
                                            <div class="text-small">May</div>
                                        </div>
                                        <div class="col-md-9 bg-light p-3 border border-2 calender-box">
                                            <div>・子どもの日会</div>
                                            <div>・保護者面談</div>
                                        </div>
                                    </div>
                                    <div v-if="i != 3" class="hr-dotted px-4">
                                        <hr>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="row ms-3">
                                        <div class="col-md-3">
                                            <div class="text-4xl fw-bold">6</div>
                                            <div class="text-small">Jun</div>
                                        </div>
                                        <div class="col-md-9 bg-light p-3 border border-2 calender-box">
                                            <div>・虫歯予防月間</div>
                                        </div>
                                    </div>
                                    <div v-if="i != 3" class="hr-dotted px-4">
                                        <hr>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div v-if="i == 1">
                                    <div class="row ms-3">
                                        <div class="col-md-3">
                                            <div class="text-4xl fw-bold">7</div>
                                            <div class="text-small">Jul</div>
                                        </div>
                                        <div class="col-md-9 bg-light p-3 border border-2 calender-box">
                                            <div>・七夕まつり</div>
                                        </div>
                                    </div>
                                    <div v-if="i != 3" class="hr-dotted px-4">
                                        <hr>
                                    </div>
                                </div>
                                <div v-else-if="i == 2">
                                    <div class="row ms-3">
                                        <div class="col-md-3">
                                            <div class="text-4xl fw-bold">8</div>
                                            <div class="text-small">Aug</div>
                                        </div>
                                        <div class="col-md-9 bg-light p-3 border border-2 calender-box">
                                            <div>・夏まつりごっこ</div>
                                        </div>
                                    </div>
                                    <div v-if="i != 3" class="hr-dotted px-4">
                                        <hr>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="row ms-3">
                                        <div class="col-md-3">
                                            <div class="text-4xl fw-bold">9</div>
                                            <div class="text-small">Sep</div>
                                        </div>
                                        <div class="col-md-9 bg-light p-3 border border-2 calender-box">
                                            <div>・お月見会</div>
                                        </div>
                                    </div>
                                    <div v-if="i != 3" class="hr-dotted px-4">
                                        <hr>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div v-if="i == 1">
                                    <div class="row ms-3">
                                        <div class="col-md-3">
                                            <div class="text-4xl fw-bold">10</div>
                                            <div class="text-small">Oct</div>
                                        </div>
                                        <div class="col-md-9 bg-light p-3 border border-2 calender-box">
                                            <div>・ハロウィン</div>
                                        </div>
                                    </div>
                                    <div v-if="i != 3" class="hr-dotted px-4">
                                        <hr>
                                    </div>
                                </div>
                                <div v-else-if="i == 2">
                                    <div class="row ms-3">
                                        <div class="col-md-3">
                                            <div class="text-4xl fw-bold">11</div>
                                            <div class="text-small">Nov</div>
                                        </div>
                                        <div class="col-md-9 bg-light p-3 border border-2 calender-box">
                                            <div>・秋の遠足</div>
                                        </div>
                                    </div>
                                    <div v-if="i != 3" class="hr-dotted px-4">
                                        <hr>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="row ms-3">
                                        <div class="col-md-3">
                                            <div class="text-4xl fw-bold">12</div>
                                            <div class="text-small">Dec</div>
                                        </div>
                                        <div class="col-md-9 bg-light p-3 border border-2 calender-box">
                                            <div>・クリスマス会</div>
                                        </div>
                                    </div>
                                    <div v-if="i != 3" class="hr-dotted px-4">
                                        <hr>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div v-if="i == 1">
                                    <div class="row ms-3">
                                        <div class="col-md-3">
                                            <div class="text-4xl fw-bold">1</div>
                                            <div class="text-small">Jan</div>
                                        </div>
                                        <div class="col-md-9 bg-light p-3 border border-2 calender-box">
                                            <div>・お正月遊び</div>
                                        </div>
                                    </div>
                                    <div v-if="i != 3" class="hr-dotted px-4">
                                        <hr>
                                    </div>
                                </div>
                                <div v-else-if="i == 2">
                                    <div class="row ms-3">
                                        <div class="col-md-3">
                                            <div class="text-4xl fw-bold">2</div>
                                            <div class="text-small">Feb</div>
                                        </div>
                                        <div class="col-md-9 bg-light p-3 border border-2 calender-box">
                                            <div>・英語発表会</div>
                                            <div>・豆まき</div>
                                        </div>
                                    </div>
                                    <div v-if="i != 3" class="hr-dotted px-4">
                                        <hr>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="row ms-3">
                                        <div class="col-md-3">
                                            <div class="text-4xl fw-bold">3</div>
                                            <div class="text-small">Mar</div>
                                        </div>
                                        <div class="col-md-9 bg-light p-3 border border-2 calender-box">
                                            <div>・ひなまつり</div>
                                            <div>・卒園式</div>
                                        </div>
                                    </div>
                                    <div v-if="i != 3" class="hr-dotted px-4">
                                        <hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /section 3 -->

                <div class="text-end mt-4">
                    <button @click="handleRoute('todo')" class="exy-default-btn border-kigaruni-pink bg-light color-kigaruni-pink me-4" type="button">
                        プレビュー
                    </button>
                    <button @click="handleRoute('todo')" class="exy-default-btn" type="button">
                        修正する
                    </button>
                </div>
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