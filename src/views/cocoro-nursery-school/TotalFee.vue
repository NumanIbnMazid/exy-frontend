<template>
    <section class="mt-5">
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 text-end">
                <span class="text-2xl fw-bold">合計金額</span>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 text-start">
                <span class="text-3xl fw-bold text-red ms-4">¥5,000</span>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-end">
                <router-link :to="{name:'ReservationContent'}" class="content-btn me-5" type="button">
                    <span class="fw-bold">この内容で次へ</span>
                </router-link>
            </div>
        </div>
    </section>
</template>