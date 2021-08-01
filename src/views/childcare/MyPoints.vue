<template>
    <div class="childcare-parent">

        <Header :navActive="navActive"></Header>

        <div class="container">

            <!-- Page Content -->
            <div class="mt-5 mb-5">
                <div class="mt-5 mb-5">
                    <span class="text-2xl fw-bold">マイポイント</span>
                </div>

                <!-- section 1 -->
                <div class="p-4 border border-2">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 text-end pe-5">
                            <span class="fw-bold">ご利用可能なポイント</span>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 text-start ps-5">
                            <span class="kigaruni-yellow text-3xl fw-bold">500</span>
                            <span class="fw-bold ms-2 text-xl">point</span>
                        </div>
                    </div>
                    <div class="hr-dotted ps-5 pe-5">
                        <hr>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 text-end pe-5">
                            <span>購入ポイント</span>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 text-start ps-5">
                            <span class="me-3">400</span>
                            <span>point</span>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 text-end pe-5">
                            <span>特典ポイント</span>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 text-start ps-5">
                            <span class="me-3">100</span>
                            <span>point</span>
                        </div>
                    </div>
                    <div class="text-center">
                        <router-link :to="{ name:'CouponCode' }"
                            class="read-more mt-5 kigaruni-pink-background text-white fw-normal" type="button">クーポンコードを入力
                        </router-link>
                    </div>
                    <div class="text-center mb-5">
                        <button class="exy-white-btn fw-normal">
                            クーポンコードを入力
                        </button>
                    </div>
                </div>
                <!-- /section 1 -->

                <!-- section 2 -->
                <div class="mt-5">
                    <div class="pt-2 pb-2 ps-4 pe-4 background-707070 mt-5">
                        <span class="text-white fw-bold">ポイント履歴</span>
                    </div>
                    <div class="table-responsive mt-5">
                        <table class="table">
                            <tbody class="text-center">
                                <tr class="text-center">
                                    <th scope="col" class="fw-normal">日付</th>
                                    <th scope="col" class="fw-normal">タイプ</th>
                                    <th scope="col" class="fw-normal">獲得・利用</th>
                                </tr>
                                <tr>
                                    <td>5/1 (月)</td>
                                    <td>ポイント購入</td>
                                    <td>6500ポイント獲得予定</td>
                                </tr>
                                <tr>
                                    <td>2/1 (月)</td>
                                    <td>一時保育利用（COCORO HOIKUEN弁天町園)</td>
                                    <td>200ポイント獲得</td>
                                </tr>
                                <tr>
                                    <td>2/1 (月)</td>
                                    <td>一時保育利用（COCORO HOIKUEN弁天町園)</td>
                                    <td>200ポイント獲得</td>
                                </tr>
                                <tr>
                                    <td>2/1 (月)</td>
                                    <td>一時保育利用（COCORO HOIKUEN弁天町園)</td>
                                    <td>200ポイント獲得</td>
                                </tr>
                                <tr>
                                    <td>2/1 (月)</td>
                                    <td>一時保育利用（COCORO HOIKUEN弁天町園)</td>
                                    <td>200ポイント獲得</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-5 text-center">
                        <span class="fa fa-spinner text-6xl text-secondary"></span>
                    </div>
                </div>
                <!-- /section 2 -->

            </div>
            <!-- /Page Content -->

        </div>

    </div>
</template>

<script>
    // imports
    import Header from "./Header.vue"

    export default {
        name: "MyPoints",
        components: {
            Header,
        },
        data() {
            return {
                navActive: false
            }
        },
    }
</script>

<style scoped>

</style>