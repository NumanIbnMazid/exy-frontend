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
                <div class="hr-title fw-bold text-2xl">通知設定</div>

                <!-- content -->

                <div class="py-4 mt-2">

                    <div class="row border border-3 mx-1 p-3">
                        <div class="col-md-11">
                            <div>
                                保育園だより
                            </div>

                            <div class="mt-2">
                                ※あなたのご近所の保育園が登録したり、お気に入り園に空きが出た場合、メールでお知らせします。
                            </div>
                        </div>
                        <div class="col-md-1 text-end d-flex align-items-center">
                            <div>OFF</div>
                            <div class="fa fa-toggle-on ms-2 me-2 text-4xl color-kigaruni-green"></div>
                            <div>ON</div>
                        </div>
                    </div>

                    <div class="row border border-3 mx-1 p-3">
                        <div class="col-md-11">
                            <div>
                                ニュースレター
                            </div>

                            <div class="mt-2">
                                ※キャンペーンやアンケートなどの最新情報を定期的にメールでお届けします。
                            </div>
                        </div>
                        <div class="col-md-1 text-end d-flex align-items-center">
                            <div>OFF</div>
                            <div class="fa fa-toggle-on ms-2 me-2 text-4xl color-kigaruni-green"></div>
                            <div>ON</div>
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