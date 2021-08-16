<template>
    <div class="favorite-garden-parent">

        <!-- secondary header -->
        <SecondaryHeader :navActive="navActive"></SecondaryHeader>

        <!-- page content -->
        <div class="container mb-5 mt-5">


            <!-- page header -->
            <div>
                <span class="fa fa-star color-kigaruni-pink"></span>
                <span class="ms-2 fw-bold">お気に入り園</span>
            </div>
            <!-- /page header -->

            <!-- content -->
            <div class="mt-4 border p-3 position-relative shadow-sm ms-3" v-for="i in 5" :key="i"
                :class="i != 1 ? 'mt-5':''">
                <!-- div badge -->
                <div class="div-badge-parent d-flex align-items-center justify-content-center" data-bs-toggle="modal"
                    data-bs-target="#favoriteGardenModal">
                    <span class="fa fa-star text-2xl color-kigaruni-bird-flower"></span>
                </div>
                <!-- /div badge -->
                <div class="">
                    <div class="ms-3 mb-2">
                        <u class="fw-bold text-xl">COCOROHOIKUEN 弁天町園</u>
                        <div class="mt-2">
                            <span class="border border-secondary px-2 py-1">アクセス</span>
                            <span class="ms-2">〒552-0002 大阪市港区市岡元町2-11-30 1階</span>
                            <span class="ms-4 me-4">｜</span>
                            <span>JR大阪環状線「弁天町駅」から徒歩８分</span>
                        </div>
                    </div>

                    <div class="hr-dotted">
                        <hr>
                    </div>
                </div>

                <div class="mt-2 ms-3 d-flex align-items-top">
                    <div class="">
                        <img src="../assets/images/mypage/Mask_Group_41.png" alt="EXY" class="" height="185">
                    </div>
                    <div class="ms-3">
                        <div>
                            まだ小さなお子様をお預かりする当園では、一人一人をたくさん抱きしめて愛情いっぱい注ぐことを最も大切にしています。テーマは「えいごとにほんごであそぼう」インターナショナル…
                        </div>
                        <div class="p-2 bg-light rounded">
                            <span class="me-2">園特色：</span>
                            <span class="bg-white rounded-pill text-center px-4 py-1 color-kigaruni-pink" v-for="n in 4"
                                :key="n" :class="n != 1 ? 'ms-3':''">
                                #園特色{{n}}
                            </span>
                        </div>
                        <div class="p-2 bg-light rounded mt-2">
                            <span class="me-2">口コミ：</span>
                            <span>5.0</span>
                            <span class="fa fa-star color-kigaruni-bird-flower ms-3 text-xl" v-for="n in 4"
                                :key="n"></span>
                        </div>
                        <div class="mt-1">
                            <button class="w-100 bg-white rounded color-kigaruni-pink border-kigaruni-pink p-1" @click="handleRoute(22)">
                                <span class="fw-bold text-2xl">空き確認</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /content -->

            <!-- pagination -->
            <div class="mt-5 mb-5">
                <Pagination></Pagination>
            </div>
            <!-- /pagination -->


        </div>
        <!-- /page content -->

        <!-- Modal -->
        <div class="modal fade" id="favoriteGardenModal" tabindex="-1" aria-labelledby="favoriteGardenModalLabel"
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
                            <div class="mt-2">お気に入りを解除しますか?</div>
                            <div class="mt-2">解除すると園からお知らせが届かなくなります。</div>
                        </div>

                        <div class="mt-5 text-center mb-5">
                            <button class="border border-1 px-5 py-2 border-secondary bg-white" data-bs-dismiss="modal">
                                <span class="px-4">戻る</span>
                            </button>
                            <button class="exy-default-btn border border-1 px-5 py-2 ms-4" data-bs-dismiss="modal">
                                <span class="px-4">解除する</span>
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
    import SecondaryHeader from "../components/partials/SecondaryHeader"
    import Pagination from "../components/Pagination"

    export default {
        name: "FavoriteGarden",
        data() {
            return {
                navActive: "information"
            }
        },
        components: {
            SecondaryHeader,
            Pagination,
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

<style scoped lang="scss">
    .div-badge-parent {
        position: absolute;
        top: -5px;
        left: -20px;
        background-image: linear-gradient(#f8f8f8, #f7f7f7);
        height: 123px;
        width: 40px;
        text-align: center;
        z-index: 999;

        &:after {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 10px;
            content: "";
            display: block;
            border-bottom: 10px solid white;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
        }
    }
</style>