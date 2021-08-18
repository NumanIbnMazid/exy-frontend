<template>
    <div class="pickup-person-registration-parent">

        <!-- secondary header -->
        <SecondaryHeader :navActive="navActive"></SecondaryHeader>
        <!-- /secondary header -->

        <div class="py-2 overflow-hidden mb-5 mt-4">

            <!-- left sidebar -->
            <left-sidebar :sideNavActive="sideNavActive" />
            <!-- /left sidebar -->

            <!-- right column -->
            <div class="float-start right-column mb-5">
                <div class="hr-title fw-bold text-2xl">送迎者登録</div>

                <!-- tabs -->
                <div class="custom-tab-pill-two">
                    <div class="px-0 tabs">
                        <!-- * link * -->
                        <a class="nav-item border" :class="[ activeTab === 1 ? 'active' : '' ]"> 一人目</a>
                        <a class="nav-item border" :class="[ activeTab === 2 ? 'active' : '' ]" @click="handleRoute('PickupRegistration')"> 二人目</a>
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
                            田中 愛 (たなか あい）
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2">
                        <div>族柄</div>
                        <div class="ms-3 mt-3">
                            母親
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2">
                        <div>緊急連絡先</div>
                        <div class="ms-3 mt-3">
                            090-0000-0000
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2 d-flex justify-content-start">
                        <div>顔写真</div>
                        <div class="ms-5">
                            <img src="../assets/images/model_14@2x.png" alt="EXY" height="400">
                        </div>
                    </div>

                    <div class="mt-5 text-end mb-5">
                        <button class="bg-dark text-white px-4 py-1 me-4">
                            削除する
                        </button>
                        <button class="border border-1 border-dark px-4 py-1">
                            一人目の情報を修正する
                        </button>
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
        name: "PickupPersonRegistration",
        data() {
            return {
                navActive: "setting",
                sideNavActive: 4,
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