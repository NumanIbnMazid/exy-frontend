<template>
    <div class="ms-5 bg-white mt-3 mb-3 pb-3">
        <div class="bg-pink p-2">
            <span class="ms-2">田中</span>
            <span class="ms-3">海</span>
            <span class="ms-2">さんが利用する全てのプランにチェックを入れてくたさい</span>
        </div>
        <div class="row ms-3">
            <div class="col-xl-2 col-lg-2 col-md-4 col-sm-5 col-11 mt-3">
                <div class="vertical-line">
                    <span class="ms-3">利用プラン</span>
                </div>
            </div>
            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 text-center mt-3"><span class="fw-bold">:</span></div>
            <div class="col-xl-9 col-lg-9 col-md-7 col-sm-6 col-12 text-start mt-3">
                <div>
                    <label class="container-checkbox text-muted">
                        <span class="ms-2">体験保育</span> <span class="ms-3 me-3">|</span> 0歳児
                        <input type="checkbox" disabled>
                        <span class="checkmark"></span>
                    </label>
                </div>

                <div>
                    <label class="container-checkbox">
                        <span class="ms-2">体験保育</span> <span class="ms-3 me-3">|</span> 1 歳児以上
                        <input type="checkbox" checked>
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
        <div class="row ms-3 mt-1 mb-4">
            <div class="col-xl-2 col-lg-2 col-md-4 col-sm-5 col-11 mt-3">
                <div class="vertical-line">
                    <span class="ms-3">利用オプション</span>
                </div>
            </div>
            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 text-center mt-3"><span class="fw-bold">:</span></div>
            <div class="col-xl-9 col-lg-9 col-md-7 col-sm-6 col-12 text-start mt-3">
                <div>
                    <label class="container-checkbox">
                        <span class="ms-2">その他経費</span> <span class="ms-3 me-3">|</span> お給食
                        <input type="checkbox" checked>
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserRegistrationType",
    };
</script>

<style scoped>

</style>