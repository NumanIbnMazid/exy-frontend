<template>
    <div class="document-upload-secondary-parent">

        <!-- secondary header -->
        <SecondaryHeader :navActive="navActive"></SecondaryHeader>
        <!-- /secondary header -->

        <div class="py-2 overflow-hidden mb-5 mt-4">

            <!-- left sidebar -->
            <left-sidebar :sideNavActive="sideNavActive" />
            <!-- /left sidebar -->

            <!-- right column -->
            <div class="float-start right-column mb-5">
                <div class="hr-title fw-bold text-2xl">書類のアップロード</div>

                <!-- content -->

                <div class="py-4 px-3 mt-2">

                    <p>
                        本人確認書類及びお子様に関する書類を提出するとできること <br>
                        ・月極保育の予約 <br>
                        ・体験保育の予約 <br>
                        ご提出いただいた書類は、保育園を予約した際、キガルニホイク事務局から予約した保育園にのみ本人確認のために開示し、外部・及び利用しない保育園へ開示されることはありませんのでご安心ください。
                        <br>
                    </p>

                    <div class="mt-4">
                        ※以下よりアップロードする書類をお選びください。
                    </div>
                    <div class="ms-3 mt-2">
                        また、種類によっては両面を撮影していただく必要がある場合もあります。
                    </div>

                </div>

                <div class="py-4 px-3">

                    <div class="fw-bold">書類を選択</div>

                    <select class="mt-2 p-2 w-25 border border-2 rounded bg-light form-text" v-model="selected" @click="handleSelect('DocumentUpload')">
                        <option value="97"><span class="fw-bold">本人確認書類−</span></option>
                        <option value="97"><span class="ms-2">運転免許証</span></option>
                        <option value="97"><span class="ms-2">保険証</span></option>
                        <option value="97"><span class="ms-2">パスポート</span></option>
                        <option value="97"><span class="ms-2">住民基本台帳カード</span></option>
                        <option value="98"><span class="fw-bold">各種書類−</span></option>
                        <option value="98" selected><span class="ms-2">勤務証明書</span></option>
                        <option value="98"><span class="ms-2">健康診断書</span></option>
                        <option value="98"><span class="ms-2">アレルギー疾患生活管理指導表</span></option>
                    </select>

                </div>

                <div class="py-4 px-3">

                    <div class="fw-bold">選択した書類をアップロード</div>

                    <div class="d-flex justify-content-center align-items-center mt-3 border border-2 w-50">
                        <div class="p-5">
                            <span class="fa fa-cloud-upload text-8xl color-kigaruni-ash"></span>
                        </div>
                        <div class="p-5 fw-bold">
                            表面をアップロード
                        </div>
                    </div>

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
                        <button class="border border-secondary bg-white px-5 py-2 me-4" @click="handleRoute('DocumentUpload')">
                            <span class="px-5">戻る</span>
                        </button>
                        <button class="exy-default-btn ms-4" @click="handleRoute('DocumentUpload')">
                            送信する
                        </button>
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
        name: "DocumentUploadSecondary",
        data() {
            return {
                navActive: "setting",
                sideNavActive: 1,
                selected: null
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

            handleSelect(pageRoute) {
                if (this.selected == 97) {
                    this.handleRoute(pageRoute)
                }
            }
        }
    };
</script>