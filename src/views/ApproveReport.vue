<template>
    <div class="garden-reviews-parent">

        <div class="container mb-5 mt-5">

            <!-- page content -->

            <!-- header -->
            <div class="text-center">
                <div class="fw-bold text-2xl">この完了報告を承認します</div>
                <div class="mt-4">
                    <div class="text-start">
                        <span>一度承認された報告は、取り消すことはできません。よろしければ【承認する】ボタンを押してください。 </span>
                        <br>
                        <p class="mt-2">お支払い方法は承認後の「お支払い手続き」で変更可能です。</p>
                    </div>
                </div>
            </div>
            <!-- /header -->

            <div class="mt-5">
                <hr>
            </div>

            <div class="mt-5 d-flex align-items-center justify-content-center">
                <div class="me-4">
                    <img src="../assets/images/garden-reviews/WEB06_lt@2x.png" alt="EXY" height="200" width="200">
                </div>
                <div>
                    <div class="fw-bold text-lg mb-2"><u>COCOROHOIKUEN 弁天町園</u></div>
                    <div class="mt-2">〒552-0002 大阪市港区市岡元町2-11-30 1階</div>
                    <div class="mt-2">JR大阪環状線「弁天町駅」から徒歩８分</div>
                </div>
            </div>

            <!-- content -->
            <div class="p-4 mt-5">
                <div class="table-responsive mt-4">
                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <td class="ps-4">利用時間</td>
                            </tr>
                            <tr>
                                <td class="p-4">2021年2月16日（火） 9:00〜16:00（7:00h）</td>
                            </tr>
                            <tr>
                                <td class="ps-4">利用プラン</td>
                            </tr>
                            <tr>
                                <td class="p-4">体験保育 ｜ １歳児以上</td>
                            </tr>
                            <tr>
                                <td class="ps-4">オプション</td>
                            </tr>
                            <tr>
                                <td class="p-4">その他費用 ｜ 給食、その他費用 ｜ おやつ</td>
                            </tr>
                            <tr>
                                <td class="ps-4">お支払い総額</td>
                            </tr>
                            <tr>
                                <td class="p-4">￥6,500</td>
                            </tr>
                            <tr>
                                <td class="ps-4">内訳</td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    <div>・体験保育 ｜ １歳児以上 プラン（9:00h × ¥10） … ￥5,400 </div>
                                    <div class="mt-4">・施設利用料 … ￥500</div>
                                    <div class="mt-4">・その他費用 ｜ 給食（１食） … ￥500 </div>
                                    <div class="mt-4">・その他費用 ｜ おやつ（１食） … ￥100</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="ps-4">保育園からの一言</td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- /content -->

            <div class="text-center mt-4">
                <button class="exy-default-btn rounded px-5 py-3" data-bs-toggle="modal"
                    data-bs-target="#approveModal">
                    <span class="px-5">承認する</span>
                </button>
                <p class="mt-4" @click="handleRoute(155)"><u>完了報告に対するお問い合わせこちら ＞</u></p>
            </div>

            <!-- /page content -->

        </div>


        <!-- Modal -->
        <div class="modal fade" id="approveModal" tabindex="-1" aria-labelledby="approveModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-body m-5">
                        <div class="text-center text-xl fw-bold text-dark mt-5">
                            |完了報告を承認しました
                        </div>

                        <hr>

                        <div class="text-center m-5">
                            <button class="exy-default-btn rounded px-5 py-3" @click="handleRoute(71)">
                                <span class="px-5">ロコミ・支払い手続きへ</span>
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
        name: "ApproveReport",
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