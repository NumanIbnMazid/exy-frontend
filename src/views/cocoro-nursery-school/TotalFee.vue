<template>
    <section class="mt-5">
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 text-end">
                <span class="text-2xl fw-bold">合計金額</span>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 text-start">
                <span class="text-3xl fw-bold text-red ms-4" v-if="gardenChecked == true">-</span>
                <span class="text-3xl fw-bold text-red ms-4" v-else>¥5,000</span>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-end">
                <router-link :to="{name: populateRouteName() }" class="content-btn me-5" type="button">
                    <span class="fw-bold">この内容で次へ</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "TotalFee",
        props: {
            reservationPre: Boolean,
            showRegType: Boolean,
            gardenChecked: Boolean,
            activeTab: Number,
        },
        methods: {
            populateRouteName() {
                if (this.reservationPre == true && this.activeTab == 1) {
                    return "PreReservationContent"
                } 
                else if (
                    this.reservationPre == false && this.activeTab == 1
                ) {
                    return "ReservationContent"
                } 
                else if (
                    this.gardenChecked == false && this.showRegType == true && this.activeTab == 2
                ) {
                    return "ChildCareRegistrationDetailsContent"
                } 
                else if (
                    this.gardenChecked == false && this.activeTab == 2
                ) {
                    return "TourContent"
                } 
                else if (
                    this.gardenChecked == true && this.activeTab == 2
                ) {
                    return "FirstGardenContent"
                } 
                else {
                    return "ReservationContent"
                }
            }
        },
    };
</script>