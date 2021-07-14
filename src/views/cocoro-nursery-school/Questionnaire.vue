<template>
    <section class="cocoro-section mt-5">
        <div class="section-header m-3">
            <span class="fw-bold">ご利用前アンケート</span>
        </div>
        <hr>

        <div class="ms-3 me-3 mb-4 content-box">
            <div class="content-holder">

                <!-- pre-use questionnaire -->
                <div class="row custom-form-group ms-2 me-2">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <span>▶︎アレルギー</span>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <span>
                            <label class="container-checkbox">
                                あり
                                <input type="checkbox" checked>
                                <span class="checkmark"></span>
                            </label>
                        </span>
                        <span class="ms-4">
                            <label class="container-checkbox">
                                なし
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </span>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <input type="text" name="content-description" id="content-description" class="form-control" placeholder="ありの場合、簡単に内容をご記載ください">
                    </div>
                </div>

                <div class="row custom-form-group ms-2 me-2 mt-4">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <span>▶︎ミルク</span>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <span>
                            <label class="container-checkbox">
                                あり
                                <input type="checkbox" checked>
                                <span class="checkmark"></span>
                            </label>
                        </span>
                        <span class="ms-4">
                            <label class="container-checkbox">
                                なし
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </span>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12"></div>
                </div>

                <div class="row custom-form-group ms-2 me-2 mt-4">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <span>▶︎おやつ</span>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <span>
                            <label class="container-checkbox">
                                あり
                                <input type="checkbox" checked>
                                <span class="checkmark"></span>
                            </label>
                        </span>
                        <span class="ms-4">
                            <label class="container-checkbox">
                                なし
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </span>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12"></div>
                </div>

                <div class="row custom-form-group ms-2 me-2 mt-4">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <span>▶︎給食</span>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <span>
                            <label class="container-checkbox">
                                あり
                                <input type="checkbox" checked>
                                <span class="checkmark"></span>
                            </label>
                        </span>
                        <span class="ms-4">
                            <label class="container-checkbox">
                                なし
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </span>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12"></div>
                </div>

                <div class="row custom-form-group ms-2 me-2 mt-4">
                    <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                        <span>▶︎離乳食のすすみ具合</span>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                        <input type="text" name="baby-food" id="baby-food" class="form-control" placeholder="簡単に内容をご記載ください">
                    </div>
                </div>
                <!-- /pre-use questionnaire -->
            </div>
        </div>
    </section>
</template>