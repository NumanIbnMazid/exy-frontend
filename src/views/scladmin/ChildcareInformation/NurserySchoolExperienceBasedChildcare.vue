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
                            <!-- * link * -->
                            <a @click="activeTab=1, handleRoute('Admin.NurserySchoolExperienceBasedChildcare')" :class="[ activeTab === 1 ? 'active' : '' ]"> 基本情報</a>
                            <a @click="activeTab=2, handleRoute('Admin.ChildMeasurementInformation')" :class="[ activeTab === 2 ? 'active' : '' ]"> 身体測定</a>
                            <a @click="activeTab=3, handleRoute('ChildrenInfo.ExperienceChildcare')" :class="[ activeTab === 3 ? 'active' : '' ]"> 利用履歴</a>
                            <a> </a>
                        </div>
                    </div>
                    <!-- /tabs -->

                    <!-- tab content -->
                    <div v-if="activeTab===1" class="childcare-information w-100 pb-5">
                        <img src="../../../assets/admin/page40.png" alt="" class="w-100 mt-5">
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
    import router from "../../../router/index"
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
                activeTab: 1,
                graphActiveTab: 1,
                dataTableCols: [
                    4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3
                ],
                graphYparams: [
                    96, 94, 92, 90, 88, 86, 84, 82, 80, 78, 76, 74, 72
                ]
            }
        },
        methods: {
            handleRoute(path) {
                if (typeof path === 'number') {
                    router.push(
                        {
                            name: 'todo',
                            params: {
                                page: path
                            }
                        }
                    )
                } else {
                    if (this.$route.name != path) {
                        router.push({ name: path })
                    }
                }
                return
            }
        }
    }
</script>

<style scoped>

</style>