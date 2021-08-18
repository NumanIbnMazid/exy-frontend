<template>
    <div class="notification-setting-parent">

        <!-- secondary header -->
        <SecondaryHeader :navActive="navActive"></SecondaryHeader>
        <!-- /secondary header -->

        <div class="py-2 overflow-hidden mb-5 mt-4">

            <!-- left sidebar -->
            <left-sidebar :sideNavActive="sideNavActive" />
            <!-- /left sidebar -->

            <!-- right column -->
            <div class="float-start right-column mb-5">
                <div class="hr-title fw-bold text-2xl">セキュリティ</div>

                <!-- content -->

                <div class="bg-light px-3 py-4 mt-4">

                    <div class="bg-white p-3">
                        <div>お支払い情報</div>
                        <div class="ms-3 mt-3 row">
                            <div class="col-md-6">
                                クレジット支払い
                            </div>
                            <div class="col-md-6 text-end">
                                <button class="border px-5 py-2 border-secondary border-2 rounded bg-white">
                                    変更す-を
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-3" @click="handleRoute(161)">
                        <div class="row py-2">
                            <div class="col-md-6">
                                <div>
                                    パスワード
                                </div>
                            </div>
                            <div class="col-md-6 text-end">
                                <span class="color-kigaruni-pink">登録完了</span>
                                <span class="ms-3 fa fa-angle-right color-kigaruni-pink text-xl fw-bold"></span>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- /content -->
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
        name: "NotificationSetting",
        data() {
            return {
                navActive: "setting",
                sideNavActive: 6
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