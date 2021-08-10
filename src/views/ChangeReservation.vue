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
            <div class="border border-1 p-4 mt-5">
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
                                            <span>体験保育</span>
                                            <span class="ms-4 me-4">｜</span>
                                            <span>１歳児以上</span>
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
                                            <span>その他費用 ｜ 給食、その他費用 ｜ おやつ</span>
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
                                            <span>令和2年2月25日生（満１歳）男児 アレルギー疾患：有</span>
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
                                    <div class="row m-2 mt-4">
                                        <div class="col-md-2 text-center p-5 bg-light">
                                            内訳
                                        </div>
                                        <div class="col-md-10 table-responsive">
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
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- /content -->

            <!-- /page content -->

        </div>
    </div>
</template>

<script>
    // imports
    import router from "../router/index"
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import 'vue2-datepicker/locale/ja';

    export default {
        name: "ChangeReservation",
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