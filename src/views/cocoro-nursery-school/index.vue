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
                        <ul class="nav nav-pills mt-4 ms-5 me-5 cocoro-section-tab-pills row" id="pills-tab" role="tablist">
                            <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 px-0" role="presentation">
                                <button class="nav-link active" id="pills-experienced-based-tab" data-bs-toggle="pill" data-bs-target="#pills-experienced-based" type="button" role="tab" aria-controls="pills-experienced-based" aria-selected="true">
                                    <span class="pills-text">体験保育</span>
                                </button>
                            </li>
                            <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 px-0" role="presentation">
                                <button class="nav-link" id="pills-monthly-childcare-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly-childcare" type="button" role="tab" aria-controls="pills-monthly-childcare" aria-selected="false">
                                    <span class="pills-text">月極保育</span>
                                </button>
                            </li>
                            <li class="nav-item col-xl-4 col-md-6 col-sm-12 col-12 px-0" role="presentation">
                                <button class="nav-link" id="pills-garden-tour-tab" data-bs-toggle="pill" data-bs-target="#pills-garden-tour" type="button" role="tab" aria-controls="pills-garden-tour" aria-selected="false">
                                    <span class="pills-text">園見学</span>
                                </button>
                            </li>
                        </ul>
                        <!-- /Tab Pills -->

                        <!-- Tab Content -->
                        <div class="tab-content ms-3 me-3 mb-4 cocoro-section-tab-content" id="pills-tabContent">

                            <!-- *** Tab 1 *** -->
                            <div class="tab-pane fade show active pills-experienced-based" id="pills-experienced-based" role="tabpanel" aria-labelledby="pills-experienced-based-tab">
                                <div class="tab-content-holder">

                                    <!-- section 1 -->
                                    <section class="p-5 bg-light">

                                        <div class="ms-3 me-3 mb-4 content-box">
                                            <div class="content-holder">
                                                <!-- date and time -->
                                                <div class="mt-3">
                                                    <div class="vertical-line">
                                                        <span class="ms-4 fw-bold">日時を指定</span>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mt-4 form-label">
                                                            日 時
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                                                            <date-picker v-model="date" valueType="format" :disabled-date="disabledBeforeToday" placeholder="日付">
                                                            </date-picker>
                                                        </div>
                                                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12 mt-4">
                                                            <input type="text" name="" id="start-time" class="form-control" placeholder="開始時間">
                                                        </div>
                                                        <div class="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-12 mt-4 text-center">
                                                            <span class="text-2xl">〜</span>
                                                        </div>
                                                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12 mt-4">
                                                            <input type="text" name="" id="end-time" class="form-control" placeholder="終了時間">
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /date and time -->

                                                <!-- plan -->
                                                <div class="mt-5 mb-2">
                                                    <div class="vertical-line">
                                                        <span class="ms-4 fw-bold">プラン</span>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="form-check">
                                                            <label class="container-checkbox">
                                                                体験保育 <span class="ms-3 me-3">|</span> ０歳児
                                                                <input type="checkbox" checked>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="container-checkbox">
                                                                体験保育 <span class="ms-3 me-3">|</span> １歳児以上
                                                                <input type="checkbox" checked>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /plan -->

                                                <!-- option -->
                                                <div class="mt-5 mb-2">
                                                    <div class="vertical-line">
                                                        <span class="ms-4 fw-bold">オプション</span>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="form-check">
                                                            <label class="container-checkbox">
                                                                その他経費 <span class="ms-3 me-3">|</span> お給食
                                                                <input type="checkbox" checked>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="container-checkbox">
                                                                その他経費 <span class="ms-3 me-3">|</span> おやつ
                                                                <input type="checkbox">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="container-checkbox">
                                                                その他経費 <span class="ms-3 me-3">|</span> ミルク
                                                                <input type="checkbox">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="container-checkbox">
                                                                その他経費 <span class="ms-3 me-3">|</span> 手ぶらプラン
                                                                <input type="checkbox">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /option -->
                                            </div>
                                        </div>
                                    </section>
                                    <!-- /section 1 -->

                                    <!-- section 2 -->
                                    <!-- User Registration -->
                                    <user-registration :showRegType="showRegType"></user-registration>
                                    <!-- /section 2 -->


                                    <!-- section 3 -->
                                    <!-- Parent Registration -->
                                    <parent-registration></parent-registration>
                                    <!-- /section 3 -->


                                    <!-- section 4 -->
                                    <!-- Payment Method -->
                                    <payment-method></payment-method>
                                    <!-- /section 4 -->


                                    <!-- section 5 -->
                                    <!-- Questionnaire -->
                                    <questionnaire :showRegType="showRegType"></questionnaire>
                                    <!-- /section 5 -->



                                    <!-- section 6 -->
                                    <!-- Remarks -->
                                    <remarks></remarks>
                                    <!-- /section 6 -->


                                    <!-- section 7 -->
                                    <!-- Item Check -->
                                    <item-check></item-check>
                                    <!-- /section 7 -->

                                    <div class="hr-dotted mt-5">
                                        <hr>
                                    </div>

                                    <!-- section 8 -->
                                    <!-- Total Fee -->
                                    <total-fee></total-fee>
                                    <!-- /section 8 -->

                                </div>
                            </div>
                            <!-- *** /Tab 1 *** -->

                            <!-- *** Tab 2 *** -->
                            <div class="tab-pane fade pills-monthly-childcare" id="pills-monthly-childcare" role="tabpanel" aria-labelledby="pills-monthly-childcare-tab">
                                <div class="tab-content-holder">
                                    <!-- section 1 -->
                                    <section class="p-5 bg-light">

                                        <div class="ms-3 me-3 mb-4 content-box">
                                            <div class="content-holder">
                                                <!-- date and time -->
                                                <div class="mt-3">
                                                    <div class="vertical-line">
                                                        <span class="ms-4 fw-bold">入園希望日時</span>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12 mt-4 form-label">
                                                            入園希望日
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12 mt-4">
                                                            <date-picker v-model="date" valueType="format" :disabled-date="disabledBeforeToday" placeholder="日付">
                                                            </date-picker>
                                                        </div>
                                                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12 mt-4">
                                                            <input type="text" name="" id="time" class="form-control" placeholder="時間">
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /date and time -->

                                                <!-- date of visit -->
                                                <div class="mt-5 mb-2">
                                                    <div class="vertical-line">
                                                        <span class="ms-4 fw-bold">来園希望日</span>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            来園希望日
                                                        </div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12">
                                                            <label class="container-checkbox ms-2">
                                                                月
                                                                <input type="checkbox" checked>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" id="visit-start-time" class="form-control" placeholder="開始時間">
                                                        </div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12 text-center">
                                                            <span class="text-2xl fw-bold">〜</span>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" id="visit-end-time" class="form-control" placeholder="終了時間">
                                                        </div>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-8 col-12"></div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12">
                                                            <label class="container-checkbox ms-2">
                                                                火
                                                                <input type="checkbox" checked>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" class="form-control" placeholder="開始時間">
                                                        </div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12 text-center">
                                                            <span class="text-2xl fw-bold">〜</span>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" class="form-control" placeholder="終了時間">
                                                        </div>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-8 col-12"></div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12">
                                                            <label class="container-checkbox ms-2">
                                                                水
                                                                <input type="checkbox" checked>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" class="form-control" placeholder="開始時間">
                                                        </div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12 text-center">
                                                            <span class="text-2xl fw-bold">〜</span>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" class="form-control" placeholder="終了時間">
                                                        </div>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-8 col-12"></div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12">
                                                            <label class="container-checkbox ms-2">
                                                                木
                                                                <input type="checkbox" checked>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" class="form-control" placeholder="開始時間">
                                                        </div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12 text-center">
                                                            <span class="text-2xl fw-bold">〜</span>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" class="form-control" placeholder="終了時間">
                                                        </div>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-8 col-12"></div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12">
                                                            <label class="container-checkbox ms-2">
                                                                金
                                                                <input type="checkbox" checked>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" class="form-control" placeholder="開始時間">
                                                        </div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12 text-center">
                                                            <span class="text-2xl fw-bold">〜</span>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" class="form-control" placeholder="終了時間">
                                                        </div>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-8 col-12"></div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12">
                                                            <label class="container-checkbox ms-2">
                                                                土
                                                                <input type="checkbox" checked>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" class="form-control" placeholder="開始時間">
                                                        </div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12 text-center">
                                                            <span class="text-2xl fw-bold">〜</span>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" class="form-control" placeholder="終了時間">
                                                        </div>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-8 col-12"></div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12">
                                                            <label class="container-checkbox ms-2">
                                                                日
                                                                <input type="checkbox" checked>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" class="form-control" placeholder="開始時間">
                                                        </div>
                                                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12 text-center">
                                                            <span class="text-2xl fw-bold">〜</span>
                                                        </div>
                                                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                                            <input type="text" name="" class="form-control" placeholder="終了時間">
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /date of visit -->

                                                <!-- plan -->
                                                <div class="mt-5 mb-2">
                                                    <div class="vertical-line">
                                                        <span class="ms-4 fw-bold">プラン</span>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="form-check">
                                                            <label class="container-checkbox text-muted">
                                                                通常プラン <span class="ms-3 me-3">|</span> ０歳児
                                                                <input type="checkbox" disabled>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="container-checkbox">
                                                                通常プラン <span class="ms-3 me-3">|</span> １歳児・２歳児
                                                                <input type="checkbox" checked>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="container-checkbox text-muted">
                                                                通常プラン <span class="ms-3 me-3">|</span> ３歳児
                                                                <input type="checkbox" disabled>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="container-checkbox text-muted">
                                                                時短プラン <span class="ms-3 me-3">|</span> ０歳児
                                                                <input type="checkbox" disabled>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="container-checkbox">
                                                                時短プラン <span class="ms-3 me-3">|</span> １歳児・２歳児
                                                                <input type="checkbox">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="container-checkbox text-muted">
                                                                時短プラン <span class="ms-3 me-3">|</span> ３歳児以上
                                                                <input type="checkbox" disabled>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /plan -->

                                                <!-- option -->
                                                <div class="mt-5 mb-2">
                                                    <div class="vertical-line">
                                                        <span class="ms-4 fw-bold">オプション</span>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="form-check">
                                                            <label class="container-checkbox">
                                                                手ぶらプラン <span class="ms-3 me-3">|</span> ０・１歳児
                                                                <input type="checkbox">
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="container-checkbox text-muted">
                                                                手ぶらプラン <span class="ms-3 me-3">|</span> ２歳児
                                                                <input type="checkbox" disabled>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <label class="container-checkbox text-muted">
                                                                手ぶらプラン <span class="ms-3 me-3">|</span> ３歳児以上
                                                                <input type="checkbox" disabled>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /option -->
                                            </div>
                                        </div>
                                    </section>
                                    <!-- /section 1 -->

                                    <!-- section 2 -->
                                    <!-- User Registration -->
                                    <user-registration :showRegType="showRegType"></user-registration>
                                    <!-- /section 2 -->

                                    <!-- section 3 -->
                                    <!-- Parent Registration -->
                                    <parent-registration></parent-registration>
                                    <!-- /section 3 -->

                                    <!-- section 4 -->
                                    <!-- Payment Method -->
                                    <payment-method></payment-method>
                                    <!-- /section 4 -->

                                    <!-- section 5 -->
                                    <!-- Questionnaire -->
                                    <questionnaire :showRegType="showRegType"></questionnaire>
                                    <!-- /section 5 -->

                                    <!-- section 6 -->
                                    <!-- Garden Check -->
                                    <section class="cocoro-section mt-5">
                                        <div class="section-header m-3">
                                            <span class="fw-bold">この園に行くのは初めてですか？</span>
                                        </div>
                                        <hr>

                                        <div class="ms-3 me-3 mb-4 content-box">
                                            <div class="content-holder">
                                                <!-- remarks -->
                                                <div class="ms-2 me-2">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="">
                                                        <label class="ms-4">園見学に行ったことがある</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="">
                                                        <label class="ms-4">直近３ヶ月以内に一時保育で利用したことがある、または利用者の兄弟が利用していた</label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="" checked>
                                                        <label class="ms-4">初めて利用する</label>
                                                    </div>
                                                    <div class="row mt-4">
                                                        <div class="col-xl-1 mt-4">
                                                            <i class="fa fa-exclamation-circle text-3xl text-red"></i>
                                                        </div>
                                                        <div class="col-xl-11 text-start">
                                                            <p>
                                                                月極保育をご予約の際、「初めて園をご利用される方には、体験保育または園見学をお願いしております。
                                                                キガルニホイクでは、お子さまとご両親が安心して保育園をご利用いただくために【体験保育】のご利用がオススメです。月極保育の入園手続きが可能となります。
                                                                ※園によっては、利用履歴に関わらず入園前説明会を行う場合がございます。
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /remarks -->
                                            </div>
                                        </div>
                                    </section>
                                    <!-- /section 6 -->

                                    <!-- section 7 -->
                                    <!-- Remarks -->
                                    <remarks></remarks>
                                    <!-- /section 7 -->

                                    <!-- section 8 -->
                                    <!-- Total Fee -->
                                    <total-fee></total-fee>
                                    <!-- /section 8 -->

                                </div>
                            </div>
                            <!-- *** /Tab 2 *** -->

                            <!-- *** Tab 3 *** -->
                            <div class="tab-pane fade pills-garden-tour" id="pills-garden-tour" role="tabpanel" aria-labelledby="pills-garden-tour-tab">
                                <div class="tab-content-holder">

                                    <!-- section 1 -->
                                    <section class="p-5 bg-light">

                                        <div class="ms-3 me-3 mb-4 content-box">
                                            <div class="content-holder">
                                                <!-- date -->
                                                <div class="mt-3">
                                                    <div class="vertical-line">
                                                        <span class="ms-4 fw-bold">来園希望日</span>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="col-xl-1 col-lg-1 col-md-6 col-sm-12 col-12 mt-4 form-label">
                                                            <span>日</span>
                                                            <span class="ms-3">時</span>
                                                        </div>
                                                        <div class="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12 mt-4">
                                                            <input type="text" name="" class="form-control" placeholder="第１希望日">
                                                        </div>
                                                        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12 mt-4">
                                                            <date-picker v-model="date" valueType="format" :disabled-date="disabledBeforeToday" placeholder="日付">
                                                            </date-picker>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-4 end-time-holder">
                                                            <input type="text" name="" class="form-control" placeholder="時間">
                                                        </div>
                                                    </div>
                                                    <div class="row custom-form-group m-2">
                                                        <div class="col-xl-1 col-lg-1 col-md-6 col-sm-12 col-12 mt-4 form-label">
                                                        </div>
                                                        <div class="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12 mt-4">
                                                            <input type="text" name="" class="form-control" placeholder="第２希望日">
                                                        </div>
                                                        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12 mt-4">
                                                            <date-picker v-model="date" valueType="format" :disabled-date="disabledBeforeToday" placeholder="日付">
                                                            </date-picker>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-4 end-time-holder">
                                                            <input type="text" name="" class="form-control" placeholder="時間">
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /date -->

                                                <!-- visitor registration -->
                                                <div class="mt-5 mb-2">
                                                    <div class="vertical-line">
                                                        <span class="ms-4 fw-bold">来園者登録</span>
                                                    </div>
                                                    <div class="mt-4 ms-4">
                                                        <span class="text-xl fw-bold ms-4">
                                                            来園者登録
                                                        </span>
                                                        <div class="ms-5 mt-4">
                                                            <p>お子さま</p>
                                                            <div class="row">
                                                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                                    <label class="container-checkbox">
                                                                        <span class="ms-4">田中</span>
                                                                        <span class="ms-3">海</span>
                                                                        <input type="checkbox" checked>
                                                                        <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                                                    <span>令和2年2月25日生（満１歳）</span>
                                                                </div>
                                                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                                                    <span>男児</span>
                                                                    <span class="ms-3">アレルギー疾患：有</span>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                                    <label class="container-checkbox text-muted">
                                                                        <span class="ms-4">田中</span>
                                                                        <span class="ms-3">海</span>
                                                                        <input type="checkbox" disabled>
                                                                        <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                                                    <span class="text-muted">令和2年2月25日生（満１歳）</span>
                                                                </div>
                                                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start text-muted">
                                                                    <span>男児</span>
                                                                    <span class="ms-3">アレルギー疾患：有</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ms-5 mt-4">
                                                            <p>保護者さま</p>
                                                            <div class="row">
                                                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                                    <span>1.</span>
                                                                    <span class="ms-4">田中</span>
                                                                    <span class="ms-3">愛</span>
                                                                </div>
                                                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                                                    <span>族柄：母</span>
                                                                    <span class="ms-5">携帯番号：090-0000-0000</span>
                                                                </div>
                                                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                                                    <span>×来園者から削除する</span>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                                    <span>2.</span>
                                                                    <span class="ms-4">田中</span>
                                                                    <span class="ms-3">仁</span>
                                                                </div>
                                                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                                                    <span>族柄：父</span>
                                                                    <span class="ms-5">携帯番号：080-1111-1111</span>
                                                                </div>
                                                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start">
                                                                    <span>×来園者から削除する</span>
                                                                </div>
                                                            </div>
                                                            <div class="mt-3">
                                                                <span>＋連絡先を追加する</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- /visitor registration -->
                                            </div>
                                        </div>
                                    </section>
                                    <!-- /section 1 -->

                                    <!-- section 2 -->
                                    <!-- Remarks -->
                                    <remarks></remarks>
                                    <!-- /section 2 -->
                                </div>
                            </div>
                            <!-- *** Tab /3 *** -->

                        </div>
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
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import 'vue2-datepicker/locale/ja';
    import UserRegistration from "./UserRegistration.vue"
    import ParentRegistration from "./ParentRegistration.vue"
    import PaymentMethod from "./PaymentMethod.vue"
    import Questionnaire from "./Questionnaire.vue"
    import Remarks from "./Remarks.vue"
    import ItemCheck from "./ItemCheck.vue"
    import TotalFee from "./TotalFee.vue"
    import Modals from "./Modals.vue"

    export default {
        name: "CocoroNurserySchool",
        data() {
            return {
                date: '',
                showRegType: false
            }
        },
        components: {
            DatePicker,
            UserRegistration,
            ParentRegistration,
            PaymentMethod,
            Questionnaire,
            Remarks,
            ItemCheck,
            TotalFee,
            Modals
        },
        methods: {
            disabledBeforeToday(date) {
                const today = new Date()
                today.setHours(0, 0, 0, 0)

                return date < today
            },
        },
    };
</script>

<style scoped>

</style>