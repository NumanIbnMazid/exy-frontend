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
                        <tab-pills :activeTab="activeTab"></tab-pills>
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
    import TabPills from "./TabPills.vue"
    import TabContent from "./TabContent.vue"
    import Modals from "./Modals.vue"

    export default {
        name: "Main",
        props: {
            showRegType: Boolean,
            gardenChecked: Boolean,
            reservationPre: Boolean,
            activeTab: Number,
        },
        components: {
            TabPills,
            TabContent,
            Modals
        },
    };
</script>