<template>
    <div class="childcare-parent">

        <Header></Header>

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
                        <router-link :to="{name:'todo', params: {page: 80}}"
                            class="read-more mt-5 kigaruni-pink-background text-white" type="button">クーポンコードを入力
                        </router-link>
                    </div>
                    <div class="text-center mb-5">
                        <button class="exy-white-btn">
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
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
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
        name: "MyPoint",
        components: {
            Header,
        }
    }
</script>

<style scoped>

</style>