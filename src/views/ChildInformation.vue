<template>
    <div class="favorite-garden-parent">

        <!-- secondary header -->
        <SecondaryHeader :navActive="navActive"></SecondaryHeader>
        <!-- /secondary header -->

        <div class="py-2 overflow-hidden mb-5 mt-4">

            <!-- left sidebar -->
            <left-sidebar :sideNavActive="sideNavActive" />
            <!-- /left sidebar -->

            <!-- right column -->
            <div class="float-start right-column mb-5">
                <div class="hr-title fw-bold text-2xl">お子さま情報</div>

                <!-- tabs -->
                <div class="custom-tab-pill-two">
                    <div class="px-0 tabs">
                        <!-- * link * -->
                        <a class="nav-item border" :class="[ activeTab === 1 ? 'active' : '' ]"> 第一子</a>
                        <a class="nav-item border" :class="[ activeTab === 2 ? 'active' : '' ]"> 第二子</a>
                        <a class="add" :class="[ activeTab === 3 ? 'active' : '' ]"> ＋</a>
                        <a> </a>
                    </div>
                </div>
                <!-- /tabs -->

                <!-- tab content -->
                <div v-if="activeTab===1" class="first-child border bg-light p-2 mb-5">

                    <div class="bg-white p-3">
                        <div>名前 (ふりがな)</div>
                        <div class="ms-3 mt-3">
                            田中 空（たなか そら）
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2">
                        <div>生年月日（年齢）</div>
                        <div class="ms-3 mt-3">
                            令和2年(2020年)2月25日生 生まれ (満１歳）
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2">
                        <div>性別</div>
                        <div class="ms-3 mt-3 row">
                            <div class="col-md-6">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="sex">
                                    <label class="form-check-label ms-2" for="boy">
                                        男の子
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="sex">
                                    <label class="form-check-label ms-2" for="girl">
                                        女の子
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="sex">
                                    <label class="form-check-label ms-2" for="unanswered">
                                        未回答
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6 text-end">
                                <button class="border border-seconadry px-5 py-2 bg-white shadow-sm">
                                    変更する
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2">
                        <div>アレルギーの有無（備考）</div>
                        <div class="ms-3 mt-3 row">
                            <div class="col-md-6">
                                <div>
                                    あり（卵アレルギーです）
                                </div>
                            </div>
                            <div class="col-md-6 text-end">
                                <button class="border border-seconadry px-5 py-2 bg-white shadow-sm">
                                    変更する
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2">
                        <div>基礎疾患の有無（備考）</div>
                        <div class="ms-3 mt-3 row">
                            <div class="col-md-6">
                                <div>
                                    なし
                                </div>
                            </div>
                            <div class="col-md-6 text-end">
                                <button class="border border-seconadry px-5 py-2 bg-white shadow-sm">
                                    変更する
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-secondary p-3 mt-5 text-white">
                        書類登録
                    </div>

                    <div class="bg-white p-3 mt-1" @click="handleRoute(97)">
                        <div class="ms-3 row p-2">
                            <div class="col-md-6">
                                <div>
                                    保険証
                                </div>
                            </div>
                            <div class="col-md-6 text-end">
                                <span class="color-kigaruni-pink">登録完了</span>
                                <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2" @click="handleRoute(100)">
                        <div class="ms-3 row p-2">
                            <div class="col-md-6">
                                <div>
                                    児童調査票
                                </div>
                            </div>
                            <div class="col-md-6 text-end">
                                <span class="color-kigaruni-pink">登録完了</span>
                                <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2" @click="handleRoute(103)">
                        <div class="ms-3 row p-2">
                            <div class="col-md-6">
                                <div>
                                    離乳食についての調査票
                                </div>
                            </div>
                            <div class="col-md-6 text-end">
                                <span class="color-kigaruni-pink">登録完了</span>
                                <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2" @click="handleRoute(106)">
                        <div class="ms-3 row p-2">
                            <div class="col-md-6">
                                <div>
                                    食品調査票
                                </div>
                            </div>
                            <div class="col-md-6 text-end">
                                <span class="color-kigaruni-pink">登録完了</span>
                                <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2" @click="handleRoute(99)">
                        <div class="ms-3 row p-2">
                            <div class="col-md-6">
                                <div>
                                    母子手帳
                                </div>
                            </div>
                            <div class="col-md-6 text-end">
                                <span class="color-kigaruni-pink">登録完了 (４／４)</span>
                                <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2">
                        <div class="ms-3 row p-2">
                            <div class="col-md-6">
                                <span>
                                    アレルギー管理生活疾患指導表（アレルギーをお持ちの方のみ）
                                </span>
                                <span class="ms-4 border p-2 border-secondary border-2 rounded">
                                    <span class="fa fa-file-pdf-o me-2"></span>
                                    <span>ダウンロード</span>
                                </span>
                            </div>
                            <div class="col-md-6 text-end" @click="handleRoute(98)">
                                <span class="color-kigaruni-pink">登録完了</span>
                                <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-kigaruni-gainsboro p-3 mt-5">
                        各園追加書類
                    </div>

                    <div class="bg-white p-3 mt-2" @click="handleRoute(108)">
                        <div class="ms-3 row p-2">
                            <div class="col-md-6">
                                <span class="text-lg fw-bold">COCOROHOIKUEN</span>
                            </div>
                            <div class="col-md-6 text-end">
                                <span class="color-kigaruni-pink">登録完了</span>
                                <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /tab content -->
            </div>
            <!-- /right column -->

        </div>


    </div>
</template>

<script>
    // imports
    import router from "../router/index"
    import SecondaryHeader from "../components/partials/SecondaryHeader"
    import LeftSidebar from "../components/LeftSidebar"

    export default {
        name: "ChildInformation",
        data() {
            return {
                navActive: "setting",
                sideNavActive: 3,
                activeTab: 1,
            }
        },
        components: {
            SecondaryHeader,
            LeftSidebar
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
            },
        }
    };
</script>