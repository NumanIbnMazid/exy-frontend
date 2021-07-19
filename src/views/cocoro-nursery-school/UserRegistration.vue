<template>
    <!-- section 2 -->
    <section class="cocoro-section mt-5">
        <div class="section-header m-3">
            <span class="fw-bold">利用者登録</span>
        </div>
        <hr>

        <div class="ms-3 me-3 mb-4 content-box">
            <div class="content-holder">
                <!-- user registration -->
                <div class="row custom-form-group ms-2 me-2">
                    <div class="form-check">
                        <label class="container-checkbox">
                            <span class="ms-4 me-5">
                                <span>田中</span>
                                <span class="ms-2">海</span>
                            </span>
                            <span class="ms-5">
                                <span>令和2年2月25日生</span>
                                <span class="ms-3">(満1歳)</span>
                                <span class="ms-4">男児</span>
                                <span class="ms-3">アレルギー疾患 : 有</span>
                            </span>
                            <input type="checkbox" checked>
                            <span class="checkmark"></span>
                        </label>

                        <!-- user registration type -->
                        <user-registration-type v-if="showRegType == true"></user-registration-type>

                    </div>
                    <div class="form-check">
                        <label class="container-checkbox text-muted" >
                            <span class="ms-4 me-5">
                                <span>田中</span>
                                <span class="ms-2">陸</span>
                            </span>
                            <span class="ms-5">
                                <span>令和3年2月25日生</span>
                                <span class="ms-3">(満0歳)</span>
                                <span class="ms-4">男児</span>
                                <span class="ms-3">アレルギー疾患 : 有</span>
                            </span>
                            <input type="checkbox" @click="handleShowRegType()">
                            <span class="checkmark"></span>
                        </label>

                        <!-- user registration type -->
                        <user-registration-type v-if="showRegType == true"></user-registration-type>
                    </div>
                </div>
                <!-- /user registration -->
            </div>
        </div>
    </section>
    <!-- /section 2 -->
</template>

<script>
    import UserRegistrationType from "./UserRegistrationType.vue"

    export default {
        name: "UserRegistration",
        props: {
            showRegType: Boolean
        },
        // data: () => {
        //     return {
        //         showRegType: this.showRegType
        //     }
        // },
        components: {
            UserRegistrationType
        },
        methods: {
            handleShowRegType() {
                this.showRegType = !this.showRegType
                // this.$emit('showRegType', this.showRegType)
                return
            }
        },
    };
</script>

<style scoped>

</style>