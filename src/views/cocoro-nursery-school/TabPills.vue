<template>
    <ul class="nav nav-pills mt-4 ms-5 me-5 cocoro-section-tab-pills row" id="pills-tab" role="tablist">
        <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 px-0" role="presentation" @click="handleRoute('ProceedToReservation')">
            <button class="nav-link" id="pills-experienced-based-tab" data-bs-toggle="pill" data-bs-target="#pills-experienced-based" type="button" role="tab" aria-controls="pills-experienced-based" aria-selected="true" :class="activeTab == 1 ? 'active' : ''">
                <span class="pills-text">体験保育</span>
            </button>
        </li>
        <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 px-0" role="presentation" @click="handleRoute('MonthlyChildCare')">
            <button class="nav-link" id="pills-monthly-childcare-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly-childcare" type="button" role="tab" aria-controls="pills-monthly-childcare" aria-selected="false" :class="activeTab == 2 ? 'active' : ''">
                <span class="pills-text">月極保育</span>
            </button>
        </li>
        <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 px-0" role="presentation" @click="handleRoute('GardenTour')">
            <button class="nav-link" id="pills-garden-tour-tab" data-bs-toggle="pill" data-bs-target="#pills-garden-tour" type="button" role="tab" aria-controls="pills-garden-tour" aria-selected="false" :class="activeTab == 3 ? 'active' : ''">
                <span class="pills-text">園見学</span>
            </button>
        </li>
    </ul>
</template>

<script>
    // imports
    import router from "../../router/index"

    export default {
        name: "CocoroNurserySchool",
        props: {
            activeTab: Number
        },
        methods: {
            handleRoute(path) {
                if (this.$route.name != path) {
                    router.push({ name: path })
                }
                return
            }
        },
    };
</script>