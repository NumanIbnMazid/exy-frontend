<template>
    <ul class="nav nav-pills mt-4 ms-5 me-5 custom-tab-pills row" id="pills-tab" role="tablist">
        <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 px-1" role="presentation" @click="handleRoute('ProceedToReservation')">
            <button class="nav-link" id="sectionOne-tab" data-bs-toggle="pill" data-bs-target="#sectionOne" type="button" role="tab" aria-controls="sectionOne" aria-selected="true" :class="activeTab == 1 ? 'active' : ''">
                <span class="pills-text">回答受付中</span>
            </button>
        </li>
        <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 px-1" role="presentation" @click="handleRoute('MonthlyChildCare')">
            <button class="nav-link" id="sectionTwo-tab" data-bs-toggle="pill" data-bs-target="#sectionTwo" type="button" role="tab" aria-controls="sectionTwo" aria-selected="false" :class="activeTab == 2 ? 'active' : ''">
                <span class="pills-text">解決済み</span>
            </button>
        </li>
        <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 px-1" role="presentation" @click="handleRoute('GardenTour')">
            <button class="nav-link" id="sectionThree-tab" data-bs-toggle="pill" data-bs-target="#sectionThree" type="button" role="tab" aria-controls="sectionThree" aria-selected="false" :class="activeTab == 3 ? 'active' : ''">
                <span class="pills-text">すべて</span>
            </button>
        </li>
    </ul>
</template>

<script>
    // imports
    import router from "../../router/index"

    export default {
        name: "ChildCareConsultation",
        props: {
            activeTab: Number
        },
        methods: {
            handleRoute(path) {
                console.log(path)
                router.push({ name: "ChildCareConsultation" })
                return
            }
        },
    };
</script>