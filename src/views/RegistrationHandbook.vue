<template>
    <div class="document-upload-parent">

        <!-- secondary header -->
        <SecondaryHeader :navActive="navActive"></SecondaryHeader>
        <!-- /secondary header -->

        <div class="py-2 overflow-hidden mb-5 mt-4">

            <!-- left sidebar -->
            <left-sidebar :sideNavActive="sideNavActive" />
            <!-- /left sidebar -->

            <!-- right column -->
            <div class="float-start right-column mb-5">
                <div class="hr-title fw-bold text-2xl">母子手帳の登録</div>

                <!-- content -->

                <div class="py-4 px-3 mt-2">

                    <p>
                        母子手帳を提出するとできること <br>
                        ・月極保育の予約 <br>
                        ・体験保育の予約 <br>
                    </p>

                    <div class="mt-1">
                        ご提出いただいた書類は、保育園を予約した際、キガルニホイク事務局から予約した保育園にのみ開示し、
                    </div>
                    <div class="mt-2">
                        外部・及び利用しない保育園へ開示されることはありませんのでご安心ください。
                    </div>
                    <div class="mt-2">
                        母子手帳は「表紙」「出生届」「最終健診記録」「予防接種」の４カ所、すべてご登録ください。
                    </div>
                </div>

                <div class="py-4 px-3">

                    <div class="fw-bold">母子手帳をアップロード</div>

                    <div class="row mt-3">
                        <div class="col-md-4 border border-2 d-flex justify-content-center align-items-center">
                            <div class="p-5">
                                <span class="fa fa-cloud-upload text-8xl color-kigaruni-ash"></span>
                            </div>
                            <div class="p-5 fw-bold ">
                                表紙をアップロード
                            </div>
                        </div>
                        <div class="col-md-4 ms-4 border border-2 d-flex justify-content-center align-items-center">
                            <div class="p-5">
                                <span class="fa fa-cloud-upload text-8xl color-kigaruni-ash"></span>
                            </div>
                            <div class="p-5 fw-bold">
                                出生届をアップロード
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-4 border border-2 d-flex justify-content-center align-items-center">
                            <div class="p-5">
                                <span class="fa fa-cloud-upload text-8xl color-kigaruni-ash"></span>
                            </div>
                            <div class="p-5 fw-bold ">
                                最終健診記録を <br>
                                アップロード
                            </div>
                        </div>
                        <div class="col-md-4 ms-4 border border-2 d-flex justify-content-center align-items-center">
                            <div class="p-5">
                                <span class="fa fa-cloud-upload text-8xl color-kigaruni-ash"></span>
                            </div>
                            <div class="p-5 fw-bold">
                                予防接種をアップロード
                            </div>
                        </div>
                    </div>

                    <div class="ms-5 ps-5">
                        <div class="d-flex justify-content-center align-items-center w-50 mt-5">
                            <span class="text-muted">利用規約、プライバシーポリシー</span>
                            <span>に同意の上ご送信ください</span>
                        </div>

                        <div class="d-flex justify-content-center align-items-center w-50 mt-4">
                            <label class="container-checkbox text-muted">
                                <span class="ms-2">利用規約およびプライバシーポリシーに同意する</span>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>

                        <div class="d-flex justify-content-center align-items-center w-50 mt-5">
                            <button class="border border-secondary bg-white px-5 py-2 me-4" @click="handleRoute('DocumentUploadSecondary')">
                                <span class="px-5">戻る</span>
                            </button>
                            <button class="exy-default-btn ms-4" @click="handleRoute('NotificationSetting')">
                                送信する
                            </button>
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
        name: "RegistrationHandbook",
        data() {
            return {
                navActive: "setting",
                sideNavActive: 3,
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
            }
        }
    };
</script>