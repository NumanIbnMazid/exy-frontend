<template>
    <div class="garden-reviews-parent">

        <div class="container mb-5 mt-5">

            <!-- page content -->

            <!-- header -->
            <div class="text-center">
                <div class="fw-bold text-2xl">園口コミ</div>
            </div>
            <!-- /header -->

            <div class="mt-5" @click="handleRoute(180)">
                <div class="mt-2">お子様を預けた感想・コメントをお聞かせください。 </div>
                <div class="mt-2">ユーザーネーム・性別・お子様の年齢などに誤りがある方は、口コミ投稿前に「マイページ」より修正してください。 </div>
                <div class="mt-2">ガイドラインに反する書き込みは、掲載されない場合があります。</div>
                <div class="mt-2">口コミ投稿後にお支払いページへ移ります。</div>
            </div>

            <!-- content -->
            <div class="p-4 mt-5">
                <div class="table-responsive mt-4 px-5">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th scope="row" class="bg-kigaruni-pinkish text-center">
                                    ユーザーネーム
                                </th>
                                <td>
                                    <span class="ms-4">そらくんママ</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="bg-kigaruni-pinkish text-center">
                                    性別
                                </th>
                                <td>
                                    <span class="ms-4">女性</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="bg-kigaruni-pinkish text-center">
                                    お子様の年齢
                                </th>
                                <td>
                                    <span class="ms-4">1歳</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="border p-4 mt-5 shadow mb-5">
                    <div class="table-responsive mt-4 px-3">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <th scope="row" class="bg-kigaruni-secondary text-center">
                                        ユーザーネーム
                                    </th>
                                    <td>
                                        <span class="ms-4">COCORO HOIKUEN 弁天町園</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="bg-kigaruni-secondary text-center">
                                        利用内容
                                    </th>
                                    <td>
                                        <span class="ms-4">|体験堡良-</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="border row mt-4 p-4 m-3" v-for="x in 3" :key="x">
                        <div class="col-md-3">
                            <div class="mt-2 fw-bold ms-4">
                                <span v-if="x == 1">園の雰囲気</span>
                                <span v-else-if="x == 2">園の環境・施設</span>
                                <span v-else>園の保育内容</span>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <span class="fa fa-star text-4xl color-kigaruni-light ms-5" v-for="i in 5" :key="i" @click="rated =!rated, handleRating(x)" :class="(x == 1 && rate1 == true) || (x == 2 && rate2 == true) || (x == 3 && rate3 == true) ? 'color-kigaruni-light': 'color-kigaruni-bird-flower'"></span>
                        </div>
                    </div>

                    <div class="mt-4 rounded-pill bg-light mx-3 d-flex justify-content-start align-items-center">
                        <div class="">
                            <label class="rounded-pill bg-kigaruni-green px-4 py-1 text-white fw-bold">10POINT GET！</label>
                        </div>
                        <div class="ms-5">
                            <span>他のユーザーの参考になるように、感想を共有しましょう</span>
                        </div>
                    </div>

                    <div class="bg-light mt-4 mx-3 pb-5 rounded">
                        <div class="p-3 mt-4 pb-5 text-muted">10文字以上で入力してください。</div>
                        <div class="pb-5"></div>
                        <div class="pb-5"></div>
                    </div>

                    <div class="text-center mt-4 mb-4">
                        <button class="exy-default-btn" @click="handleRoute('PaymentConfirmation')">お支払いに進む</button>
                    </div>
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

    export default {
        name: "GaedenReviewSolo",
        data() {
            return {
                rate1: true,
                rate2: true,
                rate3: true,
            }
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
            handleRating(x) {
                if (x == 1) {
                    this.rate1 = !this.rate1
                }
                if (x == 2) {
                    this.rate2 = !this.rate2
                }
                if (x == 3) {
                    this.rate3 = !this.rate3
                }
                return
            }
        }
    };
</script>