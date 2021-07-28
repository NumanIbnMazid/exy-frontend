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

                <!-- page content -->
                <section class="border border-2 boreder-secondary p-4">
                    <!-- section header -->
                    <div class="section-header m-3">
                        <span class="fw-bold">予約内容</span>
                        <div class="hr-dotted">
                            <hr>
                        </div>
                    </div>
                    <!-- /section header -->

                    <!-- section content -->
                    <div class="table-responsive p-5 bg-light">
                        <table class="table">
                            <tbody>
                                <tr class="">
                                    <th width="20%">ご利用目的</th>
                                    <td>園見学</td>
                                </tr>
                                <tr class="">
                                    <th width="20%">来園日時</th>
                                    <td>
                                        <div>
                                            <span class="me-4">第 1 希望</span>
                                            <span class="ms-4 me-4">:</span>
                                            <span class="me-4">2021年2月26日 (金)</span>
                                            <span>09:00 ~</span>
                                        </div>
                                        <div>
                                            <span class="me-4">第 2 希望</span>
                                            <span class="ms-4 me-4">:</span>
                                            <span class="me-4">2021年3月01日 (月)</span>
                                            <span>11:00 ~</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="">
                                    <th width="20%">来園者</th>
                                    <td>
                                        <div class="row">
                                            <div class="col-xl-2 col-lg-2 col-md-4 col-12">
                                                <span class="me-3">1.</span>
                                                <span class="me-3">田中</span>
                                                <span>海</span>
                                            </div>
                                            <div class="col-xl-10 col-lg-10 col-md-8 col-12">
                                                <span class="me-4">令和2年2月25日生 (満1歳)</span>
                                                <span>男児</span>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-xl-2 col-lg-2 col-md-4 col-12">
                                                <span class="me-3">2.</span>
                                                <span class="me-3">田中</span>
                                                <span>陸</span>
                                            </div>
                                            <div class="col-xl-10 col-lg-10 col-md-8 col-12">
                                                <span class="me-4">令和3年2月25日生 (満0歳)</span>
                                                <span>男児</span>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-xl-2 col-lg-2 col-md-4 col-12">
                                                <span class="me-3">3.</span>
                                                <span class="me-3">田中</span>
                                                <span>愛</span>
                                            </div>
                                            <div class="col-xl-10 col-lg-10 col-md-8 col-12">
                                                <span class="me-4">族柄 : 母</span>
                                                <span class="ms-4 me-4">|</span>
                                                <span>携帯番号:090-0000-0000</span>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-xl-2 col-lg-2 col-md-4 col-12">
                                                <span class="me-3">4.</span>
                                                <span class="me-3">田中</span>
                                                <span>仁</span>
                                            </div>
                                            <div class="col-xl-10 col-lg-10 col-md-8 col-12">
                                                <span class="me-4">族柄 : 父</span>
                                                <span class="ms-4 me-4">|</span>
                                                <span>携帯番号:090-0000-0000</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th width="20%">
                                        <span>備</span>
                                        <span class="ms-3">考</span>
                                    </th>
                                    <td>
                                        <p>
                                            園見学時にスリッパ等の持ち物は必要でしようか?また子供2名を連れて行くつもリですが、大丈夫でしようか?
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="no-border fw-bold">
                                        <div>マイページでの</div>
                                        <div>キャンセル可能期限</div>
                                    </td>
                                    <td class="no-border">
                                        <p class="mt-2">2021年2月25日(木) 〜23:59まで</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /section content -->
                </section>
                <!-- /page content -->

                <section class="text-center mt-4">
                    <button @click="$router.go(-1)" class="border border-1 border-dark p-3 ps-5 pe-5 bg-white" type="button">
                        内容を修正する
                    </button>
                    <router-link :to="{name:'Talk'}" class="border border-1 p-3 pt-3 ps-5 pe-5 ms-5 exy-default-btn" type="button">
                        一時保育を予約する
                    </router-link>
                </section>
            </div>
        </div>
    </div>
</template>