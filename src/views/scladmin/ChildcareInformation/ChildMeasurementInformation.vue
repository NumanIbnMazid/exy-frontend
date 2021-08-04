<template>
    <div class="childcare-information-parent children-information admin-parent">

        <!-- breadcrumb -->
        <Breadcrumb :pageName="dataPageName"></Breadcrumb>
        <!-- /breadcrumb -->

        <div class="row w-100 experience-body">


            <!-- left sidebar -->
            <LeftSidebar></LeftSidebar>
            <!-- /left sidebar -->

            <div class="col-md-8 right-col">

                <!-- RightCol Header -->
                <rightcol-header></rightcol-header>
                <!-- /RightCol Header -->

                <!-- content -->
                <div class="row row-2 ps-1">

                    <!-- tabs -->
                    <div class="details-tab">
                        <div class="px-0 tabs">
                            <a> </a>
                            <a @click="activeTab=1" :class="[ activeTab === 1 ? 'active' : '' ]"> 基本情報</a>
                            <a @click="activeTab=2" :class="[ activeTab === 2 ? 'active' : '' ]"> 身体測定</a>
                            <a @click="activeTab=3" :class="[ activeTab === 3 ? 'active' : '' ]"> 利用履歴</a>
                            <a> </a>
                        </div>
                    </div>
                    <!-- /tabs -->

                    <!-- tab content -->
                    <div v-if="activeTab===2" class="childcare-information w-100 pb-5">
                        <div class="row w-100 pt-4 inner-row-1 mt-4">

                            <div class="text-start">
                                <span class="fa fa-caret-left color-kigaruni-pink text-xl fw-bold"></span>
                                <span class="ms-4 me-4 text-xl fw-bold">2021 年度</span>
                                <span class="fa fa-caret-right color-kigaruni-pink text-xl fw-bold"></span>
                            </div>

                            <!-- table -->
                            <div class="table-responsive mt-4">
                                <table class="table table-bordered border-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col" width="100"></th>
                                            <th scope="col" v-for="i in dataTableCols" :key="i"
                                                class="text-center background-pinkish fw-normal">
                                                {{ i }} 月
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="text-center">
                                            <th class="background-bluish fw-normal">身長(cm)</th>
                                            <td v-for="i in dataTableCols" :key="i">
                                                <span v-if="i == 4">78.8</span>
                                                <span v-if="i == 5">79</span>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <th class="background-bluish fw-normal">体重(kg)</th>
                                            <td v-for="i in dataTableCols" :key="i">
                                                <span v-if="i == 4">9.7</span>
                                                <span v-if="i == 5">10</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- /table -->

                            <!-- page content -->

                            <!-- graph tab -->
                            <div class="graph-tab ms-4">
                                <div class="px-0 tabs">
                                    <a @click="graphActiveTab=1" :class="[ graphActiveTab === 1 ? 'active' : '' ]">
                                        基本情報</a>
                                    <a @click="graphActiveTab=2" :class="[ graphActiveTab === 2 ? 'active' : '' ]">
                                        身体測定</a>
                                </div>
                            </div>
                            <!-- /graph tab -->

                            <!-- graph content -->
                            <div v-if="activeTab===2" class="graph-content w-100 pb-5">
                                <div class="row w-100 pt-4 ">
                                    <div class="col-md-12 pe-0">
                                        <div class="row inner-3">
                                            <div class="col-md-12">
                                                <!-- Y Axis -->
                                                <div class="row" v-for="i in graphYparams" :key="i">
                                                    <div class="col-1 py-2 no-border ps-4">
                                                        <p class="m-0 pt-2 text-xs">
                                                            {{ i }} cm
                                                            <span v-if="i == 78" class="ms-4">X</span>
                                                        </p>
                                                    </div>
                                                    <div class="col-2">
                                                    </div>
                                                    <div class="col-2"></div>
                                                    <div class="col-2"></div>
                                                    <div class="col-2"></div>
                                                    <div class="col-2"></div>
                                                    <div class="col-1"></div>
                                                </div>
                                                <!-- /Y Axis -->

                                                <!-- X Axis -->
                                                <div class="row inner-row-1 mt-2">
                                                    <div class="col-1"></div>

                                                    <div class="col-1 mt-2" v-for="j in dataTableCols" :key="j">
                                                        <p class="text-xs text-center">{{ j }} 月</p>
                                                    </div>
                                                </div>
                                                <!-- /X Axis -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /graph content -->

                            <!-- /page content -->

                        </div>
                    </div>
                    <!-- /tab content -->

                </div>
                <!-- /content -->
            </div>
        </div>
    </div>
</template>

<script>
    // imports
    import Breadcrumb from "../../../components/adminPartials/Breadcrumb"
    import LeftSidebar from "./LeftSidebar.vue"
    import RightcolHeader from "./RightcolHeader.vue"

    export default {
        name: "ChildcareInformation",
        components: {
            Breadcrumb,
            LeftSidebar,
            RightcolHeader,
        },
        data() {
            return {
                dataPageName: "園児情報",
                activeTab: 2,
                graphActiveTab: 1,
                dataTableCols: [
                    4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3
                ],
                graphYparams: [
                    96, 94, 92, 90, 88, 86, 84, 82, 80, 78, 76, 74, 72
                ]
            }
        }
    }
</script>

<style scoped>

</style>