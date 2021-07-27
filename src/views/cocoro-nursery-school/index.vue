<template>
    <div class="cocoro-parent-div">
        <div class="cocoro-container container">
            <div class="row">
                <!-- cocoro page title -->
                <div class="cocoro-page-title mb-5">
                    <div class="title-img-holder">
                        <img src="../../assets/images/cocoro/cocoro.png" alt="COCORO" class="cocoro-img" />
                    </div>
                    <div class="title-txt-holder mt-3">
                        <span class="wrapped-word fw-bold fst-normal text-start ms-5">
                            COCORO HOIKUEN 弁天町園
                        </span>
                    </div>
                </div>
                <!-- /cocoro page title -->

                <div class="cocoro-content-holder">

                    <!-- Cocoro Parent Section -->
                    <section class="cocoro-parent-section">
                        <div class="section-header m-3">
                            <span class="fw-bold">ご利用目的</span>
                        </div>
                        <hr>

                        <!-- Tab Pills -->
                        <ul class="nav nav-pills mt-4 ms-5 me-5 cocoro-section-tab-pills row" id="pills-tab" role="tablist">
                            <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 px-0" role="presentation" @click="populateActiveTab(1), handleRoute('ProceedToReservation')">
                                <button class="nav-link active" id="pills-experienced-based-tab" data-bs-toggle="pill" data-bs-target="#pills-experienced-based" type="button" role="tab" aria-controls="pills-experienced-based" aria-selected="true">
                                    <span class="pills-text">体験保育</span>
                                </button>
                            </li>
                            <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 px-0" role="presentation" @click="populateActiveTab(2), handleRoute('MonthlyChildCare')">
                                <button class="nav-link" id="pills-monthly-childcare-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly-childcare" type="button" role="tab" aria-controls="pills-monthly-childcare" aria-selected="false">
                                    <span class="pills-text">月極保育</span>
                                </button>
                            </li>
                            <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 px-0" role="presentation" @click="populateActiveTab(3), handleRoute('GardenTour')">
                                <button class="nav-link" id="pills-garden-tour-tab" data-bs-toggle="pill" data-bs-target="#pills-garden-tour" type="button" role="tab" aria-controls="pills-garden-tour" aria-selected="false">
                                    <span class="pills-text">園見学</span>
                                </button>
                            </li>
                        </ul>
                        <!-- /Tab Pills -->

                        <!-- Tab Content -->
                        <tab-content 
                        :showRegType="showRegType" 
                        :gardenChecked="gardenChecked"
                        :reservationPre="reservationPre"
                        :activeTab="activeTab"
                        >
                        </tab-content>
                        <!-- /Tab Content -->
                    </section>
                    <!-- /Cocoro Parent Section -->
                </div>
            </div>
        </div>

        <!-- All Modals -->
        <modals></modals>
        <!-- /All Modals -->

    </div>
</template>

<script>
    // imports
    import TabContent from "./TabContent.vue"
    import Modals from "./Modals.vue"
    import router from "../../router/index"

    export default {
        name: "CocoroNurserySchool",
        data() {
            return {
                date: '',
                showRegType: false,
                gardenChecked: false,
                reservationPre: false,
                activeTab: 1,
            }
        },
        components: {
            TabContent,
            Modals
        },
        methods: {
            populateActiveTab(tabNo){
                this.activeTab = tabNo
            },
            handleRoute(path) {
                router.push({ name: path })
                return
            }
        },
    };
</script>

<style scoped>

</style>