<template>
    <div class="garden-reviews-parent">

        <div class="container mb-5 mt-5">

            <!-- page content -->

            <!-- header -->
            <div class="text-center">
                <div class="fw-bold text-2xl">予約内容の変更</div>
                <hr>
                <div>変更内容を入力してください</div>
            </div>
            <!-- /header -->

            <!-- content -->
            <div class="border border-1 p-4 mt-5 shadow">
                <div class="text-xl fw-bold">予約内容</div>
                <div class="p-2 bg-light mt-4">登園日時</div>

                <div class="table-responsive mt-4">
                    <table class="table">
                        <tbody>
                            <tr class="custom-form-group">
                                <td>
                                    <div class="row custom-form-group m-2">
                                        <div class="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12 mt-4">
                                            <date-picker v-model="date" valueType="format"
                                                :disabled-date="disabledBeforeToday" placeholder="2021年2月26日（金）">
                                            </date-picker>
                                        </div>
                                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12 mt-4">
                                            <input type="text" class="form-control" placeholder="09：00">
                                        </div>
                                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12 mt-4">
                                            <input type="text" class="form-control" placeholder="17：00">
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="row m-2">
                                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mt-4">
                                            利用園
                                        </div>
                                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-4">
                                            COCOROHOIKUEN 弁天町園
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="row m-2">
                                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mt-4">
                                            プラン
                                        </div>
                                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-4">
                                            <div>体験保育 ー ０歳児</div>
                                            <div class="mt-4">体験保育 ー １歳児以上</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="row m-2">
                                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mt-4">
                                            オプション
                                        </div>
                                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-4">
                                            <div>その他経費 ー お給食</div>
                                            <div class="mt-4">その他経費 ー おやつ</div>
                                            <div class="mt-4">その他経費 ー ミルク</div>
                                            <div class="mt-4">その他経費 ー 手ぶらプラン</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="row m-2">
                                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mt-4">
                                            利用者
                                        </div>
                                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-4">
                                            <span
                                                class="me-3 rounded-circle bg-kigaruni-ash text-white p-1"><small>1</small></span>
                                            <span class="me-5">田中 海</span>
                                            <span>令和2年2月25日生（満１歳） 男児 アレルギー疾患：有</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="row m-2">
                                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mt-4">
                                            送迎者
                                        </div>
                                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-4">
                                            <div>
                                                <span
                                                    class="me-3 rounded-circle bg-kigaruni-ash text-white p-1"><small>1</small></span>
                                                <span class="me-5">田中 愛</span>
                                                <span>族柄：母 ｜ 携帯番号：090-0000-0000</span>
                                            </div>
                                            <div class="mt-4">
                                                <span
                                                    class="me-3 rounded-circle bg-kigaruni-ash text-white p-1"><small>2</small></span>
                                                <span class="me-5">田中 仁</span>
                                                <span>族柄：父 ｜ 携帯番号：090-0000-0000</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="row m-2">
                                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mt-4">
                                            緊急連絡先追加
                                        </div>
                                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-4">
                                            <span
                                                class="me-3 rounded-circle bg-kigaruni-ash text-white p-1"><small>1</small></span>
                                            <span class="me-5">上田 誠</span>
                                            <span>族柄：祖父 ｜ 携帯番号：090-0000-0000</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="row m-2">
                                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mt-4">
                                            支払い方法
                                        </div>
                                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-4">
                                            <span>クレジット支払い</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="m-2 bg-light p-1 ms-3">
                                        <span>金額</span>
                                    </div>
                                    <div class="row m-2 mt-4 custom-row-x-0">
                                        <div class="col-md-2 bg-light d-flex align-items-center justify-content-center">
                                            <span>内訳</span>
                                        </div>
                                        <div class="col-md-10 table-responsive no-margin-table">
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            体験保育 ｜ １歳児以上 プラン（9:00h × ¥10）
                                                        </td>
                                                        <td>￥5,400</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            施設利用料
                                                        </td>
                                                        <td>￥500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            その他費用 ｜ 給食（１食）
                                                        </td>
                                                        <td>￥500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            その他費用 ｜ おやつ（１食）
                                                        </td>
                                                        <td>￥100</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="row mx-2">
                                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mt-4">
                                            支払い予定金額
                                        </div>
                                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-4">
                                            ￥6,500
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="ms-3">
                                        <span>付与予定ポイント</span>
                                        <span class="ms-2">697ポイント</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- /content -->

            <div class="p-4 bg-light text-center mt-5">
                <button class="exy-default-btn rounded" data-bs-toggle="modal" data-bs-target="#reservationModal">この内容で予約を変更する</button>
            </div>

            <!-- /page content -->

        </div>


        <!-- Modal -->
        <div class="modal fade" id="reservationModal" tabindex="-1" aria-labelledby="reservationModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="text-end p-2">
                        <button type="button" class="border rounded-circle bg-dark text-white ps-2 pe-2"
                            data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center text-xl fw-bold text-dark">
                            予約内容を変更しました
                        </div>

                        <hr>

                        <div class="mt-4 text-center">
                            <p>変更後、ご予約は「予約リクエスト」となります。</p>
                            <p>「ご予約確定」ではございませんのでご注意ください.</p>
                        </div>
                        <div class="mt-5 text-center">
                            <p>保育園からの「予約確定」の連絡をもって</p>
                            <p>予約成立となります.</p>
                        </div>
                        <div class="mt-5 mb-5 text-center">
                            <p>今しばらくお待ちくださいませ.</p>
                        </div>

                        <div class="text-center mb-4">
                            <button class="btn-dark px-5 py-2 w-50" @click="handleRoute(59)">としる</button>
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
    import router from "../../router/index"
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import 'vue2-datepicker/locale/ja';

    export default {
        name: "ChangeReservationDetails",
        data() {
            return {
                date: '',
            }
        },
        components: {
            DatePicker
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
            disabledBeforeToday(date) {
                const today = new Date()
                today.setHours(0, 0, 0, 0)

                return date < today
            },
        }
    };
</script>