<template>
    <div class="admin-physical-measurement-parent admin-parent">
        <!-- breadcrumb -->
        <Breadcrumb :pageName="dataPageName"></Breadcrumb>
        <!-- /breadcrumb -->

        <!-- page content -->
        <div class="container">

            <!-- top section -->
            <div class="row mt-4">
                <div class="col-6 text-start">
                    <span class="fa fa-caret-left color-kigaruni-green text-2xl fw-bold"></span>
                    <span class="ms-4 me-4 text-2xl fw-bold">2021年6月</span>
                    <span class="fa fa-caret-right color-kigaruni-green text-2xl fw-bold"></span>
                </div>
                <div class="col-6 text-end">
                    <select class="p-2 w-25 border border-2 rounded bg-light form-text">
                        <option selected>全体</option>
                        <option :value="index" v-for="(n,index) in 6" :key="index">{{ index }} 歳児</option>
                    </select>
                </div>
            </div>
            <!-- top section -->

            <div class="mt-4">
                <hr style="padding:0.5px;">
            </div>

            <!-- items -->
            <div class="row mt-4" v-for="(item, index) in dataItems" :key="index" :class="index == 0 ? 'mt-5':''">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <router-link :to="{name: 'todo', params: {page: 40} }">
                        <div>
                            <span class="fw-bold">
                                <u>{{ item.name }}</u>
                            </span>
                        </div>
                    </router-link>
                    <div class="mt-2">
                        <span class="text-muted">女（{{ item.number }} 歳児）</span>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 custom-form-group">
                    <div class="form-group">
                        <span class="me-3">身長</span>
                        <input type="text" class="ms-3 w-25 border border-2 p-2 form-text bg-light">
                        <span class="ms-3">cm</span>
                        <span class="ms-3 me-3">|</span>
                        <span class="me-3">体重</span>
                        <input type="text" class="ms-3 w-25 border border-2 p-2 form-text bg-light">
                        <span class="ms-2 me-4">kg</span>
                        <router-link :to="{name: 'Admin.ChildMeasurementInformation' }" class="rounded-circle text-white ps-2 pe-2 background-kigaruni-pink p-3">
                            登録
                        </router-link>
                    </div>
                </div>

            </div>
            <!-- /items -->

            <!-- pagination -->
            <div class="mb-5">
                <Pagination></Pagination>
            </div>
            <!-- /pagination -->

        </div>
        <!-- /page content -->
    </div>
</template>


<script>
    // imports
    import Breadcrumb from "../../components/adminPartials/Breadcrumb"
    import Pagination from "../../components/Pagination"

    export default {
        name: "PhysicalMeasurement",
        data() {
            return {
                dataPageName: "身体測定",
                dataItems: [
                    { name: '哀川 里奈（あいかわ りな）', number: 1 },
                    { name: '安達 柚（あだち ゆず）', number: 1 },
                    { name: '上田 海音（うえだ かのん）', number: 2 },
                    { name: '白川 洋（しらかわ ひろし）', number: 5 },
                    { name: '進藤 一（しんどう はじめ）', number: 2 },
                    { name: '高畑 優衣（たかばた ゆい）', number: 2 },
                    { name: '田中 空（たなか そら）', number: 2 },
                    { name: '飯田 太一（いいだ たいち）', number: 3 },
                    { name: '佐藤 めぐみ（さとう めぐみ）', number: 3 },
                    { name: '竹内 真斗（たけうち まさと）', number: 3 }
                ]
            }
        },
        components: {
            Breadcrumb,
            Pagination
        }
    };
</script>

<style scoped>

</style>