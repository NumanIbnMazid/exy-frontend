<template>
    <div class="garden-reviews-parent">

        <div class="container mb-5 mt-5">

            <!-- page content -->

            <!-- header -->
            <div class="text-center">
                <div class="fw-bold text-2xl">園口コミ</div>
            </div>
            <!-- /header -->

            <div class="mt-5">
                <div class="mt-2">お子様を預けた感想・コメントをお聞かせください。 </div>
                <div class="mt-2">ユーザーネーム・性別・お子様の年齢などに誤りがある方は、口コミ投稿前に「マイページ」より修正してください。 </div>
                <div class="mt-2">ガイドラインに反する書き込みは、掲載されない場合があります。</div>
                <div class="mt-2">口コミ投稿後にお支払いページへ移ります。</div>
            </div>

            <!-- content -->
            <div class="p-4 mt-5">
                <div class="table-responsive mt-4 px-4">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th scope="row" class="bg-kigaruni-pinkish">1</th>
                                <td>Mark</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- /content -->

            <div class="text-center mt-4">
                <button class="exy-default-btn rounded px-5 py-3" data-bs-toggle="modal" data-bs-target="#approveModal">
                    <span class="px-5">承認する</span>
                </button>
                <p class="mt-4" @click="handleRoute(155)"><u>完了報告に対するお問い合わせこちら ＞</u></p>
            </div>

            <!-- /page content -->

        </div>


        <!-- Modal -->
        <div class="modal fade" id="approveModal" tabindex="-1" aria-labelledby="approveModalLabel" aria-hidden="true">
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
        name: "GaedenReviewSolo",
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