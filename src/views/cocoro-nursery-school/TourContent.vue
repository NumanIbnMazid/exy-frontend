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
                        <span class="fw-bold">この内容で次へ</span>
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
                                    <td>月極保育</td>
                                </tr>
                                <tr class="">
                                    <th width="20%">入園希望日</th>
                                    <td>
                                        <span>2021年4月1日</span>
                                    </td>
                                </tr>
                                <tr class="">
                                    <th width="20%">来園希望日</th>
                                    <td>
                                        <div v-for="word in ['月', '火', '水' , '木', '金', '土', '日']" :key="word">
                                            <span>{{ word }}</span>
                                            <span class="ms-4 me-4">:</span>
                                            <span>09:00 ~ 17:00</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th width="20%">プラン</th>
                                    <td>通常プラン | 1歳児・2歳児</td>
                                </tr>
                                <tr>
                                    <th width="20%">オプション</th>
                                    <td>手ぶらプラン | 0 . 1歳児</td>
                                </tr>
                                <tr class="">
                                    <th width="20%">利用者</th>
                                    <td>
                                        <span class="me-4">1. 田中 海</span>
                                        <span class="ms-5">令和2年2月25日生（満1歳）男児 アレルギー疾患：有</span>
                                    </td>
                                </tr>
                                <tr class="">
                                    <th width="20%">送迎者</th>
                                    <td>
                                        <div>
                                            <span class="me-4">1. 田中 愛</span>
                                            <span class="ms-5">族柄: 母<span class="ms-5 me-5">|</span>携帯番号: 090-0000-0000</span>
                                        </div>
                                        <div>
                                            <span class="me-4">2. 田中 仁</span>
                                            <span class="ms-5">族柄: 父<span class="ms-5 me-5">|</span>携帯番号: 090-0000-0000</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="">
                                    <th width="20%">緊急連絡先追加</th>
                                    <td>
                                        <span class="me-4">1. 上田 誠</span>
                                        <span class="ms-5">族柄: 祖父<span class="ms-5 me-5">|</span>携帯番号: 090-0000-0000</span>
                                    </td>
                                </tr>
                                <tr class="">
                                    <th width="20%">支払い方法</th>
                                    <td>クレジット支払い</td>
                                </tr>
                                <tr class="">
                                    <th width="20%">アンケート</th>
                                    <td>
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6">
                                                <span>▶︎アレルギー</span>
                                            </div>
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6">
                                                <label class="container-checkbox">
                                                    <span class="ms-2">あり</span>
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container-checkbox ms-4">
                                                    <span class="ms-2">なし</span>
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6 custom-form-group">
                                                <input type="text" class="form-control" placeholder="卵アレルギーがあります">
                                            </div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6">
                                                <span>▶︎ミルク</span>
                                            </div>
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6">
                                                <label class="container-checkbox">
                                                    <span class="ms-2">あり</span>
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container-checkbox ms-4">
                                                    <span class="ms-2">なし</span>
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6 custom-form-group"></div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6">
                                                <span>▶︎おやつ</span>
                                            </div>
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6">
                                                <label class="container-checkbox">
                                                    <span class="ms-2">あり</span>
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container-checkbox ms-4">
                                                    <span class="ms-2">なし</span>
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6 custom-form-group"></div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6">
                                                <span>▶︎給食</span>
                                            </div>
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6">
                                                <label class="container-checkbox">
                                                    <span class="ms-2">あり</span>
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container-checkbox ms-4">
                                                    <span class="ms-2">なし</span>
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6 custom-form-group"></div>
                                        </div>
                                        <div class="row mt-4 mb-3">
                                            <div class="col-xl-4 col-lg-4 col-md-4 col-6">
                                                <span>▶︎離乳食のすすみ具合</span>
                                            </div>
                                            <div class="col-xl-8 col-lg-8 col-md-8 col-6 custom-form-group">
                                                <textarea class="form-control" cols="20" rows="3" placeholder="柔らかく煮たブロッコリーをお昼ご飯に食べています。それ以外はまだ食べられません（好き嫌いかも…？）。"></textarea>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th width="20%">
                                        この園に行くのは初めてですか?
                                    </th>
                                    <td>
                                        <span>園見学に行ったことがある</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th width="20%">
                                        <span>備</span>
                                        <span class="ms-3">考</span>
                                    </th>
                                    <td>
                                        <p>
                                            親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th width="20%">
                                        <span>内</span>
                                        <span class="ms-3">訳</span>
                                    </th>
                                    <td>
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                                                通常プラン | 1歳児・2歳児
                                            </div>
                                            <div class="col-xl-8 col-lg-8 col-md-6 col-12">
                                                <span class="me-4">:</span>
                                                <span>35,700円</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                                                保育補助費 (全歳児対象)
                                            </div>
                                            <div class="col-xl-8 col-lg-8 col-md-6 col-12">
                                                <span class="me-4">:</span>
                                                <span>5,000円</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                                                入園時必要経費
                                            </div>
                                            <div class="col-xl-8 col-lg-8 col-md-6 col-12">
                                                <span class="me-4">:</span>
                                                <span>25,000円</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                                                手ぶらプラン | 0・1歳児
                                            </div>
                                            <div class="col-xl-8 col-lg-8 col-md-6 col-12">
                                                <span class="me-4">:</span>
                                                <span>3,500円</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th width="20%" class="no-border"></th>
                                    <td class="no-border">
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                                                <span class="text-xl fw-bold">合計金額</span>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                                                <span class="text-xxl fw-bold me-5">:</span>
                                                <span class="text-2xl fw-bold text-red">69,200円</span>
                                            </div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                                                <span class="text-lg">予定付与ポイント</span>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                                                <span class="text-xl me-5">:</span>
                                                <span class="text-xl">692ポイント</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3" class="no-border">
                                        <p class="text-muted">※キャンペーン内容や、プランによっては、実際の支払い金額や付与ポイントが異なる場合があります。</p>
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
                    <router-link :to="{name:'todo'}" class="border border-1 border-dark p-3 ps-5 pe-5 bg-white" type="button">
                        内容を修正する
                    </router-link>
                    <router-link :to="{name:'Talk'}" class="border border-1 p-3 pt-3 ps-5 pe-5 ms-5 exy-default-btn" type="button">
                        一時保育を予約する
                    </router-link>
                </section>
            </div>
        </div>
    </div>
</template>