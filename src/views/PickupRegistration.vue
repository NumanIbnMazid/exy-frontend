<template>
    <div class="pickup-registration-parent">

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
                        <a class="nav-item border" :class="[ activeTab === 1 ? 'active' : '' ]" @click="handleRoute('PickupPersonRegistration')"> 一人目</a>
                        <a class="nav-item border" :class="[ activeTab === 2 ? 'active' : '' ]"> 二人目</a>
                        <a class="add" :class="[ activeTab === 3 ? 'active' : '' ]"> ＋</a>
                        <a> </a>
                    </div>
                </div>
                <!-- /tabs -->

                <!-- tab content -->
                <div v-if="activeTab===2" class="first-child border bg-light p-2 mb-3 pb-5">

                    <div class="bg-white p-3">
                        <div>名前（ふりがな）</div>
                        <div class="ms-3 mt-3 d-flex justify-content-start custom-form-group">
                            <div>名 字 ：</div>
                            <div class="ms-5">
                                <input type="text" placeholder="例）保育" class="form-control">
                            </div>
                            <div class="ms-5">名前：</div>
                            <div class="ms-4">
                                <input type="text" placeholder="例）花子" class="form-control">
                            </div>
                        </div>
                        <div class="ms-3 mt-3 d-flex justify-content-start custom-form-group">
                            <div>みょうじ：</div>
                            <div class="ms-4">
                                <input type="text" placeholder="例）ほいく" class="form-control">
                            </div>
                            <div class="ms-5">なまえ：</div>
                            <div class="ms-3">
                                <input type="text" placeholder="例）はなこ" class="form-control">
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2">
                        <div>族柄</div>
                        <div class="ms-3 mt-3">
                            <select class="p-2 border border-2 rounded bg-light form-text">
                                <option selected>その他</option>
                                <option>option1</option>
                                <option>option2</option>
                                <option>option3</option>
                                <option>option4</option>
                            </select>
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2">
                        <div>緊急連絡先</div>
                        <div class="ms-3 mt-3 custom-form-group">
                            <input type="text" placeholder="08012345678" class="form-control w-25">
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-2 d-flex justify-content-start pb-4">
                        <div>顔写真</div>
                        <div class="ms-5 border border-2 px-2 py-5">
                            <img src="../assets/images/Rectangle@2x.png" alt="EXY" height="250">
                        </div>
                        <div class="img-add-parent">
                            <span class="fa fa-plus-circle text-6xl text-muted img-add"></span>
                        </div>
                    </div>

                </div>
                <!-- /tab content -->

                <div class="text-end" v-if="activeTab===2">
                    <button class="exy-default-btn">
                        登録する
                    </button>
                </div>
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
        name: "PickupRegistration",
        data() {
            return {
                navActive: "setting",
                sideNavActive: 4,
                activeTab: 2,
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