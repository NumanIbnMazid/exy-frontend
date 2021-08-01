<template>
    <div class="childcare-parent">

        <Header :navActive="navActive"></Header>

        <div class="container">

            <!-- Page Content -->
            <div class="mt-5 mb-5">
                <div class="mt-5 mb-3">
                    <span class="text-2xl fw-bold">クーポンコードを入力</span>
                </div>

                <div class="custom-form-group mt-4">
                    <input type="text" class="form-control p-2">
                </div>

                <div class="text-center">
                    <button @click="$router.go(-1)" class="read-more mt-5 kigaruni-pink-background text-white fw-normal" type="button">
                        クーポンコードを送信
                    </button>
                </div>

            </div>
            <!-- /Page Content -->
            
        </div>

    </div>
</template>

<script>
    // imports
    import Header from "./Header.vue"

    export default {
        name: "CouponCode",
        components: {
            Header,
        },
        data() {
            return {
                navActive: false
            }
        },
    }
</script>

<style scoped>

</style>