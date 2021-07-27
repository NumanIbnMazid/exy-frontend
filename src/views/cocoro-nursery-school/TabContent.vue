<template>
    <div class="tab-content ms-3 me-3 mb-4 cocoro-section-tab-content" id="pills-tabContent">
        <!-- *** Tab 1 *** -->
        <div class="tab-pane fade pills-experienced-based" :class="dataActiveTab == 1 ? 'show active' : ''" id="pills-experienced-based" role="tabpanel"
            aria-labelledby="pills-experienced-based-tab">
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
                                        <date-picker v-model="date" valueType="format"
                                            :disabled-date="disabledBeforeToday" placeholder="日付">
                                        </date-picker>
                                    </div>
                                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12 mt-4">
                                        <input type="text" name="" id="start-time" class="form-control"
                                            placeholder="開始時間">
                                    </div>
                                    <div class="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-12 mt-4 text-center">
                                        <span class="text-2xl">〜</span>
                                    </div>
                                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12 mt-4">
                                        <input type="text" name="" id="end-time" class="form-control"
                                            placeholder="終了時間">
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
                <user-registration :showRegType="dataShowRegType" :activeTab="dataActiveTab"></user-registration>
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
                <questionnaire :showRegType="dataShowRegType"></questionnaire>
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
                <total-fee :gardenChecked="dataGardenChecked" :reservationPre="dataReservationPre"></total-fee>
                <!-- /section 8 -->

            </div>
        </div>
        <!-- *** /Tab 1 *** -->

        <!-- *** Tab 2 *** -->
        <div class="tab-pane fade pills-monthly-childcare" :class="dataActiveTab == 2 ? 'show active' : ''" id="pills-monthly-childcare" role="tabpanel"
            aria-labelledby="pills-monthly-childcare-tab">
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
                                        <date-picker v-model="date" valueType="format"
                                            :disabled-date="disabledBeforeToday" placeholder="日付">
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
                                        <input type="text" name="" id="visit-start-time" class="form-control"
                                            placeholder="開始時間">
                                    </div>
                                    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-12 text-center">
                                        <span class="text-2xl fw-bold">〜</span>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-8 col-12">
                                        <input type="text" name="" id="visit-end-time" class="form-control"
                                            placeholder="終了時間">
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
                <user-registration :showRegType="dataShowRegType" :activeTab="dataActiveTab"></user-registration>
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
                <questionnaire :showRegType="dataShowRegType"></questionnaire>
                <!-- /section 5 -->

                <!-- section 6 -->
                <!-- Garden Check -->
                <garden-check :gardenChecked="dataGardenChecked" @handleGardenChecked="populateGardenChecked"></garden-check>
                <!-- /section 6 -->

                <!-- section 7 -->
                <!-- Remarks -->
                <remarks></remarks>
                <!-- /section 7 -->

                <!-- section 8 -->
                <!-- Total Fee -->
                <total-fee :gardenChecked="dataGardenChecked" :reservationPre="dataReservationPre"></total-fee>
                <!-- /section 8 -->

            </div>
        </div>
        <!-- *** /Tab 2 *** -->

        <!-- *** Tab 3 *** -->
        <div class="tab-pane fade pills-garden-tour" :class="dataActiveTab == 3 ? 'show active' : ''" id="pills-garden-tour" role="tabpanel"
            aria-labelledby="pills-garden-tour-tab">
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
                                        <date-picker v-model="date" valueType="format"
                                            :disabled-date="disabledBeforeToday" placeholder="日付">
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
                                        <date-picker v-model="date" valueType="format"
                                            :disabled-date="disabledBeforeToday" placeholder="日付">
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
                                            <div
                                                class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-start text-muted">
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
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#purposeOfUseModal">
                                                ＋連絡先を追加する
                                            </a>
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
                <!-- section 3 -->
                <section class="p-4 mt-2">
                    <div class="text-end">
                        <router-link :to="{name:'ReservationContentSecondary'}" class="content-btn" type="button">
                            この内容で次へ
                        </router-link>
                    </div>
                </section>
                <!-- /section 3 -->
            </div>
        </div>
        <!-- *** Tab /3 *** -->

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
    import GardenCheck from "./GardenCheck.vue"
    import Remarks from "./Remarks.vue"
    import ItemCheck from "./ItemCheck.vue"
    import TotalFee from "./TotalFee.vue"

    export default {
        name: "TabContent",
        props: {
            showRegType: Boolean,
            gardenChecked: Boolean,
            reservationPre: Boolean,
            activeTab: Number,
        },
        data() {
            return {
                date: '',
                dataShowRegType: this.showRegType,
                dataGardenChecked: this.gardenChecked,
                dataReservationPre: this.reservationPre,
                dataActiveTab: this.activeTab,
            }
        },
        components: {
            DatePicker,
            UserRegistration,
            ParentRegistration,
            PaymentMethod,
            Questionnaire,
            GardenCheck,
            Remarks,
            ItemCheck,
            TotalFee
        },
        methods: {
            disabledBeforeToday(date) {
                const today = new Date()
                today.setHours(0, 0, 0, 0)

                return date < today
            },
            populateShowRegType (value) {
                this.dataShowRegType = value
            },
            populateGardenChecked (value) {
                this.dataGardenChecked = value
            },
            populateReservationPre (value) {
                this.dataReservationPre = value
            },
            populateActiveTab (value) {
                this.dataActiveTab = value
            },
        },
    };
</script>