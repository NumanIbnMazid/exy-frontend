<template>
    <div class="childcare-parent">

        <Header></Header>

        <div class="container">

            <!-- Page Content -->
            <div class="mt-5 mb-5">
                <div class="mt-5 mb-5">
                    <span class="text-2xl fw-bold">マイポイント</span>
                </div>

                <div class="p-4 border border-2">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 text-end pe-5">
                            <span class="fw-bold">ご利用可能なポイント</span>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 text-start ps-5">
                            <span class="kigaruni-yellow text-3xl fw-bold">500</span>
                            <span class="fw-bold ms-2 text-xl">point</span>
                        </div>
                    </div>
                    <div class="hr-dotted w-25" style="left:50%">
                        <hr>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 text-end pe-5">
                            <span>購入ポイント</span>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12 text-start ps-5">
                            <span class="me-3">400</span>
                            <span>point</span>
                        </div>
                    </div>
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
        name: "MyPoint",
        components: {
            Header,
        }
    }
</script>

<style scoped>

</style>