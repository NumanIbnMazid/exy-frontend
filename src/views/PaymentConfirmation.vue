<template>
    <div class="garden-reviews-parent">

        <div class="container mb-5 mt-5">

            <!-- page content -->

            <!-- header -->
            <div class="text-center">
                <div class="fw-bold text-2xl">お支払い確認</div>
                <div class="mt-4">
                    <div class="text-start">
                        <span>ご利用内容を確認のうえ、お支払いを確定ください。</span>
                    </div>
                </div>
            </div>
            <!-- /header -->

            <!-- content -->
            <div class="p-4">
                <div class="table-responsive mt-4 border no-margin-table">
                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <td class="ps-4 fw-bold">ご利用保育園</td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    <div class="mt-2 d-flex align-items-center justify-content-center">
                                        <div class="me-4">
                                            <img src="../assets/images/garden-reviews/WEB06_lt@2x.png" alt="EXY"
                                                height="200" width="200">
                                        </div>
                                        <div>
                                            <div class="fw-bold text-lg mb-2"><u>COCOROHOIKUEN 弁天町園</u></div>
                                            <div class="mt-2">〒552-0002 大阪市港区市岡元町2-11-30 1階</div>
                                            <div class="mt-2">JR大阪環状線「弁天町駅」から徒歩８分</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="ps-4 fw-bold">ご利用目的</td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    体験保育(一時保育)
                                </td>
                            </tr>
                            <tr>
                                <td class="ps-4 fw-bold">ご利用日時</td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    <span>2021年2月16日</span>
                                    <span class="ms-3 me-3">(火)</span>
                                    <span>9:00~16・00(7:00h)</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="ps-4 fw-bold">利用プラン</td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    <span>体験保育</span>
                                    <span class="ms-2 me-2">|</span>
                                    <span>1 歳児以上</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="ps-4 fw-bold">オプション</td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    <span>その他費用</span>
                                    <span class="ms-2 me-2">|</span>
                                    <span>給食、その他費用</span>
                                    <span class="ms-2 me-2">|</span>
                                    <span>おやっ</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="ps-4 fw-bold">利用者</td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    <span class="bg-light p-1 rounded-circle me-2">1</span>
                                    <span class="me-2">田中</span>
                                    <span class="me-4">海</span>
                                    <span class="me-3">令和2年2月25日生</span>
                                    <span class="me-3">(満1歳)</span>
                                    <span class="me-2">男児</span>
                                    <span>アレルギー疾患:有</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mt-5">
                    <div class="p-3 bg-kigaruni-pinkish mx-2 mt-4 text-center">
                        お支払い金額
                    </div>

                    <div class="row mx-2 mt-1 custom-row-x-0">
                        <div class="col-md-2 bg-light d-flex align-items-center justify-content-center">
                            <span>内訳</span>
                        </div>
                        <div class="col-md-10 table-responsive no-margin-table">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td class="ps-3">
                                            体験保育 ｜ １歳児以上 プラン（9:00h × ¥10）
                                        </td>
                                        <td>￥5,400</td>
                                    </tr>
                                    <tr>
                                        <td class="ps-3">
                                            施設利用料
                                        </td>
                                        <td>￥500</td>
                                    </tr>
                                    <tr>
                                        <td class="ps-3">
                                            その他費用 ｜ 給食（１食）
                                        </td>
                                        <td>￥500</td>
                                    </tr>
                                    <tr>
                                        <td class="ps-3">
                                            その他費用 ｜ おやつ（１食）
                                        </td>
                                        <td>￥100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="mx-2 mt-2 row border-top border-bottom">
                    <div class="col-md-2 bg-light d-flex align-items-center justify-content-center p-3">
                        <span>合計金額</span>
                    </div>
                    <div class="col-md-10 table-responsive no-margin-table p-3">
                        18,000円
                    </div>
                </div>
                <div class="mx-2 mt-2 row border-top border-bottom">
                    <div class="col-md-2 bg-light d-flex align-items-center justify-content-center p-3">
                        <span>お支払い方法</span>
                    </div>
                    <div class="col-md-10 table-responsive no-margin-table p-3">
                        <div class="row">
                            <div class="col-md-6">クレジット支払い</div>
                            <div class="col-md-6">
                                <button class="border px-3 py-1 text-end bg-white border-2"
                                    @click="handleRoute('PaymentMethodSelection')">お支払い方法変更</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /content -->

            <div class="text-center mt-4">
                <button class="exy-default-btn rounded px-5 py-3" data-bs-toggle="modal"
                    data-bs-target="#paymentConfirmedModal">
                    <span class="px-5">支払い確定</span>
                </button>
            </div>

            <!-- /page content -->

        </div>

        <!-- Modal -->
        <div class="modal fade" id="paymentConfirmedModal" tabindex="-1" aria-labelledby="paymentConfirmedModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="text-end p-2">
                        <button type="button" class="border rounded-circle bg-dark text-white ps-2 pe-2"
                            data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div class="modal-body px-5">
                        <div class="mt-2 bg-light py-3 px-5 text-center">
                            <div class="me-4">
                                <img src="../assets/images/garden-reviews/WEB06_lt@2x.png" alt="EXY" height="200"
                                    width="200">
                            </div>
                            <div class="mt-4">
                                <div class="fw-bold text-xl mb-2"><u>COCOROHOIKUEN 弁天町園</u></div>
                                <div class="mt-2">
                                    <span class="border px-2 py-1 me-2 border-secondary">アクセス</span>
                                    〒552-0002 大阪市港区市岡元町2-11-30 1階
                                </div>
                                <div class="mt-2">JR大阪環状線「弁天町駅」から徒歩８分</div>
                            </div>
                        </div>

                        <div class="mt-5 text-center mb-5">
                            <div class="mt-2">ありがとうございます。</div>
                            <div class="mt-2">お支払いが完了しました。</div>
                            <div class="mt-2">またのご利用をお待ちしております。</div>
                        </div>

                        <div class="mt-5 text-center mb-5">
                            <button class="border border-1 px-5 py-1 border-secondary" @click="handleRoute(56)">
                                <span class="px-4">戻る</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Modal -->
    </div>
</template>

<script>
    // imports
    import router from "../router/index"

    export default {
        name: "PaymentConfirmation",
        data() {
            return {}
        },
        components: {},
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